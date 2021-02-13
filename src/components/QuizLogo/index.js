import styled from 'styled-components';

const QuizLogo = styled.img`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  @media screen and (max-width: 500px) {
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: center;
  }
`;

export default QuizLogo;