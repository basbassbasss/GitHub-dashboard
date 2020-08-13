import React from 'react';
import PropTypes from 'prop-types';

import styled from '@emotion/styled';
import Heading from 'components/Heading';

const SectionContainer = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const Section = ({ title, children }) => (
  <SectionContainer>
    <StyledHeading as="h1" size="large" weight="semi-bold">{title}</StyledHeading>
    {children}
  </SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

Section.defaultProps = {
  title: null,
};

export default Section;
