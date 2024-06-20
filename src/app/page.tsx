import Image from "next/image";

export default function Home() {
  return <>
  {/*==================================================*/}
  {/* Start charina Header Top Menu Area Css */}
  {/*==================================================*/}
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
                {" "}
                <i className="bi bi-person-circle" /> Login / Register{" "}
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
  {/*==================================================*/}
  {/* End charina Header Top Menu Area Css */}
  {/*===================================================*/}
  {/*==================================================*/}
  {/* Start charina Main Menu Area */}
  {/*==================================================*/}
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
                {" "}
                <i className="bi bi-telephone" />{" "}
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
              <i className="bi bi-search" />{" "}
            </a>
          </div>
          <div className="header-button">
            <a href="donate.html">
              {" "}
              Donate Now <i className="bi bi-suit-heart" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* charina Mobile Menu Area */}
  <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
    <div className="mobile-menu">
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
  </div>
  {/*==================================================*/}
  {/* End charina Main Menu Area */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina hero section */}
  {/*==================================================*/}
  <div className="hero_list owl-carousel">
    <div className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* hero content */}
            <div className="hero-content text-left">
              <div className="hero-sub-title">
                <h5>Helping Today, Helping Tomorrow</h5>
              </div>
              {/* hero title */}
              <div className="hero-title">
                <h1> Giving a Helpline</h1>
                <h1>
                  {" "}
                  hand for <span>Childreens</span>{" "}
                </h1>
                <h1> In Needs. </h1>
              </div>
              {/* hero button */}
              <div className="hero-button">
                <a href="about.html">
                  {" "}
                  Discover More <i className="bi bi-chevron-double-right" />
                </a>
              </div>
              {/* video button */}
              <div className="video-button">
                <div className="video-icon">
                  <a
                    className="video-demo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="bi bi-play" />
                  </a>
                </div>
                <div className="hero-shape rotateme">
                  <img src="assets/images/slider/video-circle.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-section hero2 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* hero content */}
            <div className="hero-content text-left">
              <div className="hero-sub-title">
                <h5>Helping Today, Helping Tomorrow</h5>
              </div>
              {/* hero title */}
              <div className="hero-title">
                <h1> Giving a Helpline</h1>
                <h1>
                  {" "}
                  hand for <span>Childreens</span>{" "}
                </h1>
                <h1> In Needs. </h1>
              </div>
              {/* hero button */}
              <div className="hero-button">
                <a href="about.html">
                  {" "}
                  Discover More <i className="bi bi-chevron-double-right" />
                </a>
              </div>
              {/* video button */}
              <div className="video-button">
                <div className="video-icon">
                  <a
                    className="video-demo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg"
                  >
                    <i className="bi bi-play" />
                  </a>
                </div>
                <div className="hero-shape rotateme">
                  <img src="assets/images/slider/video-circle.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/*End charina hero section  */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina about Section */}
  {/*==================================================*/}
  <div className="about-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          {/* about thumb */}
          <div className="about-thumb">
            <img src="assets/images/resource/about.png" alt="" />
          </div>
        </div>
        <div className="col-lg-6 pr-0 pl-4">
          <div className="charina-section-title">
            <h4> Join Us and Start Donating </h4>
            <h1> Make your Goals Always to </h1>
            <h1 className="section-text">
              {" "}
              Helps <span>Poor People</span>{" "}
            </h1>
            <p>
              {" "}
              Phosfluorescently cultivate enabled relationships without sticky
              practices distinctively empower next-generation e-commerce{" "}
            </p>
          </div>
          {/* charina description */}
          <div className="charina-description">
            <p>
              Helped Fund <span>24,347</span> Projects in 250 Countries
              worldwide donated <span>5 Milion</span> Peoples
            </p>
          </div>
          {/* charina check list */}
          <div className="charina-check-list">
            <p>
              {" "}
              <i className="bi bi-check-circle-fill" /> Join Our Charity Team
              and Helps the People{" "}
            </p>
            <p className="charina-icon">
              {" "}
              <i className="bi bi-check-circle-fill" /> Donate Money for Poor
              Childreens help Educations{" "}
            </p>
          </div>
          {/* charina button */}
          <div className="charina-button">
            <a href="about.html">
              {" "}
              Discover More <i className="bi bi-chevron-double-right" />{" "}
            </a>
          </div>
        </div>
        {/* about shape */}
        <div className="about-shape dance">
          <img src="assets/images/resource/most.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina about Secton */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina donate section  */}
  {/*==================================================*/}
  <div className="donate-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="charina-section-title pb-60">
            <h4> Start Donating Theme </h4>
            <h1>
              {" "}
              Find the Popular <span>Causes</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="donate-list owl-carousel">
          <div className="col-lg-12">
            <div className="charina-donate-single-box">
              {/* donate thumb */}
              <div className="donate-thumb">
                <img src="assets/images/resource/donate1.jpg" alt="" />
                {/* thumb text */}
                <div className="thumb-category">
                  <span>Foods</span>
                </div>
              </div>
              {/* donate content */}
              <div className="charina-donate-content">
                <div className="donate-title">
                  <h3>
                    <a href="donations-details.html">
                      Raise fund for clean &amp; healthy foods
                    </a>
                  </h3>
                </div>
                {/* donate text */}
                <div className="donate-text">
                  <p>
                    {" "}
                    <i className="bi bi-alarm-fill" /> 150 Days Remaining
                  </p>
                </div>
                {/* progress ber */}
                <div className="progress-ber-plugin">
                  <div id="bar1" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip" />
                    </div>
                    <span className="fill" data-percentage="60.1" />
                  </div>
                  <div className="progress-text">
                    <p>
                      Achived : <span>$50,000</span>{" "}
                    </p>
                    <p className="progress-text">
                      {" "}
                      Goal : <span>$50,000</span>
                    </p>
                  </div>
                </div>
                {/* progress ber end */}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="charina-donate-single-box upper">
              {/* donate thumb */}
              <div className="donate-thumb">
                <img src="assets/images/resource/donate2.png" alt="" />
                {/* thumb text */}
                <div className="thumb-category">
                  <span>Education</span>
                </div>
              </div>
              {/* donate content */}
              <div className="charina-donate-content">
                <div className="donate-title">
                  <h3>
                    <a href="donations-details.html">
                      Give a good education orphan childreen
                    </a>
                  </h3>
                </div>
                {/* donate text */}
                <div className="donate-text">
                  <p>
                    {" "}
                    <i className="bi bi-alarm-fill" /> 150 Days Remaining
                  </p>
                </div>
                {/* progress ber */}
                <div className="progress-ber-plugin">
                  <div id="bar2" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip" />
                    </div>
                    <span className="fill up" data-percentage="65.1" />
                  </div>
                  <div className="progress-text">
                    <p>
                      Achived : <span>$85,000</span>{" "}
                    </p>
                    <p className="progress-text">
                      {" "}
                      Goal : <span>$65,000</span>
                    </p>
                  </div>
                </div>
                {/* progress ber end */}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="charina-donate-single-box upper2">
              {/* donate thumb */}
              <div className="donate-thumb">
                <img src="assets/images/resource/donate3.png" alt="" />
                {/* thumb text */}
                <div className="thumb-category">
                  <span>Foods</span>
                </div>
              </div>
              {/* donate content */}
              <div className="charina-donate-content">
                <div className="donate-title">
                  <h3>
                    <a href="donations-details.html">
                      Build home for African poor womens
                    </a>
                  </h3>
                </div>
                {/* donate text */}
                <div className="donate-text">
                  <p>
                    {" "}
                    <i className="bi bi-alarm-fill" /> 150 Days Remaining
                  </p>
                </div>
                {/* progress ber */}
                <div className="progress-ber-plugin">
                  <div id="bar3" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip" />
                    </div>
                    <span className="fill up2" data-percentage="70.1" />
                  </div>
                  <div className="progress-text">
                    <p>
                      Achived : <span>$50,000</span>{" "}
                    </p>
                    <p className="progress-text">
                      {" "}
                      Goal : <span>$50,000</span>
                    </p>
                  </div>
                </div>
                {/* progress ber end */}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="charina-donate-single-box">
              {/* donate thumb */}
              <div className="donate-thumb">
                <img src="assets/images/resource/donate4.png" alt="" />
                {/* thumb text */}
                <div className="thumb-category">
                  <span>Foods</span>
                </div>
              </div>
              {/* donate content */}
              <div className="charina-donate-content">
                <div className="donate-title">
                  <h3>
                    <a href="donations-details.html">
                      Raise fund for clean &amp; healthy foods
                    </a>
                  </h3>
                </div>
                {/* donate text */}
                <div className="donate-text">
                  <p>
                    {" "}
                    <i className="bi bi-alarm-fill" /> 150 Days Remaining
                  </p>
                </div>
                {/* progress ber */}
                <div className="progress-ber-plugin">
                  <div id="bar11" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip" />
                    </div>
                    <span className="fill" data-percentage="60.1" />
                  </div>
                  <div className="progress-text">
                    <p>
                      Achived : <span>$50,000</span>{" "}
                    </p>
                    <p className="progress-text">
                      {" "}
                      Goal : <span>$50,000</span>
                    </p>
                  </div>
                </div>
                {/* progress ber end */}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="charina-donate-single-box upper">
              {/* donate thumb */}
              <div className="donate-thumb">
                <img src="assets/images/resource/donate5.png" alt="" />
                {/* thumb text */}
                <div className="thumb-category">
                  <span>Education</span>
                </div>
              </div>
              {/* donate content */}
              <div className="charina-donate-content">
                <div className="donate-title">
                  <h3>
                    <a href="donations-details.html">
                      Give a good education orphan childreen
                    </a>
                  </h3>
                </div>
                {/* donate text */}
                <div className="donate-text">
                  <p>
                    {" "}
                    <i className="bi bi-alarm-fill" /> 150 Days Remaining
                  </p>
                </div>
                {/* progress ber */}
                <div className="progress-ber-plugin">
                  <div id="bar8" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip" />
                    </div>
                    <span className="fill up" data-percentage="65.1" />
                  </div>
                  <div className="progress-text">
                    <p>
                      Achived : <span>$85,000</span>{" "}
                    </p>
                    <p className="progress-text">
                      {" "}
                      Goal : <span>$65,000</span>
                    </p>
                  </div>
                </div>
                {/* progress ber end */}
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="charina-donate-single-box upper2">
              {/* donate thumb */}
              <div className="donate-thumb">
                <img src="assets/images/resource/donate6.png" alt="" />
                {/* thumb text */}
                <div className="thumb-category">
                  <span>Foods</span>
                </div>
              </div>
              {/* donate content */}
              <div className="charina-donate-content">
                <div className="donate-title">
                  <h3>
                    <a href="donations-details.html">
                      Build home for African poor womens
                    </a>
                  </h3>
                </div>
                {/* donate text */}
                <div className="donate-text">
                  <p>
                    {" "}
                    <i className="bi bi-alarm-fill" /> 150 Days Remaining
                  </p>
                </div>
                {/* progress ber */}
                <div className="progress-ber-plugin">
                  <div id="bar6" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip" />
                    </div>
                    <span className="fill up2" data-percentage="70.1" />
                  </div>
                  <div className="progress-text">
                    <p>
                      Achived : <span>$50,000</span>{" "}
                    </p>
                    <p className="progress-text">
                      {" "}
                      Goal : <span>$50,000</span>
                    </p>
                  </div>
                </div>
                {/* progress ber end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina donate Secton */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina call to action */}
  {/*==================================================*/}
  <div className="call-to-action">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="call-to-action-box">
            {/* call to icon */}
            <div className="call-to-icon">
              <img src="assets/images/resource/call1.png" alt="" />
            </div>
            {/* call to title */}
            <div className="call-to-title">
              <h2>Join Us and Become A Volunteer</h2>
            </div>
            {/* call to desc */}
            <div className="call-to-desc">
              <p>
                Phosfluorescently cultivate enabled relationships without sticky
                distinctively empower next-generation
              </p>
            </div>
            {/* call to button */}
            <div className="call-to-button">
              <a href="volunteer.html">
                {" "}
                Become Volunteer <i className="bi bi-chevron-double-right" />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 pl-60 responsive">
          <div className="call-to-action-box">
            {/* call to icon */}
            <div className="call-to-icon">
              <img src="assets/images/resource/call2.png" alt="" />
            </div>
            {/* call to title */}
            <div className="call-to-title">
              <h2>Start Donating For the Childreens</h2>
            </div>
            {/* call to desc */}
            <div className="call-to-desc">
              <p>
                Phosfluorescently cultivate enabled relationships without sticky
                distinctively empower next-generation
              </p>
            </div>
            {/* call to button */}
            <div className="call-to-button upper">
              <a href="donate.html">
                {" "}
                Donate Now <i className="bi bi-chevron-double-right" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina call to action */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina service section */}
  {/*==================================================*/}
  <div className="service-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 pl-0 pr-0">
          <div className="charina-section-title white">
            <h4> Change Everything </h4>
            <h1> We’re here to </h1>
            <h1 className="section-text">
              {" "}
              Help <span>Theme</span>{" "}
            </h1>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-single-box">
            {/* serivce icon */}
            <div className="service-icon">
              <img src="assets/images/resource/service1.png" alt="" />
            </div>
            {/* service content */}
            <div className="service-content">
              <div className="service-title">
                <h3>Kids Education</h3>
              </div>
              <div className="service-desc">
                <p>Phosfluorescently to cultivate distinctively empower</p>
              </div>
              <div className="service-button">
                <a href="service.html">Read More</a>
              </div>
              <div className="right-arrow">
                <a href="service.html">
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-single-box upper">
            {/* serivce icon */}
            <div className="service-icon">
              <img src="assets/images/resource/service2.png" alt="" />
            </div>
            {/* service content */}
            <div className="service-content">
              <div className="service-title">
                <h3>Good Health</h3>
              </div>
              <div className="service-desc">
                <p>Phosfluorescently to cultivate distinctively empower</p>
              </div>
              <div className="service-button">
                <a href="service.html">Read More</a>
              </div>
              <div className="right-arrow">
                <a href="service.html">
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="service-single-box upper2">
            {/* serivce icon */}
            <div className="service-icon">
              <img src="assets/images/resource/service3.png" alt="" />
            </div>
            {/* service content */}
            <div className="service-content">
              <div className="service-title">
                <h3>Healthy Food</h3>
              </div>
              <div className="service-desc">
                <p>Phosfluorescently to cultivate distinctively empower</p>
              </div>
              <div className="service-button">
                <a href="service.html">Read More</a>
              </div>
              <div className="right-arrow">
                <a href="service.html">
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina service section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina events section */}
  {/*==================================================*/}
  <div className="events-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="charina-section-title">
            <h4> Upcoming Events </h4>
            <h1> Ready to Join our Latest </h1>
            <h1 className="section-text">
              {" "}
              Upcoming <span>Events</span>{" "}
            </h1>
            <p>
              Completely create leveraged best practices and B2B interfaces
              events productivate cutting-edge solutions with go forward supply
              chains has Compellingly supply 24/7 relationships and effective
              human capital tha Appropriately target market positioning{" "}
            </p>
          </div>
          {/* button */}
          <div className="charina-button">
            <a href="events.html">
              {" "}
              Discover More <i className="bi bi-chevron-double-right" />{" "}
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="events-single-box">
            {/* events thumb */}
            <div className="events-thumb">
              <img src="assets/images/resource/event1.jpg" alt="" />
            </div>
            {/* events content */}
            <div className="events-content">
              <div className="event-text">
                <p>
                  {" "}
                  <i className="bi bi-clock" /> 8.30 am{" "}
                  <span>
                    {" "}
                    <i className="bi bi-geo-alt-fill" /> Sandigo, USA
                  </span>
                </p>
              </div>
              <div className="event-title">
                <h3>
                  <a href="event-details.html">
                    Learn Exactly how we Arrange a Event
                  </a>
                </h3>
              </div>
              <div className="event-button">
                <a href="event-details.html">
                  View Detials <i className="bi bi-chevron-double-right" />
                </a>
              </div>
            </div>
            {/* event date */}
            <div className="event-date">
              <span>26 Jun 2022</span>
            </div>
          </div>
          <div className="events-single-box upper">
            {/* events thumb */}
            <div className="events-thumb">
              <img src="assets/images/resource/event2.jpg" alt="" />
            </div>
            {/* events content */}
            <div className="events-content">
              <div className="event-text">
                <p>
                  {" "}
                  <i className="bi bi-clock" /> 8.30 am{" "}
                  <span>
                    {" "}
                    <i className="bi bi-geo-alt-fill" /> Sandigo, USA
                  </span>
                </p>
              </div>
              <div className="event-title">
                <h3>
                  <a href="event-details.html">
                    100+ Orphan Children Bootcampings
                  </a>
                </h3>
              </div>
              <div className="event-button">
                <a href="event-details.html">
                  View Detials <i className="bi bi-chevron-double-right" />
                </a>
              </div>
            </div>
            {/* event date */}
            <div className="event-date">
              <span>26 Jun 2022</span>
            </div>
          </div>
        </div>
        {/* event shape */}
        <div className="event-shape dance">
          <img src="assets/images/resource/most.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina events section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Brand Section */}
  {/*==================================================*/}
  <div className="brand-section">
    <div className="container">
      <div className="row">
        <div className="brand-list owl-carousel">
          <div className="col-lg-12">
            <div className="single-brand-thumb">
              <img src="assets/images/resource/brand1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="single-brand-thumb">
              <img src="assets/images/resource/brand2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="single-brand-thumb">
              <img src="assets/images/resource/brand3.png" alt="" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="single-brand-thumb">
              <img src="assets/images/resource/brand4.png" alt="" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="single-brand-thumb">
              <img src="assets/images/resource/brand1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina Brand Secton */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Testimonial section */}
  {/*==================================================*/}
  <div className="testimonial-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="row">
            <div className="testimonial_list owl-carousel">
              <div className="col-lg-12">
                <div className="testimonial-single-box">
                  {/* testi-thumb */}
                  <div className="testi-thumb">
                    <img src="assets/images/resource/people1.png" alt="" />
                  </div>
                  {/* testi content */}
                  <div className="testimonial-content">
                    {/* testi icon */}
                    <div className="testimonial-icon">
                      <i className="bi bi-quote" />
                    </div>
                    {/* testi description */}
                    <div className="testimonial-desc">
                      <p>
                        Completely create leveraged best practices and interface
                        productivate cutting-edg solutions with go forward
                        supply Compellingly supply 24/7 relationships and
                        effective huma Appropriately target market{" "}
                      </p>
                    </div>
                    <div className="testi-title">
                      <h4> Anjelina Watson </h4>
                    </div>
                    <div className="testi-text">
                      <p> Volunteer </p>
                    </div>
                  </div>
                  {/* testi star */}
                  <div className="testi-star-list">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testimonial-single-box">
                  {/* testi-thumb */}
                  <div className="testi-thumb">
                    <img src="assets/images/resource/people2.png" alt="" />
                  </div>
                  {/* testi content */}
                  <div className="testimonial-content">
                    {/* testi icon */}
                    <div className="testimonial-icon">
                      <i className="bi bi-quote" />
                    </div>
                    {/* testi description */}
                    <div className="testimonial-desc">
                      <p>
                        Completely create leveraged best practices and interface
                        productivate cutting-edg solutions with go forward
                        supply Compellingly supply 24/7 relationships and
                        effective huma Appropriately target market{" "}
                      </p>
                    </div>
                    <div className="testi-title">
                      <h4> John Alexon </h4>
                    </div>
                    <div className="testi-text">
                      <p> Volunteer </p>
                    </div>
                  </div>
                  {/* testi star */}
                  <div className="testi-star-list">
                    <ul>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                      <li>
                        <i className="bi bi-star-fill" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 pl-50">
          <div className="charina-section-title white">
            <h4> Testimonials </h4>
            <h1> What They’re Talking </h1>
            <h1 className="section-text">
              {" "}
              About <span>Charina</span>{" "}
            </h1>
            <p>
              Completely create leveraged best practices and B2B interfaces
              events productivate cutting-edge solutions with go forward supply
              chains has Compellingly supply 24/7 relationships and effective
              human capital tha Appropriately target market positioning{" "}
            </p>
          </div>
          {/* button */}
          <div className="charina-button">
            <a href="about.html">
              {" "}
              Discover More <i className="bi bi-chevron-double-right" />{" "}
            </a>
          </div>
        </div>
        {/* testi shape */}
        <div className="testi-shape dance">
          <img src="assets/images/resource/most.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina Testimonial Area */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina galary Section */}
  {/*==================================================*/}
  <div className="galary-section">
    <div className="container-fluid">
      <div className="row galary-bg">
        <div className="col-lg-12">
          <div className="galary-title text-center">
            <h2> Our Gallery </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="galary-list owl-carousel">
          <div className="col-lg-12">
            <div className="galary-single-box">
              {/* galary thumb */}
              <div className="galary-thumb">
                <img src="assets/images/resource/galary1.jpg" alt="" />
                {/* galary text */}
                <div className="galary-text">
                  <a href="gallery-details.html">Education for Childreen</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="galary-single-box">
              {/* galary thumb */}
              <div className="galary-thumb">
                <img src="assets/images/resource/galary2.jpg" alt="" />
                {/* galary text */}
                <div className="galary-text">
                  <a href="gallery-details.html">Organic Foods for Kids</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="galary-single-box">
              {/* galary thumb */}
              <div className="galary-thumb">
                <img src="assets/images/resource/galary3.jpg" alt="" />
                {/* galary text */}
                <div className="galary-text">
                  <a href="gallery-details.html">Donate Homeless Kids</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="galary-single-box">
              {/* galary thumb */}
              <div className="galary-thumb">
                <img src="assets/images/resource/galary4.jpg" alt="" />
                {/* galary text */}
                <div className="galary-text">
                  <a href="gallery-details.html">Food for Orphan People</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="galary-single-box">
              {/* galary thumb */}
              <div className="galary-thumb">
                <img src="assets/images/resource/galary5.jpg" alt="" />
                {/* galary text */}
                <div className="galary-text">
                  <a href="gallery-details.html">Donate for Happiness</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="galary-single-box">
              {/* galary thumb */}
              <div className="galary-thumb">
                <img src="assets/images/resource/galary6.jpg" alt="" />
                {/* galary text */}
                <div className="galary-text">
                  <a href="gallery-details.html">Education for Childreen</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina galary Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Blog Section */}
  {/*==================================================*/}
  <div className="volunteers-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="charina-section-title text-center pb-50">
            <h4> Our Volunteers </h4>
            <h1>
              {" "}
              Meet Now our <span>Volunteers</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="volunteer-single-box upper">
            {/* volunteer thumb */}
            <div className="volunteer-thumb">
              <img src="assets/images/resource/volunteer1.png" alt="" />
              {/* volunteer social icon */}
              <div className="volunteer-social-icon">
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
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* volunteer title */}
            <div className="volunteer-title">
              <h2>Anjelina Watson</h2>
            </div>
            <div className="volunteer-text">
              <span>Volunteer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="volunteer-single-box">
            {/* volunteer thumb */}
            <div className="volunteer-thumb">
              <img src="assets/images/resource/volunteer2.png" alt="" />
              {/* volunteer social icon */}
              <div className="volunteer-social-icon">
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
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* volunteer title */}
            <div className="volunteer-title">
              <h2>Louise Campbell</h2>
            </div>
            <div className="volunteer-text">
              <span>Volunteer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="volunteer-single-box upper2">
            {/* volunteer thumb */}
            <div className="volunteer-thumb">
              <img src="assets/images/resource/volunteer3.png" alt="" />
              {/* volunteer social icon */}
              <div className="volunteer-social-icon">
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
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* volunteer title */}
            <div className="volunteer-title">
              <h2>David E. Meza</h2>
            </div>
            <div className="volunteer-text">
              <span>Volunteer</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="volunteer-single-box upper3">
            {/* volunteer thumb */}
            <div className="volunteer-thumb">
              <img src="assets/images/resource/volunteer4.png" alt="" />
              {/* volunteer social icon */}
              <div className="volunteer-social-icon">
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
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* volunteer title */}
            <div className="volunteer-title">
              <h2>Amy D. Vida</h2>
            </div>
            <div className="volunteer-text">
              <span>Volunteer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina galary Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Donate Section */}
  {/*==================================================*/}
  <div className="donate-section style-two">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          {/* video button */}
          <div className="video-button style-two">
            <div className="video-icon">
              <a
                className="video-demo-icon venobox vbox-item"
                data-vbtype="youtube"
                data-autoplay="true"
                href="https://youtu.be/BS4TUd7FJSg"
              >
                <i className="bi bi-play-fill" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="charina-section-title white">
            <h4> Donate for Urgent Cause </h4>
            <h1> Support for Eating Funds </h1>
            <h1 className="section-text">
              {" "}
              Hungry <span>Peoples</span>{" "}
            </h1>
            <p>
              {" "}
              Completely create leveraged best practices and B2B interfaces
              events was productivate cutting-edge solutions with go
            </p>
          </div>
          {/* progress ber */}
          <div className="progress-ber-plugin">
            <div id="bar4" className="barfiller">
              <div className="tipWrap">
                <span className="tip" />
              </div>
              <span className="fill up1" data-percentage={50} />
            </div>
            <div className="progress-text">
              <p>
                Achived : <span>$50,000</span>{" "}
              </p>
            </div>
            <div className="progress-text-2">
              <p className="progress-text">
                {" "}
                Goal : <span>$50,000</span>
              </p>
            </div>
          </div>
          {/* progress ber end */}
          {/* button */}
          <div className="charina-button">
            <a href="donations.html">
              {" "}
              Discover More <i className="bi bi-suit-heart" />{" "}
            </a>
          </div>
          <div className="donate-date-text">
            <p>
              {" "}
              <i className="bi bi-clock" /> 150 Days Remaining
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina Donate Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Blog Section */}
  {/*==================================================*/}
  <div className="blog-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="charina-section-title text-center pb-50">
            <h4> Read Latest Articles </h4>
            <h1>Directly from the Latest</h1>
            <h1 className="section-text">
              {" "}
              News &amp; <span>Articles</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="charina-single-blog-box">
            {/* blog thumb */}
            <div className="charina-blog-thumb">
              <img src="assets/images/resource/blog1.jpg" alt="" />
              {/* meta blog */}
              <div className="meta-blog">
                <span>16 Jun, 2023</span>
              </div>
            </div>
            {/* blog content */}
            <div className="charina-blog-content">
              {/* post categories */}
              <div className="post-categories">
                <p>
                  <i className="bi bi-person-fill" /> John Alex{" "}
                  <span className="post">
                    {" "}
                    <i className="bi bi-chat-dots-fill" /> 2 Comments{" "}
                  </span>{" "}
                </p>
              </div>
              {/* blog title */}
              <div className="blog-title">
                <h2>
                  <a href="blog-details.html">
                    {" "}
                    Help for Kids Education Donate Money{" "}
                  </a>
                </h2>
              </div>
              <div className="blog-button">
                <a href="blog-details.html">
                  {" "}
                  Read More <i className="bi bi-arrow-right" />{" "}
                </a>
              </div>
              <div className="share-icon">
                <a href="blog-details.html">
                  <i className="bi bi-share-fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="charina-single-blog-box upper">
            {/* blog thumb */}
            <div className="charina-blog-thumb">
              <img src="assets/images/resource/blog2.jpg" alt="" />
              {/* meta blog */}
              <div className="meta-blog">
                <span>16 Jun, 2023</span>
              </div>
            </div>
            {/* blog content */}
            <div className="charina-blog-content">
              {/* post categories */}
              <div className="post-categories">
                <p>
                  <i className="bi bi-person-fill" /> John Alex{" "}
                  <span className="post">
                    {" "}
                    <i className="bi bi-chat-dots-fill" /> 2 Comments{" "}
                  </span>{" "}
                </p>
              </div>
              {/* blog title */}
              <div className="blog-title">
                <h2>
                  <a href="blog-details.html">
                    {" "}
                    Organic Food Reserved for Childreens{" "}
                  </a>
                </h2>
              </div>
              <div className="blog-button">
                <a href="blog-details.html">
                  {" "}
                  Read More <i className="bi bi-arrow-right" />{" "}
                </a>
              </div>
              <div className="share-icon">
                <a href="blog-details.html">
                  <i className="bi bi-share-fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="charina-single-blog-box upper2">
            {/* blog thumb */}
            <div className="charina-blog-thumb">
              <img src="assets/images/resource/blog3.jpg" alt="" />
              {/* meta blog */}
              <div className="meta-blog">
                <span>16 Jun, 2023</span>
              </div>
            </div>
            {/* blog content */}
            <div className="charina-blog-content">
              {/* post categories */}
              <div className="post-categories">
                <p>
                  <i className="bi bi-person-fill" /> John Alex{" "}
                  <span className="post">
                    {" "}
                    <i className="bi bi-chat-dots-fill" /> 2 Comments{" "}
                  </span>{" "}
                </p>
              </div>
              {/* blog title */}
              <div className="blog-title">
                <h2>
                  <a href="blog-details.html">
                    {" "}
                    How to Make good Health childreen Campaign{" "}
                  </a>
                </h2>
              </div>
              <div className="blog-button">
                <a href="blog-details.html">
                  {" "}
                  Read More <i className="bi bi-arrow-right" />{" "}
                </a>
              </div>
              <div className="share-icon">
                <a href="blog-details.html">
                  <i className="bi bi-share-fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* Start charina Blog Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Subscribe Section */}
  {/*==================================================*/}
  <div className="counter-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="charina-section-title">
            <h4> Suport Us Help Them </h4>
            <h1>
              Suport Us For <span>Help</span>{" "}
            </h1>
            <p>
              {" "}
              Completely create leveraged best practices and B2B interfaces
              productivate cutting-edge solutions with forward{" "}
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-box">
                {/* counter thumb */}
                <div className="counter-thumb">
                  <img src="assets/images/resource/counter1.png" alt="" />
                  {/* counter title */}
                  <div className="counter-content">
                    <div className="counter-title">
                      <h1 className="counter">12</h1>
                      <h1 className="counter-title2">M</h1>
                    </div>
                  </div>
                </div>
                {/* counter text */}
                <div className="counter-text">
                  <p>Total Donations</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-box">
                {/* counter thumb */}
                <div className="counter-thumb">
                  <img src="assets/images/resource/counter2.png" alt="" />
                  {/* counter title */}
                  <div className="counter-content">
                    <div className="counter-title">
                      <h1 className="counter">10</h1>
                      <h1 className="counter-title2">K+</h1>
                    </div>
                  </div>
                </div>
                {/* counter text */}
                <div className="counter-text">
                  <p> Project Founded</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="counter-single-box">
                {/* counter thumb */}
                <div className="counter-thumb">
                  <img src="assets/images/resource/counter3.png" alt="" />
                  {/* counter title */}
                  <div className="counter-content">
                    <div className="counter-title">
                      <h1 className="counter">860</h1>
                    </div>
                  </div>
                </div>
                {/* counter text */}
                <div className="counter-text">
                  <p>Total Volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* Start charina Subscribe Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Footer Section */}
  {/*==================================================*/}
  <div className="footer-section">
    <div className="container">
      <div className="row footer-bg">
        <div className="col-lg-4 col-md-6">
          <div className="widgets-company-info">
            {/* charina logo */}
            <div className="charina-logo">
              <a className="logo_img" href="index.html" title="techno">
                <img src="assets/images/logo.png" alt="" />
              </a>
            </div>
            <div className="company-info-desc">
              <p>
                {" "}
                Distinctively foster optimal manufactured without real-time
                e-markets. Energistically productize compelling{" "}
              </p>
            </div>
            <div className="footer-button">
              <a href="about.html">
                {" "}
                Donate Now <i className="bi bi-suit-heart" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          <div className="widget-nav-menu">
            {/* widget title */}
            <h4 className="widget-title"> Quick Links </h4>
            <div className="menu-quick-link-content">
              <ul className="footer-widget-list">
                <li>
                  <a href="about.html">
                    {" "}
                    <i className="bi bi-chevron-double-right" /> About{" "}
                  </a>
                </li>
                <li>
                  <a href="contact-us.html">
                    {" "}
                    <i className="bi bi-chevron-double-right" /> Contact{" "}
                  </a>
                </li>
                <li>
                  <a href="events.html">
                    {" "}
                    <i className="bi bi-chevron-double-right" /> Events{" "}
                  </a>
                </li>
                <li>
                  <a href="blog.html">
                    {" "}
                    <i className="bi bi-chevron-double-right" /> Latest Blog{" "}
                  </a>
                </li>
                <li>
                  <a href="donations.html">
                    {" "}
                    <i className="bi bi-chevron-double-right" /> Donations{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 pl-20">
          <div className="widget-contact-info">
            {/* widget title */}
            <h4 className="widget-title"> Contact Info </h4>
            {/* widget content */}
            <div className="footer-widget-content">
              {/* wedget title */}
              <div className="footer-wedget-title">
                <h5> Phone Number </h5>
              </div>
              {/* footer info desc */}
              <div className="footer-info-desc">
                <p> +880 392 (4560) 290 </p>
                <p>example@gmail.com</p>
              </div>
              {/* wedget title */}
              <div className="footer-wedget-title">
                <h5> Address </h5>
              </div>
              {/* footer info desc */}
              <div className="footer-info-desc">
                <p> 602/B, Sandigo-USA </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="widget-thumb-menu">
            {/* widget title */}
            <h4 className="widget-title"> Our Galary </h4>
            {/* widget content */}
            <div className="footer-widget-thumb">
              <div className="items">
                <img src="assets/images/resource/footer1.png" alt="" />
              </div>
              <div className="items">
                <img src="assets/images/resource/footer2.png" alt="" />
              </div>
              <div className="items">
                <img src="assets/images/resource/footer3.png" alt="" />
              </div>
              <div className="items">
                <img src="assets/images/resource/footer4.png" alt="" />
              </div>
              <div className="items">
                <img src="assets/images/resource/footer5.png" alt="" />
              </div>
              <div className="items">
                <img src="assets/images/resource/footer6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* foter shape */}
        <div className="footer-shape bounce-animate">
          <img src="assets/images/resource/footer-arrow.png" alt="" />
        </div>
        <div className="footer-shape2 dance">
          <img src="assets/images/resource/heart-icon.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="footer-bottom-content-copy">
            <p> Copyright © charina all rights reserved</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="footer-bottom-menu text-right">
            <ul>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="service.html">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina Footer Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start scrollup section Section */}
  {/*==================================================*/}
  <div className="prgoress_indicator active-progress">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "270.456"
        }}
      />
    </svg>
  </div>
  {/*==================================================*/}
  {/* Start scrollup section Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start Search Popup Area */}
  {/*==================================================*/}
  <div className="search-popup">
    <button className="close-search style-two">
      <span className="flaticon-multiply">
        <i className="far fa-times-circle" />
      </span>
    </button>
    <button className="close-search">
      <i className="fas fa-arrow-up" />
    </button>
    <form method="post" action="#">
      <div className="form-group">
        <input
          type="search"
          name="search-field"
          defaultValue=""
          placeholder="Search Here"
          required=""
        />
        <button type="submit">
          <i className="fa fa-search" />
        </button>
      </div>
    </form>
  </div>
  {/*==================================================*/}
  {/* Start Search Popup Area */}
  {/*==================================================*/}
  {/* jquery js */}
  {/* bootstrap js */}
  {/* carousel js */}
  {/* counterup js */}
  {/* waypoints js */}
  {/* wow js */}
  {/* imagesloaded js */}
  {/* venobox js */}
  {/* ajax mail js */}
  {/*  animated-text js */}
  {/* venobox min js */}
  {/* isotope js */}
  {/* jquery meanmenu js */}
  {/* jquery scrollup js */}
  {/* barfiller js */}
  {/* theme js */}
</>
}
