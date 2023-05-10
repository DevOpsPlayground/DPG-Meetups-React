import EventList from "../components/events/EventList";
import { useNavigate } from "react-router-dom";
import EventsSearch from "../components/events/EventSearch";
import { useEffect, useState } from "react";
import { getFeaturedEvents } from "../helpers/api";

export default function Homepage() {
  const navigate = useNavigate();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    navigate(fullPath);
  }

  const [events, setEvents] = useState([]);

  useEffect(() => {
    getFeaturedEvents().then((events) => {
      setEvents(events);
    });
  }, []);

  if (!events.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className='Homepage'>
      <EventsSearch onSearch={findEventsHandler} />
      <h1>FEATURED EVENTS</h1>
      <EventList events={events} />
    </div>
  );
}
