import '../styles/HomePage.css'
import banner1 from '../assets/banner-1.webp'
import banner2 from '../assets/banner-2.webp'
import banner3 from '../assets/banner-3.webp'
import { useEffect, useState } from 'react'


const HomePage = () => {
    const [image, setImage] = useState(0);

    const changeImage = (change) => {
        const newImage = image + change;
        if(newImage < 0) setImage(3);
        else if(newImage > 2) setImage(0);
        else setImage(newImage);
    }
    
    useEffect(() => {
        const id = setInterval(() => {
            changeImage(1);
        }, 3000);

        return () => {
            clearInterval(id);
        }
    })

    const bannerStyle = {
        transform: `translate(${-35 - image * window.innerWidth }px)`
    }

    return (
        <div id="home-page">
            <div className="banner">
                <div className="banner-imgs" style={bannerStyle}>
                    <img src={banner1} alt="banner1" />
                    <img src={banner2} alt="banner2" />
                    <img src={banner3} alt="banner3" />
                </div>
                <button className="left" onClick={() => changeImage(-1)}>&lt;</button>
                <button className="right" onClick={() => changeImage(1)}>&gt;</button>
            </div>
        </div>
    )
}

export default HomePage;