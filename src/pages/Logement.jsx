import ImageSlider from '../components/ImageSlider'
import Tag from '../components/Tag'
import Collapse from '../components/Collapse'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import ratingStarFull from '../assets/images/full_star.png'
import ratingStarEmpty from '../assets/images/empty_star.png'

function Logement() {
  const { id } = useParams()

  const [logement, setLogement] = useState({})
  const [logementImages, setLogementImages] = useState([])
  const [logementTitle, setLogementTitle] = useState()
  const [logementLocation, setLogementLocation] = useState()
  const [logementTags, setLogementTags] = useState([])
  const [logementHostName, setLogementHostName] = useState()
  const [logementHostPicture, setLogementHostPicture] = useState()
  const [logementRating, setLogementRating] = useState()
  const [logementDescription, setLogementDescription] = useState()
  const [logementEquipement, setLogementEquipement] = useState([])

  useEffect(() => {
    // fetch data
    const fetchLogement = async () => {
      const logements = await (await fetch('../datas/logementList.json')).json()

      // recuperation du logement avec l'id correspondante
      const currentLogement = logements.find((logement) => logement.id === id)

      // on set les datas quand on les a reçues
      // console.log(currentLogement)
      // console.log(currentLogement.pictures)

      setLogement(currentLogement)

      setLogementImages(currentLogement.pictures)
      setLogementTitle(currentLogement.title)
      setLogementLocation(currentLogement.location)
      setLogementTags(currentLogement.tags)
      setLogementHostName(currentLogement.host.name)
      setLogementHostPicture(currentLogement.host.picture)
      setLogementRating(currentLogement.rating)
      setLogementDescription(currentLogement.description)
      setLogementEquipement(currentLogement.equipments)
    }

    fetchLogement()
  }, [id])

  return (
    <div className="Logement">
      <div className="Logement__slider--container">
        {/* <ImageSlider slides={logement.pictures} /> */}
        <ImageSlider slides={logementImages} />
      </div>
      <div className="Logement__infoContainer">
        <h1 className="Logement__infoContainer__title">{logementTitle}</h1>
        <p className="Logement__infoContainer__location">{logementLocation}</p>
        <div className="Logement__infoContainer__tagContainer">
          {logementTags.map((tag, index) => (
            <Tag key={'tag-' + index + id} tagName={tag} />
          ))}
        </div>
      </div>
      <div className="Logement__host--flexContainer">
        <div className="Logement__host--flexContainer__host">
          <p className="Logement__host--flexContainer__host__name">
            {logementHostName}
          </p>
          <img
            className="Logement__host--flexContainer__host__picture"
            src={logementHostPicture}
            alt="hôte du bien immobilié"
          />
        </div>
        <div className="Logement__host--flexContainer__rating">
          {/* {logementRating} */}
          <img src={ratingStarFull} alt="" />
          <img src={ratingStarFull} alt="" />
          <img src={ratingStarFull} alt="" />
          <img src={ratingStarFull} alt="" />
          <img src={ratingStarEmpty} alt="" />
        </div>
      </div>
      <div className="Logement__info--flexContainer">
        <Collapse title="Déscription" content={logementDescription} />
        <Collapse title="Equipement" content={logementEquipement} />
      </div>
    </div>
  )
}

export default Logement
