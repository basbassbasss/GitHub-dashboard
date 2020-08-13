import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

import styled from '@emotion/styled';
import Heading from 'components/Heading';
import theme from 'styles/theme';

const SectionContainer = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

const SectionContent = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Section = ({ title, loading, error, children }) => {
  const renderContent = () => {
    if(loading) {
      return <SectionContent><Loader type="Circles" width="40px" height="40px" color={theme.colors.darkGray} /></SectionContent>;
    }

    if(error) {
      return <SectionContent>Something went wrong while loading data from GitHub.</SectionContent>;
    }

    return children;
  }
  return (
    <SectionContainer>
      <StyledHeading as="h1" size="large" weight="semi-bold">{title}</StyledHeading>
      {renderContent()}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

Section.defaultProps = {
  title: null,
  loading: false,
  error: null,
};

export default Section;
