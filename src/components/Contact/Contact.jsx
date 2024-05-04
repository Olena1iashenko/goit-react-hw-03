import { IoMdContact } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";
import s from "./Contact.module.css";

export const Contact = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;

  const handleDeleteContact = () => {
    onDeleteContact(id);
  };
  return (
    <li className={s.contact}>
      <div className={s.div}>
        <h3>
          <IoMdContact />
          {name}
        </h3>
        <p>
          <FaSquarePhone />
          {number}
        </p>
      </div>
      <button className={s.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
