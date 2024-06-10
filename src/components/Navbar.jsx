import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "/", current: true },
  // { name: "Experiences", href: "/experiences", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Contact", href: "/contact", current: false },
];

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="border-b border-gray-50 bg-white">
            <div className="lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-xl p-2 text-gray-400 hover:bg-blue-ribbon-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    {open ? (
                      <RxCross2 className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <AiOutlineMenu
                        className="block h-6 w-6 focus:text-red-200"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="cursor-pointer text-3xl font-semibold text-blue-ribbon-400">
                    <Link href="/">
                      <Image scr=""/>
                    </Link>
                  </h1>
                </div>
                <div className="hidden sm:flex sm:ml-6 md:ml-20">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-blue-ribbon-400 text-white shadow-lg"
                            : "text-gray-300 hover:bg-blue-ribbon-500 hover:text-white hover:shadow-lg",
                          "rounded-full px-3 py-2 text-xl font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-blue-ribbon-400 text-white shadow-lg"
                      : "text-gray-300 hover:bg-blue-ribbon-400 hover:text-white hover:shadow-lg",
                    "block rounded-xl px-3 py-2 text-xl font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
