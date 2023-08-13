import styled from "@emotion/styled";


const ListPageDiv = styled.div`
padding-top: 1rem;
padding-bottom: 1rem;
max-width: 756px;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto !important;
@media (max-width: 756px){
    width: 90%;
}
`;



// 스타일드 컴포넌트로 버튼 스타일링하기
const ListPageButton = styled.button`
    width: 756px;
    height: 40px;
    padding: 10px 25px;
    border: 2px solid #000;
    font-weight: bold;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #000;
    color: #fff;
    line-height: 42px;
    padding: 0;
    border: none;
    border-radius: 20px;

  &:hover {
    background: transparent;
    color: #000;
     box-shadow:
     -7px -7px 20px 0px #fff9,
     -4px -4px 5px 0px #fff9,
     7px 7px 20px 0px #0002,
     4px 4px 5px 0px #0001;
     border : solid 1px black;
  }

`;


const GNBDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;

  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;

  .search {
    display: grid;
    min-width: 40%;
    grid-template-columns: 8fr 2fr;
    grid-template-rows: auto;

    input {
      padding: 5px 20px;
      border-radius: 15px 0px 0px 15px;
      border: 0.5px solid #c6c6c6;
      height: 100%;
      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      height: 100%;
      border: 0.5px solid #c6c6c6;
      border-radius: 0px 15px 15px 0px;
      margin-bottom: -1px;
    }
  }

  @media (max-width: 756px) {
    width: 90%;
    .search {
      width: auto;
      input {
        padding: 5px 10px;
        width: 100%;
      }
    }
    .btn {
      font-size: 0.75rem;
      margin-left: 1rem;
    }
  }
`;




export { ListPageDiv, ListPageButton, GNBDiv };
