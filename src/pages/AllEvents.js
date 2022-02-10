import { Container, Row, Col } from "react-bootstrap";
import Enthusiasm from "../components/Enthusiasm";
import styles from "./AllEvents.module.scss";

export default function AllEventsPage() {
  const DUMMY_DATA = [
    {
      id: "e1",
      title: "Genesis",
      image:
        "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description:
        "First event ever. It proved the existence of my React skills",
    },
    {
      id: "e2",
      title: "Going Ahead",
      image:
        "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      description: "A misterious journey awaits!",
    },
  ];

  return (
    <div className={styles.cards}>
      {DUMMY_DATA.map((event) => {
        return (
          <div
            key={event.id}
            className={styles.cardCategory}
            style={{
              backgroundImage: `linear-gradient(
                  rgba(0, 0, 0, 0.3),
                  rgba(0, 0, 0, 0.3)
                ), url(${event.image})`,
            }}
          >
            {event.title}
          </div>
        );
      })}
    </div>
  );
}
