import { createContext, useContext, useReducer } from "react";

import productReducer from "./productReducer";

const productsContext = createContext();
const productsContextDispatcher = createContext();
const ProductProvider = ({ children }) => {
  const [products, dispatch] = useReducer(productReducer, null);
  console.log(products);
  return (
    <productsContext.Provider value={products}>
      <productsContextDispatcher.Provider value={dispatch}>
        {children}
      </productsContextDispatcher.Provider>
    </productsContext.Provider>
  );
};

export const useProducts = () => useContext(productsContext);

export const useProductsActions = () => useContext(productsContextDispatcher);

export default ProductProvider;
