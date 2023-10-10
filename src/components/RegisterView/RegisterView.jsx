import { Formik } from 'formik';
import { Button, Flex, Text } from '@chakra-ui/react';
import * as Yup from 'yup';
import {
  StyledForm,
  Label,
  ErrorMsg,
  StyledInput,
} from './RegisterView.styled';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/AuthThunk';

const taskSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const RegisterView = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Flex align="center" justify="center" direction="column" gap="40px">
      <Text fontSize={32} color={'navy'}>
        Registration
      </Text>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={taskSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Label>
            Name
            <StyledInput
              type="name"
              name="name"
              placeholder="Enter your name... "
            />
            <ErrorMsg name="email" component="div" />
          </Label>
          <Label>
            Email
            <StyledInput
              type="email"
              name="email"
              placeholder="Enter your email... "
            />
            <ErrorMsg name="email" component="div" />
          </Label>

          <Label>
            Password
            <StyledInput
              type="password"
              name="password"
              placeholder="Enter your password... "
            />
            <ErrorMsg name="password" component="div" />
          </Label>
          <Button colorScheme="blue" size="sm" variant="solid" type="submit">
            Submit
          </Button>
        </StyledForm>
      </Formik>
    </Flex>
  );
};
export default RegisterView;

// Object { name: "Bonny State", email: "bonnystate@mail.com",
// password: "bonnystate100314" }
