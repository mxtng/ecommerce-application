import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { userRegister } from '../../actions/authActions';

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: '',
  });
  const { email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return console.log('Please enter email.');
    if (!password || !password2) return console.log('Please enter password.');
    if (password !== password2) {
      return console.log('Passwords do not match.');
    }

    dispatch(
      userRegister(formData, function (err) {
        if (err) return console.log('Registration failed.');
        return history.push('/');
      })
    );
  };

  return (
    <Fragment>
      <Row className='d-flex justify-content-center'>
        <Col sm={12} md={6} lg={4} className='my-5'>
          <Card className='my-3'>
            <Card.Body>
              <Card.Title as='h2'>Sign Up</Card.Title>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='email'>Email address</label>
                  <input
                    className='form-control'
                    id='email'
                    name='email'
                    type='email'
                    placeholder='Enter email'
                    onChange={handleChange}
                    value={email}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input
                    className='form-control'
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='password2'>Confirm Password</label>
                  <input
                    className='form-control'
                    id='password2'
                    name='password2'
                    type='password'
                    placeholder='Enter password'
                    value={password2}
                    onChange={handleChange}
                  />
                </div>
                <Button variant='info' className='btn-block' type='submit'>
                  Sign Up
                </Button>
                <Card.Text className='mt-2'>
                  Already have an account?{' '}
                  <Card.Link as={Link} to='/login'>
                    Sign in here
                  </Card.Link>
                </Card.Text>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Register;
