import React, {Fragment} from "react";
import {Disclosure} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/solid";
import {BiLockAlt} from "react-icons/bi";
const TemaryLock = ()=>{
       return(
           <Fragment>
               <div className="w-full rounded-2xl mt-5">
                   <Disclosure as="div">
                       {({open}) => (
                           <>
                               <Disclosure.Button
                                   className={`${
                                       open ? 'bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-white' : 'bg-white text-gray-second1'
                                   } items-center flex justify-between w-full px-8 py-5 text-[24px] font-Nova-Eb text-left rounded-lg`}>
                                   <span className="text-[18px] tracking-wide">El ciclo de ventas</span>
                                   <ChevronDownIcon
                                       className={`${
                                           open ? 'transform rotate-180 text-white' : 'text-gray-second1'
                                       } w-8 h-8 `}
                                   />
                               </Disclosure.Button>
                               <Disclosure.Panel className="px-8 pt-4 font-Nova-Rg bg-white rounded-b-lg">
                                   <div className="pt-2 pb-6 text-gray-second1">
                                       <ul className="text-gray-default text-[18px]">
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   2. Pasos en el proceso de ventas
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   3. Alineación del proceso de ventas con el pipeline
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   4. Integración del pipeline con Salesforce
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   5. Candidatos/leads y oportunidades
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   6. Asignación de candidatos/leads
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   7. ¿Cómo crear leads en Salesforce?
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   8. Proyecto: Presentación del caso y creación de bases del Pipeline

                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                       </ul>
                                   </div>
                               </Disclosure.Panel>
                           </>
                       )}
                   </Disclosure>
                   <Disclosure as="div" className="mt-5">
                       {({open}) => (
                           <>
                               <Disclosure.Button
                                   className={`${
                                       open ? 'bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-white' : 'bg-white text-gray-second1'
                                   } items-center flex justify-between w-full px-8 py-5 text-[24px] font-Nova-Eb text-left rounded-lg`}>
                                   <span className="text-[18px] tracking-wide">Las oportunidades se transforman en ventas</span>
                                   <ChevronDownIcon
                                       className={`${
                                           open ? 'transform rotate-180 text-white' : 'text-gray-second1'
                                       } w-8 h-8 `}
                                   />
                               </Disclosure.Button>
                               <Disclosure.Panel className="px-8 pt-4 font-Nova-Rg bg-white rounded-b-lg">
                                   <div className="pt-2 pb-6 text-gray-second1">
                                       <ul className="text-gray-default text-[18px]">
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   2. Pasos en el proceso de ventas
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   3. Alineación del proceso de ventas con el pipeline
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   4. Integración del pipeline con Salesforce
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   5. Candidatos/leads y oportunidades
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   6. Asignación de candidatos/leads
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   7. ¿Cómo crear leads en Salesforce?
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   8. Proyecto: Presentación del caso y creación de bases del Pipeline

                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                       </ul>
                                   </div>
                               </Disclosure.Panel>
                           </>
                       )}
                   </Disclosure>
                   <Disclosure as="div" className="mt-5">
                       {({open}) => (
                           <>
                               <Disclosure.Button
                                   className={`${
                                       open ? 'bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-white' : 'bg-white text-gray-second1'
                                   } items-center flex justify-between w-full px-8 py-5 text-[24px] font-Nova-Eb text-left rounded-lg`}>
                                   <span className="text-[18px] tracking-wide">Las acciones constantes determinan el éxito o el fracaso</span>
                                   <ChevronDownIcon
                                       className={`${
                                           open ? 'transform rotate-180 text-white' : 'text-gray-second1'
                                       } w-8 h-8 `}
                                   />
                               </Disclosure.Button>
                               <Disclosure.Panel className="px-8 pt-4 font-Nova-Rg bg-white rounded-b-lg">
                                   <div className="pt-2 pb-6 text-gray-second1">
                                       <ul className="text-gray-default text-[18px]">
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   2. Pasos en el proceso de ventas
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   3. Alineación del proceso de ventas con el pipeline
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   4. Integración del pipeline con Salesforce
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   5. Candidatos/leads y oportunidades
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   6. Asignación de candidatos/leads
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   7. ¿Cómo crear leads en Salesforce?
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   8. Proyecto: Presentación del caso y creación de bases del Pipeline

                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                       </ul>
                                   </div>
                               </Disclosure.Panel>
                           </>
                       )}
                   </Disclosure>
                   <Disclosure as="div" className="mt-5">
                       {({open}) => (
                           <>
                               <Disclosure.Button
                                   className={`${
                                       open ? 'bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-white' : 'bg-white text-gray-second1'
                                   } items-center flex justify-between w-full px-8 py-5 text-[24px] font-Nova-Eb text-left rounded-lg`}>
                                   <span className="text-[18px] tracking-wide">Análisis para la toma de decisiones</span>
                                   <ChevronDownIcon
                                       className={`${
                                           open ? 'transform rotate-180 text-white' : 'text-gray-second1'
                                       } w-8 h-8 `}
                                   />
                               </Disclosure.Button>
                               <Disclosure.Panel className="px-8 pt-4 font-Nova-Rg bg-white rounded-b-lg">
                                   <div className="pt-2 pb-6 text-gray-second1">
                                       <ul className="text-gray-default text-[18px]">
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   2. Pasos en el proceso de ventas
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   3. Alineación del proceso de ventas con el pipeline
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   4. Integración del pipeline con Salesforce
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   5. Candidatos/leads y oportunidades
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   6. Asignación de candidatos/leads
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   7. ¿Cómo crear leads en Salesforce?
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   8. Proyecto: Presentación del caso y creación de bases del Pipeline

                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                       </ul>
                                   </div>
                               </Disclosure.Panel>
                           </>
                       )}
                   </Disclosure>
                   <Disclosure as="div" className="mt-5">
                       {({open}) => (
                           <>
                               <Disclosure.Button
                                   className={`${
                                       open ? 'bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-white' : 'bg-white text-gray-second1'
                                   } items-center flex justify-between w-full px-8 py-5 text-[24px] font-Nova-Eb text-left rounded-lg`}>
                                   <span className="text-[18px] tracking-wide">Conclusiones</span>
                                   <ChevronDownIcon
                                       className={`${
                                           open ? 'transform rotate-180 text-white' : 'text-gray-second1'
                                       } w-8 h-8 `}
                                   />
                               </Disclosure.Button>
                               <Disclosure.Panel className="px-8 pt-4 font-Nova-Rg bg-white rounded-b-lg">
                                   <div className="pt-2 pb-6 text-gray-second1">
                                       <ul className="text-gray-default text-[18px]">
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   2. Pasos en el proceso de ventas
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   3. Alineación del proceso de ventas con el pipeline
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   4. Integración del pipeline con Salesforce
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   5. Candidatos/leads y oportunidades
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   6. Asignación de candidatos/leads
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   7. ¿Cómo crear leads en Salesforce?
                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                           <li className="flex justify-between pb-2">
                                               <p>
                                                   8. Proyecto: Presentación del caso y creación de bases del Pipeline

                                               </p>
                                               <div className="text-neutro-second6">
                                                   <BiLockAlt className="h-6 w-6 m-auto"/>
                                               </div>
                                           </li>
                                       </ul>
                                   </div>
                               </Disclosure.Panel>
                           </>
                       )}
                   </Disclosure>
               </div>
           </Fragment>
       )
}
export default TemaryLock;