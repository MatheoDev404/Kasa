import '../../styles/Home.css'
import Card from '../../components/Card'
import { logementList } from '../../datas/logementList'

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Home</h1>

        {logementList.map((logement) => (
          <Card
            key={logement.id}
            title={logement.name}
            picture={logement.cover}
          />
        ))}
      </header>
    </div>
  )
}

export default Home
