import React from 'react';

// Components
import CardText from '../../../Global/Cards/CardText/CardText';
// Styles
import Styles from './DelegationSectionTwo.styles';

export default function DelegationSectionTwo(props) {
  const { one, two } = props;

  return (
    <Styles>
      <div className='container'>
        <div className='container__card hidden'>
          {one.map((conference) => (
            <CardText
              key={conference.id}
              name={conference.name}
              corporation={conference.corporation}
              begin={conference.date}
              width={241.8}
              height={conference.height}
              border={conference.border}
            />
          ))}
        </div>

        <div className='container__content'>
          <h1 className='title__section'>Conferencias con expertos</h1>
          <p className='paragraph__section'>
            Genera lazos económicos con organizaciones publicas y privadas de
            alto nivel y establece oportunidades de negocio.
          </p>
        </div>
      </div>

      <div className='container'>
        <div className='container__card'>
          {two.map((conference) => (
            <CardText
              key={conference.id}
              name={conference.name}
              corporation={conference.corporation}
              begin={conference.date}
              width={241.8}
              height={conference.height}
              border={conference.border}
            />
          ))}
        </div>
      </div>
    </Styles>
  );
}
