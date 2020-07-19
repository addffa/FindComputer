import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Grid, Typography } from '@material-ui/core';
import { login } from '../services/auth.service';
import { Redirect } from 'react-router-dom';


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required!')
});

export default function Signup(props) {
  const [success, setSuccess] = useState(false);
  return (
    <Grid container item spacing={2} xs={12} sm={6}>
      <Typography variant="h2" gutterBottom>
        Login
      </Typography>
      <Grid container item xs={12}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            login(values)
              .then(res => {
                alert("Login success: Welcome to findcomputer!");
                setSuccess(true);
                props.setAuth(res);
              })
              .catch(error => {
                console.log(error);
                alert("Login failed: incorrect username or password!");
              })
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div>Email: <Field name="email" type="email" /></div>
              {errors.email && touched.email ? (
                <div>{errors.email}</div>
              ) : null}
              <div>Password: <Field name="password" type="password" /></div>
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </Grid>
      {success ? <Redirect to='/' /> : null}
    </Grid>
  )
}