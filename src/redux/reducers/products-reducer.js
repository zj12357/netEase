import {ADD_PRODUCT} from "../actions/products-actions";
let initState = {
    product: [], // 保存列表
}
export default function(state=initState, action) {
    const {product}=action
    switch(action.type){
        case ADD_PRODUCT: {
            return {
              ...state,product
            }
        }
    }
    return state;
}
