import { useEffect, useState } from "react";
import { getReminders, createReminder, updateReminder, deleteReminder } from "./api";
import ReminderForm from "./components/ReminderForm";
import ReminderList from "./components/ReminderList";

function App() {
  const [reminders, setReminders] = useState([]);
  const [editingReminder, setEditingReminder] = useState(null);

  const loadReminders = async () => {
    const { data } = await getReminders();
    setReminders(data);
  };

  const handleCreate = async (data) => {
    await createReminder(data);
    loadReminders();
  };

  const handleUpdate = async (data) => {
    await updateReminder(editingReminder.id, data);
    setEditingReminder(null);
    loadReminders();
  };

  const handleDelete = async (id) => {
    await deleteReminder(id);
    loadReminders();
  };

  const handleEdit = (reminder) => {
    setEditingReminder(reminder);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="container">
      <h1>AWS Reminder App</h1>
      <ReminderForm
        onSubmit={editingReminder ? handleUpdate : handleCreate}
        initialData={editingReminder}
        isEditing={!!editingReminder}
        onCancel={() => setEditingReminder(null)}
      />
      <ReminderList
        reminders={reminders}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;