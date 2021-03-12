import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleContactInfo = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = { id: uuidv4(), name, number };
    this.props.onSubmit(newContact);

    this.reset();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.submitForm}>
        <label
          htmlFor="name"
          className={s.label}
        >
          Name
          <input
            placeholder="Ivan Ivanov"
            className={s.formInput}
            onChange={this.handleContactInfo}
            required
            pattern="[A-Za-z]{1,}\s[A-Za-z]{1,}"
            name="name"
            value={name}
            type="text"
          />
        </label>
        <label className={s.label}>
          Number
          <input
            placeholder="555-55-55"
            required
            onChange={this.handleContactInfo}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            value={number}
            htmlFor="number"
            className={s.formInput}
            name="number"
            type="tel"
          />
        </label>
        <button className={s.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,

};

export default ContactForm;
