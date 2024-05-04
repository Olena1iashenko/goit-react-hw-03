import { useEffect, useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : data;
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [searchValue, setSearchValue] = useState("");

  const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const getFilteredData = () => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const handleAddContact = (newContactData) => {
    const newContact = {
      id: nanoid(),
      name: newContactData.name,
      number: newContactData.number,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactList
        contacts={getFilteredData()}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
