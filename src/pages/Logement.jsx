import ImageSlider from '../components/ImageSlider'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Logement() {
  const { id } = useParams()

  const [logement, setLogement] = useState({})
  // const [logementImages, setLogementImages] = useState([])

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
        setLogement(currentLogement)

        // for (let logement of logements) {
        //   if (logement.id === id) {
        //     setLogementImages(logement.pictures)
        //   }
        // }
      })
  }

  useEffect(() => {
    getData()
  })

  return (
    <div className="Logement">
      <div className="Logement__slider--container">
        <ImageSlider slides={logement.pictures} />
        {/* <ImageSlider slides={logementImages} /> */}
      </div>
    </div>
  )
}

export default Logement
