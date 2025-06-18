import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="px-20 flex flex-col gap-5 mt-20">
      <h1 className="text-4xl">About US Page</h1>
      <User name={"Aditya Sharma"} />
      <UserClass name={"Parva Shukla"} />
    </div>
  );
};

export default About;
