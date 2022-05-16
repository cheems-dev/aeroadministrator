import { Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// Services
import {
  postBusiness,
  postTeacher,
} from '../../../services/GeneralRegister.service';
// Components
import Button from '../Button/Button';
// Helper
import {
  a11yProps,
  labelsBusiness,
  labelsBusiness2,
  labelsTeacher,
  labelsTeacher2,
  SweetError,
  SweetSuccess,
  titlesBusiness,
  titlesTeacher,
} from './FormGeneralRegister.helper';
// Styles
import Styles from './FormGeneralRegister.styles';

function FormTeacher(props) {
  const { handleClose, type = 'Teachers' } = props;
  const [step, setStep] = useState(1);
  const labels = [1, 2];
  const { register, handleSubmit } = useForm();
  const {
    formState: { errors },
  } = useForm();

  let dataForm = step === 1 ? labelsTeacher : labelsTeacher2;
  const titles = type === 'Teachers' ? titlesTeacher : titlesBusiness;

  switch (type) {
    case 'Teachers':
      dataForm = step === 1 ? labelsTeacher : labelsTeacher2;
      break;
    case 'Business':
      dataForm = step === 1 ? labelsBusiness : labelsBusiness2;
      break;
    default:
      break;
  }

  const onSubmit = (data) => {
    if (errors.length > 0) {
      SweetError('Todos los campos del formulario son requeridos');
      return;
    }

    if (data?.password !== data?.ConfirmPassword) {
      SweetError('Las contraseñas no coinciden');
      return;
    }

    if (data?.password.length < 6) {
      SweetError('La contraseña debe tener un mínimo de 6 caracteres');
      return;
    }

    switch (type) {
      case 'Teachers':
        postTeacher(data).then((response) => {
          if (response?.message === 'User successfully registered') {
            SweetSuccess('nuevo instructor').then((response) => {
              response ? setStep(1) : handleClose();
            });
          }
        });
        break;
      case 'Business':
        postBusiness(data).then((response) => {
          if (response?.message === 'User successfully registered') {
            SweetSuccess('nuevo instructor').then((response) => {
              response ? setStep(1) : handleClose();
            });
          }
        });
        break;

      default:
        break;
    }
  };

  const handleChange = (event, newValue) => {
    setStep(newValue);
  };

  return (
    <Styles>
      <Tabs
        variant='scrollable'
        scrollButtons='auto'
        onChange={handleChange}
        className='formTeacher__TabsNavigation'
        value={step}
      >
        {labels.map((label) => (
          <Tab
            className='formTeacher__TabsNavigation__tab'
            label={label}
            value={label}
            key={label}
            {...a11yProps(label)}
          />
        ))}
      </Tabs>

      <h2 className='formTeacher__title'>
        {step === 1 ? titles[0] : titles[1]}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className='formTeacher__form'>
        {dataForm.map((item, index) => (
          <div className='formTeacher__form__field' key={index}>
            <label className='formTeacher__form__label'>{item.label}</label>
            {item.backLabel === 'email' ? (
              <div className='formTeacher__form__field__username'>
                <input
                  className='formTeacher__form__field__username--input'
                  type={item.type}
                  {...register(item.backLabel, { required: true })}
                />
                <h2 className='formTeacher__form__field__username--h2'>
                  @sector-aeronautico.com
                </h2>
              </div>
            ) : (
              <>
                <input
                  className='formTeacher__form__input'
                  type={item.type}
                  {...register(item.backLabel, { required: true })}
                />
              </>
            )}
          </div>
        ))}
        <div className='formTeacher__form__buttons'>
          <Button
            onClick={handleClose}
            className='formTeacher__form__buttons__button formTeacher__form__buttons--cancel'
          >
            Cancelar
          </Button>
          <Button
            type={step === 1 ? 'none' : 'submit'}
            onClick={() => {
              setStep(2);
            }}
            className='formTeacher__form__buttons__button formTeacher__form__buttons--submit'
          >
            {step === 1 ? 'Siguiente' : 'Crear cuenta'}
          </Button>
        </div>
      </form>
    </Styles>
  );
}

export default FormTeacher;
