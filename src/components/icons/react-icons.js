import { styled } from "styled-components";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

export const Linkedin = styled(AiFillLinkedin)`
font-size: 3rem;
color: #ffffff;
border-radius: 5px;
background-color: #6f6262;
padding: 6px;
margin-bottom: 15px;
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.color};

&:hover{
  cursor: pointer;
}
`

export const Github = styled(AiOutlineGithub)`
font-size: 3rem;
color: #ffffff;
border-radius: 5px;
background-color: #6f6262;
padding: 6px;
margin-bottom: 15px;
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.color};

&:hover{
  cursor: pointer;
}
`