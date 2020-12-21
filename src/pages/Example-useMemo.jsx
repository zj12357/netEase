import React, { useState, useMemo } from 'react';
import ExampleA from './ExampleA';
import ExampleB from './ExampleB';

export default () => {

    const [a, setA] = useState('ExampleA');
    const [b, setB] = useState('ExampleB');

       const exampleA = useMemo(() => <ExampleA />, [a]);
        const exampleB = useMemo(() => <ExampleB />, [b]);

    return (
        <div>

            { exampleA }
            { exampleB }
            <br />
            <button onClick={ () => setA(Math.random()*10) }>修改传给 ExampleA 的属性</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={ () => setB('修改后的 ExampleB') }>修改传给 ExampleB 的属性</button>
        </div>
    )
}
