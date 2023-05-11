import { Link } from "react-router-dom";
import pandalogo from "../../assets/logowhitetransparent.png";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.nav_bar}>
      <Link to={"/"}>
        <img
          src={pandalogo}
          alt={"panda with glasses logo"}
          className={styles.panda_logo}
        ></img>
      </Link>
      <Link to={"/events"}>All Events</Link>
    </div>
  );
}
