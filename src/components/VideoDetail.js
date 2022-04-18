import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import İcon from "./İcon"

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState({});
  const { id } = useParams()

  useEffect(() => {
    const getVideoData = async () => {
      await axios.get(`http://localhost:5000/video/${id}`)
        .then((res) => {
          setVideoDetail(res.data)
          //console.log(res.data);
        })
    }
    getVideoData()
  }, [id])

  return (
    <div className="container">
      <div className="row ">
        <div className="col-sm-12 ">
          <div className="card mb-3 m-auto mt-3" style={{ maxWidth: "800px", height: "auto" }}>
            <div className='position-relative'>
              <span className='bg-light fw-bold p-1 mt-2 ms-3 position-absolute top-0 start-0 rounded'>{videoDetail.createdAt}</span>
              <span className='bg-danger fw-bold text-light p-1 mt-2 mx-3 position-absolute top-0 end-0 rounded'>
                <i className="fa-regular fa-clock"></i> {videoDetail.time}.</span>
            </div>
            <img style={{ height: "350px" }} src={videoDetail.image} className="card-img-top" alt={videoDetail.title} />
            <div className='m-3'>
              <Link style={{ textDecoration: "none" }} className='bg-danger p-2 text-light fw-bold rounded ' to="/soru-cevap">Soru & Cevap</Link>
            </div>
            <div className="card-body">
              <h5 className="card-title">{videoDetail.title}</h5>&nbsp;
              <p className="card-title">YouTube kanalımızın "KATIL" (JOIN) özelliğine üye olan takipçilerimiz bu videonun metin haline ulaşabilecektir:&nbsp;
                <Link style={{ textDecoration: "none" }} className='text-dark' to={`/video/${videoDetail.id}`} onClick={() => window.open("https://www.youtube.com")}>https://www.youtube.com </Link>
              </p>&nbsp;
              <p className="card-text">{videoDetail.desc}</p>
              <div className="ratio ratio-16x9">
                <iframe src={videoDetail.video} title="YouTube video" allowFullScreen></iframe>
              </div>
              <İcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoDetail