import ImageSlider from '../components/ImageSlider'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Logement() {
  const { id } = useParams()

  const [logementImages, setlogementImages] = useState([])

  const getData = () => {
    fetch('../datas/logementList.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (logements) {
        const currentLogement = logements.find((logement) => logement.id === id)
        setlogementImages(currentLogement.pictures)
      })
  }

  useEffect(() => {
    getData()
  })

  return (
    <div className="Logement">
      <div className="Logement__slider--container">
        <ImageSlider slides={logementImages} />
      </div>
    </div>
  )
}

export default Logement
