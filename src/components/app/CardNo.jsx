import React, {Fragment} from "react";
import {AiOutlinePlayCircle} from "react-icons/ai";
const CardNo = ()=>{
      return(
          <Fragment>
              <div className="bg-white rounded-b-lg">
                  <div className="bg-neutro-second5 h-56 text-center rounded-t-lg">
                      <div className="py-10">
                          <AiOutlinePlayCircle className="h-12 w-12 mx-auto mt-8 mb-10"/>
                          <button className="m-auto block bg-gradient-to-r text-white 2xl:text-[16px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-1.5 px-3
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                              Ver Contenido
                          </button>
                      </div>
                  </div>
                  <div className="px-6 py-7 text-gray-second1">
                      <div className="flex justify-between">
                          <div>
                              <ul className="flex items-center">
                                  <li>
                                      <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                                  </li>
                                  <li className="pl-3">
                                      <p className="font-Nova-Eb text-[18px]">Precio</p>
                                  </li>
                              </ul>
                          </div>
                          <div>
                              <ul className="flex items-center pl-12">
                                  <li className="pr-4 text-gray-primary">
                                      <p className="line-through font-Nova-Sb text-[14px]">$269</p>
                                  </li>
                                  <li>
                                      <p className="font-Nova-Eb text-[18px]">$189</p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                      <div className="text-center py-4">
                          <p className="font-Nova-Sb text-[14px] bg-gradient-to-r from-grSecond1-c1 to-grSecond1-c3 text-transparent bg-clip-text">
                              ¡Esta oferta termina en 2:45 min!
                          </p>
                      </div>
                      <div className="flex justify-between">
                          <div>
                              <ul className="flex items-center">
                                  <li>
                                      <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                                  </li>
                                  <li className="pl-3">
                                      <p className="font-Nova-Sb text-[14px]">Duración</p>
                                  </li>
                              </ul>
                          </div>
                          <div>
                              <p className="font-Nova-Sb text-[14px] text-gray-primary">1h 14m</p>
                          </div>
                      </div>
                      <div className="flex justify-between mt-5">
                          <div>
                              <ul className="flex items-center">
                                  <li>
                                      <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                                  </li>
                                  <li className="pl-3">
                                      <p className="font-Nova-Sb text-[14px]">Nivel</p>
                                  </li>
                              </ul>
                          </div>
                          <div>
                              <p className="font-Nova-Sb text-[14px] text-gray-primary">Intermedio</p>
                          </div>
                      </div>
                      <div className="flex justify-between mt-5">
                          <div>
                              <ul className="flex items-center">
                                  <li>
                                      <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                                  </li>
                                  <li className="pl-3">
                                      <p className="font-Nova-Sb text-[14px]">Aprendizaje</p>
                                  </li>
                              </ul>
                          </div>
                          <div>
                              <p className="font-Nova-Sb text-[14px] text-gray-primary">Especializado</p>
                          </div>
                      </div>
                      <div className="mt-5">
                          <ul className="flex items-center">
                              <li>
                                  <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                              </li>
                              <li className="pl-3">
                                  <p className="font-Nova-Sb text-[14px]">24 clases de acceso ilimitado</p>
                              </li>
                          </ul>
                      </div>
                      <div className="mt-5">
                          <ul className="flex items-center">
                              <li>
                                  <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                              </li>
                              <li className="pl-3">
                                  <p className="font-Nova-Sb text-[14px]">Recursos y proyectos</p>
                              </li>
                          </ul>
                      </div>
                      <div className="mt-5">
                          <ul className="flex items-center">
                              <li>
                                  <div className="bg-neutro-second3 rounded-full h-6 w-6"/>
                              </li>
                              <li className="pl-3">
                                  <p className="font-Nova-Sb text-[14px]">Certifícate al terminar</p>
                              </li>
                          </ul>
                      </div>
                      <div className="mt-8">
                          <button className="w-full block bg-gradient-to-r text-white 2xl:text-[16px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-1.5 px-3
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                              Inscribirme
                          </button>
                      </div>
                      <div className="mt-6">
                          <p className="font-Nova-Sb text-center text-[14px]">¿Entrenamiento para tus colaboradores?</p>
                      </div>
                      <div className="mt-3">
                          <button className="w-full block bg-gradient-to-r text-white 2xl:text-[12px]
                                     from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 rounded font-Nova-Eb tracking-wide py-2 px-3
                                     hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out delay-150">
                              Prueba Sector Aeronautico para empresas
                          </button>
                      </div>
                      <div className="mt-5 px-14">
                          <p className="text-[13px] text-center font-Nova-Sb">Comparte este curso y accede
                              a $USD5 de crédito
                          </p>
                      </div>
                  </div>
              </div>
          </Fragment>
      )
}
export default CardNo