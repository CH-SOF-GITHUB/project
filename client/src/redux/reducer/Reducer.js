const { REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, GET_POST, ADD_POST, DELETE_POST, EDIT_POST } = require("../types/types");

const initialState = {
    loading: false,
    token: null,
    users: null,
    erros: null,
    posts: [],
}

const AuthReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REGISTER:
            return { ...state, loading: true }
        case REGISTER_SUCCESS:
            return { ...state, loading: false, users: payload }
        case REGISTER_FAILURE:
            return { ...state, loading: false, erros: payload }
        case LOGIN:
            return { ...state, loading: true }
        case LOGIN_SUCCESS:
            return { ...state, loading: false, token: payload }
        case LOGIN_FAILURE:
            return { ...state, loading: false, erros: payload }
        case GET_POST:
            return { ...state, loading: false, posts: payload }
        case ADD_POST:
            return { ...state, loading: false, posts: [...state.posts, payload] }
        case DELETE_POST:
            return { ...state, loading: false, posts: state.posts.filter(el => el._id !== payload._id) };
        case EDIT_POST:
            return { ...state, loading: false, posts: state.posts.map(el => el._id === payload._id ? payload : el) }
        default:
            return state;
    }
}
export default AuthReducer;

