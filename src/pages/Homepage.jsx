import EventList from "../components/events/EventList";
import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import { getFeaturedEvents } from "../helpers/api";
import { fakeData } from "../fakeData"; // imported fake data

export default function Homepage() {
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    /* IMPORTED fake data */
    setFeaturedEvents(fakeData);

    /* FETCHED real data */
    // getFeaturedEvents().then((events) => {
    //   setFeaturedEvents(events);
    // });
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
      <h1 className='main_title'>Welcome to DevOps Playground Events Page</h1>
      <div className={styles.feature_title_container}>
        <h2 className={styles.feature_title}>Featured Events</h2>
      </div>
      <EventList events={featuredEvents} />
    </div>
  );
}
