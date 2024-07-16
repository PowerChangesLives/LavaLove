import React from 'react';

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
      <img
        src='/assets/images/404image.png'
        alt='404'
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
