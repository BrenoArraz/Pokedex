import { styled } from "styled-components";

export const SearchbarContainer = styled.div`
text-align: center;
padding-top: 20px;
display: flex;
justify-content: center;
`

export const Searchbar = styled.div`
background-color: rgba(117, 190, 218, 0.0);
`
export const SearchbarInput = styled.input`
padding: 10px;
box-shadow: 0 2px 2px #000;
border-radius: 3px;
border: none;
margin-right: 20px;
`

export const SearchButton = styled.button`
background-color: #0e6f9f;
border: none;
border-radius: 10px;
height: 40px;
color: #fff;
padding: 10px 12px;

&:hover{
  cursor: pointer;
}
`