import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../helpers/api";

export default function IndividualEventPage() {
  const { event_id } = useParams();
  const [event, setEvent] = useState();

  useEffect(() => {
    getEventById(event_id).then((data) => {
      setEvent(data);
    });
  }, [event_id]);

  if (
    isNaN(event_id)
  ) {
    return (
      <>
        <p>Invalid URL</p>
      </>
    );
  }


  if (!event) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <h2>{event.date}</h2>
      <h3>{event.location}</h3>
      <p>{event.description}</p>
    </div>
  );
}
