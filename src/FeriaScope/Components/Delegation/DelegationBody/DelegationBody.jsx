import React from 'react';

// Components
import DelegationSectionOne from '../DelegationSections/DelegationSectionOne/DelegationSectionOne';
import DelegationSectionTwo from '../DelegationSections/DelegationSectionTwo/DelegationSectionTwo';
import DelegationSectionTree from '../DelegationSections/DelegationSectionTree/DelegationSectionTree';
import DelegationSectionFour from '../DelegationSections/DelegationSectionFour/DelegationSectionFour';
import DelegationSectionFive from '../DelegationSections/DelegationSectionFive/DelegationSectionFive';
import DelegationSectionSix from '../DelegationSections/DelegationSectionSix/DelegationSectionSix';
// Helper
import { cards, conferencesOne } from './DelegationBody.helper';
import { conferencesTwo, conferencesTree } from './DelegationBody.helper';
// Custom Hooks
import useDelegationConferenceQuery from '../../../Utils/customHooks/useDelegationsQuery';
// Styles
import Styles from './DelegationBody.styles';

export default function DelegationBody() {
  const { conferenceList } = useDelegationConferenceQuery();

  return (
    <Styles>
      <DelegationSectionOne cards={cards} />
      <DelegationSectionTwo
        list={conferenceList}
        one={conferencesOne}
        two={conferencesTwo}
        tree={conferencesTree}
      />
      <DelegationSectionTree />
      <DelegationSectionFour />
      <DelegationSectionFive />
      <DelegationSectionSix />
    </Styles>
  );
}
