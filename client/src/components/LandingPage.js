import React, { useEffect } from "react";
//import { Table } from "react-bootstrap";
import Navber from "./Navber";
//import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from "../redux/actions/Actions";
//import AddPost from "./AddPost";
//import EditPost from "./EditPost";
import PostCard from "./PostCard";

const LandingPage = () => {
    //const [author, setAuthor] = useState("");
    //const [title, setTitle] = useState("");
    //const [description, setDescription] = useState("");
    //const [category, setCategory] = useState("");
    //const [business, setBusiness] = useState("");
    //const [show, setShow] = useState(false);
    //const dispatch = useDispatch();
    //const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
    const { posts, loading } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <div>
            <Navber />
            {
                (loading) ? (<h1>loading...</h1>) : (<div style={{ margint: '4rem' }} className="d-flex justify-content-between flex-wrap">
                    {
                        posts.map(post => <PostCard post={post} key={post._id} />)
                    }
                </div>
                )
            }
            {/* {{
                (loading) ? (<h1>loading...</h1>) : (<div style={{ margint: '4rem' }} className="d-flex justify-content-between flex-wrap">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Author</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Business</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                //(loading) ? (<h1>loading...</h1>) : (<div style={{ margint: '4rem' }} className="d-flex justify-content-between flex-wrap">
                                posts.map((post, index) => (
                                    <tr>
                                        <th>{index}</th>
                                        <td>{post.author}</td>
                                        <td><a href={`/posts/${post._id}`}>
                                            {post.title}
                                        </a>
                                        </td>
                                        <td>{post.description}</td>
                                        <td>{post.postCategory}</td>
                                        <td>{post.business}</td>
                                        <td>
                                            {/*  <Card style={{ width: '1rem' }} className="card">
                                                <Card.Body>
                                                    <div className="s-flex justify-content-around flex-wrap">
                                                        <Button variant="primary" className="btn" onClick={() => { dispatch(deletePost(post._id)); dispatch(getPosts()) }}>Delete</Button>
                                                        <Button variant="primary" className="btn"><EditPost post={post} />Edit</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card> */}
            {/* /* <a className="btn btn-warning" href={`/edit/${post._id}`}>
                                                <i class="fas fa-edit"></i>&nbsp;
                                                Edit
                                            </a>&nbsp;
                                            <button className="btn btn-danger" href="#"
                                                onClick={() => { dispatch(deletePost(post._id)); dispatch(getPosts()) }}>
                                                <i class="fas fa-trash-alt"></i>&nbsp;
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </div>)} */}
            {/* <Button variant="danger">
                        <Link to="/add" className="link">
                            <i class="fas fa-user-plus"></i>&nbsp;
                            Add New Post</Link>
                    </Button>{' '} */}
            <>
                {/*<AddPost /> */}
            </> 


            {/* <button className="btn btn-success">
                <a href="/add" 
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    
                }}><i class="fas fa-user-plus"></i>&nbsp;
                Add New Post</a></button> */}
        </div>
    );
}

export default LandingPage;