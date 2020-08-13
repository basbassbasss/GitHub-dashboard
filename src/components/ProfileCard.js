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
  border-radius: ${({ theme }) => theme.radius.main};
  box-shadow: ${({ theme }) => theme.shadows.main};
`;

const Header = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  margin-left: ${({ theme }) => theme.spacing.medium};
  margin-right: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  width: calc(100% - 48px);

  & > h2, & > span {
    margin-bottom: ${({ theme }) => theme.spacing.tiny};
  }
`;

const Seperator = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  height: 1px;
  margin: ${({ theme }) => theme.spacing.small} 0;
`;

const StyledProjectBox = styled(ProjectBox)`
  width: 100%;
`;

const ProfileCard = ({ name, email, followers, avatar, project }) => (
  <ProfileCardContainer>
    <Header>
      {avatar && <HeaderBackgroundImage src={avatar}/>}
      {avatar && <Avatar src={avatar}/>}
    </Header>
    <Content>
      <Heading as="h2" weight="bold">{name}</Heading>
      <Text as="span">{email}</Text>
      {followers >= 0 && <Followers count={followers}/>}
      <Seperator/>
      {project && <StyledProjectBox {...project} />}
    </Content>
  </ProfileCardContainer>
);

ProfileCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  followers: PropTypes.number,
  avatar: PropTypes.string,
};

ProfileCard.defaultProps = {
  name: '',
  email: '',
  followers: null,
  avatar: null,
};

export default ProfileCard;
