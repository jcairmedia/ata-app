
import { Types } from '../config/Types';

export const startLoading = () => ({
    type: Types.uiStartLoading
})

export const finishLoading = () => ({
    type: Types.uiFinishLoading
})

export const showModal = (type) => ({
    type: Types.uiShowModal,
    payload: {visibility: true, type: type}
})

export const hideModal = () => ({
    type: Types.uiHideModal,
})