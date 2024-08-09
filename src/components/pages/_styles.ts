import styled from "styled-components";

const NavWrapper = styled.div`
  margin-left: 20px;
  font-size: 1em;


  & > a {
    text-decoration: none;
    color: darkgrey;
  }

  & > a.active {

    color: black;
  }

  & > a:hover {
    color: steelblue;
  }
`
const Header = styled.h1`
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`
const Body = styled.body`
  display: flex;
`
const Nav = styled.nav`
  background-color: white;
  min-height: 400px;
  width: 30%;
  color:#282c34;
  font-size: 30px;
`
const Content = styled.div`
  background-color:#282c34;
  min-height: 400px;
  width: 70%;
  color: white;
  font-size: 30px;
`
const Footer = styled.footer`
  background-color: #000000;
  width: 100%;
  height: 120px;
  text-align: center;
  color: white;
`
export const s = {
    NavWrapper, Header, Body, Nav, Content, Footer
}