import EventList from "../components/events/EventList";
import { useNavigate } from "react-router-dom";
import EventsSearch from "../components/events/EventSearch";
import { useEffect, useState } from "react";
import { getAllEvents } from "../helpers/api";

export default function AllEventsPage() {
  const navigate = useNavigate();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    navigate(fullPath);
  }

  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then((events) => {
      setEvents(events);
    });
  }, []);

  if (!events.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className='Homepage'>
      <EventsSearch onSearch={findEventsHandler} />
      <h1>ALL EVENTS</h1>
      <EventList events={events} />
    </div>
  );
}
