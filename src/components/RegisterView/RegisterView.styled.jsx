import { Field, Form, ErrorMessage } from 'formik';
import { styled } from 'styled-components';

export const StyledForm = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledInput = styled(Field)`
  width: 440px;
  margin-left: 30px;
  padding: 5px;
`;
export const Label = styled.label`
  font-size: 20px;
`;
export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: red;
`;
