import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Table,
  Container,
  ModalBody,
  Modal,
  FormGroup,
  ModalFooter,
} from "reactstrap";
const data = [
  { id: 1, name: "Felix", lastName: "Miranda", correo: "feedmite@gmail.com" },
  { id: 2, name: "Dina", lastName: "Sierra", correo: "dinita@gmail.com" },
  { id: 3, name: "Rocio", lastName: "Miranda", correo: "romite@gmail.com" },
  { id: 4, name: "Sofia", lastName: "Lopez", correo: "sofilote@gmail.com" },
];

function App() {
  const initialState = {
    data: data,
    form: {
      id: "",
      name: "",
      lastName: "",
      email: "",
    },
    modalInsertar: false,
  };

  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState({
      ...state,
      form: {
        ...state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  const showModal = () => {
    setState({ ...state, modalInsertar: true });
  };
  const hideModal = () => {
    setState({ ...state, modalInsertar: false });
  };
  console.log(state.modalInsertar);
  console.log(state.data);

  return (
    <>
      <Container>
        <h1>My crud: </h1>
        <Button color="success" onClick={() => showModal()}>
          Insert new person
        </Button>
        <br />
        <hr />
        <br />
        <Table>
          <tbody>
            {state.data.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.lastName}</td>
                <td>{person.correo}</td>
                <td>
                  <Button color="primary">Editar</Button>
                  {"   "}
                  <Button color="danger">Eliminar</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal isOpen={state.modalInsertar}>
        <ModalBody>
          <FormGroup>
            <label>Id: </label>
            <input
              type="text"
              className="form-control"
              readOnly
              value={state.data.length + 1}
            />
          </FormGroup>

          <FormGroup>
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Last Name: </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <label>Email: </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button>Insertar</Button>
          <Button onClick={() => hideModal()}>Ocultar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default App;
