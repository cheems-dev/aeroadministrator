import styled from 'styled-components';
import { variables } from '../../../../../AdministratorScope/config/variables';

const { palette, fonts, gradients } = variables;

const Styles = styled.div`
  padding: 40px 80px;
  height: 80vh;
  overflow-y: scroll;

  .modal {
    &__title {
      font-family: ${fonts['Nova-Eb']};
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 32px;
      text-align: center;
      color: ${palette.white};
    }

    &__paragraph {
      font-family: ${fonts['Nova-Rg']};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      color: ${palette.white};
    }

    &__input {
      width: 440px;
      background-color: ${palette.white};
      border-radius: 12px;
      border: none;

      .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
        font-family: ${fonts['Nova-Rg']};
        color: ${palette.neutro.second3};
      }

      .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
        font-family: ${fonts['Nova-Rg']};
        color: ${palette.dark};
      }

      .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
        border: none;
      }

      .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root {
        color: transparent;
      }

      .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
        color: transparent;
      }
    }

    &__button {
      text-transform: capitalize;
      font-style: normal;
      line-height: 24px;
      font-family: ${fonts['Nova-Rg']};
      padding: 8px 32px;
      color: ${palette.white};
      background-image: ${(props) => (props.tnc ? gradients.second1 : '')};
      background-color: ${(props) =>
        !props.tnc ? palette.neutro.second3 : ''};
      border-radius: 4px;
      font-weight: 800;
      font-size: 16px;
      transition: transform 0.3s;
      width: 184px;

      &:hover {
        transform: scale(1.05);
      }
    }

    &__checkbox {
      color: ${palette.white};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 0.02em;
    }

    &__question {
      font-family: ${fonts['Nova-Sb']};
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 0.32px;
      background: ${gradients.second1};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    &__container {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 32px;

      &__icon {
        display: flex;
        justify-content: center;
      }

      &__form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      &__input {
        display: flex;
        flex-wrap: wrap;
        gap: 32px;
        justify-content: space-between;
      }

      &__send {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 16px;
      }
    }
  }

  .banner {
    margin-top: 240px;
    display: flex;
    flex-direction: column;
    gap: 64px;

    &__paragraph {
      font-family: ${fonts['Nova-Lt']};
      font-style: normal;
      font-size: 16px;
      line-height: 24px;
      color: ${palette.white};
    }

    &__span {
      font-weight: bold;
    }

    &__link {
      color: ${palette.palidBlueBorder};
    }
  }
`;

export default Styles;
