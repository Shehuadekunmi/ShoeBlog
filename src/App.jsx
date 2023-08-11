
import { useState } from 'react'
import './App.css'
import Nav from './navigation/Nav'
import Products from './products/Products'
import Recommended from './recommended/Recommended'
import Sidebar from './sidbar/Sidebar'


// data base
import products from './db/data'
import Card from './components/Card'

function App() {

  const[selectedCategory, setSelectedCategory] = useState(null);
const [query, setQuery] = useState('')


  // ------------input filter-------
const handleInputChange = event =>{
  setQuery(event.target.value)
};
const filteredItems = products.filter(product =>
   product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));

  // ------------Radio filter-------
  const handleChange = event =>{
    setSelectedCategory(event.target.value)
  }

   // ------------Buttons filter-------

    const handleClick = event =>{
      selectedCategory(event.target.value)
    }


    function filteredData(products, selected, query){
      let filteredProducts = products

      // filtering input items

      if(query){
        filteredProducts = filteredItems
      };

      // selected filter

      if(selected){
        filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title}) =>
         category === selected || 
         color === selected
        || company === selected 
        || newPrice === selected 
        || title === selected)
      };
      return filteredProducts.map(({img, title, star, reviews, prevPrice, newPrice }) =>(
        <Card key={Math.random}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
        />
      ))
    };
    const result = filteredData(products, selectedCategory, query)

  return (
    <>
     <Sidebar />
     <Nav/>
     <Recommended/>
     <Products/>
     
  
    </>
  )
}

export default App
