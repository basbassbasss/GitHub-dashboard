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
  color: ${({ color, theme }) => theme.colors[color] ?? theme.colors.primary};
`;

const Followers = ({ className, count, color }) => (
  <FollowersContainer className={className}>
    <StyledFollowerIcon color={color} />
    <Text as="span" color={color}>
      <Text weight="medium" as="span" color={color}>{count}</Text> followers
    </Text>
  </FollowersContainer>
);

Followers.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  color: PropTypes.string,
};

Followers.defaultProps = {
  className: null,
  count: 0,
  color: null,
};

export default Followers;
