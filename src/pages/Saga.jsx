import React, {Component} from 'react';
import { increment,watchIncrement } from '@/store/actions/index.js';
import {connect} from "react-redux";
import {Button} from 'antd-mobile'
class Saga extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div >
                {this.props.number}
                <Button onClick={this.props.increment}>+1</Button>
                <div>current number： {this.props.number} <Button onClick={()=>this.props.watchIncrement()}>点击2秒后+1</Button></div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        number: state.number
    }
}
function mapActionToProps(dispatch) {
    return {
        increment: () => dispatch(increment()),
        watchIncrement:()=> dispatch(watchIncrement())
    }
}
export default connect(mapStateToProps,mapActionToProps)(Saga);
