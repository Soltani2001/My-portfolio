import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import js from '../assets/img/javascript.png'
import react from '../assets/img/react.png'
import css from '../assets/img/css.png'
import html from '../assets/img/html.png'

function Skills() {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className="skills" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium vel consequuntur voluptates veniam. Quibusdam sunt suscipit architecto, veritatis aperiam exercitationem eum dolor ducimus, porro magni modi quos tenetur maxime quod!</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={js} alt="" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="" />
                                <h5>HTML</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
       
  </section>
  )
}

export default Skills