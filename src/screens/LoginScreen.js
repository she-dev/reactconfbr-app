// @flow

import React, { Component } from 'react';
import styled from 'styled-components/native'
import { withNavigation } from 'react-navigation';

import Header from '../components/common/Header';
import Button from '../components/Button';
import Input from '../components/Input';

const Wrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.primaryColor}
  padding: 20px;
`;

const ForgotButton = styled.TouchableOpacity`
`;

const ArrowImage = styled.Image.attrs({
  source: { uri: 'http://www.stickpng.com/assets/images/585e4695cb11b227491c3373.png' },
})`
  width: 90px;
  height: 15px;
`;

const ForgotText = styled.Text`
  color: ${props => props.theme.colors.secondaryColor};
  font-weight: 900;
  font-size: 24px;
  text-align: right;
`;

const TextWrapper = styled.View`
  flex: 3;
`;

const BigText = styled.Text`
  color: ${props => props.theme.colors.secondaryColor};
  font-size: 34px;
  font-weight: 900;
  padding: 20px 0 20px 0;
`;

const ButtonsWrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.colors.primaryColor};
  font-size: 20px;
`;

type Props = {};

type State = {};

@withNavigation
export default class LoginScreen extends Component<any, Props, State> {
  render() {
    return (
      <Wrapper>
        <Header>
          <ForgotButton>
            <ForgotText>{'<=='}</ForgotText>
          </ForgotButton>
          <ForgotButton>
            <ForgotText>Forgot Password</ForgotText>
          </ForgotButton>
        </Header>
        <TextWrapper>
          <BigText>Login</BigText>
          <Input
            placeholder="Email"
          />
          <Input
            placeholder="Password"
            secureTextEntry
          />
        </TextWrapper>
        <ButtonsWrapper>
          <Button fill>
            <ButtonText>Login</ButtonText>
          </Button>
        </ButtonsWrapper>
      </Wrapper>
    );
  }
}