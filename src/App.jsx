import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
