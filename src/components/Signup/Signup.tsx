import { useState } from 'react';
import validator from 'validator';

const Signup = ():JSX.Element => {
    const [ signupInput, setSignupInput] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [ error, setError ] = useState("");

    const onchange = (e: any) => {
        setSignupInput({
            ...signupInput,
            [e.target.name]: e.target.value
        })
    }
    const onclickSubmit = (e: any) => {
        e.preventDefault();
        if(!validator.isEmail(signupInput.email)){
            return setError("the email you input in invaild");
        }else if(signupInput.password.length < 5){
            return setError("the password you entered should contain 5 or more characters");
        }else if(signupInput.password !== signupInput.confirmPassword){
            return setError("the passwords don't match. try again");
        }
    }
    return (
    <form>
        <div>
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" name="email" onChange={onchange}></input>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" onChange={onchange}></input>
        </div>
        <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" onChange={onchange}></input>
        </div>
        {error && <p>{error}</p>}
        <button onClick={onclickSubmit}>Submit</button>
    </form>
    );
}

export default Signup;