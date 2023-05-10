import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className='Nav'>
      <Link to={`/`}>
        <p>All Events</p>
      </Link>
    </div>
  );
}
