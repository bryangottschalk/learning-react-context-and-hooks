import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = props => {
  // take in props so it can provide the children
  const [books, setBooks] = useState([
    { title: 'name of the wind', id: 1 },
    { title: 'the way of kings', id: 2 },
    { title: 'the final empure', id: 3 },
    { title: 'the hero of ages', id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
