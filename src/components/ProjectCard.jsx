import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    // <h1>hi</h1>
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
          <h4>{title}</h4>
        <div className="proj-txtx">
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
