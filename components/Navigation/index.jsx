import { useState, useEffect } from 'react';
import MobileNav from './Mobile';
import DesktopNav from './PC';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set initial state based on window size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </nav>
  );
};

export default Navbar;