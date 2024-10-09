import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import Board from "./components/Board";

const QUICKSELL_API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

const App = () => {
  const [cards, setCards] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingMethod, setGroupingMethod] = useState(() => {
    return localStorage.getItem("grouping") || "status";
  });
  const [sortingMethod, setSortingMethod] = useState(() => {
    return localStorage.getItem("sorting") || "priority";
  });

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch(QUICKSELL_API_URL);
        const data = await response.json();
        setCards(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchApiData();
  }, []);

  useEffect(() => {
    localStorage.setItem("grouping", groupingMethod);
    localStorage.setItem("sorting", sortingMethod);
  }, [groupingMethod, sortingMethod]);

  return (
    <div className="main">
      <Header
        groupingMethod={groupingMethod}
        sortingMethod={sortingMethod}
        setGroupingMethod={setGroupingMethod}
        setSortingMethod={setSortingMethod}
      />
      <Board
        cards={cards}
        users={users}
        groupingMethod={groupingMethod}
        sortingMethod={sortingMethod}
      />
    </div>
  );
};

export default App;