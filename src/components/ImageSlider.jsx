import { useState } from 'react'
import PropTypes from 'prop-types'

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  slides.forEach((pictureUrl) => {
    const img = new Image()
    img.src = pictureUrl
  })

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
      {slides.length > 1 && (
        <div className="Slider__arrow">
          <div className="Slider__arrow--previous" onClick={goToPrevious}>
            ❰
          </div>
          <div className="Slider__arrow--next" onClick={goToNext}>
            ❱
          </div>
        </div>
      )}
      <div className="Slider__image" style={slideStylesWidthBackground}>
        {slides.length > 1 && (
          <div className="Slider__dotContainer">
            {slides.map((slide, index) => (
              <div
                className="Slider__dotContainer--dot"
                key={index}
                onClick={() => goToSlide(index)}
              >
                ●
              </div>
            ))}
          </div>
        )}
        {slides.length > 1 && (
          <div className="Slider__indexContainer">
            <p className="Slider__indexContainer--index">
              {currentIndex + 1}/{slides.length}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

ImageSlider.propTypes = {
  slides: PropTypes.array.isRequired,
}

ImageSlider.defaultProps = {
  slides: [],
}

export default ImageSlider
