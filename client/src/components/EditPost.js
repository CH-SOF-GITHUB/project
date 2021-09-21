import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { getPosts, editPost } from "../redux/actions/Actions";

const EditPost = ({ post }) => {
    const [author, setAuthor] = useState(post.author);
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);
    const [category, setCategory] = useState(post.postCategory);
    const [business, setBusiness] = useState(post.business);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //useEffect
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    return (
        <div>
            <div classname="edit">
                <Button variant="primary" className="edit-btn" onClick={handleShow} style={{width:"10rem"}}>
                <i class="fas fa-edit"></i>&nbsp;&nbsp;Edit
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal Edit Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-control" onSubmit={(e) => e.preventDefault()}>
                            Author:<input className="form-control" type="text" placeholder="edit author..." onChange={(e) => setAuthor(e.target.value)} value={author} />
                            Title:<input className="form-control" type="text" placeholder="edit title..." onChange={(e) => setTitle(e.target.value)} value={title} />
                            Description:<input className="form-control" type="text" placeholder="edit description..." onChange={(e) => setDescription(e.target.value)} value={description} />
                            Category:<input className="form-control" type="text" placeholder="edit category..." onChange={(e) => setCategory(e.target.value)} value={category} />
                            Business:<input className="form-control" type="text" placeholder="edit business..." onChange={(e) => setBusiness(e.target.value)} value={business} />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary"
                            onClick={() => {
                                dispatch(editPost(post._id, author, title, description, category, business));
                                dispatch(getPosts());
                                handleClose();
                            }}>
                            save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default EditPost;