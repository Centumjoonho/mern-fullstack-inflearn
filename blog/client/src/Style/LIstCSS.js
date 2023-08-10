import styled from "@emotion/styled";
import { Link } from 'react-router-dom';

const ListDiv = styled.div`
padding-top: 1rem;
padding-bottom: 1rem;
max-width: 756px;
margin: 0 auto !important;
@media (max-width: 756px){
    width: 90%;
}
`;

const ListItem = styled.div`
    width: 100%
    height: auto;
    min-height: 120px;
    background: #ffffff;
    margin-top: 5vh;
    margin-bottom: 5vh;
    padding: 20px;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
     0px 15px 12px rgba(0,0,0,0.1);
    a{
        color: black;
        text-decoration: none;
        .title{
            font-weight: bold;
            font-size: 1.3rem;
          }
      }
      .author{
        display: flex;
        align-items: center;
        margin: 0 20px 20px 0;
    
      }
      .moment{
        font-size: 12px;
        font-weight: bold;
        color: darkgrey;
        display: flex;
        flex-direction: row-reverse;
      }

`;

// 스타일드 컴포넌트로 버튼 스타일링하기
const ListButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003d80;
  }
`;

// 이동 링크 스타일링
const ListLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;




export { ListDiv, ListItem, ListButton, ListLink };
