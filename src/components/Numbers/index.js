
export function Numbers(props) {

    return (
        <>
            <button id={props.id} className={props.className} type={props.type} key={props.keys}>
                {props.text}
            </button>
        </>
    )
};