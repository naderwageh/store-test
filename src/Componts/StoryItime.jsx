
import { Card ,Button} from 'react-bootstrap'
import formatCurrency from './formatCurrency'
import { useshoppingcart } from '../Context/Shoppingcartcontext'

const storyIime = ({id,price,name,imgUrl}) => {
  const {getItemesQuanity,increasecartquantity,decreasecartquantity,removeitemfromcart}= useshoppingcart()
  const quantity=getItemesQuanity(id)
  return (
    <Card className='h-100'>
    <Card.Img src={imgUrl} variant='top' style={{height:"200px",objectFit:"cover"}} />
    <Card.Body>
    <Card.Title className='d-flex justify-content-between aling-item-baseline'>
      <span className='fs-2'>{name}</span>
      <span className='text-muted me-2'>{formatCurrency(price)}</span>
      </Card.Title>
      <div className='mt-auto'>
        {quantity ===0 ?<Button className='w-100' onClick={()=>increasecartquantity(id)}>Add to Card</Button> :<div className='d-flex align-items-center flex-column' style={{gap:"0.5rem"}}>
           <div className='d-flex align-items-center justify-content-center'style={{gap:"0.5rem"}}>
            <Button onClick={()=>decreasecartquantity(id)}>-</Button>
            <span className='fs-3'>{quantity} in card</span>
            <Button  onClick={()=>increasecartquantity(id)}>+</Button>
           </div>
           <Button variant='danger' size='sm' onClick={()=>removeitemfromcart(id)}> Remove</Button>
        </div>}
      </div>
    </Card.Body>
      
    </Card>
  )
}

export default storyIime
