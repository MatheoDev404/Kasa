import Card from '../components/Card'
import { useState, useEffect } from 'react'

function Home() {
  const [logements, setlogements] = useState([])

  const getData = () => {
    fetch('datas/logementList.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (logements) {
        setlogements(logements)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="Home mainContainer">
      <h1 className="Home__title">
        <span className="Home__title--text">
          Chez vous,
          <span className="Home__title--text__br">partout et ailleurs</span>
        </span>
      </h1>
      <section className="Home__gallery">
        {logements.map((logement) => (
          <Card
            key={'card-' + logement.id}
            id={logement.id}
            title={logement.title}
            picture={logement.cover}
          />
        ))}
      </section>
    </div>
  )
}

export default Home
