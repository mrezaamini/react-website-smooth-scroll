import React from "react";
import {
  Icon,
  FormButton,
  FormContent,
  FormLabel,
  FormWrapper,
  SigninContainer,
  Form,
  FormH1,
  FormInput,
  Text,
} from "./SigninElements";

const Singin = () => {
  return (
    <SigninContainer>
      <FormWrapper>
        <Icon to="/">BCITY</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrapper>
    </SigninContainer>
  );
};

export default Singin;
