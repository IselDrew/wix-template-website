import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { paragraphs } from "../ResumeData"

class HomePage extends Component {
  render() {
    const sliderSettings = {
      slideToShow: 1,
      dots: false,
      arrows: true,
      autoplay: true,
    }

    const paragraphElements = paragraphs.map(item => (
      // const paragraphElements = this.props.paragraphs.map(item => (
      <div className="paragraph-element" key={item.id}>
        <img className="paragraph-image" src={item.img} alt="ParagraphImage" />
        <div className="paragraph-text">{item.text}</div>
      </div>
    ))

    return (
      <div>
        <Slider {...sliderSettings}>
          <div>
            <img
              src="https://i.pinimg.com/originals/72/35/18/723518ecde953dff2f96822948e94cbc.jpg"
              alt="slide"
            />
          </div>
          <div>
            <img
              src="https://cdnb.artstation.com/p/assets/images/images/001/764/185/large/yanchong-lim-fger.jpg?1452393000"
              alt="slide"
            />
          </div>
          <div>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/745/98/536/diablo-iii-dark-digital-art-painting-wallpaper-f960982df13a6d6bb6e758bf60a176cd.jpg"
              alt="slide"
            />
          </div>
        </Slider>

        <div className="paragraphs">{paragraphElements}</div>
      </div>
    )
  }
}

export default HomePage
