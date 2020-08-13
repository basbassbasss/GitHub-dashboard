import React from 'react';

import Section from 'components/Section';
import CardRow from 'components/CardRow';
import RepositoryCard from 'components/RepositoryCard';

const repositories = [
  {
    name: 'Repo A',
    description: 'This is my hello world project! This is my hello world project! This is my hello world project!',
    stars: 123132,
  },
  {
    name: 'Repo B',
    description: 'This is my hello world project! This is my hello world project! This is my hello world project!',
    stars: 121
  },
  {
    name: 'Repo C',
    description: 'This is my hello world project! This is my hello world project! This is my hello world project!',
    stars: 976
  },
  {
    name: 'Repo D',
    description: 'This is my hello world project! This is my hello world project! This is my hello world project!',
    stars: 1238
  }
];

const borderColors = ['blue', 'cyan','lime', 'yellow'];

const TopRepositories = () =>
  (<Section title="Top Repositories">
    <CardRow>
      {repositories.map((repository, index) => <RepositoryCard key={repository.name} borderColor={borderColors[index]} {...repository} />)}
    </CardRow>
  </Section>);

export default TopRepositories;
