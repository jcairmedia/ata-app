import {types} from "../config/types";

export const getLogin = (userEmail, password) =>
{
}

export const getUserData = (userToken) =>
{
}


// Definitions
export const login = (token, isFirstLogin, email, firstName, lastName, type, model, plate, version, year, marca, redeemDate, _id) =>
{
    return {
        type: types.login,
        payload: {
            token,
            isFirstLogin,
            email,
            firstName,
            lastName,
            type,
            model,
            plate,
            version,
            year,
            marca,
            redeemDate,
            _id,
        }
    }
}

export const logout = () =>
{
    return {
        type: types.logout
    }
}

