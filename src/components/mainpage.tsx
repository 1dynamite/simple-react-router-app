import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <span style={{ marginBottom: "1.5rem" }}>
        <span className="text-red">Main</span> page!
      </span>
      <div className="navbar">
        <Link to="/profile">Profile</Link>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
