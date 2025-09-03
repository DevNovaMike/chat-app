import React, { useState } from "react";

function ContactForm({ onAdd }) {
  const [contact, setContact] = useState("");

  const handleAdd = () => {
    if (!contact.trim()) return;
    onAdd(contact);
    setContact("");
  };

  return (
    <div style={{ padding: "1rem", borderTop: "1px solid #ddd" }}>
      <input
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        placeholder="Add contact"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default ContactForm;