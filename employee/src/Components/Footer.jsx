import React from 'react'

function Footer() {
  return (
    <div>
        <div className="wrapper">
        <div className="content">
        </div>
        <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container text-center">
        <span>© {new Date().getFullYear()} Employee Management System</span>
        </div>
        </footer>
        </div>
    </div>
  )
}

export default Footer


