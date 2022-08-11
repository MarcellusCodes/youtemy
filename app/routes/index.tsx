import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import { Navbar, Button } from "../components/index";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Youtemy",
    description: "Welcome to your udemy and youtube learning alternative",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[5%] left-[15%] opacity-20 w-[300px] h-[300px] text-secondary-50 fill-current"
      >
        <path d="M267.625 47.9c22.1 21.3 23.6 64.2 23.7 107.2.1 43-1.1 86.2-23.3 103.8-22.1 17.7-65.3 9.9-101.4 2.9-36.2-6.9-65.5-13-96.7-30.7-31.3-17.6-64.5-46.9-61-72.5 3.6-25.7 44-47.8 75.3-69.1 31.2-21.4 53.3-41.9 85.8-52.3 32.5-10.4 75.4-10.7 97.6 10.7" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[25%] right-[10%] opacity-20 w-[300px] h-[300px] text-secondary-50 fill-current"
      >
        <path d="M236.836 61.896c27.7 29.7 48.6 64.1 48.2 98.1-.3 34.1-22 67.8-49.6 89-27.7 21.1-61.4 29.8-100.3 35-39 5.3-83.2 7.1-104.2-14-21-21.2-18.8-65.4-7.7-98.6 11-33.1 30.9-55.2 51.9-84.9 21-29.6 43.1-66.9 71.4-73 28.2-6.2 62.6 18.7 90.3 48.4" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-[10%] left-[30%] opacity-20 w-[300px] h-[300px] text-red-600 fill-current"
      >
        <path d="M223.17 86.808c20.5 31.2 35.1 57.6 38.6 87.5 3.6 30-4 63.4-24.5 79.1-20.5 15.6-53.9 13.4-91.9 17.9-37.9 4.4-80.4 15.6-97.7 0-17.3-15.6-9.6-58.1-.2-91.2 9.3-33.1 20.1-56.9 37.5-88.2 17.3-31.2 41.1-69.9 66.2-71.2 25.1-1.3 51.5 34.8 72 66.1" />
      </svg>
      <header className="pb-20 flex flex-col items-center">
        <h1 className="text-red-600 font-bold font-primary text-6xl">
          Youtemy
        </h1>
        <div className="py-2" />
        <p className="text-red-600 font-primary text-xl opacity-80">
          Create courses based on youtube videos and export them like udemy
          courses
        </p>
        <div className="py-10" />
        <span className="text-secondary-50 font-primary text-lg">
          {" "}
          Create a learnful experience
        </span>
        <div className="pb-2" />
        <div className="border-t-2 border-secondary-50 w-[400px] h-[400px]">
          <div className="pb-2" />
          <form action="" className="w-full">
            <input
              type="text"
              name="course-name"
              id="course-name"
              placeholder="Title of your course"
              className="border-2 border-secondary-50 bg-transparent px-2 py-2 w-full focus:outline-none hover:bg-secondary-200 duration-100 focus:bg-secondary-100 focus:text-white text-secondary-50"
            />
            <div className="py-1" />
            <input
              type="text"
              name="youtube-link"
              id="youtube-link"
              placeholder="Youtube link or video id"
              className="border-2 border-secondary-50 bg-transparent px-2 py-2 w-full focus:outline-none hover:bg-secondary-200 duration-100 focus:bg-secondary-100 focus:text-white text-secondary-50"
            />

            <div className="py-2" />
            <Button primary={true} type="submit" classNames={"w-full"}>
              Start Learning
            </Button>
          </form>
        </div>
      </header>
    </>
  );
}
