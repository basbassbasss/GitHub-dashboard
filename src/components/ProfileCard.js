import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Heading from 'components/Heading';
import Text from 'components/Text';
import ProjectBox from 'components/ProjectBox';
import Followers from 'components/Followers';
import CardButton from 'components/CardButton';

const ProfileCardContainer = styled.div`
  width: 270px;
  background-color: ${({ backgroundColor, theme }) => theme.colors[backgroundColor] ?? theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.main};
  box-shadow: ${({ theme }) => theme.shadows.main};
  position: relative;
`;

const Header = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${({ withoutBackground, theme }) => withoutBackground ? '' : theme.colors.primary};
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

const BackgroundImage = styled.div`
  background-image: url(${({ avatar }) => avatar});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
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

  z-index: 1;
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

const StyledCardButton = styled(CardButton)`
  margin-top: 20px;
  z-index: 1;
`;

const ProfileCard = ({ name, email, followers, avatar, project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderPersonalInfo = () => {
    return (
      <>
        <Heading as="h2" weight="bold" color={isHovered && 'white'}>{name}</Heading>
        <Text as="span" color={isHovered && 'white'}>{email}</Text>
        {followers >= 0 && <Followers count={followers} color={isHovered && 'white'}/>}
      </>
    );
  }

  const renderProfileCard = () => {
    if (isHovered) {
      return (
        <>
          <BackgroundImage avatar={avatar}/>
          <Header withoutBackground>
            <Avatar src={avatar}/>
          </Header>
          <Content>
            {renderPersonalInfo()}
          </Content>
          <StyledCardButton/>
        </>
      );
    }

    return (
      <>
        <Header>
          {avatar && <HeaderBackgroundImage src={avatar}/>}
          {avatar && <Avatar src={avatar}/>}
        </Header>
        <Content>
          {renderPersonalInfo()}
          <Seperator/>
          {project && <StyledProjectBox {...project} />}
        </Content>
      </>
    );
  }

  return (<ProfileCardContainer
    backgroundColor={isHovered && 'primary'}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {renderProfileCard()}
  </ProfileCardContainer>);
};

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
