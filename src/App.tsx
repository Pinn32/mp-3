import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import HomePage from "./components/main/HomePage";
import EducationPage from "./components/main/EducationPage";
import ExperiencesPage from "./components/main/ExperiencesPage";
import ProjectsPage from "./components/main/ProjectsPage";
import ResearchPage from "./components/main/ResearchPage";
import HobbiesPage from "./components/main/HobbiesPage";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
`

// styled page-wrapper
const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 80vw;
  background-color: seagreen;
  min-height: 150vh;
  
  @media (max-width: 750px) {
    max-width: 85vw;
    padding: 1% 3%;
  }
`;

// styled nav-main container
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-height: 150vh;
  width: 100%;

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    max-width: 100vw;
    min-height: 150vh;
  }
`;

// styled main
const StyledMain = styled.main`
  font-family: "Zalando Sans", Arial, sans-serif;
  flex: 1;
  padding: 3% 4% 25% 4%;
  max-width: 70%;
  min-height: 150vh;
  color: #240807;
  background-color: beige;
  
  @media (max-width: 750px) {
    max-width: 100%;
    padding: 4% 5% 20% 5%;
  }
`;

function Root() {
  return (
    <>
      <GlobalStyle/>
      <StyledWrapper>
        <Header/>
        <StyledContainer>
          <Navigation/>
          <StyledMain>
            <Outlet/>
          </StyledMain>
        </StyledContainer>
        <Footer/>
      </StyledWrapper>
    </>
  );
}

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "education", element: <EducationPage /> },
      { path: "experiences", element: <ExperiencesPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "research", element: <ResearchPage /> },
      { path: "hobbies", element: <HobbiesPage /> }
    ]
  }
];
const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
