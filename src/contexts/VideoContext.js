import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [video, setVideo] = useState([])

    useEffect(() => {
        getVideoData()
    }, [])

    const getVideoData = async () => {
        try {
            await axios.get("http://localhost:5000/video")
                .then((res) => {
                    setVideo(res.data)
                    //console.log(res.data);
                }).catch((error) => {
                    console.log(error);
                })
        } catch (error) {
            console.log(error);
        }
    }

    const values = {
        video,
        setVideo
    };

    return (
        <VideoContext.Provider value={values}>{children}</VideoContext.Provider>
    );
};

export const VideoTheme = () => useContext(VideoContext);