import React, {Component} from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { addToCart,deleteFromCart }  from '@/redux/actions/cart-actions.js';

class TodoList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.cart.map((item,index) => {
                        return (
                            // 对map 循环出来的每个属性插入标签元素
                           <div key={index}>{item.product}</div>
                        )
                    })
                }

                <Button type="ghost" size="small" inline onClick={()=>{this.props.addToCart('Coffee 500gm', 1, 250)}
                }> 添加购物车</Button>
                <Button type="ghost" size="small" inline onClick={()=>{this.props.deleteFromCart('Coffee 500gm', 1, 250)}
                }> 删除购物车</Button>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        cart: state.shoppingCart.cart
    }
}
function mapActionToProps(dispatch) {
    return {
        addToCart: (...rest) => dispatch(addToCart(...rest)),
        deleteFromCart: (...rest) => dispatch(deleteFromCart(...rest)),
    }
}
export default connect(mapStateToProps,mapActionToProps)(TodoList) ;
