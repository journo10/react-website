import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import İcon from "./İcon"

const PodcastDetail = () => {
  const [podcastDetail, setPodcastDetail] = useState({});
  const { id } = useParams()

  useEffect(() => {
    const getPodcastData = async () => {
      await axios.get(`http://localhost:5000/podcast/${id}`)
        .then((res) => {
          setPodcastDetail(res.data)
          //console.log(res.data);
        })
    }
    getPodcastData()
  }, [id])

  return (
    <div className="container">
      <div className="row ">
        <div className="col-sm-12 ">
          <div className="card mb-3 m-auto mt-3" style={{ maxWidth: "800px", height: "auto" }}>
            <div className='position-relative'>
              <span className='bg-light fw-bold p-1 mt-2 ms-3 position-absolute top-0 start-0 rounded'>{podcastDetail.createdAt}</span>
              <span className='bg-danger fw-bold text-light p-1 mt-2 mx-3 position-absolute top-0 end-0 rounded'>
                <i className="fa-regular fa-clock"></i> {podcastDetail.time}.</span>
            </div>
            <img style={{ height: "350px" }} src={podcastDetail.image} className="card-img-top" alt={podcastDetail.title} />
            <div className='m-3'>
              <Link style={{ textDecoration: "none" }} className='bg-danger p-2 text-light fw-bold rounded ' to="/soru-cevap">Soru & Cevap</Link>
            </div>
            <div className="card-body">
              <h5 className="card-title">{podcastDetail.title}</h5>&nbsp;
              <p className="card-title">YouTube kanalımızın "KATIL" (JOIN) özelliğine üye olan takipçilerimiz bu videonun metin haline ulaşabilecektir:&nbsp;
                <Link style={{ textDecoration: "none" }} className='text-dark' to={`/podcast/${podcastDetail.id}`} onClick={() => window.open("https://www.youtube.com")}>https://www.youtube.com</Link>
              </p>&nbsp;
              <p className="card-text">{podcastDetail.desc}</p>
              <div className="ratio ratio-16x9 mt-5">
                <iframe className='rounded' style={{ height: "385px" }} src={podcastDetail.podcast} title="YouTube video" allowFullScreen></iframe>
              </div>
              <İcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PodcastDetail