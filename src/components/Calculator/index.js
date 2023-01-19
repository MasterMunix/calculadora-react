import { nanoid } from 'nanoid'; //To use IDs in the List's keys
import { useState } from "react";
import * as components from "../";

/****
 * TODO: This is the main component where there are all located.
 * 
 */
export function Calculator(props) {
    const [total, setTotal] = useState(
        {
            firstValue: 0,
            secondValue: 0,
            operation: 0,
        }
    );
    
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    const operations = [
        {
            symbol: '+',
            operation: (x, y) => { return x + y }
        },
        {
            symbol: '-',
            operation: (x, y) => { return x - y }
        },
        {
            symbol: 'x',
            operation: (x, y) => { return x * y }
        },
        {
            symbol: '÷',
            operation: (x, y) => { return x / y }
        },
    ];


    const [result, setResult] = useState(''); // The 

    const handleClick = () => {
        
        setTotal(total => ({
            ...total,
            "secondValue": result,
        }));
        console.log(total);
        setResult(total.operation(total.firstValue, total.secondValue).toString());
    };
    return (
        <>
            <div id="display">
                <components.Display total ={total} setTotal={setTotal} result={result} setResult={setResult} > </components.Display>
            </div>
            <div className="numbers" >
                {numbers.map((e, i) => {

                    if (e % 3 === 0 && e !== '0') return <>
                        <components.Numbers total ={total} setTotal={setTotal} result={result} setResult={setResult} key={`number-${nanoid()}`} text={e}></components.Numbers>
                        <br></br>
                    </>;
                    return <components.Numbers result={result} total ={total} setTotal={setTotal} setResult={setResult} key={`number-${nanoid()}`} text={e}></components.Numbers>
                })
                }
                <button id='equalTo' onClick={handleClick} >=</button>

            </div>
            <div className="operators" >
                {operations.map((e) =>
                    <>
                        <components.Operation result={result} key={`operation-${nanoid()}`} total ={total} setTotal={setTotal} setResult={setResult} className='operator-button' operations={e}></components.Operation>
                        <br></br>
                    </>)}
            </div>
        </>
    )
};