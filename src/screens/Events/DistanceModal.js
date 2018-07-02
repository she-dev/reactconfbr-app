// @flow
import React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

const Wrapper = styled.View``;

const ModalContent = styled(LinearGradient).attrs({
  colors: ['#53B1FF', '#651FFF'],
  start: { x: 0, y: 1 },
  end: { x: 1, y: 1 },
})`
  flex-direction: column;
  height: 160px;
  border-radius: 5px;
  shadow-color: grey;
  shadow-offset: 0px 0px;
  shadow-radius: 5px;
  shadow-opacity: 0.1;
`;

const Body = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130px;
  justify-content: space-around;
  align-items: center;
`;

const Bottom = styled.View`
  flex-direction: row;
  height: 30px;
  justify-content: space-around;
  align-items: center;
`;

const Pill = styled.TouchableOpacity`
  padding: 8px 18px;
  align-items: center;
  border-radius: 20px;
  border: 2px solid ${props => props.theme.colors.secondaryColor};
  margin-right: 10;
  background-color: ${props => (props.fill ? props.theme.colors.secondaryColor : 'transparent')};
`;

const DistancePill = styled.TouchableOpacity`
  padding: 8px 18px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 2px solid ${props => props.theme.colors.secondaryColor};
  margin-right: 10;
  background-color: ${props => (props.fill ? props.theme.colors.secondaryColor : 'transparent')}
  width: 110px;
  height: 35px;
`;

const PillText = styled.Text`
  color: ${props => props.theme.colors.primaryColor};
  font-size: 14px;
  font-weight: bold;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

type Props = {
  isVisible: boolean,
  changeDistance: string => void,
  closeDistanceModal: () => void,
};

const DistanceModal = ({ isVisible, changeDistance, closeDistanceModal }: Props) => (
  <Wrapper>
    <Modal isVisible={isVisible}>
      <ModalContent>
        <Body>
          <Row>
            <DistancePill fill onPress={() => changeDistance('20')}>
              <PillText>20 km</PillText>
            </DistancePill>
            <DistancePill fill onPress={() => changeDistance('50')}>
              <PillText>50 km</PillText>
            </DistancePill>
          </Row>
          <Row>
            <DistancePill fill onPress={() => changeDistance('80')}>
              <PillText>80 km</PillText>
            </DistancePill>
            <DistancePill fill onPress={() => changeDistance('120')}>
              <PillText>120 km</PillText>
            </DistancePill>
          </Row>
        </Body>
        <Bottom>
          <Pill onPress={closeDistanceModal} />
        </Bottom>
      </ModalContent>
    </Modal>
  </Wrapper>
);

export default DistanceModal;
