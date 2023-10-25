import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page";
  }
  return (
    <div>
      <PageContent title={title} />
      <p>{message}</p>
      <Link to=".." relative="path">
        {" "}
        Back{" "}
      </Link>
    </div>
  );
};

export default ErrorPage;
