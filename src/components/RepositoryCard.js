import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const RepositoryCardContainer = styled.div`
  width: 200px;
`;

const RepositoryCard = ({ name }) => (
  <RepositoryCardContainer>{name}</RepositoryCardContainer>
);

RepositoryCard.propTypes = {
  name: PropTypes.string,
};

RepositoryCard.defaultProps = {
  name: null,
};

export default RepositoryCard;
