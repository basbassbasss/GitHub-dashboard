import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import FollowerIcon from 'assets/icons/FollowerIcon';

const FollowersContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFollowerIcon = styled(FollowerIcon)`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Count = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Followers = ({ className, count }) => (
  <FollowersContainer className={className}>
    <StyledFollowerIcon />
    <Count>{count} followers</Count>
  </FollowersContainer>
);

Followers.propTypes = {
  count: PropTypes.number,
};

Followers.defaultProps = {
  count: 0,
};

export default Followers;
