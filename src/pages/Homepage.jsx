import EventList from "../components/events/EventList";
import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import { getFeaturedEvents } from "../helpers/api";

export default function Homepage() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    getFeaturedEvents().then((events) => {
      setFeaturedEvents(events);
    });
  }, []);

  if (!featuredEvents.length) {
    return (
      <div className='loading_container'>
        <div className='lds-ring'>
          {" "}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className='loading_text'>Getting your events...</p>
      </div>
    );
  }

  return (
    <div className='Homepage'>
      <h1 className={styles.main_title}>Welcome to DevOps Playground Events Page</h1>
      <EventList events={featuredEvents} />
    </div>
  );
}
