import { useState } from 'react'
import arrow from '../assets/images/arrow.png'

function Collapse({ title, content }) {
  const [openCollapse, setOpenCollapse] = useState(false)
  const [rotateCollapse, setRotateCollapse] = useState('arrowup')
  const [collapseHeight, setCollapseHeight] = useState('0px')

  function toggleCollapse() {
    setOpenCollapse(!openCollapse ? true : false)
    setCollapseHeight(openCollapse === true ? '0px' : '250px')
    setRotateCollapse(openCollapse ? 'arrow--up' : 'arrow--down')
  }

  function formatContent(content) {
    if (typeof content === 'string') {
      return <p className="Collapse__content--text">{content}</p>
    } else {
      return (
        <ul className="Collapse__content--list">
          {content.map((index) => {
            return <li key={index}> {index}</li>
          })}
        </ul>
      )
    }
  }
  return (
    <div className="Collapse">
      <button className="Collapse__header" onClick={toggleCollapse}>
        <h2 className="Collapse__header__title">{title}</h2>
        <img
          className={`Collapse__header__arrow ${rotateCollapse}`}
          src={arrow}
          alt=""
        />
      </button>
      <div
        className="Collapse__content"
        style={{ height: `${collapseHeight}` }}
      >
        {formatContent(content)}
      </div>
    </div>
  )
}

export default Collapse
