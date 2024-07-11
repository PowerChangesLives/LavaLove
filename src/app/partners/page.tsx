"use client";

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
            <EndScripts/>
        </>
    )
}
export default Partners;
