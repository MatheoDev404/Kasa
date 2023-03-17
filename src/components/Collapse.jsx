import { useState } from 'react'
import arrow from '../assets/images/arrow.png'

function Collapse({ title, content }) {
  const [openCollapse, setOpenCollapse] = useState(false)
  const [rotateCollapse, setRotateCollapse] = useState('arrowup')

  function toggleCollapse() {
    setOpenCollapse(!openCollapse ? true : false)
    setRotateCollapse(openCollapse ? 'arrow--up' : 'arrow--down')
  }

  function formatContent(content) {
    if (content !== null) {
      if (typeof content === 'string') {
        return <p className="">{content}</p>
      } else {
        return (
          <ul>
            {content.map((index) => {
              return <li key={index}> {index}</li>
            })}
          </ul>
        )
      }
    } else formatContent(content)
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
      <div>{formatContent(content)}</div>
    </div>
  )
}

export default Collapse
