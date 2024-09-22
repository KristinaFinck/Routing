import styled from "styled-components";

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`
const ImagesWrapper = styled.div`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  height: 20vh;
  
  & > a {
    align-self: stretch; /* Растягиваем каждый div по высоте */
  }
  & > a > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
const ModelWrapper = styled.div`
  text-align: center;
  
  & > span{
    text-align: center;
  }
  & > img {
    width: 70%;
  }
`
export const S={
    NavWrapper, ImagesWrapper, ModelWrapper
  }