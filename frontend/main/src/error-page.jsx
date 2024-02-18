import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page " className="text-white flex justify-center items-center h-screen">
      <h1>Oops!!!...</h1>
      <p>   Sorry, Under Construction.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}