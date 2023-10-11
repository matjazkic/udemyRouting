import React from "react";
import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <div>EventDetailPage</div>
      {params.eventId}
      <Link to=".." relative="path">
        {" "}
        Back{" "}
      </Link>
    </>
  );
};

export default EventDetailPage;
