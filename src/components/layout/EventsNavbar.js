import { Link } from "react-router-dom";
import styles from "./EventsNavbar.module.scss";

function EventsNavbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Discover 🐱‍💻</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Events</Link>
          </li>
          <li>
            <Link to="/favourites">My Favourites</Link>
          </li>
          <li>
            <Link to="/newevent">New Event</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavbar;
