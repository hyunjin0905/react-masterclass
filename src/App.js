import styled from "styled-components"


const Father = styled.div`
  display: flex;
`
const Box = styled.div`
   background-color: ${props => props.bgColor};
   width: 100px;
   height: 100px;
`

const Circle = styled(Box)`
  background-color: ${props => props.bgColor};
  border-radius: 50px;
`

const Btn = styled.button`
  background-color: red;
  width: 20px;
  height: 20px;
  color: white;
`

function App() {
  return(
      <Father as="header">
        <Box bgColor="teal"/>
        <Btn as="a">Log in</Btn>
        <Circle bgColor="tomato"/>
      </Father>
  )
}

export default App;
