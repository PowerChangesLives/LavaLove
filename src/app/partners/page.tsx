'use client';

import Breatcam from '../components/Breatcam';
import EndScripts from '../components/EndScripts';
import { logos } from './logos';
import React from 'react';

interface Partners {
  Name: string;
  logoURL: string;
}

const Partners: React.FC = () => {
  return (
    <>
      <Breatcam breadcrumbs={["About", "Partners & Sponsors"]}>
      Partners & Sponsors
      </Breatcam>
      {/* =============================== */}
      <div className='partners-details-section'>
        <div className='container'>
          <div className='partners-grid'>
            {logos.map((partner) => (
              <div className='partner-item' key={partner.Name}>
                <img
                  src={partner.logoURL}
                  width={150}
                  height={150}
                  className='partner-logo'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <EndScripts />
    </>
  );
};
export default Partners;
