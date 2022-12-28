import styled from 'styled-components';
import Ellipse from '../../assets/icons/Ellipse.png'
import Sunrise from '../../assets/icons/sunrise.png'
import Sunset from '../../assets/icons/sunset.png'
import Rainy from '../../assets/icons/rainy.png'

export default function WeatherContents() {
	return (
		<>
			<S_WeatherWrap>
				<S_Title>today's weather</S_Title>
				<S_Cont>
					<S_LeftCont>
						<S_Weather>날씨</S_Weather>
						<S_WeathrImg src={Rainy} alt='날씨이미지'></S_WeathrImg>
						<S_WeatherInfo>강우</S_WeatherInfo>
					</S_LeftCont>
					<S_RightCont>
						<S_Temp>
							<li>
								<S_HighestTemp>최고기온</S_HighestTemp>
								<S_HighestCount>24<S_Celsius src={Ellipse} /></S_HighestCount>

							</li>
							<li>
								<S_MinimumTemp>최저기온</S_MinimumTemp>
								<S_MinimumCount>27<S_Celsius src={Ellipse} /></S_MinimumCount>

							</li>
							<li>
								<S_TempCurrent>현재기온</S_TempCurrent>
								<S_TempCurrentCount>29<S_Celsius src={Ellipse} /></S_TempCurrentCount>

							</li>
						</S_Temp>

						<S_Location>
							<S_ForecastTime>3월 22일 17:00시</S_ForecastTime>
							<S_CurrentLocation>강원도 양양군 산계리 30-1</S_CurrentLocation>
						</S_Location>

						<S_Sun>
							<S_Sunrise>
								<S_SunriseImg src={Sunrise} alt=''></S_SunriseImg>
								<S_SunInfo>일출 : 07:45</S_SunInfo>
							</S_Sunrise>
							<S_Sunset>
								<S_SunsetImg src={Sunset} alt=''></S_SunsetImg>
								<S_SunInfo>일몰 : 17:20</S_SunInfo>
							</S_Sunset>
						</S_Sun>
					</S_RightCont>
				</S_Cont>
			</S_WeatherWrap>
		</>
	);
}


const S_WeatherWrap = styled.div`
width: 358px;
height: 166px;
margin: 10px;
border-radius: 5px;
background-color: #FEFCF3;
font-weight: 400;
font-size: 14px;
line-height: 14px;
color: #5C6145;
`

const S_Title = styled.p`
display: flex;
width:111px;
justify-content: center;
margin-left: 124px;
padding: 1px;
font-size: 12px;
box-sizing: border-box;
border-bottom: 1px solid #5C6145;
`

const S_LeftCont = styled.div`
margin-top:20px;
width: 68px;
height: 120px;
`
const S_Weather = styled.span`
font-size: 14px;
margin-left:28px;
margin-bottom:6px;
display:inline-block;
`
const S_WeathrImg = styled.img`
margin-left:9px;
width: 64px;
height: 64px;
`

const S_WeatherInfo = styled.span`
font-size: 12px;
margin-left:29px;
margin-top:12px;
display:inline-block;
`

const S_RightCont = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top:20px;
`
const S_Temp = styled.ul`
    //background: salmon;
    grid-column-start : 1;
    grid-column-end : 3;
    display: flex;
    justify-content: space-between;
    & li {
        display: flex;
        flex-direction: column;
        //background: white;
    }
`

const S_HighestTemp = styled.span`
margin-left:28px;
`

const S_MinimumTemp = styled.span`
`

const S_HighestCount = styled.span`
font-size: 30px;
line-height: 25px;
margin-left:32px;
margin-top:18px;
`

const S_MinimumCount = styled.span`
font-size: 30px;
line-height: 25px;
margin-left:4px;
margin-top:18px;
`

const S_TempCurrentCount = styled.span`
font-size: 30px;
line-height: 25px;
margin-left:4px;
margin-top:18px;
`

const S_Celsius = styled.img`
width: 9px;
height: 9px;
`
const S_TempCurrent = styled.span`
margin-right:28px;
`

const S_Location = styled.div`
    //background: green;
`

const S_ForecastTime = styled.p`
margin-left:28px;
margin-top:18px;
`

const S_CurrentLocation = styled.p`
margin-left:28px;
margin-top:10px;
margin-bottom:10px;
width:161px;
height: 13px;
color: #93928C;
font-size: 12px;
`

const S_Sun = styled.div`
    //background: yellow;
`

const S_Sunrise = styled.div`
display: flex;
margin-left:4px;
margin-top:18px;
`
const S_Sunset = styled.div`
display: flex;
margin-left:4px;
margin-top:10px;
margin-bottom:10px;
`

const S_SunInfo = styled.div`
margin-left:6px;
width: 66px;
height: 14px;
font-size: 12px;
line-height: 14px;
color: #FB5C00;
opacity: 0.6;
`

const S_SunriseImg = styled.img`
width: 14px;
height: 14px;
`

const S_SunsetImg = styled.img`
width: 14px;
height: 14px;
`

const S_Cont = styled.div`
    display: flex;
    justify-content: space-between;
`