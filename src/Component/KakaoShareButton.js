import React from "react";
import Button from 'react-bootstrap/Button'
const {Kakao} = window;

const KakaoShareButton = () =>{
    const url = "https://catmbti0829.netlify.app"
    const resultUrl = window.location.href;
    console.log('aaa',resultUrl,url)
    React.useEffect(()=>{
        Kakao.cleanup()
        Kakao.init("9f353f4b2155ea47128863355b687761")
        console.log(Kakao.isInitialized)
    },[])

    const shareKakao = () =>{
      Kakao.Share.sendDefault({
          objectType: 'feed',
          content: {
            title: '예비집사 판별기 결과',
            description: `예비 집사님이 고양이를 키운다면 가장 잘 맞는 고양이는?`,
            imageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
            link: {
              mobileWebUrl: resultUrl,
              webUrl : resultUrl
            },
          },
          buttons: [
            {
              title: '나도 테스트 하러가기',
              link: {
                mobileWebUrl: url,
                webUrl: url
              },
            }
          ]
      });
    }
    return(<Button style={{marginLeft:10}} onClick={shareKakao}>카카오톡 공유하기</Button>)
}
export default KakaoShareButton