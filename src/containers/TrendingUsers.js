import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

import Section from 'components/Section';
import CardRow from 'components/CardRow';
import ProfileCard from 'components/ProfileCard';

const TRENDING_USERS = gql`
  query trendingUsers($query: String!) {
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

const TrendingUsers = () => {
  const { loading, error, data } = useQuery(TRENDING_USERS, {
    variables: {
      query: `type:user`,
    }
  });

  return (<Section
    title="Trending Users"
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

export default TrendingUsers;
