import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload)
            state.quantity+=1;
            state.total+=action.payload.quantity*action.payload.price
        },
        incrementQuantity:(state,action)=>{
            const productId = action.payload;
            const product = state.products.find((p) => p._id === productId);
      
            if (product) {
              // Create a new array with the updated product
              console.log('inside incrementQuantity && product exist')
              product.quantity+=1;
              state.total+=product.price
            }
        },
        decrementQuantity:(state,action)=>{
            const productId = action.payload;
            const product = state.products.find((p) => p._id === productId);
      
            if (product) {
              // Create a new array with the updated product
              console.log('inside incrementQuantity && product exist')
              if(product.quantity>1){
                  product.quantity-=1;
                  state.total-=product.price
              }else{
                state.total-=product.price;
                state.quantity-=1;
                state.products = state.products.filter(p => p._id!==productId)
              }
            }

        }
        
    }

})
export const {addProduct, incrementQuantity, decrementQuantity} = cartSlice.actions
export default cartSlice.reducer