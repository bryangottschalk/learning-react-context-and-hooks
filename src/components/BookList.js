import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
  static contextType = ThemeContext; // looks up component tree for the first time it finds a provider for this context (finds it one level up in App.js --> gives access to the data provided by this that we put in the value property)
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>the way of kings</li>
          <li style={{ background: theme.ui }}>the name of the wind</li>
          <li style={{ background: theme.ui }}>the final empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
