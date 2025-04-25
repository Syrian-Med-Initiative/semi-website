"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import iCalendarPlugin from "@fullcalendar/icalendar";
import interactionPlugin from "@fullcalendar/interaction";
import { use, useEffect, useRef, useState } from "react";
import Modal from "../_components/Modal/Modal";
import styles from "./Calendar.module.css";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Calendar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [initialView, setInitialView] = useState("dayGridMonth");
  const [events, setEvents] = useState<any[]>([]);
  const calendarRef = useRef<FullCalendar | null>(null);

  const params = useParams();
  const locale = params.locale || "en";
  const t = useTranslations("calendar");

  useEffect(() => {
    async function fetchEvents() {
      const response = await fetch("/api/calendar");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setEvents(data);
    }

    fetchEvents();
  },[]);

  useEffect(() => {
    // Dynamically set the view based on screen width
    const view = window.innerWidth <= 768 ? "listWeek" : "dayGridMonth";
    setInitialView(view);

    // Change the view dynamically if the calendar is already rendered
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      calendarApi.changeView(view);
    }
  }, []);
  return (
    <div className="container">
      <FullCalendar
        ref={calendarRef}
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          iCalendarPlugin,
          listPlugin,
        ]}
        initialView={initialView}
        events={events}
        headerToolbar={
          initialView === "listWeek"
            ? {
                left: "title",
                center: "",
                right: "prev,next",
              }
            : {
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,dayGridWeek,dayGridDay",
              }
        }
        height="auto"
        aspectRatio={1.5} // Adjust the aspect ratio for responsiveness
        expandRows={true}
        locale={locale}
        eventContent={(events) => {
          const { title } = events.event._def;
          const dateRange = events.event._instance?.range;
          return (
            <div
              className="event-content"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: "#4b7f5257",
                borderRadius: "5px",
                padding: "5px",
                color: "black",
                fontSize: "0.8em",
                fontWeight: "bold",
                textAlign: "center",
                textWrap: "wrap",
                cursor: "pointer",
              }}
            >
              <div className="event-title">{title}</div>
              {initialView === "dayGridMonth" && (
                <div className="event-time">
                  {dateRange?.start.toLocaleString("en", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  &nbsp;-&nbsp;
                  {dateRange?.end.toLocaleString("en", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              )}
            </div>
          );
        }}
        eventClick={(clickInfo) => {
          const { title, extendedProps } = clickInfo.event;
          const range = clickInfo.event._instance?.range;
          const startDate = range ? new Date(range.start) : null;
          const endDate = range ? new Date(range.end) : null;
          const description = extendedProps.description || null;
          const location = extendedProps.location || null;
          const url = extendedProps.url || null;
          const meetingId = extendedProps.meetingId || null;
          const passcode = extendedProps.passcode || null;
          setSelectedEvent({
            title,
            start: startDate,
            end: endDate,
            description,
            location,
            url,
            meetingId,
            passcode,
          });
          setIsModalOpen(true);
        }}
        datesSet={(info) => {
          if (initialView === "dayGridMonth" )return ;
          const calendarApi = info.view.calendar;
          const prevButton = document.querySelector(
            ".fc-prev-button"
          ) as HTMLButtonElement;
          const nextButton = document.querySelector(
            ".fc-next-button"
          ) as HTMLButtonElement;

          if (prevButton) {
            prevButton.disabled = !calendarApi
              .getEvents()
              .some(
                (event) => event.start && new Date(event.start) < info.start
              );
            prevButton.setAttribute("title", "No more events");
          }
          if (nextButton) {
            nextButton.disabled = !calendarApi
              .getEvents()
              .some((event) => event.start && new Date(event.start) > info.end);
            nextButton.setAttribute("title", "No more events");
          }
        }}
        buttonText={{
          today: t("today"),
          month: t("month"),
          week: t("week"),
          day: t("day"),
        }}
      />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedEvent?.title}
        >
          <div className={styles.modalBody}>
            <div className={styles.eventTime}>
              {selectedEvent.start.toLocaleString("en", {
                hour: "2-digit",
                minute: "2-digit",
              })}
              &nbsp;-&nbsp;
              {selectedEvent.end.toLocaleString("en", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            {selectedEvent.location && (
              <div className={styles.eventLocation}>
                <strong>Location:</strong> {selectedEvent.location}
              </div>
            )}

            {selectedEvent.url && (
              <div className={styles.meetingLink}>
                <a href={selectedEvent.url}>Join the meeting now</a>
              </div>
            )}

            {selectedEvent.meetingId && (
              <p>meeting Id : {selectedEvent.meetingId}</p>
            )}

            {selectedEvent.passcode && (
              <p>Passcode : {selectedEvent.passcode}</p>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

// const events = [
//   {
//     title: "Education Day 3",
//     start: "2025-04-21T06:00:00.000Z",
//     end: "2025-04-21T08:30:00.000Z",
//     description: "This is a description for Education Day 3.",
//     location: "Location for Education Day 3",
//   },
//   {
//     title: "Education Day 4",
//     start: "2025-05-23T06:20:00.000Z",
//     end: "2025-04-23T08:00:00.000Z",
//     description: "This is a description for Education Day 4.",
//   },
//   //add tow events in the same day
//   {
//     title: "Education Day 5",
//     start: "2025-04-23T06:20:00.000Z",
//     end: "2025-04-23T08:00:00.000Z",
//     description: "This is a description for Education Day 5.",
//   },
//   {
//     title: "Education Day 6",
//     start: "2025-04-23T06:20:00.000Z",
//     end: "2025-04-23T08:00:00.000Z",
//     description: "This is a description for Education Day 6.",
//   },
//   // add arabic events
//   {
//     title: "يوم التعليم 1",
//     start: "2025-04-21T06:00:00.000Z",
//     end: "2025-04-21T08:30:00.000Z",
//     description: "هذا هو الوصف ليوم التعليم 1.",
//     location: "الموقع ليوم التعليم 1",
//   },
//   {
//     title: "يوم التعليم 2",
//     start: "2025-04-23T06:20:00.000Z",
//     end: "2025-04-23T08:00:00.000Z",
//     description: "هذا هو الوصف ليوم التعليم 2.",
//   },
// ];
