import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";
import { Navbar } from "../components/index";

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
      <Navbar>
        <li>
          <Link to="/courses">
            <button className="px-6 py-2 bg-secondary-50 hover:bg-secondary-200 active:bg-secondary-100 duration-100 text-lg text-white">
              Courses
            </button>
          </Link>
        </li>
        <li>
          <button className="px-6 py-2 bg-secondary-50 hover:bg-secondary-200 active:bg-secondary-100 duration-100 text-lg text-white">
            Login
          </button>
        </li>
      </Navbar>
    </>
  );
}
