import React from 'react';
import Image from 'next/image'; // Use Next.js Image component if necessary

const Navbar = () => {
  return (
    <>
      <div className="header_top_menu">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3" />
            <div className="col-lg-5 col-sm-8">
              <div className="header_top_menu_address">
                <div className="header_top_menu_text">
                  <p> Welcome! Charina Non-Profit Program 2023 </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="header_top_menu_icon text-right">
                <div className="menu-text">
                  <p>
                    <i className="bi bi-person-circle" /> Login / Register
                  </p>
                </div>
                <div className="header_top_menu_icon_inner">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-twitter" />
                      </a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li className="menu-icon">
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="charina_nav_manu align-items-center">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <a className="logo_img" href="index.html" title="charina">
                  <img src="assets/images/logo.png" alt="" />
                </a>
                <a className="main_sticky" href="index.html" title="charina">
                  <img src="assets/images/logo.png" alt="astute" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="charina_menu">
                <ul className="nav_scroll">
                  <li>
                    <a href="#">
                      Home{" "}
                      <span>
                        <i className="bi bi-chevron-down" />
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="index.html">Home Page 01</a>
                      </li>
                      <li>
                        <a href="index-2.html">Home Page 02</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Pages{" "}
                      <span>
                        <i className="bi bi-chevron-down" />
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="volunteer.html">Volunteer</a>
                      </li>
                      <li>
                        <a href="volunteer-2.html">Volunteer Two</a>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery </a>
                      </li>
                      <li>
                        <a href="gallery-details.html">Gallery Details</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Donations{" "}
                      <span>
                        <i className="bi bi-chevron-down" />
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="donate.html">Donate</a>
                      </li>
                      <li>
                        <a href="donations.html">Donations</a>
                      </li>
                      <li>
                        <a href="donations-details.html">Donations Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Events{" "}
                      <span>
                        <i className="bi bi-chevron-down" />
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="events.html">Events</a>
                      </li>
                      <li>
                        <a href="event-details.html">Event Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Blog{" "}
                      <span>
                        <i className="bi bi-chevron-down" />
                      </span>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-grid.html">Blog Grid</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-2">
              <div className="header-right-button-box">
                <div className="header-button2">
                  <a href="#">
                    <i className="bi bi-telephone" />
                  </a>
                </div>
                <div className="slider-button-title">
                  <p>Call Us Anytime</p>
                  <h6>+98 678 (960) 280</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-2 pl-0 ">
              <div className="search-box-btn search-box-outer">
                <a href="#">
                  <i className="bi bi-search" />
                </a>
              </div>
              <div className="header-button">
                <a href="donate.html">
                  Donate Now <i className="bi bi-suit-heart" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
        <div className="mobile-menu">
          <nav className="charina_menu">
            <ul className="nav_scroll">
              <li>
                <a href="#">
                  Home
                  <span>
                    <i className="bi bi-chevron-down" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home Page 01</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Page 02</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Pages
                  <span>
                    <i className="bi bi-chevron-down" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="volunteer.html">Volunteer</a>
                  </li>
                  <li>
                    <a href="volunteer-2.html">Volunteer Two</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery </a>
                  </li>
                  <li>
                    <a href="gallery-details.html">Gallery Details</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Donations
                  <span>
                    <i className="bi bi-chevron-down" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="donate.html">Donate</a>
                  </li>
                  <li>
                    <a href="donations.html">Donations</a>
                  </li>
                  <li>
                    <a href="donations-details.html">Donations Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Events
                  <span>
                    <i className="bi bi-chevron-down" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="events.html">Events</a>
                  </li>
                  <li>
                    <a href="event-details.html">Event Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  Blog
                  <span>
                    <i className="bi bi-chevron-down" />
                  </span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog List</a>
                  </li>
                  <li>
                    <a href="blog-details.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact-us.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;