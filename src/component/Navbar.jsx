import React from "react";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
  position: sticky;
  top: 0;
  background-color: ${(props) =>
    props.transparent ? "transparent" : "#ffffff"};
  border-bottom: ${(props) =>
    !props.transparent ? "1px solid #dedede" : "none"};
  z-index: 100;
`;

const List = styled.ul`
  gap: 2em;
  display: flex;
  align-items: center;
  list-style-type: none;
  padding-inline-start: 0;
`;

const ListItem = styled.li`
  color: white !important;
`;

export default function Navbar() {
  const location = useLocation();

  return (
    <Nav transparent={location.pathname === "/"}>
      <h1>
        <Link to={"/"}>UI Water</Link>
      </h1>
      <List>
        <ListItem>
          <Link to="/joblistings" style={{ textDecoration: "none" }}>
            <span>Job postings</span>
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/apply" style={{ textDecoration: "none" }}>
            <span>Apply for a Job</span>
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/jobtracking" style={{ textDecoration: "none" }}>
            <span>Track your application</span>
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <span>Admin Login</span>
          </Link>
        </ListItem>
      </List>
    </Nav>
  );
}
