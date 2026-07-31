import "./DayCard.css";

const DayCard = ({ date, title }) => {
  return (
    <div className="day-card">
      <div className="icon-wrapper">
        <i className="fas fa-calendar-days calendar-icon"></i>
      </div>

      <div className="day-content">
        <h3>{date}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default DayCard;
