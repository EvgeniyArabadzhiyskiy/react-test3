import "./Form.css";
import React, { Component } from "react";
import { toast } from "react-toastify";

import IconButton from "../IconButton/IconButton";
import { AiFillApple } from "react-icons/ai";

class Form extends Component {
  state = {
    pokemonName: "",
  };

  inputChange = (evt) => {
    this.setState({ pokemonName: evt.currentTarget.value });
  };

  handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (!this.state.pokemonName) {
      toast.error("Введите покемона");
      return;
    }

    this.props.onFormSubmit(this.state.pokemonName);
    this.setState({ pokemonName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          value={this.state.pokemonName}
          onChange={this.inputChange}
        />
        <IconButton type="submit">
          <AiFillApple color="blue" size={16} />
          Найти
        </IconButton>
      </form>
    );
  }
}

export default Form;
