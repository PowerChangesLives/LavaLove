"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EndScripts from "../components/EndScripts";
import React, { useEffect, useState } from 'react';

interface Partners {
    Name: string
    logoURL: string
}

const Partners: React.FC = () => {
    const [partners, setPartners] = useState<Partners[]>([]);

    useEffect(() => {
        fetch('./logos.json')
            .then(response => response.json())
            .then(data => setPartners(data));
    }, []);
    return(
        <>
            <Navbar/>
            <div className='breatcam-section d-flex align-items-center'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breatcam-content text-center">
                                <div className="breatcam-menu">
                                    <ul>
                                        <li>
                                            <a href="index.html"> Home </a>
                                        </li>
                                        <li>
                                            <span>/</span>About{''}
                                        </li>
                                        <li>
                                            <span>/</span>Partners and Sponsors
                                        </li>
                                    </ul>
                                </div>
                                <div className="breatcam-title">
                                    <h1> Our Partners our helpers </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* =============================== */}
            <div className="partners-details-section">
                <div className="container">
                    <div className="partners-grid">
                        {partners.map(partner => (
                            <div className="partner-item" key={partner.Name}>
                                <img src = {partner.logoURL} width={150} height={150} className="partner-logo"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
            <div className='prgoress_indicator active-progress'>
                <svg
                    className='progress-circle svg-content'
                    width='100%'
                    height='100%'
                    viewBox='-1 -1 102 102'
                >
                    <path
                        d='M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98'
                        style={{
                            transition: 'stroke-dashoffset 10ms linear 0s',
                            strokeDasharray: '307.919, 307.919',
                            strokeDashoffset: '270.456',
                        }}
                    />
                </svg>
            </div>

            <div className='search-popup'>
                <button className='close-search style-two'>
                    <span className='flaticon-multiply'>
                        <i className='far fa-times-circle' />
                    </span>
                </button>
                <button className='close-search'>
                    <i className='fas fa-arrow-up' />
                </button>
                <form method='post' action='#'>
                    <div className='form-group'>
                        <input
                        type='search'
                        name='search-field'
                        defaultValue=''
                        placeholder='Search Here'
                        required
                        />
                        <button type='submit'>
                            <i className='fa fa-search' />
                        </button>
                    </div>
                </form>
            </div>
            <EndScripts/>
        </>
    )
}
export default Partners;