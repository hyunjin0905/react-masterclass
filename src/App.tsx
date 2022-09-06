import styled, {keyframes} from "styled-components"

const Title = styled.h1`
    color: ${(props => props.theme.textColor)}
`
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor}
  
`;
const RotateAnimation = keyframes`
    0%{
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50% {
        border-radius: 100px;
    }
    100% {
      transform: rotate(360deg);
        border-radius: 50px;
    }
`;

const Emoji = styled.span`
    font-size: 36px;
`
const Box = styled.div`
   background-color: ${props=> props.bgColor};
   width: 100px;
   height: 100px;
   display: flex;
   justify-content: center;
   align-items: center;
   animation: ${RotateAnimation} 1s linear infinite;
   ${Emoji} :hover {
        font-size: 98px;
   }
   
   
`;


function App() {
  return(
      <Wrapper>
          <Title>hello</Title>
          <Box bgColor="tomato">
              <Emoji>🤡</Emoji>
          </Box>
      </Wrapper>
  )
}

export default App;
