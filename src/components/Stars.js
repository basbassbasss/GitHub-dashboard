import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import StarIcon from 'assets/icons/StarIcon';

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledStarIcon = styled(StarIcon)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.orange};
`;

const Count = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.orange};
`;

const Stars = ({ className, count }) => (
  <StarsContainer className={className}>
    <StyledStarIcon />
    <Count>{count}</Count>
  </StarsContainer>
);

Stars.propTypes = {
  count: PropTypes.number,
};

Stars.defaultProps = {
  count: 0,
};

export default Stars;
