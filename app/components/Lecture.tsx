import React, { Fragment, useEffect, useRef, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate, useOutletContext } from "@remix-run/react";

interface LectureProps {
  id: string;
  courseId: string;
  start: string;
  end: string;
}

const Lecture: React.FC<LectureProps> = ({ id, courseId, start, end }) => {
  const navigate = useNavigate();
  const { playerSeekTo, playerPause } = useOutletContext();
  const editLecture = async (event) => {
    event.stopPropagation();
    await playerSeekTo(120);
    await playerPause();
    navigate(`/courses/${courseId}/lectures/${id}`);
  };
  return (
    <div className="z-10 relative flex flex-row items-center justify-between bg-primary-300 p-2 rounded-md hover:outline hover:outline-2 cursor-pointer hover:outline-tertiary-300 w-full font-primary text-secondary-50">
      <div className="">
        <span className="text-secondary font-primary">
          {start} - {end}
        </span>
        <p className="text-lg text-white font-primary">Setup Auth</p>
      </div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            onClick={(event) => {
              event.stopPropagation();
            }}
            className="group hover:bg-[#413f5c] rounded-md p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-white fill-current group-hover:text-tertiary-300"
            >
              <path d="M18.71 8.21a1 1 0 0 0-1.42 0l-4.58 4.58a1 1 0 0 1-1.42 0L6.71 8.21a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l4.59 4.59a3 3 0 0 0 4.24 0l4.59-4.59a1 1 0 0 0 0-1.41Z" />
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right  rounded-md bg-primary-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={editLecture}
                    className={`${
                      active
                        ? "outline outline-2 outline-tertiary-300"
                        : " text-secondary-300"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm bg-primary-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="mr-2 h-5 w-5 text-secondary-300 fill-current"
                    >
                      <path d="M22.853 1.148a3.626 3.626 0 0 0-5.124 0L1.465 17.412A4.968 4.968 0 0 0 0 20.947V23a1 1 0 0 0 1 1h2.053a4.966 4.966 0 0 0 3.535-1.464L22.853 6.271a3.626 3.626 0 0 0 0-5.123ZM5.174 21.122A3.022 3.022 0 0 1 3.053 22H2v-1.053a2.98 2.98 0 0 1 .879-2.121L15.222 6.483l2.3 2.3ZM21.438 4.857l-2.506 2.507-2.3-2.295 2.507-2.507a1.623 1.623 0 1 1 2.295 2.3Z" />
                    </svg>
                    Edit
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Lecture;
