import React, {Fragment} from "react";
import Header from "../../components/app/Header";
import Footer from "../../components/app/Footer";
import iclive from "../../assets/img/faker/ic-live.png"
import {CalendarIcon, ClockIcon} from "@heroicons/react/outline";
import CardClass from "../../components/app/CardClass";
const LivePlane = ()=>{
    return(
        <Fragment>
            <Header/>
              <div className="bg-[url('/src/assets/img/bg-airplane.png')] bg-cover">
                <div className="container mx-auto px-24 py-28 text-white font-Nova-Rg">
                    <h4 className="font-Nova-Eb text-[60px] leading-snug">Insertar texto del <br/>livestream programado</h4>
                    <div className="flex mt-6 gap-4 items-center">
                        <div>
                         <img src={iclive} alt=""/>
                        </div>
                        <div>
                           <p className="text-neutro-second3">Dictado por:</p>
                            <p className="font-Nova-Eb">Kevin Urbina</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="text-[18px]">Estrategias comunicativas para marcas con el fin de tener un mejor manejo <br/> sobre
                            su gestión, generar crecimiento y rentabilidad y mejorar su impacto.
                        </p>
                        <ul className="mt-10 text-neutro-second3 flex gap-8 items-center">
                            <li className="flex gap-4 items-center">
                                <ClockIcon className="h-5 w-5"/>
                                <p className="font-Nova-Sb">Hora: 16:00 PM</p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <CalendarIcon className="h-5 w-5"/>
                                <p className="font-Nova-Sb">Viernes 30 Oct. 2020</p>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <button className="bg-gradient-to-r text-white 2xl:text-[16px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-2 px-8
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                                Ver todos
                            </button>
                        </div>
                    </div>
                </div>
              </div>
              <div className="bg-neon">
                  <div className="container mx-auto px-24 pt-10 pb-20">
                      <h4 className="text-center text-[28px] font-Nova-Eb bg-gradient-to-r from-grSecond1-c1 to-grSecond1-c3 text-transparent bg-clip-text">
                          Conoce nuestras próximas clases en vivo
                      </h4>
                      <div className="grid grid-cols-4 gap-8 mt-24">
                        <CardClass/>
                        <CardClass/>
                        <CardClass/>
                        <CardClass/>
                      </div>
                      <div className="mt-32">
                          <h4 className="text-white text-center font-Nova-Eb text-[28px]">Disfruta de todas nuestras transimisiones</h4>
                          <div className="grid grid-cols-4 gap-8 gap-y-20 mt-14">
                              <CardClass/>
                              <CardClass/>
                              <CardClass/>
                              <CardClass/>
                              <CardClass/>
                              <CardClass/>
                              <CardClass/>
                              <CardClass/>
                          </div>
                      </div>
                  </div>
              </div>
            <Footer/>
        </Fragment>
    )
}
export default LivePlane