import { useState, useEffect } from "react";

const ReminderForm = ({ onSubmit, initialData, isEditing, onCancel }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    userContact: ""
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await onSubmit(form);
      console.log('Submission successful:', response);
      setForm({ title: "", description: "", dueDate: "", userContact: "" });
      // Add success alert
      alert('Reminder saved successfully!');
    } catch (error) {
      console.error('Detailed error:', {
        message: error.message,
        response: error.response,
        data: error.response?.data
      });
      alert('Reminder saved successfully!');
      window.location.reload();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input type="datetime-local" name="dueDate" value={form.dueDate} onChange={handleChange} required />
      <input name="userContact" placeholder="Email or Phone" value={form.userContact} onChange={handleChange} required />
      <button type="submit">{isEditing ? "Update" : "Add"} Reminder</button>
      {isEditing && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default ReminderForm;
