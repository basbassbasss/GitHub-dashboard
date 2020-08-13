import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Text from 'components/Text';
import Stars from 'components/Stars';
import Heading from 'components/Heading';

const ProjectBoxContainer = styled.div`
  border-radius: ${({ theme }) => theme.radius.main};
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px ${({ theme }) => theme.colors.gray} solid;
  border-left: 3px ${({ theme }) => theme.colors.primary} solid;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.tiny};
`;

const StyledStars = styled(Stars)`
  margin-left: auto;
`;

const ProjectBox = ({ name, description, stars, className }) => (
  <ProjectBoxContainer className={className}>
    <Header>
      <Heading as="h3" size="medium" weight="semi-bold">{name}</Heading>
      <StyledStars count={stars} />
    </Header>
    <Text>{description}</Text>
  </ProjectBoxContainer>
);

ProjectBox.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  className: PropTypes.string,
}

ProjectBox.defaultProps = {
  name: null,
  description: null,
  stars: 0
}

export default ProjectBox;
