import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import { MdEventNote } from "react-icons/md";
import logo from "../../assets/logowhitetransparent.png";



export default function Nav() {
  return (
    <div className={styles.nav_bar}>
      <Link to={`/`}>
        <img
          src={logo}
          alt={"panda with glasses logo"}
          className={styles.panda_logo}
        ></img>
      </Link>
      <Link className={styles.all_events_container} to={`/events`}>
        <MdEventNote size={60} />
        <p className={styles.all_events_text}>All Events</p>
      </Link>
    </div>
  );
}
