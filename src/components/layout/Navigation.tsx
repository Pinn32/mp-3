import { NavLink } from "react-router-dom";

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

function Navigation() {
  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end={link.to === "/"}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
