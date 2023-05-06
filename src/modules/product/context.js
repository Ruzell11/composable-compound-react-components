import { createContext, useContext } from "react";

const ProductContext = createContext({});

export const useProductContext = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("This must be used inside Product card")
    }
    return context
}


export default ProductContext;