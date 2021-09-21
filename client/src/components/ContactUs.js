/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Navber from "./Navber";

const ContactUs = () => {
    return (
        <>
            <Navber />
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3><strong>Our Location</strong></h3>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84199.38390881743!2d19.06075991344524!3d48.739288823570774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47153de36e8ad42f%3A0xf8223f8a0b8b9032!2sBansk%C3%A1%20Bystrica%2C%20Slovaquie!5e0!3m2!1sfr!2stn!4v1632049822397!5m2!1sfr!2stn"
                                style={{
                                    border: '0',
                                    width: '100%',
                                    height: '315px',
                                    frameborder: '0'
                                }}
                                // eslint-disable-next-line react/jsx-no-duplicate-props
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div className="col-md-5">
                            <h4><strong>contact us</strong></h4>
                            <div class="form-group">
                                <label for="exampleFormControlInput1" class="form-label">Name address</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1" class="form-label">Phone address</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="phone"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div><br />
                            <button type="button" class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs;