import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { VideoTheme } from '../contexts/VideoContext'


const Video = () => {
  const [readMore] = useState(false);
  const { video } = VideoTheme()
  return (
    <div className="container mt-3" >
      <div className="row">
        <div className="col-sm-12" style={{ maxWidth: "1025px" }}>
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Videolar</h5>
                  <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;
                   <Link onClick={() =>window.open("https://youtube.com")} className='text-dark fw-bold' to="/video" >YouTube kanalımıza</Link>&nbsp;göz atabilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          {video.map((v) => (
            <div key={v.id} className="card mb-3" style={{ maxWidth: "1000px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <div className='position-relative'>
                    <span className='bg-light fw-bold p-1 mt-2 ms-3 position-absolute top-0 start-0 rounded'>{v.createdAt}</span>
                    <span className='bg-danger fw-bold text-light p-1 mt-2 mx-5 position-absolute top-0 end-0 rounded'>
                      <i className="fa-regular fa-clock"></i> {v.time}.</span>
                  </div>
                  <img style={{ width: "300px", height: "210px" }} src={v.image} className="img-fluid rounded-start" alt={v.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{v.title}</h5>
                    <p className="card-text text-muted">{readMore ? v.desc : `${v.desc.substring(0, 100)}...`}</p>
                    <Link to={`/video/${v.id}`} className="btn btn-secondary btn-sm text-center w-100 mt-4 opacity-50">okumaya devam et</Link>
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

export default Video