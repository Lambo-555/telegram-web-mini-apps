import { useState } from "react";
import { Form, Button, ListGroup, Col, Container, Row } from "react-bootstrap";

function App() {
  const [list, setList] = useState<string[]>([]);
  const [task, setTask] = useState<string>("");

  const addTodo = () => {
    if (task.length && task !== " ") {
      setList([...list, task]);
      setTask("");
    }
  };

  const doneTodo = (index: number) => {
    setList(list.filter((item, itemIndex) => index !== itemIndex));
  };

  return (
    <Container>
      <Row className="pb-4">
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>TODO</Form.Label>
              <Form.Control
                onChange={(e) => setTask(e.target.value)}
                value={task || ""}
                type="text"
                placeholder="Enter task"
              />
              <Form.Text className="text-muted">
                What do you want to be done?
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="button" onClick={addTodo}>
              Add!
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {(!!list.length &&
              list.map((item, index) => {
                return (
                  <ListGroup.Item key={index} style={{display: "flex", justifyContent: "space-between"}}>
                    {item}{" "}
                    <Button
                      variant="success"
                      size="sm"
                      type="button"
                      onClick={() => doneTodo(index)}
                    >
                      done
                    </Button>
                  </ListGroup.Item>
                );
              }))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
