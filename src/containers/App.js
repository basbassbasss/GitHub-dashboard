import React from 'react';
import styled from '@emotion/styled';

import TrendingUsersContainer from "containers/TrendingUsers";
import TopRepositories from "containers/TopRepositories";
import ActiveUsers from "containers/ActiveUsers";

import 'styles/style.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 860px;
  margin-bottom: 15px;
`;

const App = () => {
  return (
    <Container>
      <Content>
        <TrendingUsersContainer/>
        <ActiveUsers/>
        <TopRepositories/>
      </Content>
    </Container>
  );
}

export default App;
