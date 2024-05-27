import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
  Table,
} from "react-bootstrap";
import Sidebar from "./sideBar";

function AdminDashboard() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Categories</Nav.Link>
              <Nav.Link href="#action3">Settings</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search content..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid>
        <Row>
          <Col xs={2}>
            <Sidebar />
          </Col>
          <Col xs={10}>
            <div className="mt-4">
              <h2>Add new post</h2>
              <Button variant="primary" className="me-2">
                Add Content
              </Button>
              <Button variant="secondary">Settings</Button>
            </div>

            <Row className="mt-4">
              <Col>
                <div className="bg-light p-3 rounded mb-3">
                  <h4>Total Sales</h4>
                  <p>$2,456</p>
                </div>
              </Col>
              <Col>
                <div className="bg-light p-3 rounded mb-3">
                  <h4>Total Expenses</h4>
                  <p>$3,326</p>
                </div>
              </Col>
              <Col>
                <div className="bg-light p-3 rounded mb-3">
                  <h4>Total Visitors</h4>
                  <p>5,325</p>
                </div>
              </Col>
              <Col>
                <div className="bg-light p-3 rounded mb-3">
                  <h4>Total Orders</h4>
                  <p>1,326</p>
                </div>
              </Col>
            </Row>

            <div className="mt-4">
              <h3>Form title</h3>
              <p>
                Sed tortor, sed velit ridiculus ipsum pharetra lacus odio
                gravida augue enim.
              </p>
              <div className="alert alert-danger" role="alert">
                Senectus malesuada suspendisse bibendum elit amet vitae.
              </div>
            </div>

            <Table striped bordered hover className="mt-4">
              <thead>
                <tr>
                  <th>Table Title</th>
                  <th>Table Title</th>
                  <th>Table Title</th>
                  <th>Table Title</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Etiam purus in</td>
                  <td>Curabitur donec duis</td>
                  <td>Morbi pharetra, accumsan</td>
                  <td>
                    <Button variant="primary" className="me-2">
                      Edit
                    </Button>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminDashboard;
