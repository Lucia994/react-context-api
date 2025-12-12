import { NavLink } from "react-router-dom";
const navLinks = [
  {
    title: "HomePage",
    path: "/",
  },
  {
    title: "About us",
    path: "/about-us",
  },
  {
    title: "Products",
    path: "/products",
  },
];
export default function NavBar() {
  return (
    <>
      <ul className="d-flex list-unstyled align-items-center px-4 py-3">
        {navLinks.map((link, index) => (
          <li className="me-3" key={index}>
            <NavLink to={link.path}>{link.title}</NavLink>
          </li>
        ))}
        {/* <button type="button" className="btn btn-success">
          Budget Mode
        </button> */}
      </ul>
    </>
  );
}
