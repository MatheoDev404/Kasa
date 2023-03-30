import ImageSlider from '../components/ImageSlider'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'

import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import ratingStarFull from '../assets/images/full_star.png'
import ratingStarEmpty from '../assets/images/empty_star.png'

function Logement() {
  const navigate = useNavigate()
  const params = useParams()

  const [logement, setLogement] = useState(null)

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
        const existingLogement = logements.find(
          (logement) => logement.id === params.id
        )
          ? logements.find((logement) => logement.id === params.id)
          : 'not exist'
        return existingLogement
      })
      .then((existingLogement) => {
        if (existingLogement === 'not exist') {
          // a changer avec un navigate to dans le return
          console.log('not exist')
          navigate('/page404')
        } else if (logement === null) {
          setLogement(existingLogement)
        }
      })
  }

  useEffect(() => {
    getData()
  })

  return (
    <>
      {logement != null ? (
        <div className="Logement">
          <div className="Logement__slider--container">
            <ImageSlider slides={logement.pictures} />
          </div>
          <div className="Logement__infoContainer">
            <h1 className="Logement__infoContainer__title">{logement.title}</h1>
            <p className="Logement__infoContainer__location">
              {logement.location}
            </p>
            <div className="Logement__infoContainer__tagContainer">
              {logement.tags.map((tag, index) => (
                <Tag key={'tag-' + index} tagName={tag} />
              ))}
            </div>
          </div>
          <div className="Logement__host--flexContainer">
            <div className="Logement__host--flexContainer__host">
              <p className="Logement__host--flexContainer__host__name">
                {logement.host.name}
              </p>
              <img
                className="Logement__host--flexContainer__host__picture"
                src={logement.host.picture}
                alt="hôte du bien immobilié"
              />
            </div>
            <div className="Logement__host--flexContainer__rating">
              {/* {logement.rating} */}
              <img src={ratingStarFull} alt="" />
              <img src={ratingStarFull} alt="" />
              <img src={ratingStarFull} alt="" />
              <img src={ratingStarFull} alt="" />
              <img src={ratingStarEmpty} alt="" />
            </div>
          </div>
          <div className="Logement__info--flexContainer">
            <Collapse
              className="Logement__info--flexContainer__description"
              title="Déscription"
              content={logement.description}
            />
            <Collapse title="Equipement" content={logement.equipments} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Logement
