import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import dayjs from 'dayjs';

import Section from 'components/Section';
import CardRow from 'components/CardRow';
import RepositoryCard from 'components/RepositoryCard';

const TOP_REPOSITORIES = gql`
  query topRepos($query: String!) {
    search(first: 4, query: $query, type: REPOSITORY) {
      nodes {
        ... on Repository {
          id
          name
          description
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

const borderColors = ['blue', 'cyan', 'lime', 'yellow'];

const TopRepositories = () => {
  const oneYearAgo = dayjs().subtract(1, 'year').format('YYYY-MM-D');
  const { loading, error, data } = useQuery(TOP_REPOSITORIES, {
    variables: {
      query: `created:>${oneYearAgo} sort:stars`,
    }
  });

  return (<Section
    title="Top Repositories"
    loading={loading}
    error={error}
  >
    <CardRow>
      {data?.search?.nodes?.map(({ id, name, description, stargazers }, index) => <RepositoryCard
        key={id}
        borderColor={borderColors[index]}
        name={name}
        description={description}
        stars={stargazers?.totalCount}
      />)}
    </CardRow>
  </Section>);
}

export default TopRepositories;
