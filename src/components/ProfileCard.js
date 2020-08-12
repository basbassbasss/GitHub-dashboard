import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ProfileCardContainer = styled.div`
  width: 270px;
`;

const ProfileCard = ({ name }) => (
  <ProfileCardContainer>{name}</ProfileCardContainer>
);

ProfileCard.propTypes = {
  name: PropTypes.string,
};

ProfileCard.defaultProps = {
  name: ''
};

export default ProfileCard;
