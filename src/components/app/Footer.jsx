import React, { Fragment } from "react";
import logoFooter from "../../assets/img/logo-footer.svg";
import dinners from "../../assets/img/icons/dinners.svg";
import master from "../../assets/img/icons/master.svg";
import paypal from "../../assets/img/icons/paypal.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import visa from "../../assets/img/icons/visa.svg";
import american from "../../assets/img/icons/american.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="bg-neon font-ProximaNova-Rg">
        <div className="px-12 py-12 flex gap-24">
          <div className="w-1/7">
            <img className="h-14 w-14" src={logoFooter} alt="" />
          </div>
          <div className="w-1/6">
            <p className="text-white font-ProximaNova-Eb">Contenido</p>
            <div className="mt-6">
              <p className="text-white">Artículos Recientes</p>
              <p className="text-white">Videos</p>
              <p className="text-white">Livestream</p>
            </div>
          </div>
          <div className="w-1/5">
            <p className="text-white font-ProximaNova-Eb">Plataforma</p>
            <div className="mt-6">
              <p className="text-white">Iniciar Sesión</p>
              <p className="text-white">Cursos Inscritos</p>
              <p className="text-white">Logros</p>
            </div>
          </div>
          <div className="w-1/6">
            <p className="text-white font-ProximaNova-Eb">¿Necesitas ayuda?</p>
            <div className="mt-6">
              <p className="text-white">Términos y condiciones</p>
              <p className="text-white">Política de privacidad</p>
              <p className="text-white">Política De cookies</p>
              <p className="text-white">Libro de reclamaciones</p>
            </div>
          </div>
          <div className="w-1/4">
            <div className="flex">
              <div className="w-1/3">
                <p className="text-white font-ProximaNova-Eb mt-2">Siguenos</p>
                <div className="mt-9">
                  <img className="ml-2" src={dinners} alt="" />
                  <img className="mt-3" src={master} alt="" />
                  <img className="ml-2 mt-3" src={paypal} alt="" />
                </div>
              </div>
              <div className="w-full ml-6">
                <div className="flex gap-4">
                  <div className="bg-gradient-to-bl from-grSecond2-c2 to-grSecond2-c1 h-8 w-8">
                    <FaFacebookF className="text-white w-full h-full p-1.5" />
                  </div>
                  <div className="bg-gradient-to-bl from-grSecond2-c2 to-grSecond2-c1 h-8 w-8">
                    <FaInstagram className="text-white w-full h-full p-1.5" />
                  </div>
                </div>
                <div className="mt-9">
                  <img src={visa} alt="" />
                  <img className="mt-3" src={american} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Footer;
