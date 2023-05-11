import EventList from "../components/events/EventList";
import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import { getFeaturedEvents } from "../helpers/api";

export default function Homepage() {
  const [getFeaturedEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    getFeaturedEvents().then((events) => {
      setFeaturedEvents(events);
    });
  }, []);

  if (!getFeaturedEvents.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="Homepage">
      <h1 className={styles.main_title}>Featured Events</h1>
      <EventList events={getFeaturedEvents} />
    </div>
  );
}
