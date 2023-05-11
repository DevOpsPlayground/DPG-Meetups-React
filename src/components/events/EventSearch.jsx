import { useRef } from "react";
import styles from "./EventSearch.module.css";
import { IoSearchCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedMonth, selectedYear);
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <Link to={`/`} className={styles.all_events}>
          <GrPowerReset className={styles.all_events_icon} />
        </Link>
        <div className={styles.control}>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
        <div className={styles.control}>
          <select id="month" ref={monthInputRef}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <button className={styles.go_btn}>
          <IoSearchCircleSharp className={styles.go_btn_icon} />
        </button>
      </div>
    </form>
  );
}

export default EventsSearch;
