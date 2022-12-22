import { useState, useEffect } from "react";
import { Container, Table, Row, Col, Spinner, Carousel, Button, Modal, Form } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import api from "./Api";


const App = () => {
  const [partners, setPartners] = useState([]);
  const [loadingPartners, setLoadingPartners] = useState(false);

  useEffect(() => {
    // Load Partners
    setLoadingPartners(true);

    api({
      method: "get",
      url: "/api/partners",
    }).then((response) => {
      setPartners(response.data);
      setLoadingPartners(false);
    });


  }, []);

  // Load Students 
  const loadPartners = () => {
    setLoadingPartners(true);
    api({
      method: "get",
      url: "/api/partners",
    }).then((response) => {
      setPartners(response.data);
      setLoadingPartners(false);
    });
  }


  return (
    <div className="App">
      <Header/>
      {/* <HeaderImg title="Microsoft Technology Center Israel" subTitle="Multi Environment Application" /> */}


      <Container>
        <Row className="box">
          <h2>
            {" "}
            <img
              src={process.env.PUBLIC_URL + "images/container_apps.jpg"}
              alt="kubernetes"
              width="100"
              height="70"
              className="d-inline-block align-top"
            />{" "}
            Loads from Azure Container App{" "}
            <img
              src={process.env.PUBLIC_URL + "images/container_apps.jpg"}
              alt="kubernetes"
              width="100"
              height="70"
              className="d-inline-block align-top"
            />
          </h2>
          <Col>
            <h3 className="kubernetes_title">Partners</h3>
            {loadingPartners ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
              <Table striped bordered hover variant="dark" className="box">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Project</th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((partner, index) => {
                    return (
                      <tr key={index}>
                        <td>{partner.id}</td>
                        <td>{partner.email}</td>
                        <td>{partner.name}</td>
                        <td>{partner.project}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Button variant="outline-secondary" onClick={loadPartners}>Load Partners</Button>
              </>
            )}
          </Col>
        </Row>
    
    
      </Container>
    </div>
  );
};

export default App;
