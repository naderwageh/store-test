import { Offcanvas, Stack } from "react-bootstrap";
import { useshoppingcart } from "../Context/Shoppingcartcontext";
import CartItems from "./CartItems";
import formatCurrency from "./formatCurrency";
import StoreItems from "../data/StoreItimes.json"


const ShoppingCart = ({isOpen}) => {
  const { cartItems,closecard } = useshoppingcart(); 

  return (
    <Offcanvas show={isOpen} onHide ={closecard} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
     <Stack gap={3}>
     {cartItems.map((item) => (
          <CartItems key={item.id} {...item} />
        ))}
       <div className="ms-auto fw-bold fs-5">
       Total {" "} 
       {formatCurrency( 
          cartItems.reduce((total,cartItem)=>{
           const item = StoreItems.find((i)=> i.id === cartItem.id)
           return  total +(item?.price ||0)*cartItem.quantity
        },0))} 
       </div>
       
     </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;