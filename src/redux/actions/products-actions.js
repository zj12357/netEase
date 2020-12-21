import {grade_detail} from '@/api/home.js'
import { Toast} from 'antd-mobile';
export const ADD_PRODUCT='ADD_PRODUCT';
export const addProduct=()=>{
    return (dispatch,getState)=>{
        grade_detail({}).then(res=>{
            let {data,status,msg} = res;
            if(status==200){
                dispatch(changeProduct(data))
                console.log(getState().product)
            }else {
                Toast(msg,1)
            }

        })
    }

}
export const changeProduct=(list)=>{

    return{
        type:ADD_PRODUCT,
        product:list
    }
}
