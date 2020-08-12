import React from 'react';
import styled from '@emotion/styled';

import TrendingUsersContainer from "containers/TrendingUsers";
import TopRepositories from "containers/TopRepositories";
import ActiveUsers from "containers/ActiveUsers";

import 'styles/style.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 860px;
  margin-top: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const TopBar = styled.div`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const App = () => {
  return (
    <Container>
      <TopBar />
      <Content>
        <TrendingUsersContainer/>
        <ActiveUsers/>
        <TopRepositories/>
      </Content>
    </Container>
  );
}

export default App;
