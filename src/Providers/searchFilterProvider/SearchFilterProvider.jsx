import { createContext, useContext, useState } from "react";

const SearchFilter = createContext();
const SearchFilterDispatcher = createContext();

const SearchFilterProvider = ({ children }) => {
  const [value, dispatch] = useState("");

  return (
    <SearchFilter.Provider value={value}>
      <SearchFilterDispatcher.Provider value={dispatch}>
        {children}
      </SearchFilterDispatcher.Provider>
    </SearchFilter.Provider>
  );
};

export const useSearchFilter = () => useContext(SearchFilter);

export const useSearchFilterActions = () => useContext(SearchFilterDispatcher);

export default SearchFilterProvider;
