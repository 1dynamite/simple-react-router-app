import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <span style={{ marginBottom: "1.5rem" }}>
        <span className="text-red">Home</span> page!
      </span>
      <div className="navbar">
        <Link to="/main">Main</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </>
  );
}
