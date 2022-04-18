import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { HomeTheme } from '../contexts/HomeContext'
import Category from './Category'

const Home = () => {
  const [readMore] = useState(false);
  const {homeData} = HomeTheme()

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-sm-7 ">
             {homeData.map((hd) =>(
                 <div key={hd.id} className="card mb-3" style={{ width: "36rem" }}>
                 <div className='position-relative'>
                   <span className='bg-light fw-bold p-1 m-3 position-absolute top-0 start-0 rounded'>{hd.createdAt}</span>
                   <span className='bg-danger fw-bold text-light p-1 m-3 position-absolute top-0 end-0 rounded'>
                     <i className="fa-regular fa-clock"></i> {hd.time}.</span>
                 </div>
                 <img src={hd.image} className="card-img-top" alt={hd.title} ></img>
                 <div className="card-body">
                   <h5 className="card-title">{hd.title}</h5>
                   <p className="card-text text-muted">{readMore ? hd.desc :`${hd.desc.substring(0, 200)}...`}</p>
                   <Link to={`/home/${hd.id}`} className="btn btn-secondary btn-sm text-center w-100 opacity-50">okumaya devam et</Link>
                 </div>
               </div>
             ))}
        </div>
        <div className="col-sm-5 bg-light" style={{ width: "18rem", height:"1100px"}}>
          <Category />
        </div>
      </div>
    </div>
  )
}

export default Home