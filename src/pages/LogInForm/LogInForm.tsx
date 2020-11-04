import React, { useContext } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import InputDefault from '../../components/atoms/Input/Input';
import Label from '../../components/atoms/Label/Label';
import FormButton from '../../components/atoms/FormButton/FormButton';
import { FaUserAlt } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { FormWrapper, LabelWrapper } from './LogInFormStyles';
import { ModelFormContext } from '../../context/ModalFormProductsContext';

type InitialValue = {
  email: string;
  password: string;
};

const initialValues: InitialValue = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Name'),
  password: Yup.string().required().label('Password'),
});

const LogInForm = () => {
  const {
    handleOpenLogInModal,
    handleCloseLogInModal,
    handleOpenSignInModal,
    handleCloseSignInModal,
  } = useContext(ModelFormContext);

  const onSubmit = (
    values: InitialValue,
    onSubmitProps: FormikHelpers<InitialValue>
  ) => {
    console.log(values);

    // axios({
    //   method: 'post',
    //   url: ``,
    //   data: ,
    // })
    //   .then(function () {
    //     setTimeout(() => {
    //       handleCloseLogInModal();
    //     }, 500);
    //     onSubmitProps.resetForm();
    //   })
    //   .catch(function (response) {
    //     //handle error
    //   });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {(props) => {
        return (
          <Form>
            <FormWrapper>
              <LabelWrapper>
                <Label label={'Email'} icon={<FaUserAlt />} />
                <InputDefault
                  name="email"
                  placeholder={'email'}
                  radius={'5px'}
                  margin={'5px 0px 15px 0px'}
                  type="input"
                />
              </LabelWrapper>
              <LabelWrapper>
                <Label label={'Password'} icon={<GiPadlock />} />
                <InputDefault
                  name="password"
                  placeholder={'password'}
                  radius={'5px'}
                  margin={'5px 0px 15px 0px'}
                  type="password"
                />
              </LabelWrapper>
              <FormButton
                btnFunction={() => {}}
                type="submit"
                content={'Submit'}
                bgcolor={'#F92A70'}
                radius={'5px'}
                margin={'10px 0 0 0 '}
                width={'100px'}
              />
            </FormWrapper>
            <FormButton
              type="submit"
              content={'Sign In'}
              bgcolor={'#F92A70'}
              radius={'0px'}
              margin={'10px 0 0 0 '}
              width={'50%'}
              btnFunction={() => {
                handleOpenLogInModal();
                handleCloseSignInModal();
              }}
            />
            <FormButton
              type="submit"
              content={'Create new account'}
              bgcolor={'#F92A70'}
              radius={'0px'}
              width={'50%'}
              btnFunction={() => {
                handleCloseLogInModal();
                handleOpenSignInModal();
              }}
              margin={'10px 0 0 0 '}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;