import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import img1 from './imgs/img1.jpg'
import img2 from './imgs/img2.jpg'
import img3 from './imgs/img3.jpg'
import img4 from './imgs/img4.png'
import img5 from './imgs/img5.png'


export default function Slider() {

    const dataSlider = [
        {
          id: 1,
          title: "Unasp",
          imgSrc: img1
        },
        {
          id: 2,
          title: "Pincel",
          imgSrc: img2
        },
        {
          id: 3,
          title: "Informática",
          imgSrc: img3
        },
        {
          id: 4,
          title: "Kit de Maquiagem",
          imgSrc: img4
        },
        {
          id: 5,
          title: "Delineado",
          imgSrc: img5
        },
      ];

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider">
            {dataSlider.map((item, index) => {
                console.log("item", item, index)
                return (
                    <div
                    key={item.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                        src={item.imgSrc}
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}
