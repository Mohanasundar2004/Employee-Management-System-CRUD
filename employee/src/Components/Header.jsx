// import React from 'react'

// function Header() {
//   return (
//     <>
//     <div >
//         <header>
//             <nav className='navbar navbar-dark bg-dark '>
//                 <a className='navbar-brand text-align:center' href="#">Employee Management System</a>
//             </nav>
//         </header>
//     </div>
//     </>
//   )
// }

// export default Header



import React from 'react';

function Header() {
  return (
    <header>
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <div className="container-fluid">
          <a className='navbar-brand mx-auto' href="#">
            <i className="bi bi-people-fill me-2"></i>
            Employee Management System
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
