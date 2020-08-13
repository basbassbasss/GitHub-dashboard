import React from 'react';

import Section from 'components/Section';
import CardRow from 'components/CardRow';
import ProfileCard from 'components/ProfileCard';
import gql from "graphql-tag";
import { useQuery } from '@apollo/client';
import dayjs from 'dayjs';

const ACTIVE_USERS = gql`
  query activeUsers($query: String!) {
    search(first: 3, query: $query, type: USER) {
      userCount
      nodes {
        ... on User {
          id
          name
          email
          avatarUrl
          url
          followers {
            totalCount
          }
          repositories(first: 1, orderBy: {field: STARGAZERS, direction: DESC}) {
            nodes {
              name
              description
              stargazers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`;

const ActiveUsers = () => {
  const oneWeekAgo = dayjs().subtract(1, 'year').format('YYYY-MM-D');
  const today = dayjs().format('YYYY-MM-D');
  const { loading, error, data } = useQuery(ACTIVE_USERS, {
    variables: {
      query: `type:user created:>${oneWeekAgo} created:<${today} followers:>100 followers:<500`,
    }
  });

  return (<Section
    title="Active Users"
    loading={loading}
    error={error}
  >
    <CardRow>
      {data?.search?.nodes?.map(({ id, name, email, avatarUrl, url, followers, repositories }) => <ProfileCard
        key={id}
        name={name}
        email={email}
        avatar={avatarUrl}
        url={url}
        followers={followers?.totalCount}
        project={{
          name: repositories?.nodes[0]?.name,
          description: repositories?.nodes[0]?.description,
          stars: repositories?.nodes[0]?.stargazers?.totalCount,
        }}
      />)}
    </CardRow>
  </Section>);
};

export default ActiveUsers;
