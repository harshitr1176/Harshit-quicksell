import Card from "./Card";
import "../css/Column.css";
import userAvatar from "../assets/image.jpg";
import addIcon from "../assets/add.svg";
import sortIcon from "../assets/sort.svg";

const Column = ({
  group,
  tickets,
  grouping,
  priorityIcons,
  statusIcons,
}) => {
  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        <div className="header-left">
          {grouping === "priority" && (
            <img
              src={priorityIcons[group]}
              alt={`${group} Icon`}
              className="priority-icon"
            />
          )}

          {grouping === "user" && (
            <img src={userAvatar} alt="User Avatar" className="user-avatar" />
          )}

          {grouping === "status" && (
            <img
              src={statusIcons[group]}
              alt={`${group} Icon`}
              className="status-icon-column"
            />
          )}

          <p className="task-name">{group} </p>
          <div className="task-total">{tickets.length}</div>
        </div>

        <div className="header-right">
          <img src={addIcon} alt="Add Icon" />
          <img src={sortIcon} alt="Sort Icon" />
        </div>
      </div>
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} statusIcons={statusIcons} />
      ))}
    </div>
  );
};

export default Column;