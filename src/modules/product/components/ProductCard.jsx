
import ProductContext from '../context';
import ProductName from './ProductName';
import ProductDescription from './ProductDescription'
import ProductImage from './ProductImage';

const ProductCard = ({ product }) => {
    return (
        <>
            <ProductContext.Provider value={product}>
                <section className='bg-white shadow-lg space-y-2 flex flex-col justify-center items-center p-2'>
                    <ProductCard.Image />
                    <ProductCard.Name />
                    <ProductCard.Description />
                </section>
            </ProductContext.Provider>
        </>
    )
}


ProductCard.Name = ProductName
ProductCard.Description = ProductDescription
ProductCard.Image = ProductImage

export default ProductCard