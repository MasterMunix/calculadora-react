
export function Display(props) {
    const handleClick = () => {
        props.setResult('');
    };

    return (
        <>
            <p id='result' className="display">{props.result || 0}</p>
            <button id='delete' onClick={handleClick} > DEL </button>
        </>
    )
};