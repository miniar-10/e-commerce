import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from "styled-components"
import Typography from '@mui/material/Typography';
import { actions } from '../../../actions/actions';

function CartItem({item,dispatch,handleRemove,handleDecrement,handleIncrement}) {
  const myHandleRemove=(id)=>handleRemove(id);
  const myHandleDecrement=()=>handleDecrement();
  const myHandleINcrement=()=>handleIncrement();

  const styles = {
    media: {
      height: 300,
    //   paddingTop: '56.25%',  16:9,
      marginTop:'30'
    },
    properties:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'

    }
};
    return (
        <Card className="cart-item">
          <CardMedia
          component="img"
          style={styles.media}
           image={item.image} 
           alt={item.name}  
           />
          <CardContent  style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Typography variant="h4">{item.name}</Typography>
            <Typography color='text.secondary' variant="h5">{`$${item.price}`}</Typography>
          </CardContent>
          <CardActions style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center' }}>
              <Button type="button" size="small" 
            //   onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
            onClick={()=>{dispatch({type:actions.INCREMENT_QUANTITY,payload:{product:item}});myHandleINcrement()}}
              >+</Button>
              <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
              <Button type="button" size="small" 
            //   onClick={() =>' handleUpdateCartQty(item.id, item.quantity + 1)}'
            
            onClick={()=>{dispatch({type:actions.DECREMENT_QUANTITY,payload:{product:item}});myHandleDecrement();}}
              >-</Button>
            </div>
            <Button variant="contained"  type="button" className='remove' 
            onClick={()=>{dispatch({type:actions.REMOVE_FROM_CARD,payload:{id:item.id}});myHandleRemove(item.id)}}
            >Remove</Button>
          </CardActions>
        </Card>
      );
}

export default CartItem
