import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(null);
  const [notes, setNotes] = useState([]);

  const addNote = (noteText) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now().toString(), text: noteText }]);
  };

  return (
    <AppContext.Provider value={{ activeUser, setActiveUser, notes, addNote }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
