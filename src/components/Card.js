import "../css/Card.css";
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
import userAvatar from "../assets/image.jpg";

const priorityIcons = {
  0: noPriorityIcon,
  4: urgentIcon,
  3: highIcon,
  2: mediumIcon,
  1: lowIcon,
};

const statusIcons = {
  Todo: todoIcon,
  "In progress": inProgressIcon,

  Backlog: backlogIcon,
  Done: doneIcon,
  Cancel: cancelIcon,
};

const Card = ({ ticket }) => {
  const statusIcon = statusIcons[ticket.status] || null;
  const priorityIcon = priorityIcons[ticket.priority] || null;

  return (
    <div className="kanban-card">
      <div className="kanban-card-header">
        <div className="idRow">
          <p className="ticketid">{ticket.id}</p>
          <div className="avatar-container">
            <img className="avatar" src={userAvatar} alt="" />
            <div className="online"></div>
          </div>
        </div>

        <div className="title-row">
          {statusIcon && (
            <div className="status-icon">
              <img src={statusIcon} alt={ticket.status} />
            </div>
          )}
          <div className="title">{ticket.title}</div>
        </div>
      </div>
      <div className="kanban-card-footer">
        <div className="tag-container">
          <img src={priorityIcon} alt="manual" className="manual-icon" />
          <p className="tag">{ticket.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;