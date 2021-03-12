import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };
  
   componentDidMount(){
const renewContacts=JSON.parse(localStorage.getItem("contacts"))
if(renewContacts){
  this.setState(()=>({ contacts:[...renewContacts]}))
}

   }

 componentDidUpdate(prevProps, prevState){
   const{contacts}=this.state

if(contacts!==prevState.contacts){
  localStorage.setItem("contacts", JSON.stringify(contacts))
}

 }


  onHandleSubmit = (newContact) => {
    console.log(newContact);
    if (
      this.state.contacts.some(
        el=> el.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onClickDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  handleFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalaizedFilter = filter.toLowerCase();
    const filteredNames = contacts.filter((el) =>
      el.name.toLowerCase().includes(normalaizedFilter)
    );
    return (
      <div className="App">
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.onHandleSubmit} />
        <div>
          <h2>Contacts</h2>
          <Filter filter={filter} search={this.handleFilter} />
          <ContactList
            filteredNames={filteredNames}
            deleteItem={this.onClickDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
