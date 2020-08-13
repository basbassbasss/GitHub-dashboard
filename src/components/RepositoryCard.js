import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Heading from 'components/Heading';
import Stars from 'components/Stars';
import Text from 'components/Text';

const RepositoryCardContainer = styled.div`
  width: 140px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  border-radius: ${({ theme }) => theme.radius.main};
  box-shadow: ${({ theme }) => theme.shadows.main};
  border-top: 3px solid ${({ borderColor }) => borderColor};
`;

const StyledStars = styled(Stars)`
  margin: ${({ theme }) => theme.spacing.small} 0;
`;

const StyledText = styled(Text)`
  text-align: center;
`;

const RepositoryCard = ({ name, stars, description, borderColor }) => (
  <RepositoryCardContainer borderColor={borderColor}>
    <Heading as="h2">{name}</Heading>
    <StyledStars count={stars}/>
    <StyledText>{description}</StyledText>
  </RepositoryCardContainer>
);

RepositoryCard.propTypes = {
  name: PropTypes.string,
  stars: PropTypes.number,
  description: PropTypes.string,
  borderColor: PropTypes.oneOf(['blue', 'cyan', 'lime', 'yellow'])
};

RepositoryCard.defaultProps = {
  name: null,
  stars: 0,
  description: null,
  borderColor: 'blue',
};

export default RepositoryCard;
