import React ,{useEffect,useState,useReducer}from 'react';
import{products} from './utils/data/products';
import Navbar from './components/navbar/navbar'
import Products from './components/products/Products'
import cardReducer from './reducers/cardReducer';
import Cart from './components/card/card';
import { actions } from './actions/actions';
import Home from './pages/Home';
import {BrowserRouter ,Route ,Routes } from 'react-router-dom'
import { Card } from '@mui/material';


const App = () => {
  const [nbElements,setNbElements]=useState(0);
  const[card_products,dispatch]=useReducer(cardReducer,[])
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleEmptyCard=()=>{
    setNbElements(0)
  }
  const handleAdd=()=>{
    setNbElements((nbElements)=>nbElements+1)
  }
  const handleRemove=(id)=>{
    
      setNbElements((nbElements)=>nbElements-(card_products.find((item)=>item.id===id)).quantity)
    }
    const handleDecrement=()=>{
      setNbElements((nbElements)=>nbElements-1)
    }
    const Main=()=>{
  return(<>
  <Home/>
      <Products products={products}  dispatch={dispatch} setNbElements={handleAdd}nbElements={nbElements}/>
  
  </>)
    }
  
  const Card=()=>{
    return <Cart
    card_products={card_products}
    handleRemove={handleRemove}
    handleDecrement={handleDecrement}
    handleIncrement={handleAdd}
    handleEmptyCard={handleEmptyCard}
    dispatch={dispatch}
    />
  
    }
    return(<div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Main/>} ></Route>
      <Route exact path="/card" element={<Card/>} ></Route>

      </Routes>
      <Navbar totalItems={nbElements} handleDrawerToggle={handleDrawerToggle} />
      
    
    </BrowserRouter>
    </div>
   );
};

export default App;
