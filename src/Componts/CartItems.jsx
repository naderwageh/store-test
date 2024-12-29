import { Button, Stack } from "react-bootstrap"
import  storeItemes from "../Data/StoreItimes.json"
import formatCurrency from "./formatCurrency"
import { useshoppingcart } from "../Context/Shoppingcartcontext"


const CartItems = ({id,quantity}) => {
  const {removeitemfromcart}=useshoppingcart()
  const item = storeItemes.find((i)=>i.id===id)
  if (item==null) return null
  return (
  <Stack direction="horizontal" className="d-flex align-items-center" gap={2}>
   <img src={item.imgUrl} alt="cart-img" style={{width:"125px",height:"75px",objectFit:"cover"}}/>
   
   <div className="me-auto">
    <div>
      {item.name}{" "}
      {quantity >1 &&<span className="text-muted" style={{fontSize:"0.65rem"}}>x{quantity}</span>}
      <div className="text-muted" style={{fontSize:"0.75rem"}}>{formatCurrency(item.price)}</div>
    </div>
   
  
   </div>
   <div>{formatCurrency(item.price* quantity )}</div>
   <Button variant="outline-danger" size="sm" onClick={()=>removeitemfromcart(id)}>&times;</Button>




  </Stack>
  )
}

export default CartItems
