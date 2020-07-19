import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Grid, Typography } from '@material-ui/core';
import { signup } from '../services/auth.service';
import { Redirect } from 'react-router-dom';


const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required!'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
  phoneNumber: Yup.string()
    .matches('^[0-9]*$', 'Phone Number must be number type!')
    .min(10, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required!'),
});

export default function Signup() {
  const [success, setSuccess] = useState(false);
  return (
    <Grid container item spacing={2} xs={12} sm={6}>
      <Typography variant="h2" gutterBottom>
        Signup
      </Typography>
      <Grid container item xs={12}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            name: '',
            address: '',
            phoneNumber: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            signup(values).then(res => {
              alert(res.data.message);
              setSuccess(true);
            }).catch((error) => {
              console.log(error);
              alert("Register Failed: Email already registered before");
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
              <div>Name: <Field name="name" /></div>
              {errors.name && touched.name ? (
                <div>{errors.name}</div>
              ) : null}
              <div>Address: <Field name="address" /></div>
              {errors.address && touched.address ? <div>{errors.address}</div> : null}
              <div>Phone Number <Field name="phoneNumber" /></div>
              {errors.phoneNumber && touched.phoneNumber ? <div>{errors.phoneNumber}</div> : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </Grid>
      {success ? <Redirect to='/login' /> : null}
    </Grid>
  )
}