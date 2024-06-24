"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';
import Script from "next/script";

export default function Home() {
  return <>
  {/*==================================================*/}
  {/* Start charina Main Menu Area */}
  {/*==================================================*/}
  <div
    id="sticky-header"
    className="charina_nav_manu style-three align-items-center"
  >
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-2">
          <div className="logo">
            <a className="logo_img" href="index.html" title="charina">
              <img src="assets/images/logo.png" alt="" />
            </a>
            <a className="main_sticky" href="index.html" title="charina">
              <img src="assets/images/logo2.png" alt="astute" />
            </a>
          </div>
        </div>
        <div className="col-lg-8">
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
        <div className="col-lg-2 pl-0 ">
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
  <div className="hero_list owl-carousel responsive">
    <div className="hero-section hero3 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* hero content */}
            <div className="hero-content text-center">
              {/* hero icon */}
              <div className="hero-icon dance">
                <img src="assets/images/resource/heart2.png" alt="" />
              </div>
              {/* hero sub title */}
              <div className="hero-sub-title">
                <h5>Helping Today, Helping Tomorrow</h5>
              </div>
              {/* hero title */}
              <div className="hero-title">
                <h1> Let’s Give them Your</h1>
                <h1>
                  {" "}
                  Helping <span>Hands</span>{" "}
                </h1>
              </div>
              {/* hero button */}
              <div className="hero-button">
                <a href="about.html">
                  {" "}
                  Discover More <i className="bi bi-chevron-double-right" />
                </a>
              </div>
              <div className="hero-button">
                <a href="volunteer.html">
                  {" "}
                  Join Volunteer <i className="bi bi-chevron-double-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hero-section hero4 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* hero content */}
            <div className="hero-content text-center">
              {/* hero icon */}
              <div className="hero-icon dance">
                <img src="assets/images/resource/heart2.png" alt="" />
              </div>
              {/* hero sub title */}
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
              </div>
              {/* hero button */}
              <div className="hero-button">
                <a href="about.html">
                  {" "}
                  Discover More <i className="bi bi-chevron-double-right" />
                </a>
              </div>
              <div className="hero-button">
                <a href="volunteer.html">
                  {" "}
                  Join Volunteer <i className="bi bi-chevron-double-right" />
                </a>
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
  {/* Start charina feature Section */}
  {/*==================================================*/}
  <div className="feature-section">
    <div className="container">
      <div className="row feature-bg">
        <div className="col-lg-4 col-md-6">
          <div className="feature-single-box">
            {/* feature thumb */}
            <div className="feature-thumb">
              <img src="assets/images/resource/feature1.png" alt="" />
            </div>
            {/* feature title */}
            <div className="feature-content">
              {/* feature title */}
              <div className="feature-title">
                <h3>Send Donations</h3>
              </div>
              {/* feature desc */}
              <div className="feature-description">
                <p>
                  Leveraged best practices and B2B edge productivate cutting
                  solution
                </p>
              </div>
            </div>
            <div className="feature-button">
              <a href="service.html">
                {" "}
                Read More <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="feature-single-box upper">
            {/* feature thumb */}
            <div className="feature-thumb">
              <img src="assets/images/resource/feature2.png" alt="" />
            </div>
            {/* feature title */}
            <div className="feature-content">
              {/* feature title */}
              <div className="feature-title">
                <h3>Become A Volunteer</h3>
              </div>
              {/* feature desc */}
              <div className="feature-description">
                <p>
                  Leveraged best practices and B2B edge productivate cutting
                  solution
                </p>
              </div>
            </div>
            <div className="feature-button">
              <a href="service.html">
                {" "}
                Read More <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="feature-single-box upper2">
            {/* feature thumb */}
            <div className="feature-thumb">
              <img src="assets/images/resource/feature3.png" alt="" />
            </div>
            {/* feature title */}
            <div className="feature-content">
              {/* feature title */}
              <div className="feature-title">
                <h3>Latest Events</h3>
              </div>
              {/* feature desc */}
              <div className="feature-description">
                <p>
                  Leveraged best practices and B2B edge productivate cutting
                  solution
                </p>
              </div>
            </div>
            <div className="feature-button">
              <a href="service.html">
                {" "}
                Read More <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          {/* about thumb */}
          <div className="about-thumb2">
            <img src="assets/images/resource/about2.png" alt="" />
            {/* about counter */}
            <div className="about-couner">
              <div className="about-counter-thumb">
                <div className="about-counter-title">
                  <h2 className="counter">12</h2>
                  <h2>K+</h2>
                </div>
                <div className="counter-text2">
                  <p>Volunteers</p>
                </div>
              </div>
            </div>
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
              practices distinctively empower next-generation e-commerce network{" "}
            </p>
          </div>
          {/* about items */}
          <div className="charina-about-items">
            {/* about icon */}
            <div className="items-icon">
              <img src="assets/images/resource/item2.png" alt="" />
            </div>
            {/* item content */}
            <div className="about-item-content">
              <h3>Quick Fundraising</h3>
              <p>
                Distinctively empower next-generation charity and idea-sharing
                and extensible
              </p>
            </div>
            {/* about icon */}
            <div className="items-icon">
              <img src="assets/images/resource/item1.png" alt="" />
            </div>
            {/* item content */}
            <div className="about-item-content">
              <h3>Join Our Team</h3>
              <p>
                Distinctively empower next-generation charity and idea-sharing
                and extensible
              </p>
            </div>
          </div>
          <div className="charina-button upp">
            <a href="about.html">
              {" "}
              Discover More <i className="bi bi-chevron-double-right" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/*End charina slider section  */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina project section  */}
  {/*==================================================*/}
  <div className="project-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="charina-section-title white text-center pb-70">
            <h4> Start Donating Theme </h4>
            <h1>
              {" "}
              Our Ongoing <span>Projects</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="project-single-box">
            {/* project thumb */}
            <div className="project-thumb">
              <img src="assets/images/resource/project1.png" alt="" />
            </div>
            {/* project title */}
            <div className="project-title">
              <h3>Free Medicals</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="project-single-box">
            {/* project thumb */}
            <div className="project-thumb">
              <img src="assets/images/resource/project2.png" alt="" />
            </div>
            {/* project title */}
            <div className="project-title">
              <h3>Foods and Water</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="project-single-box">
            {/* project thumb */}
            <div className="project-thumb">
              <img src="assets/images/resource/project3.png" alt="" />
            </div>
            {/* project title */}
            <div className="project-title">
              <h3>Emergency Aids</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="project-single-box">
            {/* project thumb */}
            <div className="project-thumb">
              <img src="assets/images/resource/project4.png" alt="" />
            </div>
            {/* project title */}
            <div className="project-title">
              <h3>Zero Proverty</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina project Secton */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Donate Section */}
  {/*==================================================*/}
  <div className="donate-section style-two upper">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="charina-section-title pb-60">
            <h4> Start Donating Theme </h4>
            <h1>
              {" "}
              Our Featured <span>Campaigns</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="row align-items-center donate-bg">
        <div className="owl-carousel donate-list2">
          {/* donate campaigns items */}
          <div className="donate-campaigns-items">
            {/* donate thumb */}
            <div className="donate-thumb2">
              <img src="assets/images/resource/donate.png" alt="" />
            </div>
            {/* donate items content */}
            <div className="donate-items-content">
              <div className="donate-section-title">
                <h6> Foods </h6>
                <h2> Donate Money Orphan Funds </h2>
                <h2 className="section-text"> Helping their Meals </h2>
                <p>
                  {" "}
                  Phosfluorescently cultivate enabled relationships without
                  sticky empower next-generation e-commerce network{" "}
                </p>
              </div>
              {/* progress ber */}
              <div className="progress-ber-plugin">
                <div id="bar6" className="barfiller">
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
              <div className="donate-date-text">
                <p>
                  {" "}
                  <i className="bi bi-clock-fill" /> 150 Days Remaining
                </p>
              </div>
              {/* button */}
              <div className="charina-button">
                <a href="donations.html">
                  {" "}
                  Discover More <i className="bi bi-suit-heart" />{" "}
                </a>
              </div>
            </div>
          </div>
          {/* donate campaigns items */}
          <div className="donate-campaigns-items">
            {/* donate thumb */}
            <div className="donate-thumb2">
              <img src="assets/images/resource/donate2.jpg" alt="" />
            </div>
            {/* donate items content */}
            <div className="donate-items-content">
              <div className="donate-section-title">
                <h6> Educations </h6>
                <h2> Give a Good Education for </h2>
                <h2 className="section-text"> Orphan Childreens </h2>
                <p>
                  {" "}
                  Phosfluorescently cultivate enabled relationships without
                  sticky empower next-generation e-commerce network{" "}
                </p>
              </div>
              {/* progress ber */}
              <div className="progress-ber-plugin">
                <div id="bar7" className="barfiller">
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
              <div className="donate-date-text">
                <p>
                  {" "}
                  <i className="bi bi-clock-fill" /> 150 Days Remaining
                </p>
              </div>
              {/* button */}
              <div className="charina-button">
                <a href="donations.html">
                  {" "}
                  Discover More <i className="bi bi-suit-heart" />{" "}
                </a>
              </div>
            </div>
          </div>
          {/* donate campaigns items */}
          <div className="donate-campaigns-items">
            {/* donate thumb */}
            <div className="donate-thumb2">
              <img src="assets/images/resource/donate3.jpg" alt="" />
            </div>
            {/* donate items content */}
            <div className="donate-items-content">
              <div className="donate-section-title">
                <h6> Medical </h6>
                <h2> Campaign for Buy Medicine </h2>
                <h2 className="section-text"> for Street Childreen’s </h2>
                <p>
                  {" "}
                  Phosfluorescently cultivate enabled relationships without
                  sticky empower next-generation e-commerce network{" "}
                </p>
              </div>
              {/* progress ber */}
              <div className="progress-ber-plugin">
                <div id="bar5" className="barfiller">
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
              <div className="donate-date-text">
                <p>
                  {" "}
                  <i className="bi bi-clock-fill" /> 150 Days Remaining
                </p>
              </div>
              {/* button */}
              <div className="charina-button">
                <a href="donations.html">
                  {" "}
                  Discover More <i className="bi bi-suit-heart" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina Donate Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina call to action */}
  {/*==================================================*/}
  <div className="call-to-action style-two">
    <div className="container">
      <div className="row call-bg align-items-center">
        <div className="col-lg-7 col-md-6">
          <div className="charina-section-title white">
            <h4> Join Our Volunteers </h4>
            <h1>Join Now Our Volunteers &amp;</h1>
            <h1 className="section-text">
              {" "}
              Help the <span>Childreens</span>{" "}
            </h1>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          {/* button */}
          <div className="charina-button text-right">
            <a href="volunteer.html">
              {" "}
              Become Vulonteer <i className="bi bi-chevron-double-right" />{" "}
            </a>
          </div>
        </div>
        {/* call shape */}
        <div className="call-to-shape dance">
          <img src="assets/images/resource/heart.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina call to action */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Subscribe Section */}
  {/*==================================================*/}
  <div className="counter-section style-two">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="row pr-2">
            <div className="col-lg-6 col-md-6">
              <div className="counter-single-box up">
                {/* counter thumb */}
                <div className="counter-icon">
                  <img src="assets/images/resource/count1.png" alt="" />
                </div>
                {/* counter title */}
                <div className="counter-title2">
                  <h1 className="counter">12</h1>
                  <h1 className="counter-title2">M</h1>
                </div>
                {/* counter text */}
                <div className="counter-text">
                  <p>Total Donations</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="counter-single-box upper">
                {/* counter thumb */}
                <div className="counter-icon">
                  <img src="assets/images/resource/count2.png" alt="" />
                </div>
                {/* counter title */}
                <div className="counter-title2">
                  <h1 className="counter">12</h1>
                  <h1 className="counter-title2">M</h1>
                </div>
                {/* counter text */}
                <div className="counter-text">
                  <p>Total Donations</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="counter-single-box upper2">
                {/* counter thumb */}
                <div className="counter-icon">
                  <img src="assets/images/resource/count3.png" alt="" />
                </div>
                {/* counter title */}
                <div className="counter-title2">
                  <h1 className="counter">12</h1>
                  <h1 className="counter-title2">M</h1>
                </div>
                {/* counter text */}
                <div className="counter-text">
                  <p>Total Donations</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="counter-single-box upper3">
                {/* counter thumb */}
                <div className="counter-icon">
                  <img src="assets/images/resource/count4.png" alt="" />
                </div>
                {/* counter title */}
                <div className="counter-title2">
                  <h1 className="counter">12</h1>
                  <h1 className="counter-title2">M</h1>
                </div>
                {/* counter text */}
                <div className="counter-text">
                  <p>Total Donations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 pl-5">
          <div className="charina-section-title">
            <h4> Suport Us Help Them </h4>
            <h1> Join your Hands with Us </h1>
            <h1 className="section-text">
              {" "}
              For Support <span>Them’s</span>{" "}
            </h1>
            <p>
              {" "}
              Completely create leveraged best practices and B2B interfaces
              events productivate cutting-edge solutions with go forward supply
              chains has Compellingly supply 24/7 relationships and effective
              human capital tha Appropriately target market positioning
            </p>
          </div>
          {/* button */}
          <div className="charina-button">
            <a href="contact.html">
              {" "}
              Discover More <i className="bi bi-chevron-double-right" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* Start charina Subscribe Section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina events section */}
  {/*==================================================*/}
  <div className="events-section style-two">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2" />
        <div className="col-lg-10">
          <div className="charina-section-title pb-60">
            <h4> Upcoming Events </h4>
            <h1>
              {" "}
              Join Our Latest <span>Events</span>{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="event-list owl-carousel">
          <div className="col-lg-12">
            <div className="events-single-box">
              {/* events content */}
              <div className="events-content">
                {/* event title */}
                <div className="event-title">
                  <h4>
                    {" "}
                    <span>27</span> February
                  </h4>
                  <h3>
                    <a href="event-details.html">
                      Learn Exactly how we Arrange a Event
                    </a>
                  </h3>
                </div>
                {/* event text */}
                <div className="event-text">
                  <p>
                    {" "}
                    <i className="bi bi-clock" /> 8.30 am{" "}
                    <span>
                      {" "}
                      <i className="bi bi-geo-alt-fill" /> Sandigo, California -
                      USA
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="events-single-box upper">
              {/* events content */}
              <div className="events-content">
                {/* event title */}
                <div className="event-title">
                  <h4>
                    {" "}
                    <span>08</span> January
                  </h4>
                  <h3>
                    <a href="event-details.html">
                      100+ Orphan Childreens Bootcampaigns
                    </a>
                  </h3>
                </div>
                {/* event text */}
                <div className="event-text">
                  <p>
                    {" "}
                    <i className="bi bi-clock" /> 8.30 am{" "}
                    <span>
                      {" "}
                      <i className="bi bi-geo-alt-fill" /> Sandigo, California -
                      USA
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="events-single-box upper2">
              {/* events content */}
              <div className="events-content">
                {/* event title */}
                <div className="event-title">
                  <h4>
                    {" "}
                    <span>27</span> February
                  </h4>
                  <h3>
                    <a href="event-details.html">
                      Learn Exactly how we Arrange a Event
                    </a>
                  </h3>
                </div>
                {/* event text */}
                <div className="event-text">
                  <p>
                    {" "}
                    <i className="bi bi-clock" /> 8.30 am{" "}
                    <span>
                      {" "}
                      <i className="bi bi-geo-alt-fill" /> Sandigo, California -
                      USA
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="events-single-box upper">
              {/* events content */}
              <div className="events-content">
                {/* event title */}
                <div className="event-title">
                  <h4>
                    {" "}
                    <span>08</span> January
                  </h4>
                  <h3>
                    <a href="event-details.html">
                      100+ Orphan Childreens Bootcampaigns
                    </a>
                  </h3>
                </div>
                {/* event text */}
                <div className="event-text">
                  <p>
                    {" "}
                    <i className="bi bi-clock" /> 8.30 am{" "}
                    <span>
                      {" "}
                      <i className="bi bi-geo-alt-fill" /> Sandigo, California -
                      USA
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina events section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina mission Section */}
  {/*==================================================*/}
  <div className="mission-sectoin">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="charina-section-title white text-center pb-60">
            <h4> Upcoming Events </h4>
            <h1> Our Mission Vission and </h1>
            <h1>
              {" "}
              Targated <span>Goals</span>{" "}
            </h1>
          </div>
        </div>
        {/* mission shape */}
        <div className="mission-shape dance">
          <img src="assets/images/resource/heart.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina mission section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina mission Section */}
  {/*==================================================*/}
  <div className="vission-sectoin">
    <div className="container">
      <div className="row vission-bg">
        <div className="col-lg-12">
          {/* / tab */}
          <div className="tab">
            {/* / tabs */}
            <ul className="tabs">
              <li>
                <a href="#"> Our Mission </a>
              </li>
              <li>
                <a href="#"> How we Work </a>
              </li>
              <li>
                <a href="#"> Our Vission </a>
              </li>
              <li>
                <a href="#"> Goal Achive</a>
              </li>
            </ul>
            {/* tab content */}
            <div className="tab_content">
              {/* tabs_item */}
              <div className="tabs_item">
                <div className="charina-single-mission-items">
                  {/* mission thumb */}
                  <div className="charina-mission-thumb">
                    <img src="assets/images/resource/tab1.jpg" alt="" />
                  </div>
                  {/* mission content */}
                  <div className="charina-mission-content">
                    {/* mission title */}
                    <div className="mission-title">
                      <h3> Happily People is our Achive </h3>
                    </div>
                    {/* mission items desc */}
                    <div className="mission-items-desc">
                      <p>
                        Completely create leveraged best practices and B2B
                        interfaces productivate cutting-edge solutions with go
                        forward supply in a Compellingly supply 24/7
                        relationships{" "}
                      </p>
                    </div>
                    {/* mission service list  */}
                    <div className="mission-list">
                      <ul>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Join Our
                          Charity Team and Helps the{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Donate Money
                          for Poor Childreens help{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Help for
                          Orphan Kids Healthy foods{" "}
                        </li>
                      </ul>
                    </div>
                    {/* mission button */}
                    <div className="mission-button">
                      <a href="events.html">
                        {" "}
                        Doscover More{" "}
                        <i className="bi bi-chevron-double-right" />{" "}
                      </a>
                    </div>
                  </div>
                  {/* / mission content */}
                </div>
              </div>
              {/* tabs_item */}
              <div className="tabs_item">
                <div className="charina-single-mission-items">
                  {/* mission thumb */}
                  <div className="charina-mission-thumb">
                    <img src="assets/images/resource/tab2.jpg" alt="" />
                  </div>
                  {/* mission content */}
                  <div className="charina-mission-content">
                    {/* mission title */}
                    <div className="mission-title">
                      <h3> Street Childreen Education </h3>
                    </div>
                    {/* mission items desc */}
                    <div className="mission-items-desc">
                      <p>
                        Completely create leveraged best practices and B2B
                        interfaces productivate cutting-edge solutions with go
                        forward supply in a Compellingly supply 24/7
                        relationships{" "}
                      </p>
                    </div>
                    {/* mission service list  */}
                    <div className="mission-list">
                      <ul>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Join Our
                          Charity Team and Helps the{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Donate Money
                          for Poor Childreens help{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Help for
                          Orphan Kids Healthy foods{" "}
                        </li>
                      </ul>
                    </div>
                    {/* mission button */}
                    <div className="mission-button">
                      <a href="#">
                        {" "}
                        Doscover More{" "}
                        <i className="bi bi-chevron-double-right" />{" "}
                      </a>
                    </div>
                  </div>
                  {/* / mission content */}
                </div>
              </div>
              {/* / tabs_item */}
              <div className="tabs_item">
                <div className="charina-single-mission-items">
                  {/* mission thumb */}
                  <div className="charina-mission-thumb">
                    <img src="assets/images/resource/tab3.jpg" alt="" />
                  </div>
                  {/* mission content */}
                  <div className="charina-mission-content">
                    {/* mission title */}
                    <div className="mission-title">
                      <h3> Donationg Process System </h3>
                    </div>
                    {/* mission items desc */}
                    <div className="mission-items-desc">
                      <p>
                        Completely create leveraged best practices and B2B
                        interfaces productivate cutting-edge solutions with go
                        forward supply in a Compellingly supply 24/7
                        relationships{" "}
                      </p>
                    </div>
                    {/* mission service list  */}
                    <div className="mission-list">
                      <ul>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Join Our
                          Charity Team and Helps the{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Donate Money
                          for Poor Childreens help{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Help for
                          Orphan Kids Healthy foods{" "}
                        </li>
                      </ul>
                    </div>
                    {/* mission button */}
                    <div className="mission-button">
                      <a href="#">
                        {" "}
                        Doscover More{" "}
                        <i className="bi bi-chevron-double-right" />{" "}
                      </a>
                    </div>
                  </div>
                  {/* / mission content */}
                </div>
              </div>
              {/* tabs_item */}
              <div className="tabs_item">
                <div className="charina-single-mission-items">
                  {/* mission thumb */}
                  <div className="charina-mission-thumb">
                    <img src="assets/images/resource/tab4.jpg" alt="" />
                  </div>
                  {/* mission content */}
                  <div className="charina-mission-content">
                    {/* mission title */}
                    <div className="mission-title">
                      <h3> Finished Poverty Our Mission </h3>
                    </div>
                    {/* mission items desc */}
                    <div className="mission-items-desc">
                      <p>
                        Completely create leveraged best practices and B2B
                        interfaces productivate cutting-edge solutions with go
                        forward supply in a Compellingly supply 24/7
                        relationships{" "}
                      </p>
                    </div>
                    {/* mission service list  */}
                    <div className="mission-list">
                      <ul>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Join Our
                          Charity Team and Helps the{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Donate Money
                          for Poor Childreens help{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill" /> Help for
                          Orphan Kids Healthy foods{" "}
                        </li>
                      </ul>
                    </div>
                    {/* mission button */}
                    <div className="mission-button">
                      <a href="#">
                        {" "}
                        Doscover More{" "}
                        <i className="bi bi-chevron-double-right" />{" "}
                      </a>
                    </div>
                  </div>
                  {/* / mission content */}
                </div>
              </div>
            </div>{" "}
            {/* / tab_content */}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==================================================*/}
  {/* End charina mission section */}
  {/*==================================================*/}
  {/*==================================================*/}
  {/* Start charina Blog Section */}
  {/*==================================================*/}
  <div className="blog-section style-two">
    <div className="container">
      <div className="row blog-bg">
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
  {/* Start charina galary Section */}
  {/*==================================================*/}
  <div className="galary-section style-two">
    <div className="container-fluid">
      <div className="row galary-bg">
        <div className="col-lg-12">
          <div className="galary-title text-center">
            <h2> Our Galary </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="galary-list2 owl-carousel">
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
          required
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
  <Script defer src="assets/js/vendor/modernizr-3.5.0.min.js" />
  <Script defer src="assets/js/vendor/jquery-3.2.1.min.js" />
  <Script defer src="assets/js/bootstrap.min.js" />
  <Script defer src="assets/js/owl.carousel.min.js" />
  <Script defer src="assets/js/jquery.counterup.min.js" />
  <Script defer src="assets/js/waypoints.min.js" />
  <Script defer src="assets/js/wow.js" />
  <Script defer src="assets/js/imagesloaded.pkgd.min.js" />
  <Script defer src="venobox/venobox.js" />
  <Script defer src="assets/js/ajax-mail.js" />
  <Script defer src="assets/js/animated-text.js" />
  <Script defer src="venobox/venobox.min.js" />
  <Script defer src="assets/js/isotope.pkgd.min.js" />
  <Script defer src="assets/js/jquery.meanmenu.js" />
  <Script defer src="assets/js/jquery.scrollUp.js" />
  <Script defer src="assets/js/jquery.barfiller.js" />
  <Script defer src="assets/js/theme.js" />
</>
}
