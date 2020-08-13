import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import FollowerIcon from 'assets/icons/FollowerIcon';
import Text from 'components/Text';

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

const Followers = ({ className, count }) => (
  <FollowersContainer className={className}>
    <StyledFollowerIcon/>
    <Text as="span">
      <Text weight="medium" as="span">{count}</Text> followers
    </Text>
  </FollowersContainer>
);

Followers.propTypes = {
  count: PropTypes.number,
};

Followers.defaultProps = {
  count: 0,
};

export default Followers;
