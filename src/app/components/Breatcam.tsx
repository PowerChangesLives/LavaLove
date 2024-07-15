import React from 'react';

type BreatcamProps = React.PropsWithChildren<{
  breadcrumbs: string[];
}>;

export default function Breatcam({ breadcrumbs, children }: BreatcamProps) {
  return (
    <div className='breatcam-section d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='breatcam-content text-center'>
              {/* breatcam menu */}
              <div className='breatcam-menu'>
                <ul>
                  <li>
                    <a href='/'>Home</a>
                  </li>
                  {breadcrumbs.map((breadcrumb) => (
                    <li key={breadcrumb}>
                      <span>/</span> {breadcrumb}
                    </li>
                  ))}
                </ul>
              </div>
              {/* breadcumb title */}
              <div className='breatcam-title'>
                <h1>{children}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
