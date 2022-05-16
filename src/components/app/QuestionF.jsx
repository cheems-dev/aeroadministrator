import React, {Fragment} from "react";
import {Disclosure} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/solid";
const QuestionF = ()=>{
    return(
        <Fragment>
            <Disclosure as="div">
                {({open}) => (
                    <Fragment>
                        <Disclosure.Button
                            className="bg-white flex justify-between w-full px-8 pt-6 pb-4 text-24 font-Nova-Sb text-left rounded-lg">
                            <span className="text-[18px]">¿Texto simulado para pregunta frecuente?</span>
                            <ChevronDownIcon
                                className={`${
                                    open ? 'transform rotate-180 text-gray-second2' : 'text-gray-second2'
                                } w-8 h-8 `}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel
                            className="px-8 text-16 font-Nova-Rg bg-white rounded-b-lg">
                            <div className="pb-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </Disclosure.Panel>
                    </Fragment>
                )}
            </Disclosure>
            <Disclosure as="div" className="mt-5">
                {({open}) => (
                    <Fragment>
                        <Disclosure.Button
                            className="bg-white flex justify-between w-full px-8 pt-6 pb-4 text-24 font-Nova-Sb text-left rounded-lg">
                            <span className="text-[18px]">¿Texto simulado para pregunta frecuente?</span>
                            <ChevronDownIcon
                                className={`${
                                    open ? 'transform rotate-180 text-gray-second2' : 'text-gray-second2'
                                } w-8 h-8 `}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel
                            className="px-8 text-[16px] font-Nova-Rg bg-white rounded-b-lg">
                            <div className="pb-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </Disclosure.Panel>
                    </Fragment>
                )}
            </Disclosure>
            <Disclosure as="div" className="mt-5">
                {({open}) => (
                    <Fragment>
                        <Disclosure.Button
                            className="bg-white flex justify-between w-full px-8 pt-6 pb-4 text-24 font-Nova-Sb text-left rounded-lg">
                            <span className="text-[18px]">¿Texto simulado para pregunta frecuente?</span>
                            <ChevronDownIcon
                                className={`${
                                    open ? 'transform rotate-180 text-gray-second2' : 'text-gray-second2'
                                } w-8 h-8 `}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel
                            className="px-8 text-[16px] font-Nova-Rg bg-white rounded-b-lg">
                            <div className="pb-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </Disclosure.Panel>
                    </Fragment>
                )}
            </Disclosure>
            <Disclosure as="div" className="mt-5">
                {({open}) => (
                    <Fragment>
                        <Disclosure.Button
                            className="bg-white flex justify-between w-full px-8 pt-6 pb-4 text-24 font-Nova-Sb text-left rounded-lg">
                            <span className="text-[18px]">¿Texto simulado para pregunta frecuente?</span>
                            <ChevronDownIcon
                                className={`${
                                    open ? 'transform rotate-180 text-gray-second2' : 'text-gray-second2'
                                } w-8 h-8 `}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel
                            className="px-8 text-[16px] font-Nova-Rg bg-white rounded-b-lg">
                            <div className="pb-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </Disclosure.Panel>
                    </Fragment>
                )}
            </Disclosure>
        </Fragment>
    )
}
export default QuestionF