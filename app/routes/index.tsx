import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { motion } from "framer-motion";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <div>
      <main>
        <motion.h2
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", delay: 2 }}
          className="text-red-500 font-bold text-6xl"
        >
          Welcome to Youtemy
        </motion.h2>
      </main>
    </div>
  );
}
