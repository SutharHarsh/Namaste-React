import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="p-10 text-xl font-bold">
      <h1>Oops!!!!</h1>
      <h1>Something went Wrong!</h1>
      <h1>{err?.error?.message}</h1>
    </div>
  );
};

export default Error;
