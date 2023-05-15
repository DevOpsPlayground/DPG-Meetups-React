import EventList from "../components/events/EventList";
import { useNavigate } from "react-router-dom";
import EventsSearch from "../components/events/EventSearch";
import { useEffect, useState } from "react";
import { getAllEvents } from "../helpers/api";
import Loader from "../components/Loader";

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
    return  <Loader/>
  }

  return (
    <div className="Homepage">
    <h1 className="main_title">All Events</h1>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </div>
  );
}
