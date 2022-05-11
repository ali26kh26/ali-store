import { createContext, useContext, useState } from "react";

const priceFilter = createContext();
const priceFilterDispatcher = createContext();

const PriceFilterProvider = ({ children }) => {
  const [value, dispatch] = useState([99, 260]);

  return (
    <priceFilter.Provider value={value}>
      <priceFilterDispatcher.Provider value={dispatch}>
        {children}
      </priceFilterDispatcher.Provider>
    </priceFilter.Provider>
  );
};

export const usePriceFilter = () => useContext(priceFilter);

export const usePriceFilterActions = () => useContext(priceFilterDispatcher);

export default PriceFilterProvider;
