import React from "react";
// css-in-js
import '../App.css'
import styled from 'styled-components'
// import catImage from '../asset/cat_image.jpg'
import Button from 'react-bootstrap/Button'
import { useNavigate, useSearchParams } from "react-router-dom";
import { ResultData } from '../asset/data/resultdata'

const Result = () => {
    const navigate = useNavigate()

    const [searchParams] = useSearchParams()

    const mbti = searchParams.get('mbti')
    // 최종적으로 도출한 결과
    const [resultData, setResultData] = React.useState({})

    React.useEffect (() => {
        const result = ResultData.find((s) => s.best === mbti)
        setResultData(result)
    }, [mbti])

    console.log(resultData)

    const handleClickButton = () => {
        // useHistory
        navigate('/')
    }

    return (
        <Wrapper className="App">
            <Header>예비집사 판별기</Header>
            <Title>결과보기</Title>
            <LogoImage>
                <img src={resultData.image} className="rounded-circle" width={350} height={350} />
            </LogoImage>
            <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다. </Desc>
            <Button onClick={handleClickButton}>테스트 다시하기</Button>
        </Wrapper>
    )
}

export default Result;

const Wrapper = styled.div`
    height : 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Header = styled.div`
    font-size: 40px;
    
`

const Title = styled.div`
    font-size: 30px;
    margin-top: 40px;
`

const LogoImage = styled.div`
    margin-top: 10px;
`

const Desc = styled.div`
    font-size: 20px;
    margin-top: 20px;
`
