import styled from "styled-components";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

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
     color: ${(props) => props.theme.accentColor};
  }
`;
const Title = styled.h1`
    font-size: 48px;
    color:${props => props.theme.accentColor}
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
interface CoinInterface {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string,
}

function Coins() {
    const [coin , setCoin] = useState<CoinInterface[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            console.log(json.slice(0,100))
            setCoin(json.slice(0, 100));
            setLoading(false);
        })();
    }, []);

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            { loading
                ? <Loader>Loading...</Loader>
                : <CoinList>
                {coin.map(data =>
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
