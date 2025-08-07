import { useState } from 'react'
import './App.css'
import Products from './components/Products.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Import local images
import img1 from './assets/images/istockphoto-1176776065-612x612.jpg'
import img2 from './assets/images/istockphoto-1185028107-612x612.jpg'
import img3 from './assets/images/istockphoto-1279078135-612x612.jpg'
import img4 from './assets/images/istockphoto-1490616219-612x612.jpg'
import img5 from './assets/images/istockphoto-461150479-612x612.jpg'
import img6 from './assets/images/istockphoto-483960103-612x612.jpg'
import img7 from './assets/images/istockphoto-821282056-612x612.jpg'
import img8 from './assets/images/istockphoto-821282084-612x612.jpg'
import img9 from './assets/images/istockphoto-821282162-612x612.jpg'

// Stars Rating
import star1 from './assets/images/star.png'
function App() {
  const [count, setCount] = useState(0)

  // Product data defined in App.jsx
  const productsData = [
    {
      id: 1,
      title: "Black Printed Coffee Mug",
      category: "Mugs",
      price: "$16.00",
      stars: star1,
      originalPrice: null,
      photo: img1,
    },
    {
      id: 2,
      title: "Father's Day Coffee Mug",
      category: "Mugs",
      price: "$19.00",
      stars: star1,
      originalPrice: null,
      photo: img5,
    },
    {
      id: 3,
      title: "Red  Tshirt",
      category: "Clothing",
      price: "$14.00",
      stars: star1,
      originalPrice: null,
      photo: img3,
    },
    {
      id: 4,
      title: "Personalized Mug",
      category: "Mugs",
      price: "$19.00",
      stars: star1,
      originalPrice: null,
      photo: img4,
    },
    {
      id: 5,
      title: "Printed Brown Tshirt",
      category: "Clothing",
      price: "$29.00",
      stars: star1,
      originalPrice: "$34.00",
      photo: img2
    },
    {
      id: 6,
      title: "Printed Dark Blue Tshirt",
      category: "Clothing",
      price: "$14.00",
      stars: star1,
      originalPrice: null,
      photo: img6,
    },
    {
      id: 7,
      title: "Printed Green Tshirt",
      category: "Clothing",
      price: "$29.00",
      stars: star1,
      originalPrice: "$35.00",
      photo: img7
    },
    {
      id: 8,
      title: "Printed Tshirt Coffee Blend Color",
      category: "Clothing",
      price: "$39.00",
      stars: star1,
      originalPrice: "$45.00",
      photo: img8
    },
    {
      id: 9,
      title: "Typography Text Printed Tshirt",
      category: "Clothing",
      price: "$29.00",
      stars: star1,
      originalPrice: "$35.00",
      photo: img9
    }
  ];

  return (
   <div className="min-h-screen bg-gray-50">
    <Navbar />
    <Products products={productsData}>
      <select className="bg-gray-50 border border-gray-200 rounded px-5 py-2 text-gray-500 text-base focus:outline-none" defaultValue="default">
        <option value="default">Default sorting</option>
      </select>
    </Products>
    <Footer />
   </div>
  )
}

export default App
