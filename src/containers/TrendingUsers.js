import React from 'react';

import Heading from 'components/Heading';
import Section from 'components/Section';
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

const TrendingUsers = () =>
  (<Section>
    <Heading>Trending users</Heading>
    <CardRow>
      {users.map(({ name }) => <ProfileCard key={name} name={name}/>)}
    </CardRow>
  </Section>);

export default TrendingUsers;
