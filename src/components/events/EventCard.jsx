import { Link } from "react-router-dom";
import styles from "./EventCard.module.css";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

export default function EventCard({ event }) {
  const event_id = event.id;
  return (
    <div className={styles.event_card}>
      <div className={styles.event_card_date}>
        <MdAccessTimeFilled />
        <p className={styles.event_card_date_text}>{event.date}</p>
      </div>
      <Link className={styles.event_card_link} to={`/events/${event_id}`}>
        <p className={styles.emoji}>{event.emoji}</p>
        <p>{event.title}</p>
      </Link>
      <div className={styles.event_card_location}>
        <IoLocation />
        <p className={styles.event_card_location_text}>{event.location}</p>
      </div>
      <div className={styles.event_card_presenter}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWcHv4S3KdyquV56SQcMODVUtQUPfFeY4h5bWjXBKXpgPpHreplyBkN7Vjnouih65Psqs&usqp=CAU"
          className={styles.event_card_logo}
          alt="presenters face"
        ></img>
        <div className={styles.event_card_presenter_info}>
          <p className={styles.event_card_presenter_name}>
            {[...event.presenters].join(" & ")}
          </p>
          <p className={styles.event_card_presenter_role}>
            Delivery Consultant
          </p>
        </div>
      </div>
    </div>
  );
}
