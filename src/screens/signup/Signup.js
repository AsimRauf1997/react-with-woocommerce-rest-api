import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "react-spinners/ClipLoader";
import Message from "../../components/Message";
import { register } from "../../store/actions/userAction";

const Signup = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const { error, loading, success } = userInfo;
  const navigate = useNavigate();
  const [err, setErr] = useState();
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleEmail = (e) => {
    setErr("");
    setEmail(e.target.value);
  };
  const handleFirstName = (e) => {
    setErr("");
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setErr("");
    setLastName(e.target.value);
  };
  const handleUserName = (e) => {
    setErr("");
    setUserName(e.target.value);
  };
  const handleConfirmPass = (e) => {
    setErr("");
    setConfirmPassword(e.target.value);
  };
  const handlePass = (e) => {
    setErr("");
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !confirmPassword ||
      !userName
    ) {
      setErr("Fields Cant be Empty");
    } else if (password !== confirmPassword) {
      setErr("Password Don't Match");
    } else {
      const data = {
        firstName,
        lastName,
        userName,
        email,
        password,
      };
      dispatch(register(data));
    }
  };
  return (
    <div className='signup-container'>
      {error && <Message variant={"danger"}>{error}</Message>}
      {success && <Message variant={"success"}>{success}</Message>}
      {err && <Message variant={"danger"}>{err}</Message>}

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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "none",
              }}
            >
              <Form.Group className='mb-3'>
                <Form.Label
                  style={{
                    fontSize: 14,
                  }}
                >
                  First Name
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter First Name'
                  value={firstName}
                  onChange={(e) => handleFirstName(e)}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label
                  style={{
                    fontSize: 14,
                  }}
                >
                  Last Name
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Last Name'
                  value={lastName}
                  onChange={(e) => handleLastName(e)}
                />
              </Form.Group>
            </div>
            <Form.Group className='mb-3'>
              <Form.Label
                style={{
                  fontSize: 14,
                }}
              >
                User Name
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter User Name'
                value={userName}
                onChange={(e) => handleUserName(e)}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
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

            <Form.Group className='mb-3'>
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
            <Form.Group className='mb-3'>
              <Form.Label
                style={{
                  fontSize: 14,
                }}
              >
                Confirm Password
              </Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                value={confirmPassword}
                onChange={(e) => handleConfirmPass(e)}
              />
            </Form.Group>
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
              {loading ? <Loader size={20} /> : "SignUp"}
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Signup;
