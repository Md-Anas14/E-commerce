import './ProductList.css'
function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div className='card col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 border border-0'>
                            
                            
                            <img className='card-img-top p-5 pic' src={productItem.image} />
                            <div className='card-body ms-4'>
                                <h5 className='card-title'>{productItem.name} | {productItem.category} </h5>
                                <p className='card-text'> {productItem.seller} </p>
                                <p className='card-text'> Rs. {productItem.price} /-</p>
                                <button className='btn btn-primary'
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList