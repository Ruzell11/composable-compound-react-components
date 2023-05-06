import { Link } from "react-router-dom"
import { productsData } from "../../data/productInfo"
import ProductCard from "./components/ProductCard"



const Product = () => {
  return (
    <div className="flex items-center justify-center py-10 flex-col">
      <Link to='/other-page'>
        Navigate
      </Link>

      <div className="space-y-3 space-x-3 rounded-lg mt-5 grid grid-cols-4">
        {productsData.map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
    </div>
  )
}

export default Product