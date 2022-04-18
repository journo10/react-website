import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PodcastTheme } from '../contexts/PodcastContext'


const Podcast = () => {
  const [readMore] = useState(false);
  const { podcast } = PodcastTheme()
  return (
    <div className="container mt-3" >
      <div className="row">
        <div className="col-sm-12" style={{ maxWidth: "1025px" }}>
          <div className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Podcastler</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla.
                    Volutpat lacus laoreet non curabitur gravida arcu. A scelerisque purus semper eget duis at tellus at. <Link onClick={() => window.open("https://anchor.fm")} className='text-dark fw-bold' to="/podcast">Spotify</Link> ,
                    <Link onClick={() => window.open("https://www.google.com")} className='text-dark fw-bold' to="/podcast">Google Podcasts</Link> veya&nbsp;
                    <Link onClick={() => window.open("https://podcasts.apple.com")} className='text-dark fw-bold' to="/podcast">Apple Podcast</Link> gibi diğer platformlardan da izleyebilirsiniz.
                    Tüm platformlara <Link onClick={() => window.open("https://anchor.fm")} className='text-dark fw-bold' to="/podcast">buradan</Link> ulaşabilirsiniz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          {podcast.map((pc) => (
            <div key={pc.id} className="card mb-3" style={{ maxWidth: "1000px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <div className='position-relative'>
                    <span className='bg-light fw-bold p-1 mt-2 ms-3 position-absolute top-0 start-0 rounded'>{pc.createdAt}</span>
                    <span className='bg-danger fw-bold text-light p-1 mt-2 mx-5 position-absolute top-0 end-0 rounded'>
                      <i className="fa-regular fa-clock"></i> {pc.time}.</span>
                  </div>
                  <img src={pc.image} className="img-fluid rounded-start" alt={pc.title} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{pc.title}</h5>
                    <p className="card-text text-muted">{readMore ? pc.desc : `${pc.desc.substring(0, 150)}...`}</p>
                    <Link to={`/podcast/${pc.id}`} className="btn btn-secondary btn-sm text-center w-100 mt-5 opacity-50">okumaya devam et</Link>
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

export default Podcast