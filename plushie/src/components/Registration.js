import React, {useState} from 'react';
import {Route} from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';

//building form
function Registration() {

    //setting up form state
    const [regState, setRegState] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: ''
    });

    //setting up state for errors
    const [errors, setErrors] = useState({
        username: '',
        password: '',
        email: '',
        phoneNumber: ''
    });

    //setting up state for button (disabled until field reqs are met)
    const [buttonDisabled, setButtonDisabled] = useState(true);

    return (
        <form>
            <input  type='text'
            id='username'
            value='username'/>
            <input  type='text'
            id='password'
            value='password'/>
            <input  type='text'
            id='email'
            value='email'/>
            <input  type='text'
            id='phoneNumber'
            value='phoneNumber'/>
        </form>
    )
}

export default Registration;

