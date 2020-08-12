import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Text from 'components/Text';
import Stars from 'components/Stars';
import Heading from 'components/Heading';

const ProjectBoxContainer = styled.div`
  width: 200px;
  border-radius: 3px;
  padding: ${({ theme }) => theme.spacing.small};
  border: 1px ${({ theme }) => theme.colors.gray} solid;
  border-left: 3px ${({ theme }) => theme.colors.primary} solid;
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

const ProjectBox = ({ name, description, stars }) => (
  <ProjectBoxContainer>
    <Header>
      <Heading as="h3">{name}</Heading>
      <StyledStars count={stars} />
    </Header>
    {/* TODO: wrap text that's too long */ }
    <Text>{description}</Text>
  </ProjectBoxContainer>
);

ProjectBox.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
}

ProjectBox.defaultProps = {
  name: null,
  description: null,
  stars: 0
}

export default ProjectBox;
