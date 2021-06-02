import {Types} from "../Config/Types";

export const authReducer = (state = {}, action) =>
{
    switch ( action.type )
    {
        case Types.login:
            return {}

        case Types.logout:
            return {}

        default:
            return state;
    }
}