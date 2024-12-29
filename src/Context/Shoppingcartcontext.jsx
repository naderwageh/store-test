

import { createContext, useContext, useState ,useEffect} from "react";
import ShppingCart from "../Componts/shppingcart";

 const initialcartItems = localStorage.getItem("shpping-cart")?JSON.parse(localStorage.getItem("shpping-cart")):[];
const shoppingcontext = createContext({});
const Shoppingcartprovider = ({ children }) => {
  const [isOpen,setisOpen]=useState(false)
  const [cartItems, setcartItems] = useState(initialcartItems);
  useEffect(()=>{
localStorage.setItem("shpping-cart",JSON.stringify(cartItems))
  },[cartItems])
  const OpenCard = ()=>{
       setisOpen(true)
  }
  const closecard  = ()=>{
    setisOpen(false)
  }
  const  cartQuantity = cartItems.reduce( (
    (quantity,item)=>item.quantity+quantity
  ),0)


  

  const getItemesQuanity = (id) => {
    return cartItems.find((items) => items.id === id)?.quantity || 0;
  };

  const increasecartquantity = (id) => {
    return setcartItems((CurrItems) => {
      if (CurrItems.find(items => items.id === id) == null) {
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return CurrItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreasecartquantity = (id) => {
    return setcartItems((CurrItems) => {
      const item = CurrItems.find(items => items.id === id);
      if (item && item.quantity === 1) {
        return CurrItems.filter((item) => item.id !== id);
      } else {
        return CurrItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeitemfromcart = (id) => {
    return setcartItems((CurrItems) => CurrItems.filter((item) => item.id !== id));
  };

  return (
    <shoppingcontext.Provider value={{ cartItems, getItemesQuanity, increasecartquantity,cartQuantity, decreasecartquantity, removeitemfromcart ,OpenCard,closecard}}>
      {children}
      <ShppingCart isOpen={isOpen}/>  
    </shoppingcontext.Provider>
  );
};

export default Shoppingcartprovider;


export const useshoppingcart = () => {

  return useContext(shoppingcontext);
};
















 