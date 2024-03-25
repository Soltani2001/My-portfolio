import { useState } from "react"
import { Col, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

function Contact() {
    const initialDetailes = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [form, setForm] = useState(initialDetailes);
    const [button, setButton] = useState("Send");
    const [stateus, setStatus] = useState({});
    const onFormUpdate = (category, value)=>{
        setForm({
            ...form,
            [category]: value
        })
    }
    const submitHandeler = async (e) => {
        e.preventDefault();
        setButton("Sending...");
        let response = await fetch("http://localhost:5173/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(form),
        });
        setButton("Send");
        let result = await response.json();
        setFormDetails(initialDetailes);
        if (result.code == 200) {
          setStatus({ succes: true, message: 'Message sent successfully'});
        } else {
            console.log("object");
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        }
    };

    

  return (
    <section className="contact" id="connect">
        <Row className="align-items-center">
            <Col md={6}>
                <img src={contactImg} alt="contact" />
            </Col>
            <Col  md={6}>
                <h2>Get In Touch</h2>
                <form onSubmit={submitHandeler}>
                    <Row>
                        <Col sm={6}  className="px-1">
                            <input type="text" onChange={(e)=> onFormUpdate('firstName', e.target.value)} value={form.firstName} placeholder="First Name"/>
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="text" onChange={(e)=> onFormUpdate('lastName', e.target.value)} value={form.lastName} placeholder="Last Name"/>
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="email" onChange={(e)=> onFormUpdate('email', e.target.value)} value={form.email} placeholder="Email"/>
                        </Col>
                        <Col sm={6} className="px-1">
                            <input type="tel" onChange={(e)=> onFormUpdate('phone', e.target.value)} value={form.phone} placeholder="Phone Number"/>
                        </Col>
                        <Col>
                        <textarea onChange={(e)=> onFormUpdate('message', e.target.value)} row="6" value={form.message} placeholder="Message" />
                        <button type="submit"><span>{button}</span></button>
                        </Col>
                        {
                            stateus.message && 
                            <Col>
                            <p className={stateus.message === false ? 'danger' : "soccess"}>{stateus.message}</p>
                            </Col>
                        }
                    </Row>
                </form>
            </Col>
        </Row>
    </section>
  )
}

export default Contact