import styled from 'styled-components';
import { variables } from '../../../../AdministratorScope/config/variables';

const { fonts, gradients } = variables;

const Styles = styled.div`
  .container {
    padding: 40px 80px;
    height: 80vh;
    overflow-y: scroll;

    &__content {
    }
  }

  .modal {
    &__title {
      font-family: ${fonts['Nova-Eb']};
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 32px;
    }

    &__paragraph {
      font-family: ${fonts['Nova-Rg']};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
    }
  }
`;

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1200px',
  borderRadius: 8,
  background: gradients.custom7,
  backgroundBlendMode: 'darken',
  p: 4,
  boxShadow: 24,
  zIndex: 800,
};

export { Styles, modalStyle };
