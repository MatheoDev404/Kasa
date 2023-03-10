import { useState } from 'react'

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const slideStylesWidthBackground = {
    backgroundImage: `url(${slides[currentIndex]})`,
  }

  return (
    <div className="Slider">
      <div className="Slider__arrow">
        <div className="Slider__arrow--previous" onClick={goToPrevious}>
          ❰
        </div>
        <div className="Slider__arrow--next" onClick={goToNext}>
          ❱
        </div>
      </div>
      <div className="Slider__image" style={slideStylesWidthBackground}>
        <div className="Slider__dotContainer">
          {slides.map((slide, slideIndex) => (
            <div
              className="Slider__dotContainer--dot"
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
        <div className="Slider__indexContainer">
          <p className="Slider__indexContainer--index">
            {currentIndex + 1}/{slides.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
