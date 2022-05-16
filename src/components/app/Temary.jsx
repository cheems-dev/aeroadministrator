import React, {Fragment} from 'react'
import {Disclosure} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/solid";

const Temary = () => {
    return (
        <Fragment>
            <div className="w-full rounded-2xl mt-5">
                <Disclosure as="div">
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                className={`${
                                    open ? 'bg-gradient-to-r from-grSecond1-c1 via-grSecond1-c2 to-grSecond1-c3 text-white' : 'bg-white text-gray-second1'
                                } items-center flex justify-between w-full px-8 py-5 text-[24px] font-Nova-Eb text-left rounded-lg`}>
                                <span className="text-[18px]">Sesión 1</span>
                                <ChevronDownIcon
                                    className={`${
                                        open ? 'transform rotate-180 text-white' : 'text-gray-second1'
                                    } w-8 h-8 `}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-8 pt-4 font-Nova-Rg bg-white rounded-b-lg">
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Haircon and
                                        Pressurization
                                    </p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
                                    </ul>
                                </div>
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Contaminación</p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
                                    </ul>
                                </div>
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Contaminación</p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
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
                                <span className="text-[18px]">Sesión 2</span>
                                <ChevronDownIcon
                                    className={`${
                                        open ? 'transform rotate-180 text-white' : 'text-gray-second1'
                                    } w-8 h-8 `}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-8 pt-4 font-Nova-Rg bg-white rounded-b-lg">
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Haircon and
                                        Pressurization
                                    </p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
                                    </ul>
                                </div>
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Contaminación</p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
                                    </ul>
                                </div>
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Contaminación</p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
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
                                <span className="text-[18px]">Sesión 3</span>
                                <ChevronDownIcon
                                    className={`${
                                        open ? 'transform rotate-180 text-white' : 'text-gray-second1'
                                    } w-8 h-8 `}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-8 pt-4 font-Nova-Rg bg-white rounded-b-lg">
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Haircon and
                                        Pressurization
                                    </p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
                                    </ul>
                                </div>
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Contaminación</p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
                                    </ul>
                                </div>
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Contaminación</p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
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
                                <span className="text-[18px]">Sesión 4</span>
                                <ChevronDownIcon
                                    className={`${
                                        open ? 'transform rotate-180 text-white' : 'text-gray-second1'
                                    } w-8 h-8 `}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-8 pt-4 font-Nova-Rg bg-white rounded-b-lg">
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Haircon and
                                        Pressurization
                                    </p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
                                    </ul>
                                </div>
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Contaminación</p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
                                    </ul>
                                </div>
                                <div className="py-2">
                                    <p className="font-Nova-Eb text-gray-second1 text-xl">Contaminación</p>
                                    <ul className="mt-2.5 text-gray-second1">
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Sed ut perspiciatis unde omnis iste natus error sit
                                            voluptatem.
                                        </li>
                                        <li className="pb-2">Accusantium doloremque laudantium.</li>
                                        <li className="pb-2">Nemo enim ipsam voluptatem quia voluptas sit.</li>
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
export default Temary
