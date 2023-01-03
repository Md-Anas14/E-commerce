import { useEffect, useState } from 'react';
import './CartList.css'

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='mt-5 text-center  card-body' >
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div className='d-flex'>
                            <div>
                                <img className='img ' src={cartItem.image} width={40} />
                            </div>
                            <div>
                            <span className='ms-2'> {cartItem.name} </span>
                            <button className='ps-2 pe-2'
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <span> {cartItem.quantity} </span>
                            <button className='ps-2 pe-2'
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>
                            </div>
                        </div>
                    )
                })
            }
        <br></br>
            <div className='   Fs-1 fw-bolder d-inline border bg-dark text-white p-3   text-center rounded-4'>Total  =
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </div>
       
           
       

            
        </div >
    )
}

export default CartList