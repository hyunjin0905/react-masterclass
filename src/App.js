import styled, {keyframes} from "styled-components"


const Father = styled.div`
  display: flex;
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
      <Father as="header">
          <Box bgColor="tomato">
              <Emoji>🤡</Emoji>
          </Box>
      </Father>
  )
}

export default App;
