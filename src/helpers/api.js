export async function getAllEvents() {
  const response = await fetch(
    "https://dpg-meetups-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();

  return allEvents.find((event) => event.id === Number(id));
}

export async function getFilteredEvents(filteredYear, filteredMonth) {

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const {date} = event
    const eventYear = date.split(" ")[3];
    const eventMonth = date.split(" ")[1];

    return filteredYear === eventYear && eventMonth === filteredMonth; 
  });

  return filteredEvents;
};

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event => event.featured))
};