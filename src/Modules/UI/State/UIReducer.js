import {types} from '../config/types';

const initialState =
    {
        loading: false,
        showModal: {visibility: false, type: ''},
    }

export const UIReducer = (state = initialState, action) =>
{
    switch ( action.type )
    {
        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
            }

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false,
            }

        case types.uiShowModal:
            return {
                ...state,
                showModal: action.payload,
            }

        case types.uiHideModal:
            return {
                ...state,
                showModal: {visibility: false, type: ''},
            }

        default:
            return state
    }
}