import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import styled from "styled-components"
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { actions } from '../../../actions/actions'

function Product({product,onAddToCart,dispatch,setNbElements,nbElements}) {
    const [readMore,setReadMore]=useState(false);
    const handleAdd=()=>{
      setNbElements();
    }
    const handleAddToCart = () => {
      onAddToCart(product.id, 1);
    }
    // const classes=useStyles();
    const styles = {
        media: {
          height: 150,
          marginTop:'30'
        },
        properties:{
          display:'flex',
          flexDirection:'column',
          alignItems:'flex-start',
          marginBottom:'16px',
          marginLeft: '8px'
        }
    };
    const Cardstyles={
        maxWidth:'250px',
    }

    return (<Card sx={{ maxWidth: 345 }} styles={{height:'400',backgroundColor:'grey'}}>
      <CardMedia
        component="img"
        // height="200"
        style={styles.media}
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        {product.description.length<=35? <Typography variant="body2" style={{height:75}} color="text.secondary" >{product.description} </Typography>:<div >
        <Typography  variant="body2" color="text.secondary"  >{readMore?product.description:product.description.substring(0,55)}</Typography><Button onClick={()=>setReadMore(!readMore)} size="small">{readMore?`Show Less`: `Read More`}</Button>
        </div>
        }

           <Typography variant='h5'color='text.secondary' >
           {`$${product.price}`}
          </Typography>
                
        {/* {description.length()<=70? <Typography variant="body2" color="text.secondary" dangerouslySetInnerHtml={{__html:description}}/>:<Typography variant="body2" color="text.secondary" dangerouslySetInnerHtml={{__html:description.substring(0,70)}}/>} */}
        {/* {readMore?description:`${description.substring(0,70)}...`
        } */}
        {/* </Typography> */}
       
      </CardContent>
      <CardActions  style={styles.properties}>
                
              
                      <button  className='add-to-card-btn'  onClick={()=>{dispatch({type:actions.ADD_TO_CARD,payload:{product:product}});
                      handleAdd()}}>ADD TO CARD</button>
                
      </CardActions>
    </Card>);
}

export default Product
