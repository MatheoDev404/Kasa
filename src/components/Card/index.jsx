import PropTypes from 'prop-types'
import styled from 'styled-components'
import DefaultPicture from '../../assets/images/logo.svg'
import colors from '../../utils/styles/colors'

const CardImage = styled.img``
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${colors.backgroundCard};
  border-radius: 30px;
  width: 340px;
  height: 340px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #000000;
  }
`
const CardTitle = styled.span`
  color: #ffffff;
  font-size: 18px;
`

function Card({ title, picture }) {
  return (
    <CardWrapper>
      <CardImage src={picture} alt="logement" />
      <CardTitle>title{title}</CardTitle>
    </CardWrapper>
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
