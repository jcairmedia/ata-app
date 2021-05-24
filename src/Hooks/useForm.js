import { useState } from "react";
import { Validators } from "../Utils/Validators";


export const useForm = ( initialFormValues = { values: {}, errors: {}, touch: {} } ) => {

    const[formValues, setFormValues] = useState( initialFormValues.values );
    const[formErrors, setFormErrors] = useState( initialFormValues.errors );
    const[formTouch, setFormTouch] = useState( initialFormValues.touch );

    const handleInputChange = ({ target }) =>
    {
        const {name, value } = target;

        const error = Validators[name](value) || '';

        setFormValues({
            ...formValues,
            [name]:value,
        });

        setFormErrors({
            ...formErrors,
            [name]:error,
        });

        setFormTouch({
            ...formTouch,
            [name]: true,
        })
    }

    return [{formValues, formErrors, formTouch}, handleInputChange];
}