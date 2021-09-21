import { REGISTER, REGISTER_FAILURE, REGISTER_SUCCESS, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, GET_POST, ADD_POST, DELETE_POST, EDIT_POST } from "../types/types"
import axios from "axios";

//register action
export const registerUser = (newUser) => async (dispatch) => {
    dispatch({
        type: REGISTER
    })
    try {
        const res = await axios.post("/user/register", newUser);
        console.log(res);
        localStorage.setItem('token', res.data.token);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: REGISTER_FAILURE,
            payload: error.response.data
        })
    }
}

//login Action 
export const loginUser = (user) => async (dispatch) => {
    dispatch({
        type: LOGIN
    })
    try {
        const res = await axios.post("/user/login", user);
        console.log(res);
        localStorage.setItem('token', res.data.token);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.response.data
        })
    }
}
//Post Get Action
export const getPosts = () => async (dispatch) => {
    try {
        let res = await axios.get("/posts")
        dispatch({
            type: GET_POST,
            payload: res.data
        })
    } catch (error) {
        console.log("get posts failed: " + error.message)
    }
}
//GET DETAIL Action
export const getDetail = (id) => async (dispatch) => {
    try {
        let res = await axios.get(`/posts/detail/${id}`)
        dispatch({
            type: GET_POST,
            payload: res.data
        })
    } catch (error) {
        console.log("get detail for Post failed: " + error.message)
    }
}

//ADD action
export const addPost = (author, title, description, postCategory, business) => async (dispatch) => {
    try {
        const newPost = { author, title, description, postCategory, business }
        let res = await axios.post("/posts/add", newPost)
        dispatch({
            type: ADD_POST,
            payload: res.data
        })
    } catch (error) {
        console.log("Add a post failed: " + error.message)
    }
}
//DELETE action
export const deletePost = (id) => async (dispatch) => {
    try {
        let res = await axios.delete(`/posts/delete/${id}`)
        dispatch({
            type: DELETE_POST,
            payload: res.data
        })
    } catch (error) {
        console.log("Delete a post failed: " + error.message)
    }
}
//EDIT Action
export const editPost = (id, author, title, description, postCategory, business) => async (dispatch) => {
    try {
        let editPst = { author, title, description, postCategory, business }
        let res = await axios.put(`/posts/update/${id}`, editPst)
        dispatch({
            type: EDIT_POST,
            payload: res.data
        })
    } catch (error) {
        console.log("Edit a post failed: " + error.message)
    }
}