import React from 'react';

import Section from 'components/Section';
import CardRow from 'components/CardRow';
import ProfileCard from 'components/ProfileCard';

const users = [
  {
    name: 'David',
    email: 'david@test.com',
    followers: 100,
    avatar: 'https://avatars0.githubusercontent.com/u/3605090?s=460&u=7e6d96f08ad8dfe91b265cc8c658acdead6857b8&v=4',
    project: {
      name: 'First project',
      description: 'First project description',
      stars: 123,
    }
  },
  {
    name: 'Miguel',
    email: 'miguel@test.com',
    followers: 0,
    avatar: 'https://avatars0.githubusercontent.com/u/3605090?s=460&u=7e6d96f08ad8dfe91b265cc8c658acdead6857b8&v=4',
    project: {
      name: 'First project',
      description: 'First project description',
      stars: 123,
    }
  },
  {
    name: 'Sebastian',
    email: 'sbstn@hey.com',
    followers: 0,
    avatar: 'https://avatars0.githubusercontent.com/u/3605090?s=460&u=7e6d96f08ad8dfe91b265cc8c658acdead6857b8&v=4',
    project: {
      name: 'First project',
      description: 'First project description',
      stars: 123,
    }
  }
];

const ActiveUsers = () =>
  (<Section title="Active users">
    <CardRow>
      {users.map((user) => <ProfileCard key={user.name} {...user} />)}
    </CardRow>
  </Section>);

export default ActiveUsers;
