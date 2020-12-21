import React from 'react';
import {Button} from 'antd-mobile'
// 从自定义 useReducer 中引入
import  useReducer from './useReducer';

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

export default () => {

    // 使用 useReducer 函数创建状态 state 以及更新状态的 dispatch 函数
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <br />
            <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
            <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
        </>
    );
}
