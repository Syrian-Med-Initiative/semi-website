import { NextResponse } from "next/server";
import ical from "node-ical";
import { RRule } from "rrule";

const ICS_URL =
"https://outlook.office365.com/owa/calendar/4b7e14c043224c5180ee3d2105b2741c@semi2025.onmicrosoft.com/1a7cf41a30ad487f9637dba1c68729d46853677543521191071/calendar.ics"

export async function GET() {
  try {
    const res = await fetch(ICS_URL);
    const text = await res.text();

    const parsed = ical.parseICS(text);
    const events = Object.values(parsed)
      .filter((e): e is ical.VEvent => e.type === "VEVENT")
      .map((e) => {
      // Extract the Teams meeting link from the description
      const meetingLinkMatch = e.description?.match(
        /https:\/\/teams\.microsoft\.com\/l\/meetup-join\/[^\s]+/
      );
      const idMatch = e.description?.match(/Meeting ID:\s*([0-9 ]+)/i);
      const passcodeMatch = e.description?.match(/Passcode:\s*([A-Za-z0-9]+)/i);

      const meetingLink = meetingLinkMatch ? meetingLinkMatch[0] : null;

      const meetingId = idMatch ? idMatch[1].replace(/\s+/g, "") : null;
      const passcode = passcodeMatch ? passcodeMatch[1].replace(/\s+/g, "") : null;

      const rrule = e.rrule instanceof RRule ? e.rrule.toString() : null;

      // Map the fields to FullCalendar-compatible format
      const fullCalendarEvent = {
        title: e.summary, // Event title
        start: e.start, // Start date/time
        end: e.end, // End date/time
        location: e.location, // Event location
        description: e.description, // Event description
        allDay: e.start.getHours() === 0 && e.end.getHours() === 0, // Whether the event is all-day
        extendedProps: {
          url: meetingLink, // Link to the meeting (Teams URL)
          meetingId: meetingId, // Meeting ID
          passcode: passcode, // Meeting passcode
          uid: e.uid, // Unique event identifier
          status: e.status, // Status (e.g., CONFIRMED)
          sequence: e.sequence, // Sequence number
        },
        ...(rrule ? { rrule } : {}),
      };

      return fullCalendarEvent;
      });

    return NextResponse.json(events);
  } catch (err) {
    console.error("Failed to fetch .ics", err);
    return NextResponse.json(
      { error: "Failed to fetch calendar" },
      { status: 500 }
    );
  }
}
