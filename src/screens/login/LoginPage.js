import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const LoginPage = () => {
  const [error, setError] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleEmail = (e) => {
    setError("");
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    setError("");
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    if (!email || !password) {
      setError("Field Cant be Empty");
    } else alert("This Button is Clicked");
  };
  return (
    <div className='login-container'>
      <Card
        style={{
          width: "30vw",
          backgroundColor: "#fff6db",
          borderColor: "#ff900520",
        }}
      >
        <Card.Body
          style={{
            padding: 20,
            marginTop: 20,
          }}
        >
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label
                style={{
                  fontSize: 14,
                }}
              >
                Email address
              </Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => handleEmail(e)}
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label
                style={{
                  fontSize: 14,
                }}
              >
                Password
              </Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => handlePass(e)}
              />
            </Form.Group>
            {error && (
              <p
                style={{
                  color: "red",
                }}
              >
                {error}
              </p>
            )}
          </Form>
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Button
              style={{ width: "90vw" }}
              variant='primary'
              type='submit'
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginPage;
