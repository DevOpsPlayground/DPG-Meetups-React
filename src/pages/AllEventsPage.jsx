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
    return (
      <div className="loading_container">
        <div className="lds-ring">
          {" "}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="loading_text">Getting your events...</p>
      </div>
    );
  }

  return (
    <div className="Homepage">
      <EventsSearch onSearch={findEventsHandler} />
      <h1 className="main_title">All Events</h1>
      <EventList events={events} />
    </div>
  );
}
