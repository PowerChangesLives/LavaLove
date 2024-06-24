'use client';

import Script from 'next/script';

export default function EndScripts() {
  return (
    <>
      <Script defer src='assets/js/vendor/modernizr-3.5.0.min.js' />
      <Script defer src='assets/js/vendor/jquery-3.2.1.min.js' />
      <Script defer src='assets/js/bootstrap.min.js' />
      <Script defer src='assets/js/owl.carousel.min.js' />
      <Script defer src='assets/js/jquery.counterup.min.js' />
      <Script defer src='assets/js/waypoints.min.js' />
      <Script defer src='assets/js/wow.js' />
      <Script defer src='assets/js/imagesloaded.pkgd.min.js' />
      <Script defer src='venobox/venobox.js' />
      <Script defer src='assets/js/ajax-mail.js' />
      <Script defer src='assets/js/animated-text.js' />
      <Script defer src='venobox/venobox.min.js' />
      <Script defer src='assets/js/isotope.pkgd.min.js' />
      <Script defer src='assets/js/jquery.meanmenu.js' />
      <Script defer src='assets/js/jquery.scrollUp.js' />
      <Script defer src='assets/js/jquery.barfiller.js' />
      <Script defer src='assets/js/theme.js' />
    </>
  );
}
