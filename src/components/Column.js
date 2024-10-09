import Card from "./Card";
import "../css/Column.css";
import userAvatar from "../assets/image.jpg";
import addIcon from "../assets/add.svg";
import sortIcon from "../assets/sort.svg";

const Column = ({
  group,
  cards,
  groupingMethod,
  priorityIcons,
  statusIcons,
}) => {
  return (
    <div className="kanban-column">
      <div className="kanban-column-header">
        <div className="header-left">
          {groupingMethod === "priority" && (
            <img
              src={priorityIcons[group]}
              alt={`${group} Icon`}
              className="priority-icon"
            />
          )}

          {groupingMethod === "user" && (
            <img src={userAvatar} alt="User Avatar" className="user-avatar" />
          )}

          {groupingMethod === "status" && (
            <img
              src={statusIcons[group]}
              alt={`${group} Icon`}
              className="status-icon-column"
            />
          )}

          <p className="task-name">{group} </p>
          <div className="task-total">{cards.length}</div>
        </div>

        <div className="header-right">
          <img src={addIcon} alt="Add Icon" />
          <img src={sortIcon} alt="Sort Icon" />
        </div>
      </div>
      {cards.map((cardDetails) => (
        <Card key={cardDetails.id} cardDetails={cardDetails} statusIcons={statusIcons} groupingMethod={groupingMethod} />
      ))}
    </div>
  );
};

export default Column;