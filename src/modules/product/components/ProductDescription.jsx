import { useProductContext } from "../context";

const ProductDescription = () => {
    const {description} = useProductContext()
  
    return(
        <h1>{description}</h1>
    )


}
export default ProductDescription;