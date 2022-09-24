import styled from "styled-components";
import { Link } from "react-router-dom"
import { useQuery } from "react-query";
import { fetchCoins } from "../api";
import { Helmet } from "react-helmet";

const Container = styled.div`
    padding: 0 20px;
    max-width: 480px;
    margin: 0 auto;
`
const Header = styled.div`
    height: 15vh;
    display: flex;
    justify-content: center;
    align-item: center;
`
const CoinList = styled.ul``
const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
 &:hover {
     color: ${(props) => props.theme.btnColor};
  }
`;
const Title = styled.h1`
    font-size: 48px;
    color:${props => props.theme.btnColor}
`
const Loader = styled.span`
    text-align: center;
    display: block;
`
const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px
`
interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins)

    return (
        <Container>
            <Helmet>
                <title>
                    코인
                </title>
            </Helmet>
            <Header>
                <Title>코인</Title>
            </Header>
            { isLoading
                ? <Loader>Loading...</Loader>
                : <CoinList>
                {data?.slice(0, 100).map(data =>
                    <Coin key={data.id}>
                        <Link to={{
                            pathname: `/${data.id}`,
                            state: {name: data.name}
                        }}>
                            <Img src={`https://coinicons-api.vercel.app/api/icon/${data.symbol.toLowerCase()}`} />
                            {data.name} &rarr;
                        </Link>
                    </Coin>)}
                </CoinList>
            }
        </Container>
    )
}
export default Coins
