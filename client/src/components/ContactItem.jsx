export default function ContactItem({ contact, onClick }) {
  return (
    <div className="contact-item" onClick={onClick}>
      <div className="avatar">{contact.username?.charAt(0).toUpperCase()}</div>
      <div className="details">
        <h3>{contact.username}</h3>
        <p>{contact.email}</p>
      </div>
    </div>
  );
}