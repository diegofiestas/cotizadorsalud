import { useState } from 'react'

const useForm1 = (validators1, registro, setRegistro) => {
    const [errors, setErrors] = useState({});
    const [submitting, SetSubmitting] = useState(false);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegistro({...registro, [name] : value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();        
        setErrors(validators1(registro, setRegistro));
        SetSubmitting(true);
    }
    return {handleChange, handleSubmit, errors, submitting};
}

const useForm2 = (validators2, registro, setRegistro) => {
    const [errors, setErrors] = useState({});
    const [submitting, SetSubmitting] = useState(false);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegistro({...registro, [name] : value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();        
        setErrors(validators2(registro, setRegistro));
        SetSubmitting(true);
    }
    return {handleChange, handleSubmit, errors, submitting};
}

export { useForm1, useForm2}
