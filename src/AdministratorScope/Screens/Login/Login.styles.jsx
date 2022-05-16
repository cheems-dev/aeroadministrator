import styled from 'styled-components';

import { CONSTANTS } from '../../config/constants';
import { variables } from '../../config/variables';

const { tablet } = CONSTANTS.BREAKPOINTS;
const { palette, gradients, fonts } = variables;

const LoginStyled = styled.div`
  background-image: ${gradients.primary};
  height: 100vh;
  width: 100%;

  .Login {
    &__button {
      margin: 2rem 0;
      width: 40% !important;
      align-self: center;
    }

    &__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      padding: 2.4rem;
      color: ${palette.white};

      &__title {
        margin-top: 48px;
        margin-bottom: 32px;
        text-align: center;
        font-family: ${fonts['Nova-Eb']};
        color: ${palette.text.white};
        font-size: 1.8rem;
        @media screen and (max-width: ${tablet}px) {
          font-size: 1.2rem;
        }
      }

      &__alert {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 24px;
      }

      &__form {
        justify-content: center;
        align-items: center;
        background-color: ${palette.gray.primary};
        padding: 2rem;
        margin-top: 4.8rem;
        border-radius: 0.6rem;
        width: 80%;
        text-align: center;

        @media screen and (max-width: ${tablet}px) {
          padding: 1.2rem;
          width: 100%;
        }

        &__error {
          margin-bottom: 0.5rem;
        }
        &__input {
          display: flex;
          width: 100%;
          margin-bottom: 1.6rem;
          justify-content: center;
          text-align: center;

          &__field {
            width: 40%;
            font-family: ${fonts['Nova-Sb']};
            height: 2rem;
            border-radius: 0.48rem;
            padding: 1.44rem;
            color: black;

            &:focus {
              outline: none;
            }

            &::placeholder {
              color: ${palette.neutro.second3};
            }

            @media screen and (max-width: ${tablet}px) {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

export default LoginStyled;
