import { useState, useEffect } from "react";
import styles from '../../styles/Header/Header.module.css'


const Header = () => {
  const [showDiv, setShowDiv] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header className={styles.header}>
      <nav> Your navigation here </nav>
      <div
        className={`${styles.scrollingDiv} ${showDiv ? styles.show : styles.hide}`}
      >
        Your scrolling div content here
      </div>
    </header>
  );
};

export default Header;
