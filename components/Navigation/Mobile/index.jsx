// import { useState } from 'react';
// import styled from 'styled-components';

// const ToggleButton = styled.button`
//   position: fixed;
//   top: 20px;
//   right: 20px;
//   z-index: 9999;
//   background-color: #fff;
//   border: none;
//   border-radius: 50%;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   cursor: pointer;
//   font-size: 20px;
//   line-height: 1;
//   padding: 10px;
// `;

// const Sidebar = styled.div`
//   position: fixed;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   width: 300px;
//   padding: 20px;
//   background-color: #fff;
//   box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease-in-out;
//   transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
// `;

// const MenuLink = styled.a`
//   display: block;
//   margin-bottom: 20px;
//   font-size: 18px;
//   text-decoration: none;
//   color: #333;

//   &:hover {
//     color: #666;
//   }
// `;

// const RightSidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <ToggleButton onClick={toggleSidebar}>☰</ToggleButton>
//       <Sidebar isOpen={isOpen}>
//         <MenuLink href="#">Link 1</MenuLink>
//         <MenuLink href="#">Link 2</MenuLink>
//         <MenuLink href="#">Link 3</MenuLink>
//         <MenuLink href="#">Link 4</MenuLink>
//       </Sidebar>
//     </>
//   );
// };

// export default RightSidebar;

import { useState } from 'react';

const RightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: '9999',
          backgroundColor: '#fff',
          border: 'none',
          borderRadius: '50%',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          fontSize: '20px',
          lineHeight: '1',
          padding: '10px',
        }}
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '300px',
          padding: '20px',
          backgroundColor: '#fff',
          boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.3s ease-in-out',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <a
          style={{
            display: 'block',
            marginBottom: '20px',
            fontSize: '18px',
            textDecoration: 'none',
            color: '#333',
          }}
          href="#"
        >
          Link 1
        </a>
        <a
          style={{
            display: 'block',
            marginBottom: '20px',
            fontSize: '18px',
            textDecoration: 'none',
            color: '#333',
          }}
          href="#"
        >
          Link 2
        </a>
        <a
          style={{
            display: 'block',
            marginBottom: '20px',
            fontSize: '18px',
            textDecoration: 'none',
            color: '#333',
          }}
          href="#"
        >
          Link 3
        </a>
        <a
          style={{
            display: 'block',
            marginBottom: '20px',
            fontSize: '18px',
            textDecoration: 'none',
            color: '#333',
          }}
          href="#"
        >
          Link 4
        </a>
      </div>
    </>
  );
};

export default RightSidebar;