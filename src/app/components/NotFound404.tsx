import React from 'react';
import Image from 'next/image';

export default function NotFound404() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '70vh',
        overflow: 'hidden',
      }}
    >
      <Image
        src='/assets/images/404image.png'
        alt='404'
        width={612}
        height={408}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
