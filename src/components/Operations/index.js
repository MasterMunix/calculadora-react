
export function Operation(props) {

    

    return (
        <>
            <button id={props.id} className={props.className} type={props.type} key={props.keys}>
                {props.operations.symbol}
            </button>
        </>
    )
}