import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeTheme } from '../contexts/HomeContext'


const SoruCevap = () => {
  const [readMore] = useState(false);
  const { homeData } = HomeTheme()
  return (
    <div className="container mt-3" >
      <div className="row">
        <div className="col-sm-12" style={{ maxWidth: "1025px" }}>
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Soru & Cevap</h5>
                  <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <span>Lorem ipsum dolor sit amet &nbsp;
                      <Link className='text-dark fw-bold' to="/contact" >sorabilirsiniz!</Link>
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          {homeData.map((hd) => (
            <div key={hd.id} className="card mb-3" style={{ maxWidth: "1000px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <div className='position-relative'>
                    <span className='bg-light fw-bold p-1 mt-2 ms-3 position-absolute top-0 start-0 rounded'>{hd.createdAt}</span>
                    <span className='bg-danger fw-bold text-light p-1 mt-2 mx-5 position-absolute top-0 end-0 rounded'>
                      <i className="fa-regular fa-clock"></i> {hd.time}.</span>
                  </div>
                  <img style={{ width: "300px", height: "210px" }} src={hd.image} className="img-fluid rounded-start" alt={hd.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{hd.title}</h5>
                    <p className="card-text text-muted">{readMore ? hd.desc : `${hd.desc.substring(0, 150)}...`}</p>
                    <Link to={`/home/${hd.id}`} className="btn btn-secondary btn-sm text-center w-100 mt-5 opacity-50">okumaya devam et</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SoruCevap