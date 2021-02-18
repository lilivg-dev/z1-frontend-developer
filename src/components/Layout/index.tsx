import React from 'react';
import Header from '../Header';

function Layout() {
  return (
    // esto es un fragment, es el root del component y no un div suelto
    <>
      <Header />
      {/* {props.children} */}
    </>
  );
}

export default Layout;
