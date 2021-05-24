export const Validators =
    {
        fname: fieldValue =>
        {
            if (!fieldValue) return "Campo obligatorío"

            if (fieldValue.trim() === '') {
                return 'Campo obligatorío';
            }

            if (fieldValue.trim().length < 3) {
                return 'Campo obligatorío';
            }

            return null;
        },

        lname: fieldValue =>
        {
            if (!fieldValue) return "Campo obligatorío"

            if (fieldValue.trim() === '') {
                return 'Campo obligatorío';
            }

            if (fieldValue.trim().length < 3) {
                return 'Campo obligatorío';
            }

            return null;
        },

        password: password =>
        {
            if (password.trim().length < 6) {
                return 'Tu contraseña debe contener almenos 6 caracteres';
            }
        },

        passwordConfirm: password =>
        {
            if (password.trim().length < 5) {
                return 'Tu contraseña debe contener almenos 6 caracteres';
            }
        },

        email: email =>
        {
            if (!email) return "Email es un campo obligatorío"

            if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
                return null;
            }

            if (email.trim() === '') {
                return 'Ingresa un correo electrónico valido';
            }

            return 'Por favor ingresa un correo valido';
        },

        year: year =>
        {
        },

        plate: plate =>
        {
        },

        model: model =>
        {
        },

        version: version =>
        {
        },
    }
