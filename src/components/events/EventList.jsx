import EventCard from "./EventCard.jsx";

export default function EventList({ events }) {
  return (
    <div className='event_list'>
      {events.map((event) => {
        return <EventCard event={event} key={event.id} numberOfEvents={events.length}/>;
      })}
    </div>
  );
}
