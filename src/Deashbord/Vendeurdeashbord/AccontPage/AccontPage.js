import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Dropzone from 'react-dropzone';
import './AccontPage.css';

const AccountSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  location: Yup.string(),
  postalCode: Yup.string().required('Required'),
});

const AccountPage = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleDrop = (acceptedFiles) => {
    setProfileImage(acceptedFiles[0]);
  };

  const handleSubmit = (values) => {
    // Handle form submission
    console.log(values);
    console.log(profileImage);
  };
  

  return (
    <div className="account-page">
      <h1>User Profile</h1>
      <div className="profile-header">
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: 'profile-image' })}>
              <input {...getInputProps()} />
              {profileImage ? (
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile"
                  className="profile-picture"
                />
              ) : (
                <div className="placeholder">+</div>
              )}
            </div>
          )}
        </Dropzone>
        <div className="profile-info">
          <h2>Sara Tancredi</h2>
          <p>New York, USA</p>
        </div>
      </div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          location: '',
          postalCode: '',
        }}
        validationSchema={AccountSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" placeholder="First Name" />
                <ErrorMessage name="firstName" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" placeholder="Last Name" />
                <ErrorMessage name="lastName" component="div" className="error-message" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" placeholder="Email Address" />
                <ErrorMessage name="email" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <Field name="phone" type="text" placeholder="Phone Number" />
                <ErrorMessage name="phone" component="div" className="error-message" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <Field name="location" type="text" placeholder="Location" />
                <ErrorMessage name="location" component="div" className="error-message" />
              </div>
              <div className="form-group">
                <label htmlFor="postalCode">Postal Code</label>
                <Field name="postalCode" type="text" placeholder="Postal Code" />
                <ErrorMessage name="postalCode" component="div" className="error-message" />
              </div>
            </div>
            <button type="submit" className="save-button">Save Changes</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AccountPage;
