import { RouterProvider, createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ResearchPage from "./pages/ResearchPage";
import HobbiesPage from "./pages/HobbiesPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
