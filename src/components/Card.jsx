import PropTypes from 'prop-types'
import DefaultPicture from '../assets/images/logo.svg'

function Card({ title, picture }) {
  return (
    <div>
      <img src={picture} alt="logement" />
      <span>title{title}</span>
    </div>
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
