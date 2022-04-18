import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import {Link} from "react-router-dom"

const HomeDetail = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState({})

  useEffect(()=>{
      const  getDetailData = async () =>{
         await axios.get(`http://localhost:5000/home/${id}`)
         .then((res) =>{
           setDetail(res.data)
           //console.log(res.data);
         })
        }
        getDetailData()
  },[id])
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card mb-3 m-auto mt-3" style={{maxWidth:"800px"}}>
          <div className='position-relative'>
                    <span className='bg-light fw-bold p-1 mt-2 ms-3 position-absolute top-0 start-0 rounded'>{detail.createdAt}</span>
                    <span className='bg-danger fw-bold text-light p-1 mt-2 mx-3 position-absolute top-0 end-0 rounded'>
                      <i className="fa-regular fa-clock"></i> {detail.time}.</span>
                  </div>
            <img style={{height:"350px"}} src={detail.image} className="card-img-top" alt={detail.title}/>
            <div className='m-3'>
              <Link style={{textDecoration:"none"}} className='bg-danger p-2 text-light fw-bold rounded ' to="/soru-cevap">Soru & Cevap</Link>
            </div>
            <div className="card-body">
              <h5 className="card-title">{detail.title}</h5>
              <p className="card-text">{detail.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDetail