import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import header from '../assets/img/P.jpeg';
import header from '../assets/img/header-img.svg';


function Banner() {
    const [loopNum, setLoopNum]= useState(0)
    const [isDeleting, setIsDeleting]= useState(false)
    const toRotate = [" Frontend  Developer", "1Webdeveloper ","2developer"]
    const [text, setText]= useState("")
    const [delta, setDelta] = useState(300 - Math.random()* 100)
    const period = 2000

    useEffect(()=>{
        let ticker = setInterval(() => {
            tick()
        }, delta);

        return ()=> {clearInterval(ticker)}
    },[text])

    const tick=() =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta
        }else if(isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
        
    }



  return (
    <section className='banner'>
        <Container>
            <Row className="align-items-center">
                <Col xs ={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi i am morteza`}<br/><span className='wrap'>{text}</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi et doloribus cupiditate consequuntur qui. Impedit ut, qui modi vitae placeat consectetur earum pariatur molestias minima quod maiores minus quasi tenetur?</p>
                    <button onClick={()=>console.log("ok")}>Connect</button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={header} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
    // <div>Banner</div>
  )
}

export default Banner