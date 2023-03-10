import Card from '../components/Card'
import { logementList } from '../datas/logementList'

function Home() {
  return (
    <div className="Home">
      <h1 className="Home__title">
        <span className="Home__title--text">
          Chez vous,
          <span className="Home__title--text__br">partout et ailleurs</span>
        </span>
      </h1>
      <section className="Home__gallery">
        {logementList.map((logement) => (
          <Card
            key={logement.id}
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
