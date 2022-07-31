import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CartItem from './cardItem/cardItem';
import { actions } from '../../actions/actions';


const Cart = ({ card_products,dispatch ,handleRemove,handleDecrement,handleIncrement,handleEmptyCard}) => {
  const myHandleEmptyCard=()=>handleEmptyCard();
  const products=[...card_products]
  // console.log(card_products)
  const subtotal=()=>{
        var sum=parseInt('0');
        card_products.map((product)=>{sum+=parseInt(product.price)*parseInt(product.quantity)})
        return sum;
  }
    const EmptyCard = () => (
      <Typography variant="subtitle1">You have no items in your shopping cart,
        {/* <Link className={classes.link} to="/">start adding some</Link>! */}
      </Typography>
    );

  
  
    const FulfilledCard = () => (
      <>
        <Grid container spacing={3}>
          {products.map((item) => (
            <Grid item xs={12} sm={4} >
                {/* <p>{item.name}</p> */}
              <CartItem item={item}
                dispatch={dispatch}
                handleRemove={handleRemove}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}


              //  onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} 
               />
            </Grid>
          ))} 
        </Grid> 
        <div style={{margin:'16vh 0',display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
          <Typography variant="h4">Subtotal: {`$${subtotal()}`}</Typography>
          <div>
            <Button className='remove' style={{marginRight:'16px'}} size="large" type="button" variant="contained"onClick={()=>{dispatch({type:actions.EMPTY_CARD});myHandleEmptyCard()}} >Empty cart</Button>
            <Button className='checkout'  size="large" type="button" variant="contained" color="primary">Checkout</Button>
          </div>
        </div>
      </>
    );
  
    return (
      <Container>
        <div  />
        <Typography  variant="h3" gutterBottom>Your Shopping Cart</Typography>
        { !products.length ? EmptyCard() : FulfilledCard() }
      </Container>
    );
  };
  
  export default Cart;
