import { useContext, createContext, useState } from "react";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
 const [history, setHistory] = useState([]);
  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => useContext(HistoryContext);

export { useHistory, HistoryProvider };
