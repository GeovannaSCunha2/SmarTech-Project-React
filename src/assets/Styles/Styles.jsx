import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: rgb(226, 226, 226);
  color: rgb(61, 61, 61);
  padding: 80px;
  text-align: center;
`;


export const StyledNC = styled.main`
    font-size: 1em;
    text-align: center;

    section {
    display: flex;
    justify-content: center;
    align-items: center;
    }

    #ibm img {
    width: 35%;
    }

    #content p {
    margin-left: -10%;
    justify-content: center;
    align-items: center;
    text-align: center;
    }
    
  @media screen and (max-width: 850px) {
    section {
    display: block;
    justify-content: center;
    align-items: center;
    }
}
`;
