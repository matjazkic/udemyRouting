import React from "react";
import EventsList from "./../components/EventsList";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: 1, title: "event" },
  { id: 2, title: " another event" },
];
const allEvents = DUMMY_EVENTS.map((event) => (
  <li key={event.id}>
    <Link to={`/events/${event.id}`}>{event.title}</Link>
  </li>
));

const EventsPage = () => {
  return (
    <div>
      <ul>{allEvents}</ul>
    </div>
  );
};

export default EventsPage;
