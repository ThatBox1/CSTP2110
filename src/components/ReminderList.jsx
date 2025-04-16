const ReminderList = ({ reminders, onEdit, onDelete }) => {
    return (
      <div className="reminder-list">
        {reminders.map(reminder => (
          <div key={reminder.id} className="reminder">
            <h3>{reminder.title}</h3>
            <p>{reminder.description}</p>
            <p><strong>Due:</strong> {new Date(reminder.dueDate).toLocaleString()}</p>
            <p><strong>Contact:</strong> {reminder.userContact}</p>
            <button onClick={() => onEdit(reminder)}>Edit</button>
            <button onClick={() => onDelete(reminder.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  };
  
export default ReminderList;