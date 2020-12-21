import React, {Component,createContext } from 'react';
import { Button, List } from 'antd-mobile';
import { Link } from "react-router-dom";
import {addProduct} from '@/redux/actions/products-actions.js'
import {connect} from "react-redux";
import Example from './Example';
import Reducer from './Example-reducer'
import Memo from './Example-useMemo'
import Ref from './Example-Ref'
import LayoutEffect from './Example-LayoutEffect'
import UserHooks from './useReducer-index'
export const ThemeContext = createContext(null);
class Home extends Component {
    componentDidMount() {
       this.props.addProduct()
        console.log(this.props)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.product)
    }

    render() {
        return (
            <div>
                <p className="mycli">我的脚手架</p>
                <ThemeContext.Provider value="light">
                    <Example />
                </ThemeContext.Provider>
                <Reducer></Reducer>
                <Memo></Memo>
                <Ref></Ref>
                <LayoutEffect></LayoutEffect>
                <UserHooks></UserHooks>
                <nav>
                    <ul>
                        <li>
                            <Link to="/home/todolist">todo</Link>
                        </li>
                        <li>
                            <Link to="/hooks">hooks</Link>
                        </li>
                        <li>
                            <Link to="/saga">saga</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    {
                        this.props.product.length? this.props.product.map((item,index)=>{
                            return(
                                <p key={index}>
                                    {item.gradeName}
                                </p>
                            )
                        }) : ''
                    }
                </div>
                <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
                    <List.Item
                        extra={<Button type="ghost" size="small" inline>small</Button>}
                        multipleLine
                    >
                        Regional manager
                        <List.Item.Brief>
                            Can be collected, refund, discount management, view data and other operations
                        </List.Item.Brief>
                    </List.Item>
                    <List.Item
                        extra={<Button type="primary" size="small" inline>small</Button>}
                        multipleLine
                    >
                        Regional manager
                        <List.Item.Brief>
                            Can be collected, refund, discount management, view data and other operations
                        </List.Item.Brief>
                    </List.Item>
                </List>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        product: state.products.product
    }
}
function mapActionToProps(dispatch) {
    return {
        addProduct: () => dispatch(addProduct()),

    }
}
export default connect(mapStateToProps,mapActionToProps)(Home);
