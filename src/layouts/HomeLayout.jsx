import React,{useMemo,useState} from "react";
import Home from "../Pages/Home";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import Leftside from "../components/common/Leftside";
import styled from "styled-components";
import Rightside from "../components/common/Rightside";

export default function HomeLayout() {
const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
        <Topbar currentUser={currentUser} />
        <Container>
          <Leftside currentUser={currentUser}/>
          <Home currentUser={currentUser}/>
          <Rightside/>
        </Container>
    </div>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 6fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 15px;
  row-gap: 15px;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

