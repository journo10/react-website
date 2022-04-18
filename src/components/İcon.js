import React from 'react'

const İcon = () => {
    return (
        <div className="col-md-12 text-center mt-5">
            <span>
                <button onClick={() => window.open("https://facebook.com")} className="btn p-3 mx-2">
                    <i className="fa-brands fa-facebook text-dark fs-4"></i>
                </button>
                <button onClick={() => window.open("https://youtube.com")} className="btn p-3 mx-2">
                    <i className="fa-brands fa-youtube text-dark fs-4"></i>
                </button>
                <button onClick={() => window.open("https://twitter.com")} className="btn p-3 mx-2">
                    <i className="fa-brands fa-twitter text-dark fs-4"></i>
                </button>
                <button onClick={() => window.open("https://www.instagram.com")} className="btn p-3 mx-2">
                    <i className="fa-brands fa-instagram text-dark fs-4"></i>
                </button>
                <button onClick={() => window.open("https://open.spotify.com")} className="btn p-3 mx-2">
                    <i className="fa-brands fa-spotify text-dark fs-4"></i>
                </button>
            </span>
        </div>
    )
}

export default İcon