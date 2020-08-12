import React from 'react';

import Section from 'components/Section';
import Heading from 'components/Heading';
import CardRow from 'components/CardRow';
import RepositoryCard from 'components/RepositoryCard';

const repositories = [
  {
    name: 'Repo A',
  },
  {
    name: 'Repo B',
  },
  {
    name: 'Repo C'
  },
  {
    name: 'Repo D'
  }
];

const TopRepositories = () =>
  (<Section>
    <Heading>Top Repositories</Heading>
    <CardRow>
      {repositories.map(({ name }) => <RepositoryCard key={name} name={name}/>)}
    </CardRow>
  </Section>);

export default TopRepositories;
