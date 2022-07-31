import { actions } from "../actions/actions";
import { products } from "../utils/data/products";


function new_card_product(id){
    products.map((product)=>{if(product.id===id) {
                                console.log(product) ;
                                return {
                                    id:product.id,
                                    name:product.name,
                                    description:product.description,
                                    image:product.image,
                                    price:product.price
                                };}})


}
export default function cardReducer(card_products,action){
    switch(action.type){
        case actions.ADD_TO_CARD :
            // console.log(card_products)
            if(typeof(card_products.find((pr)=>pr.id === action.payload.product.id))!=='undefined'){
                return(card_products.map((card_product)=>{
                    if(action.payload.product.id===card_product.id )
                        return {...card_product, quantity:card_product.quantity+1}
                    else 
                        return card_product
                }
           )) }else
            return([...card_products,action.payload.product]);
        case actions.REMOVE_FROM_CARD  :
            return card_products.filter(card_product=>card_product.id!==action.payload.id)
        case actions.INCREMENT_QUANTITY :
            return(card_products.map((card_product)=>{
                if(action.payload.product.id===card_product.id )
                    return {...card_product, quantity:card_product.quantity+1}
                else 
                    return card_product
            }))
            case actions.DECREMENT_QUANTITY :
                if(action.payload.product.quantity===1)
                return card_products.filter(card_product=>card_product.id!==action.payload.product.id)
                else return(card_products.map((card_product)=>{
                    if(action.payload.product.id===card_product.id )
                        return {...card_product, quantity:card_product.quantity-1}
                    else 
                        return card_product
                }))
            case actions.EMPTY_CARD :
                return([])
        default:
            console.log('default')
            
    }
}