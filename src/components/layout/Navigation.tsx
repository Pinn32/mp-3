import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  flex: 1;
  max-width: 30%;
  text-align: center;
  padding: 3%;
  background-color: darkseagreen;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: calc(2px + 2vw);
  }

  li {
    padding: 0;
    margin: 0;
  }

  a {
    padding: 5%;
    width: 100%;
    display: block;
    font-family: "DM Serif Text", Times, serif;
    font-size: calc(10px + 0.8vw);
    text-decoration: none;
    color: beige;
    border: calc(1px + 0.2vw) solid darkgreen;
    border-radius: calc(2px + 0.5vw);
    background-color: seagreen;
    &:hover {
      text-decoration: underline;
    }
    &:active {
      background-color: green;
    }
  }
  
  @media (max-width: 750px) {
    max-width: 100%;
    padding: 2%;

    ul {
        flex-direction: row;
        justify-content: center;
        gap: calc(2px + 0.5vw);
    }

    li {
        flex: auto;
    }

    a {
      display: block;
      text-align: center;
      padding: calc(4px + 0.1vh) 3%;
      font-size: calc(10px + 0.3vw);
      box-sizing: border-box;
    }
  }
`

type NavItem = {
  to: string;
  label: string;
};

const links: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/education", label: "Education" },
  { to: "/experiences", label: "Experiences" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/hobbies", label: "Hobbies" }
];

export default function Navigation() {
  return (
    <StyledNav>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
}
