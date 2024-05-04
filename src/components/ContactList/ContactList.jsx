import { Contact } from "../Contact/Contact";
import s from "./ContactList.module.css";

export const ContactList = ({ contacts, handleDeleteContact }) => {
  if (!contacts.length) {
    return <h2>No contacts find</h2>;
  }

  return (
    <ul className={s.contactsList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
