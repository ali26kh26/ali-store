import { createContext, useContext, useState } from "react";

const sort = createContext();
const sortDispatcher = createContext();

const SortProvider = ({ children }) => {
  const [value, dispatch] = useState("");

  return (
    <sort.Provider value={value}>
      <sortDispatcher.Provider value={dispatch}>
        {children}
      </sortDispatcher.Provider>
    </sort.Provider>
  );
};

export const useSort = () => useContext(sort);

export const useSortActions = () => useContext(sortDispatcher);

export default SortProvider;
