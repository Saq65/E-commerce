import React from 'react';
import "./e-commerce.css";
import MensImg from "./images/mens-clothing-manufacturers-usa-featured-image.webp";
import WomensImg from "./images/womensFashion.jpg"
import KidsImg from "./images/shutterstock_639091834.jpg";
import { Card } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export function Ecommerce() {
    const Navigate = useNavigate();
    return (
        <div>
            <div id='fashion' >
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div style={{ height: '400px' }} className="carousel-inner">
                        <div style={{ height: '100%' }} id='carousel' className="carousel-item active">
                            <img src={MensImg} className='d-block w-100' alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 style={{ textShadow: '2px 2px 2px black' }}>Men's Fashion</h5>
                                <p>...</p>
                            </div>
                        </div>
                        <div style={{ height: '100%' }} className="carousel-item">
                            <img className="d-block w-100" src={WomensImg} alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 style={{ textShadow: '2px 2px 2px black' }}>Women's Fashion</h5>
                                <p>...</p>
                            </div>
                        </div>
                        <div style={{ height: '100%' }} className="carousel-item">
                            <img className="d-block w-100" src={KidsImg} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 style={{ textShadow: '2px 2px 2px black' }}>Kid's Fashion</h5>
                                <p>...</p>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div style={{ height: '80vh' }}>
                <h2 style={{ fontFamily: 'monospace' }} className='m-3 text-center '>Category</h2>
                <div style={{ position: 'relative', bottom: '25px' }} className="d-flex justify-content-center">
                    <hr style={{ width: '80px', color: 'black', borderRadius: '5px' }} />
                </div>
                <div id='category' className=" d-flex justify-content-around">
                    <Card onClick={() => Navigate('/mens')}
                        style={{ width: '255px', height: '200px', alignItems: 'center', cursor: 'pointer' }}
                        className='d-flex justify-content-center'>
                        <h2>Mens Fashion</h2>
                    </Card>
                    <Card onClick={() => Navigate('/womens')}
                        style={{ width: '255px', height: '200px', alignItems: 'center', cursor: 'pointer' }}
                        className='d-flex justify-content-center'>
                        <h2>Womens Fashion</h2>
                    </Card>
                    <Card onClick={() => Navigate('/kids')}
                        style={{ width: '255px', height: '200px', alignItems: 'center', cursor: 'pointer' }}
                        className='d-flex justify-content-center'>
                        <h2>Kids Fashion</h2>
                    </Card>
                </div>
                {/* <h2 style={{ fontFamily: 'monospace' }} className='m-3 text-center '>Latest Fashion</h2>
                <div style={{ position: 'relative', bottom: '25px' }} className="d-flex justify-content-center">
                    <hr style={{ width: '80px', color: 'black', borderRadius: '5px' }} />
               </div>*/}
                <div id='footer' className="d-flex justify-content-evenly m-3 mt-5 p-2 bg-light text-dark">
                    <ol style={{ listStyle: 'none' }}>
                        <li style={{ textDecoration: 'underline', fontWeight: '400' }}>ABOUT</li>
                        <li>Contacts Us</li>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Corporate Information</li>
                    </ol>
                    <ol style={{ listStyle: 'none' }}>
                        <li style={{ textDecoration: 'underline', fontWeight: '400' }}>HELP</li>
                        <li>Payments</li>
                        <li>Shipping</li>
                        <li>FAQ</li>
                        <li>Report Infringment</li>
                    </ol>
                    <ol style={{ listStyle: 'none' }}>
                        <li style={{ textDecoration: 'underline', fontWeight: '400' }}>POLICY</li>
                        <li>Cancelation</li>
                        <li>Terms Of Use</li>
                        <li>Return</li>
                        <li>Security</li>
                    </ol>
                    <ol style={{ listStyle: 'none' }}>
                        <li style={{ textDecoration: 'underline', fontWeight: '400' }}>SOCIAL</li>
                        <li><a className='text-dark' href="https://www.instagram.com/__saqlain_shaikh_">Instagram</a></li>
                        <li><a className='text-dark' href="mailto:saklainshaikh974@gmail.com">Mail</a></li>
                        <li><a className='text-dark' href="https://github.com/Saq65">Git hub</a></li>
                        <li><a className='text-dark' href="https://www.facebook.com/saklain.shaikh.140/">Facebook</a></li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
