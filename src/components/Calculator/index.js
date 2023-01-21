import { nanoid } from 'nanoid'; //To use IDs in the List's keys
import { useState } from "react";
import * as components from "../";

/****
 * TODO: This is the main component where there are all located.
 * 
 */
export function Calculator(props) {


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


    return (
        <>
            <div id="display">
                <input id='result' className="display" />
                <components.Display > </components.Display>
            </div>
            <div className="numbers" >
                {
                    numbers.map((e, i) => {

                        if (e % 3 === 0 && e !== '0') return <>
                            <components.Numbers key={`number-${nanoid()}`} text={e}></components.Numbers>
                            <br></br>
                        </>;
                        return <components.Numbers key={`number-${nanoid()}`} text={e}></components.Numbers>
                    })
                }

                <components.EqualTo ></components.EqualTo>
            </div>
            <div className="operators" >
                {operations.map((e) =>
                    <>
                        <components.Operation key={`operation-${nanoid()}`} className='operator-button' operations={e}>

                        </components.Operation>
                        <br></br>
                    </>
                )}
            </div>
        </>
    )
};