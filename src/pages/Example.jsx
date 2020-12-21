import React, { useContext } from 'react';

import { ThemeContext } from './Home';

export default () => {

    const context = useContext(ThemeContext);

    return (
        <div>Example 组件：当前 theme 是：{ context }</div>
    )
}
