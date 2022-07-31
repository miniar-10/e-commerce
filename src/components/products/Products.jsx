import React,{useState} from 'react'
import Grid from '@mui/material/Grid';
import Product from './product/Product';
// const products=[
//     {id:1 ,name:'Shoes',description:'Running shoes', price:'$5'},
//     {id:2,name:'Macbook',description:'Apple macbook' ,price:'$5'}
// ];

function Products({products,dispatch,setNbElements,nbElements}) {
    console.log(products)
    return (
       products? <main style={{margin:'5vh 5vw' , marginTop:96}}>
                <h1>Featured products </h1>

            <Grid container justify='center' spacing={4}>
                {products.map((product)=><Grid item key={product.id }xs={12} sm={6} md={4} lg={3}>
                    <Product
                        product={product}
                         dispatch={dispatch}
                         setNbElements={setNbElements}
                         nbElements={nbElements}
                        //  onAddToCart={onAddToCart}
                    />
                </Grid>)}
            </Grid>
            
        </main>:<h1>Loading</h1>
    )
}

export default Products
