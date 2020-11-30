import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../actions/types'

const initialState = {
    user: '',
    loading: false,
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case REGISTER_START:
            return {
                ...state,
                loading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: payload,
                loading: false
            }
        case REGISTER_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
