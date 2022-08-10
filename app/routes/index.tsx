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
      <Navbar>
        <li>
          <Link to="/courses">
            <Button>Courses</Button>
          </Link>
        </li>
        <li>
          <Button>Login</Button>
        </li>
      </Navbar>
    </>
  );
}
