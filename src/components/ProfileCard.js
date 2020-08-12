import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Heading from 'components/Heading';
import Text from 'components/Text';
import ProjectBox from 'components/ProjectBox';
import Followers from 'components/Followers';

const ProfileCardContainer = styled.div`
  width: 270px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;

const Header = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 50px;
  position: relative;
`;

const HeaderBackgroundImage = styled.img`
  background-color: blue;
  height: 50px;
  width: 100%;
  position: absolute;
  object-fit: cover;
  opacity: 0.2;
`;

const Avatar = styled.img`
  position: absolute;
  height: 56px;
  width: 56px;
  margin-top: 26px;
  left: 50%;
  margin-left: -28px;
  border-radius: 50%;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.small};

  & > h2, & > span {
    margin-bottom: ${({ theme }) => theme.spacing.tiny};
  }
`;

const ProfileCard = ({ name, email, avatar, project }) => (
  <ProfileCardContainer>
    <Header>
      {avatar && <HeaderBackgroundImage src={avatar}/>}
      {avatar && <Avatar src={avatar}/>}
    </Header>
    <PersonalInfo>
      <Heading as="h2">{name}</Heading>
      <Text>{email}</Text>
      <Followers count={343} />
    </PersonalInfo>
    {project && <ProjectBox {...project} />}
  </ProfileCardContainer>
);

ProfileCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
};

ProfileCard.defaultProps = {
  name: '',
  email: '',
  avatar: null,
};

export default ProfileCard;
