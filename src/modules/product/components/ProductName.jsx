import { useProductContext } from "../context"

const ProductName = () => {
    const { name } = useProductContext();
    return (
        <h1>{name}</h1>
    )
}

export default ProductName