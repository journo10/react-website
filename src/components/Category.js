import React, { useEffect, useState } from 'react'
import axios from "axios"
import { HomeTheme } from '../contexts/HomeContext'
import { Link } from "react-router-dom"

const Category = () => {
    const [cat, setCat] = useState([])
    const { homeData } = HomeTheme()
    useEffect(() => {
        getCategoryData()
    }, [])

    const getCategoryData = async () => {
        try {
            await axios.get("http://localhost:5000/category")
                .then((res) => {
                    setCat(res.data)
                    //console.log(res.data);
                }).catch((error) => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <ul className="list-group m-3 text-center opacity-50">
                {cat.map((c) => (
                    <button key={c.id} className="btn list-group-item list-group-item-action list-group-item-secondary">{c.name}</button>
                ))}
            </ul>
            <ul className="list-group m-3">
                <h6>EN ÇOK OKUNANLAR</h6>
                {homeData.map((hd) => (
                    <li key={hd.id} style={{ border: "none", outline: "none" }} className="list-group-item border-bottom">
                        <Link className='text-dark' style={{textDecoration:"none"}} to={`/home/${hd.id}`}> {hd.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Category