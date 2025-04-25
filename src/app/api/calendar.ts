import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import ical from 'node-ical';

const ICS_URL = 'https://outlook.office365.com/owa/calendar/953b6b74a2db49fab2a60f3438dcaa76@semi2025.onmicrosoft.com/6d30114cc5e648f081eab9ec37171d012502950368585467898/calendar.ics';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('API handler called');
  try {
    const icsResponse = await axios.get(ICS_URL);
    const parsedData = ical.parseICS(icsResponse.data);

    const events = Object.values(parsedData)
      .filter(e => e.type === 'VEVENT')
      .map((e: any) => ({
        title: e.summary,
        start: e.start,
        end: e.end,
      }));
      console.log('ICS events:', events);

    res.status(200).json(events);
  } catch (error) {
    console.error('ICS fetch error:', error);
    res.status(500).json({ error: 'Failed to load calendar' });
  }
}
