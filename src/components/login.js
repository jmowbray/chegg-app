import { TextInput } from './textInput';

export const Login = props => {
    return (
        <div>
            <TextInput 
                title='API Token'
                inputHandler={props.inputHandler}
            />
        </div>
    );
}
