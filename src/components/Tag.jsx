import PropTypes from 'prop-types'

function Tag({ tagName }) {
  return (
    <div className="Tag">
      <p className="Tag__tagName">{tagName}</p>
    </div>
  )
}

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
}

Tag.defaultProps = {
  tagName: '',
}

export default Tag
