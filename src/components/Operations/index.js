
export function Operation(props) {

    const handleClick = () => {

        if (props.total.firstValue !== 0 && props.total.firstValue !== '0') {
            console.log(props.total);
            return props.setTotal({ operation: (props.operations.operation), secondValue: props.result, ...props.total });
        };

        props.setTotal(total => ({
            ...total,
            "operation": props.operations.operation, 
            "firstValue": props.result,
        }));

        props.setResult('');

        console.log(props.total);
    };

    return (
        <>
            <button id={props.id} onClick={handleClick} className={props.className} type={props.type} key={props.keys}>
                {props.operations.symbol}
            </button>
        </>
    )
}