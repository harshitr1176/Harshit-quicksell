import Column from "./Column";
import "../css/Board.css";

import noPriorityIcon from "../assets/No-priority.svg";
import urgentIcon from "../assets/SVG - Urgent Priority colour.svg";
import highIcon from "../assets/Img - High Priority.svg";
import mediumIcon from "../assets/Img - Medium Priority.svg";
import lowIcon from "../assets/Img - Low Priority.svg";

import todoIcon from "../assets/To-do.svg";
import inProgressIcon from "../assets/in-progress.svg";
import doneIcon from "../assets/Done.svg";
import backlogIcon from "../assets/Backlog.svg";
import cancelIcon from "../assets/Cancelled.svg";

const Board = ({ cards, users, groupingMethod, sortingMethod }) => {
  const priorityIcons = {
    "No Priority": noPriorityIcon,
    Urgent: urgentIcon,
    High: highIcon,
    Medium: mediumIcon,
    Low: lowIcon,
  };

  const statusIcons = {
    Todo: todoIcon,
    "In progress": inProgressIcon,

    Backlog: backlogIcon,
    Done: doneIcon,
    Cancel: cancelIcon,
  };

  const sortTickets = (cards) => {
    return cards.slice().sort((a, b) => {
      if (sortingMethod === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortingMethod === "priority") {
        return b.priority - a.priority;
      }
      return 0;
    });
  };

  const groupByStatus = (cards) => {
    const statuses = ["Todo", "In progress", "Done", "Backlog", "Cancel"];
    const grouped = statuses.reduce((acc, status) => {
      acc[status] = [];
      return acc;
    }, {});

    cards.forEach((ticket) => {
      if (grouped[ticket.status]) {
        grouped[ticket.status].push(ticket);
      }
    });

    return grouped;
  };

  const groupByUser = (cards) => {
    return cards.reduce((acc, ticket) => {
      const user = users.find((user) => user.id === ticket.userId);
      const userName = user ? user.name : "Unknown User";
      if (!acc[userName]) acc[userName] = [];
      acc[userName].push(ticket);
      return acc;
    }, {});
  };

  const groupByPriority = (cards) => {
    return cards.reduce((acc, ticket) => {
      const priorities = ["No Priority", "Low", "Medium", "High", "Urgent"];
      const priorityLabel = priorities[ticket.priority];
      if (!acc[priorityLabel]) acc[priorityLabel] = [];
      acc[priorityLabel].push(ticket);
      return acc;
    }, {});
  };

  let groupedCards = [];
  if (groupingMethod === "status") groupedCards = groupByStatus(cards);
  else if (groupingMethod === "user") groupedCards = groupByUser(cards);
  else if (groupingMethod === "priority") groupedCards = groupByPriority(cards);

  for (let group in groupedCards) {
    groupedCards[group] = sortTickets(groupedCards[group]);
  }

  return (
    <div className="kanban-content">
      {Object.keys(groupedCards).map((group) => (
        <Column
          key={group}
          group={group}
          cards={groupedCards[group]}
          groupingMethod={groupingMethod}
          priorityIcons={priorityIcons}
          statusIcons={statusIcons}
        />
      ))}
    </div>
  );
};

export default Board;