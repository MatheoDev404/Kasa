import Collapse from '../components/Collapse'

function About() {
  return (
    <div className="About">
      <div className="About__banner--container"></div>
      <div className="About__collapse--container">
        <Collapse
          className="About__collapse"
          title="Fiabilité"
          content={
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
          }
        />
        <Collapse
          className="About__collapse"
          title="Respect"
          content={
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          }
        />
        <Collapse
          className="About__collapse"
          title="Service"
          content={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />
        <Collapse
          className="About__collapse"
          title="Résponsabilité"
          content={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
    </div>
  )
}

export default About
