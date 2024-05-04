import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projetos/vilanova.jpeg";
import projImg2 from "../assets/img/projetos/focomix.jpeg";
import projImg3 from "../assets/img/projetos/v2farma.jpeg";
import projImg4 from "../assets/img/projetos/infracommerce.png";
import projImg5 from "../assets/img/projetos/magento4.jpg";
import projImg6 from "../assets/img/projetos/soitic.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Vila Nova",
      description: "Senior Software Developer",
      imgUrl: projImg1,
    },
    {
      title: "Focomix",
      description: "Senior Software Developer",
      imgUrl: projImg2,
    },
    {
      title: "V2Farma",
      description: "Senior Software Developer",
      imgUrl: projImg3,
    },
    {
      title: "Infracommerce",
      description: "Integração Marketplace",
      imgUrl: projImg4,
    },
    {
      title: "Magento",
      description: "Integração Marketplace",
      imgUrl: projImg5,
    },
    {
      title: "SOITIC",
      description: "Full Stack",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Explore aqui os melhores projetos ao longo da minha vida. Esta é uma coleção que reflete meu crescimento, paixões e esforços ao longo do tempo. Sinta-se à vontade para mergulhar fundo e descobrir mais sobre cada um deles. Cada projeto tem uma história para contar e estou animado para compartilhá-las com você. Aproveite a jornada e espero que encontre inspiração e conhecimento ao longo do caminho.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Melhores JOBS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
