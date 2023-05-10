import { Link } from "react-router-dom";

export default function EventCard({ event, numberOfEvents }) {
  const event_id = event.id;
  return (
    <div className='event_card'>
      <Link to={`/events/${event_id}`}>{event.title}</Link>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>
  );
}
