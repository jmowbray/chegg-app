export const TextInput = props => {
    return (
        <div>
            <div>{props.title}</div>
            <input type="text" value={props.value} onInput={props.inputHandler}/>
        </div>        
    )
}
