import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import Modal from './Modal'

const Navbar = () => {
  const openWindow = () => {
    window.open('https://www.patreon.com');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand mx-5" >
          <img className='w-100 rounded' style={{ width: "50px", height: "50px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" alt="..." />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
              <Link to="/" className="nav-link display-7 fw-bold border-end">Anasayfa</Link>
            </li>
            <li className="nav-item">
              <Link to="/soru-cevap" className="nav-link display-7 fw-bold border-end">Soru & Cevap</Link>
            </li>
            <li className="nav-item">
              <Link to="/video" className="nav-link display-7 fw-bold border-end px-3">Videolar</Link>
            </li>
            <li className="nav-item">
              <Link to="/podcast" className="nav-link display-7 fw-bold border-end px-3">Podcast</Link>
            </li>
            <li className="nav-item">
              <Link to="/newsletter" className="nav-link display-7 fw-bold border-end px-3">Newsletter</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link display-7 fw-bold border-end px-3">Hakkımızda</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link display-7 fw-bold px-3">Bize Ulaşın</Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mx-5 ">
            {/* Modal */}
             <Modal />
            <li className="nav-item">
              <Link to="/contact" className="nav-link display-7 fw-bold p-2">Soru Sor</Link>
            </li>
            <button onClick={openWindow} className="btn btn-danger display-7 fw-bold p-2">Destek Ol</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

