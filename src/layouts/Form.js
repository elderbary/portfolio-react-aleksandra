import "../styles/form.css";
import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
<div>
<form action="/action_page.php">
    <label>Imię</label>
    <input type="text"id="fname"name="firstname"/>
    <label>Nazwisko</label>
    <input type="text"id="lname" name="lastname"/>
    <label>E-mail</label> 
    <input type="email"id="email"name="email"/>
    <label>Wiadomość</label>
    <textarea id="subject"name="subject"></textarea>
    <input type="submit"value="Wyślij wiadomość"/>
</form>
</div>
    );
}
}

export default Form;
