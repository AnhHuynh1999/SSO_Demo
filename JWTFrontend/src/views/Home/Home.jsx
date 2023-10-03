import {Fragment} from 'react'
import './sass/layout.scss'
const Home = () => {

    return (
        <Fragment >
             <header className="header navbar-fixed-top">
            <nav className="navbar" role="navigation">
                <div className="container">
                    <div className="menu-container js_nav-item">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="toggle-icon"></span>
                        </button>

                        <div className="logo">
                            <a className="logo-wrap" href="#body">
                                <img className="logo-img logo-img-main" src="img/logo.png" alt="Asentus Logo" />
                                <img className="logo-img logo-img-active" src="img/logo-dark.png" alt="Asentus Logo"/>
                            </a>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse nav-collapse">
                        <div className="menu-container">
                            <ul className="nav navbar-nav navbar-nav-right">
                                <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#body">Home</a></li>
                                <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#about">About</a></li>
                                <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#experience">Experience</a></li>
                                <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#work">Work</a></li>
                                <li className="js_nav-item nav-item"><a className="nav-item-child nav-item-hover" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div className="promo-block parallax-window" data-parallax="scroll" data-image-src="img/1920x1080/01.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="promo-block-divider">
                            <h1 className="promo-block-title">Alex <br/> Teseira</h1>
                            <p className="promo-block-text">Web Designer &amp; Front-end Developer</p>
                        </div>
                        <ul className="list-inline">
                            <li><a href="#" className="social-icons"><i className="icon-social-facebook"></i></a></li>
                            <li><a href="#" className="social-icons"><i className="icon-social-twitter"></i></a></li>
                            <li><a href="#" className="social-icons"><i className="icon-social-dribbble"></i></a></li>
                            <li><a href="#" className="social-icons"><i className="icon-social-behance"></i></a></li>
                            <li><a href="#" className="social-icons"><i className="icon-social-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="about">
            <div className="container content-lg">
                <div className="row">
                    <div className="col-sm-3 sm-margin-b-30">
                        <div className="text-right sm-text-left">
                            <h2 className="margin-b-0">Intro</h2>
                            <p>What I am all about.</p>
                        </div>
                    </div>
                    <div className="col-sm-8 col-sm-offset-1">
                        <div className="margin-b-60">
                            <p>Im Alex Teseira, orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div className="progress-box">
                            <h5>PHP <span className="color-heading pull-right">87%</span></h5>
                            <div className="progress">
                                <div className="progress-bar bg-color-base" role="progressbar" data-width="87"></div>
                            </div>
                        </div>
                        <div className="progress-box">
                            <h5>HTML5 <span className="color-heading pull-right">96%</span></h5>
                            <div className="progress">
                                <div className="progress-bar bg-color-base" role="progressbar" data-width="96"></div>
                            </div>
                        </div>
                        <div className="progress-box">
                            <h5>JavaSript <span className="color-heading pull-right">52%</span></h5>
                            <div className="progress">
                                <div className="progress-bar bg-color-base" role="progressbar" data-width="52"></div>
                            </div>
                        </div>
                        <div className="progress-box">
                            <h5>Photoshop <span className="color-heading pull-right">77%</span></h5>
                            <div className="progress">
                                <div className="progress-bar bg-color-base" role="progressbar" data-width="77"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="experience">
            <div className="bg-color-sky-light" data-auto-height="true">
                <div className="container content-lg">
                    <div className="row">
                        <div className="col-sm-3 sm-margin-b-30">
                            <div className="text-right sm-text-left">
                                <h2 className="margin-b-0">Experience</h2>
                                <p>Batman would be jealous.</p>
                            </div>
                        </div>
                        <div className="col-sm-8 col-sm-offset-1">
                            <div className="row row-space-2 margin-b-4">
                                <div className="col-md-4 md-margin-b-4">
                                    <div className="service" data-height="height">
                                        <div className="service-element">
                                            <i className="service-icon icon-chemistry"></i>
                                        </div>
                                        <div className="service-info">
                                            <h3>HTML5/CSS3</h3>
                                            <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                        </div>
                                        <a href="#" className="content-wrapper-link"></a>    
                                    </div>
                                </div>
                                <div className="col-md-4 md-margin-b-4">
                                    <div className="service bg-color-base wow zoomIn" data-height="height" data-wow-duration=".3" data-wow-delay=".1s">
                                        <div className="service-element">
                                            <i className="service-icon color-white icon-screen-tablet"></i>
                                        </div>
                                        <div className="service-info">
                                            <h3 className="color-white">Photoshop</h3>
                                            <p className="color-white margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                        </div>
                                        <a href="#" className="content-wrapper-link"></a>    
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="service" data-height="height">
                                        <div className="service-element">
                                            <i className="service-icon icon-badge"></i>
                                        </div>
                                        <div className="service-info">
                                            <h3>Front-end</h3>
                                            <p className="margin-b-5">Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor</p>
                                        </div>
                                        <a href="#" className="content-wrapper-link"></a>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="work">
            <div className="container content-lg">
                <div className="row">
                    <div className="col-sm-3 sm-margin-b-30">
                        <div className="text-right sm-text-left">
                            <h2 className="margin-b-0">Works</h2>
                            <p>I build the real value.</p>
                        </div>
                    </div>
                    <div className="col-sm-8 col-sm-offset-1">
                        <div className="masonry-grid row row-space-2">
                            <div className="masonry-grid-sizer col-xs-6 col-sm-6 col-md-1"></div>
                            <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-8 margin-b-4">
                                <div className="work work-popup-trigger">
                                    <div className="work-overlay">
                                        <img className="full-width img-responsive" src="img/800x400/01.jpg" alt="Portfolio Image" />
                                    </div>
                                    <div className="work-popup-overlay">
                                        <div className="work-popup-content">
                                            <a href="javascript:void(0);" className="work-popup-close">Hide</a>
                                            <div className="margin-b-30">
                                                <h3 className="margin-b-5">Art Of Coding</h3>
                                                <span>Clean &amp; Minimalistic Design</span>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                                    <div className="margin-t-10 sm-margin-t-0">
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                                        <ul className="list-inline work-popup-tag">
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Design,</a></li>
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Coding,</a></li>
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Portfolio</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="margin-t-10 sm-margin-t-0">
                                                        <p className="margin-b-5"><strong>Project Leader:</strong> John Doe</p>
                                                        <p className="margin-b-5"><strong>Designer:</strong> Alisa Keys</p>
                                                        <p className="margin-b-5"><strong>Developer:</strong> Mark Doe</p>
                                                        <p className="margin-b-5"><strong>Customer:</strong> Keenthemes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-4 margin-b-4">
                                <div className="work work-popup-trigger">
                                    <div className="work-overlay">
                                        <img className="full-width img-responsive" src="img/397x400/01.jpg" alt="Portfolio Image" />
                                    </div>
                                    <div className="work-popup-overlay">
                                        <div className="work-popup-content">
                                            <a href="javascript:void(0);" className="work-popup-close">Hide</a>
                                            <div className="margin-b-30">
                                                <h3 className="margin-b-5">Art Of Coding</h3>
                                                <span>Clean &amp; Minimalistic Design</span>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                                    <div className="margin-t-10 sm-margin-t-0">
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                                        <ul className="list-inline work-popup-tag">
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Design,</a></li>
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Coding,</a></li>
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Portfolio</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="margin-t-10 sm-margin-t-0">
                                                        <p className="margin-b-5"><strong>Project Leader:</strong> John Doe</p>
                                                        <p className="margin-b-5"><strong>Designer:</strong> Alisa Keys</p>
                                                        <p className="margin-b-5"><strong>Developer:</strong> Mark Doe</p>
                                                        <p className="margin-b-5"><strong>Customer:</strong> Keenthemes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-4 md-margin-b-4">
                                <div className="work work-popup-trigger">
                                    <div className="work-overlay">
                                        <img className="full-width img-responsive" src="img/397x300/01.jpg" alt="Portfolio Image" />
                                    </div>
                                    <div className="work-popup-overlay">
                                        <div className="work-popup-content">
                                            <a href="javascript:void(0);" className="work-popup-close">Hide</a>
                                            <div className="margin-b-30">
                                                <h3 className="margin-b-5">Art Of Coding</h3>
                                                <span>Clean &amp; Minimalistic Design</span>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                                    <div className="margin-t-10 sm-margin-t-0">
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                                        <ul className="list-inline work-popup-tag">
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Design,</a></li>
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Coding,</a></li>
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Portfolio</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="margin-t-10 sm-margin-t-0">
                                                        <p className="margin-b-5"><strong>Project Leader:</strong> John Doe</p>
                                                        <p className="margin-b-5"><strong>Designer:</strong> Alisa Keys</p>
                                                        <p className="margin-b-5"><strong>Developer:</strong> Mark Doe</p>
                                                        <p className="margin-b-5"><strong>Customer:</strong> Keenthemes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-4 md-margin-b-4">
                                <div className="work work-popup-trigger">
                                    <div className="work-overlay">
                                        <img className="full-width img-responsive" src="img/397x300/02.jpg" alt="Portfolio Image" />
                                    </div>
                                    <div className="work-popup-overlay">
                                        <div className="work-popup-content">
                                            <a href="javascript:void(0);" className="work-popup-close">Hide</a>
                                            <div className="margin-b-30">
                                                <h3 className="margin-b-5">Art Of Coding</h3>
                                                <span>Clean &amp; Minimalistic Design</span>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                                    <div className="margin-t-10 sm-margin-t-0">
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                                        <ul className="list-inline work-popup-tag">
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Design,</a></li>
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Coding,</a></li>
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Portfolio</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="margin-t-10 sm-margin-t-0">
                                                        <p className="margin-b-5"><strong>Project Leader:</strong> John Doe</p>
                                                        <p className="margin-b-5"><strong>Designer:</strong> Alisa Keys</p>
                                                        <p className="margin-b-5"><strong>Developer:</strong> Mark Doe</p>
                                                        <p className="margin-b-5"><strong>Customer:</strong> Keenthemes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="masonry-grid-item col-xs-12 col-sm-6 col-md-4">
                                <div className="work work-popup-trigger">
                                    <div className="work-overlay">
                                        <img className="full-width img-responsive" src="img/397x300/03.jpg" alt="Portfolio Image" />
                                    </div>
                                    <div className="work-popup-overlay">
                                        <div className="work-popup-content">
                                            <a href="javascript:void(0);" className="work-popup-close">Hide</a>
                                            <div className="margin-b-30">
                                                <h3 className="margin-b-5">Art Of Coding</h3>
                                                <span>Clean &amp; Minimalistic Design</span>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-8 work-popup-content-divider sm-margin-b-20">
                                                    <div className="margin-t-10 sm-margin-t-0">
                                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                                        <ul className="list-inline work-popup-tag">
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Design,</a></li>
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Coding,</a></li>
                                                            <li className="work-popup-tag-item"><a className="work-popup-tag-link" href="#">Portfolio</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4">
                                                    <div className="margin-t-10 sm-margin-t-0">
                                                        <p className="margin-b-5"><strong>Project Leader:</strong> John Doe</p>
                                                        <p className="margin-b-5"><strong>Designer:</strong> Alisa Keys</p>
                                                        <p className="margin-b-5"><strong>Developer:</strong> Mark Doe</p>
                                                        <p className="margin-b-5"><strong>Customer:</strong> Keenthemes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        <div id="contact">
            <div className="bg-color-sky-light">
                <div className="container content-lg">
                    <div className="row">
                        <div className="col-sm-3 sm-margin-b-30">
                            <div className="text-right sm-text-left">
                                <h2 className="margin-b-0">Contacts</h2>
                                <p>Hire me.</p>
                            </div>
                        </div>
                        <div className="col-sm-8 col-sm-offset-1">
                            <div className="row">
                                <div className="col-md-3 col-xs-6 md-margin-b-30">
                                    <h5>Location</h5>
                                    <a href="#">Brookyln, New York</a>
                                </div>
                                <div className="col-md-3 col-xs-6 md-margin-b-30">
                                    <h5>Phone</h5>
                                    <a href="#">+77 234 548 00 00</a>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <h5>Email</h5>
                                    <a href="mailto:#">alex.teseira@gmail.com</a>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <h5>Web</h5>
                                    <a href="#">alex.teseira.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
        <footer className="footer">
            <div className="content container">
                <div className="row">
                    <div className="col-xs-6">
                        <img className="footer-logo" src="img/logo-dark.png" alt="Aircv Logo" />
                    </div>
                    <div className="col-xs-6 text-right sm-text-left">
                        <p className="margin-b-0"><a className="fweight-700" href="http://keenthemes.com/preview/aircv/">Aircv</a> Theme Powered by: <a className="fweight-700" href="http://www.keenthemes.com/">KeenThemes.com</a></p>
                    </div>
                </div>
            </div>
        </footer>F
        </Fragment>
    )
}

export default Home