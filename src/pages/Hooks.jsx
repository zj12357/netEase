import React, { useState,useEffect  } from 'react';

function Hooks() {
    const [count, setCount] = useState(0);

    // 类似于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器API更新文档标题
        document.title = `You clicked ${count} times`;
    });

    const handleClick = () => {
        console.log('鼠标点击');
    }

    useEffect(() => {
        // 给 window 绑定点击事件
        window.addEventListener('click', handleClick);
    },[ count ]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );

}

export default Hooks;
