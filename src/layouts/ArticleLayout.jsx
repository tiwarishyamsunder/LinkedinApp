import React, { useMemo, useState } from "react";
import Article from "../Pages/Article";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import styled from "styled-components";

export default function ArticleLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar currentUser={currentUser} />
      <Container>
      <Article currentUser={currentUser} />
      </Container>
    </div>
  );
}
const Container = styled.div`
  margin-top: 20px;
`;