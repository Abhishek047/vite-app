import { Outlet } from 'react-router-dom';

import { useState } from 'react';
import { Navbar } from '../components/navbars/Navbar';
import Footer from '../components/footers/Footer';
import { Loader } from '../components/ui/loader/Loader';

const NAVBAR_OFFSET = 30;
const RootLayout = () => {
  const [navBarHeight, setNavbarHeight] = useState<number | null>(null);

  return Number.isNaN(navBarHeight) ? (
    <Loader />
  ) : (
    <div>
      <Navbar setNavbarHeight={setNavbarHeight} />
      <main
        style={{
          marginTop: `${(navBarHeight || 0) + NAVBAR_OFFSET}px`,
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
