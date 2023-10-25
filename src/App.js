// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import React from "react";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import { NewEventPage } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage, {
  loader as detailLoader,
} from "./pages/EventDetailPage";
import EventsRoot from "./pages/EventRoot";
import { loader as eventsLoader } from "./pages/EventsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "events",
        element: <EventsRoot />,
        children: [
          ,
          ,
          {
            path: ":eventId",
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                loader: detailLoader,
              },
              { path: ":eventId/edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage /> },

          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
