import './App.css';
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';
import CartList from './Components/Cart/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      image:'./assets/ac.jpg',
      name: 'Whirlpool AC',
      category: 'Air-conditioner',
      seller: 'AMZ Seller Ghz',
      price: 29000
    },
    {
      image:'./assets/airpod.jpg',
      name: 'Boat Airpod 141',
      category: 'Airpod',
      seller: 'gazion Seller ',
      price: 1299
    },
    {
      image:'./assets/canon.jpg',
      name: 'DSLR Canon',
      category: 'Camera',
      seller: 'guru tech',
      price: 58000
    },
    {
      image:'./assets/eggblender.jpg',
      name: 'savi Egg-blender',
      category: 'Egg-blender',
      seller: 'safari shop',
      price: 319
    },
    {
      image:'./assets/keyboardmouse.jpg',
      name: 'forewza Keyboard & mouse',
      category: 'System accesories',
      seller: 'vicky',
      price: 449
    },
    {
      image:'./assets/perfume.jpg',
      name: 'Girls perfume',
      category: 'Perfume',
      seller: 'Ruhaina shopy',
      price: 189
    },
    {
      image:'./assets/printer.jpg',
      name: 'Philips helion 0954',
      category: 'Printer',
      seller: 'city electronics',
      price: 9999
    }, {
      image:'./assets/smartwatch.jpg',
      name: 'Boat Smart watch',
      category: 'Digi Watch',
      seller: 'Boat',
      price: 4700
    }, {
      image:'./assets/vr.jpg',
      name: 'vr Portable display',
      category: 'VR 3d glass',
      seller: 'Tech soloution',
      price: 2400
    },
    {
      image:'./assets/iphone.jpg',
      name: 'I PHONE',
      category: 'Mobile',
      seller: 'thameem mobiles',
      price: 32000
    },
    {
      image:'./assets/tablet.jpg',
      name: 'Lenova tablet',
      category: 'tablet',
      seller: 'gk brother',
      price: 12500
    },
    {
      image:'./assets/umbrella.jpg',
      name: 'zia Umbrella',
      category: 'Umbrella',
      seller: 'white shop',
      price: 350
    },
   
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }


    </div>
  );
}

export default App;