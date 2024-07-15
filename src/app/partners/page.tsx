'use client';

import Breatcam from '../components/Breatcam';
import EndScripts from '../components/EndScripts';
import { logos } from './logos';
import React from 'react';
import Image from 'next/image';
import styles from './style.module.css';

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
      <div className={styles.detailsSection}>
        <div className='container'>
          <div className={styles.grid}>
            {logos.map((partner) => (
              <div className={styles.item} key={partner.name}>
                <Image
                  src={partner.logoURL}
                  width={150}
                  height={150}
                  className={styles.logo}
                  alt={partner.name}
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
