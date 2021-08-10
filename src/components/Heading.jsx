import {useContext, useState} from "react";
import { UserContext } from "../contexts/UserContext";
import ThemeContext from "../contexts/ThemeContext";

export default function Heading() {
  const { user } = useContext(UserContext);
  const { setTheme } = useContext(ThemeContext);

  const switchTheme = (theme) => {
    console.log(theme);
    setTheme(theme);
  }

  return (
        <div className="heading">
            <p>
                Welcome, {user.name}, &nbsp;
                <a href="#" onClick={() => { setUser(null) }}>Log out</a>
            </p>
            <hr/>
            <p>Switch theme</p>
            <select onChange={event => switchTheme(event.target.value)}>
                <option value="light-theme">Light</option>
                <option value="dark-theme">Dark</option>
            </select>
            <hr/>
        </div>
    );
}