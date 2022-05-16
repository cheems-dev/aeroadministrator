import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { Alert } from '@mui/material';
// Svg
import Logo from '../../../assets/img/logo-footer.svg';
// React-router
import history from '../../../routes/history';
// Components
import Button from '../../Components/Global/Button/Button';
import Image from '../../Components/Global/Image/Image';
// Variables
import { variables } from '../../config/variables';
// Services
import { loginSuccess } from '../../Redux/actions/authActions';
// Handler
import { handleFieldError, initialValues } from './Login.handler';
// Styles
import Styles from './Login.styles';

const { gradients } = variables;

const LoginAdministrator = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { email, password } = values;
    if (email === 'user@gmail.com' && password === '12345678') {
      const payload = { rol: 10 };
      dispatch(loginSuccess(payload));
      history.push('/admin/general-register');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha ocurrido un problema con las credenciales',
      });
    }
    /*  return AuthService.login(values)
      .then((response) => {
        setCookie('token', response.access_token);
        const payload = { ...response.user, token: response.access_token };
        dispatch(loginSuccess(payload));
        history.push('/admin/general-register');
      })
      .catch((error) => {
        console.log(error.error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ha ocurrido un problema con las credenciales',
        });
      }); */
  };

  return (
    <Styles className='Login'>
      <div className='Login__container'>
        <Image url={Logo} alt={'Logo Aeronáutica'} height={128} width={152} />
        <div className='Login__container__form'>
          <h1 className='Login__container__title'>
            ¿Trabajas en el Sector Aeronáutico Espacial Corp?
          </h1>
          <div className='Login__container__alert'>
            <Alert icon={false} severity='info' variant='filled'>
              Email: user@gmail.com
              <br />
              Password: 12345678
            </Alert>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={handleFieldError}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <ErrorMessage name='email' component={'p'} />
                <div className='Login__container__form__input'>
                  <Field
                    className='Login__container__form__input__field'
                    name='email'
                    placeholder='Email'
                  />
                </div>
                <ErrorMessage name='password' component={'p'} />
                <div className='Login__container__form__input'>
                  <Field
                    className='Login__container__form__input__field'
                    name='password'
                    placeholder={'Password'}
                    type={'password'}
                  />
                </div>
                <center>
                  <Button
                    type={'submit'}
                    className='Login__button'
                    bgImage={gradients.second1}
                  >
                    Login
                  </Button>
                </center>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Styles>
  );
};

export default LoginAdministrator;
