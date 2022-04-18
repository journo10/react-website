import React, { useState } from 'react'
import { VideoTheme } from '../contexts/VideoContext';
import { Link } from "react-router-dom"

const Modal = () => {
    const [search, setSearch] = useState("");
    const { video } = VideoTheme()
    return (
        <>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <div className="modal fade mt-5" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog" >
                    <div className="modal-content" >
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body" >
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                type="text"
                                className="form-control"
                                placeholder="Ara" />
                        </div>
                        <div className="container px-4" data-bs-dismiss="modal"  >
                            <div className="row">
                                <div className="list-group">
                                    {video.filter((v) => v.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((hd) => (
                                        <h6 key={hd.id} >
                                            <Link to={`/video/${hd.id}`} className="list-group-item list-group-item-action" >{hd.title}</Link>
                                        </h6>))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal





