import React, { useState } from 'react'
import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getPosts, addPost } from "../redux/actions/Actions";

const Navber = () => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [business, setBusiness] = useState("");
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
                <Navbar.Brand>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                        alt="failed"
                        className="imgBar" />{' '}
                    Logo
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown title="Products">
                            <Link className="link" to="/posts">Lists of Posts</Link>
                            <br />
                            <>
                                <a variant="primary" className="link" onClick={handleShow} style={{ cursor: "pointer" }}>
                                    Add Post
                                </a>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Add Post</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <strong>AUTHOR:</strong><input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setAuthor(e.target.value)}
                                                value={author}
                                            />
                                            <strong>TITLE:</strong><input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setTitle(e.target.value)}
                                                value={title}
                                            />
                                            <strong>DESCRIPTION:</strong><input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setDescription(e.target.value)}
                                                value={description}
                                            />
                                            <strong>CATEGORY:</strong><input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setCategory(e.target.value)}
                                                value={category}
                                            />
                                            <strong>BUSINESS:</strong><input
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setBusiness(e.target.value)}
                                                value={business}
                                            />
                                        </form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" type="submit" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button
                                            variant="primary"
                                            onClick={() => {
                                                dispatch(addPost(author, title, description, category, business));
                                                dispatch(getPosts());
                                                handleClose();
                                            }}
                                            className="add-btn"
                                        >
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                        </NavDropdown>
                        <Nav.Link><Link className="link" to="/home">Home</Link></Nav.Link>
                        <Nav.Link href="/about-us">About-Us</Nav.Link>
                        <Nav.Link href="/contact-us">Contact-Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navber
