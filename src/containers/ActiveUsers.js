import React from 'react';

import Section from 'components/Section';
import Heading from 'components/Heading';
import CardRow from 'components/CardRow';
import ProfileCard from 'components/ProfileCard';

const users = [
  {
    name: 'David',
  },
  {
    name: 'Miguel',
  },
  {
    name: 'Sebastian'
  }
];

const ActiveUsers = () =>
  (<Section>
    <Heading>Active users</Heading>
    <CardRow>
      {users.map(({ name }) => <ProfileCard key={name} name={name}/>)}
    </CardRow>
  </Section>);

export default ActiveUsers;
