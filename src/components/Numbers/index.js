
export function Numbers(props) {

    const handleClick = () => {

        

        // if (props.result.length % 3 === 0 && props.result.length > 3) {
        //    return props.setResult(props.result.concat(',', props.text));
        // };
        
        console.log(typeof (props.text));
        return props.setResult(props.result.concat('', props.text));
       
    };

    return (
        <>
            <button id={props.id} onClick={handleClick} className={props.className} type={props.type} key={props.keys}>
                {props.text}
            </button>
        </>
    )
};