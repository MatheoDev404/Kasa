import PropTypes from 'prop-types'
import DefaultPicture from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

function Card({ title, picture, id }) {
  return (
    <Link to={{ pathname: `/logement/${id}` }} className="Card">
      <img className="Card__img" src={picture} alt="logement" />
      <span className="Card__title">{title}</span>
    </Link>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
