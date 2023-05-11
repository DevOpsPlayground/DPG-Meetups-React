import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../helpers/api";
import styles from "./IndividualEvent.module.css";
import { IoLocation } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import audience from "../assets/audience.jpg"

export default function IndividualEventPage() {
  const { event_id } = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    getEventById(event_id).then((data) => {
      setEvent(data);
    });
  }, [event_id]);

  if (isNaN(event_id)) {
    return (
      <>
        <p>Invalid URL</p>
      </>
    );
  }

  if (!event) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{event.title}</h1>
      <div className={styles.info_cards_container}>
        <div className={styles.info_card}>
          <MdAccessTimeFilled />
          <p className={styles.info_text}>{event.date}</p>
        </div>
        <div className={styles.info_card}>
          <IoLocation />
          <p className={styles.info_text}>{event.location}</p>
        </div>
      </div>
      
      <img src={audience} alt="crowd sat with laptops in office" className={styles.image}></img>
      <p className={styles.description}>{event.description}</p>
    </div>
  );
}
