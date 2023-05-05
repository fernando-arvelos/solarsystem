import { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <div>
          {
            planets.map((planet) => (<PlanetCard
              key={ planet.name }
              planetImage={ planet.image }
              planetName={ planet.name }
            />))
          }
        </div>
      </>
    );
  }
}

export default SolarSystem;
