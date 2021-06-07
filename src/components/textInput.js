export const TextInput = props => {
    return (
        <div>
            <div>{props.title}</div>
            <input style={props.styles} type="text" value={props.value} onInput={props.inputHandler}/>
        </div>        
    )
}
