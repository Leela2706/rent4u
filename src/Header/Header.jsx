import React, { Component } from 'react'

export default class Header extends Component {
    state={
        menuItems:["Home","About","Cars","Blog","Contact Us","Login"]
    }
    render() {
        return (
            <div class="hero_area">
                <div>
                    {/* header section strats */}
                    <header className="header_section">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container">
                                <a className="navbar-brand" href="index.html">
                                    <span>
                                        Rent4u
                                    </span>
                                </a>
                                <div className="navbar-collapse" id>
                                    <div className="user_option">
                                        <a href>
                                            Login
                                        </a>
                                    </div>
                                    <div className="custom_menu-btn">
                                        <button onclick="openNav()">
                                            <span className="s-1"> </span>
                                            <span className="s-2"> </span>
                                            <span className="s-3"> </span>
                                        </button>
                                    </div>
                                    <div id="myNav" className="overlay">
                                        <div className="overlay-content">
                                            <a href="index.html">Home</a>
                                            <a href="about.html"></a>
                                            <a href="car.html"></a>
                                            <a href="blog.html"></a>
                                            <a href="contact.html"></a>
                                            <a href="#"></a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                    {/* end header section */}
                    {/* slider section */}
                    <section className=" slider_section position-relative">
                        <div className="slider_container">
                            <div className="img-box">
                                <img src="images/hero-img.jpg" alt />
                            </div>
                            <div className="detail_container">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="detail-box">
                                                <h1>
                                                    Rent Car <br />
                                                    Experts <br />
                                                    Service
                                                </h1>
                                                <a href>
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="detail-box">
                                                <h1>
                                                    Rent Car <br />
                                                    Experts <br />
                                                    Service
                                                </h1>
                                                <a href>
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="detail-box">
                                                <h1>
                                                    Rent Car <br />
                                                    Experts <br />
                                                    Service
                                                </h1>
                                                <a href>
                                                    Contact Us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end slider section */}
                </div>

            </div>
        )
    }
}
