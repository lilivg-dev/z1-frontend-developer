import React from 'react';
import Header from '../Header';
import Scanner from '../Scanner';

function Layout() {
  return (
    // esto es un fragment, es el root del component y no un div suelto
    <>
      <Header />
      <Scanner />
      {/* {props.children} */}
    </>
  );
}

export default Layout;
