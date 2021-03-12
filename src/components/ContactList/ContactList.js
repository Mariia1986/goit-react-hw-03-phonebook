import React from "react";
import s from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ filteredNames, deleteItem }) => {
  return (
    <ul className={s.contaktList}>
      {filteredNames.map((el) => (
        <li className={s.contaktListItem} key={el.id}>
          <p className={s.contaktListName}>
            
            {el.name} : {el.number}
          </p>
          <button className={s.contaktListButton} type="button" onClick={() => deleteItem(el.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes={
  filteredNames:PropTypes.array.isRequired,
  deleteItem:PropTypes.func.isRequired}



export default ContactList;

