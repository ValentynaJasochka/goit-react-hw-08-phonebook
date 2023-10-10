import { Formik } from 'formik';
import { Button, Flex, Text } from '@chakra-ui/react';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledInput,
  Label,
  ErrorMsg,
} from '../RegisterView/RegisterView.styled';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/AuthThunk';

const taskSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
const LoginView = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Flex align="center" justify="center" direction="column" gap="40px">
      <Text fontSize={32} color={'navy'}>
        Login
      </Text>
      <Formik
        initialValues={{ password: '', email: '' }}
        validationSchema={taskSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
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
            Login
          </Button>
        </StyledForm>
      </Formik>
    </Flex>
  );
};
export default LoginView;
