import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductDetails from './components/ProductDetails'

function App() {
  const product = {
    img: 'https://codeyogi.io/coffee-mug.jpeg',
    heading: 'Black Printed Coffee Mug',
    price: 19.99,
    desc: 'A stylish mug for your morning coffee.'
  };
  return(
    <div className='flex justify-center align-center items-center w-full'>
      <ProductDetails {...product} />
    </div>
  )
}

export default App;
