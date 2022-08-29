import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useCatch, useLoaderData, useNavigate } from "@remix-run/react";
import { Text, Button } from "../../components/index";

export async function loader({ request, params }: LoaderArgs) {
  console.log(request, params);

  return json({ params });
}

export default function CoursePage() {
  const data = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  return (
    <main>
      <h2 className="text-3xl font-primary font-bold text-white">
        All Courses
      </h2>
      <div className="bg-primary-200 w-full h-[2px] my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <article className="bg-primary-100 p-4 rounded-md flex flex-col items-start space-y-2 hover:outline hover:outline-2 hover:outline-tertiary-300">
          <h3 className="text-secondary-300 font-bold text-3xl">
            The Git & Github Bootcamp
          </h3>
          <Text>
            Master the essentials and the tricky bits: rebasing, squashing,
            stashing, reflogs, blobs, trees, & more!
          </Text>
          <ul className="space-y-2">
            <li className="text-white text-md">
              Created from
              <span className="text-secondary-300 ml-1">Colt Steele</span>
            </li>
            <li className="text-white text-md flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current text-white"
              >
                <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm8.647 7h-3.221a19.676 19.676 0 0 0-2.821-4.644A10.031 10.031 0 0 1 20.647 7ZM16.5 12a10.211 10.211 0 0 1-.476 3H7.976a10.211 10.211 0 0 1-.476-3 10.211 10.211 0 0 1 .476-3h8.048a10.211 10.211 0 0 1 .476 3Zm-7.722 5h6.444A19.614 19.614 0 0 1 12 21.588 19.57 19.57 0 0 1 8.778 17Zm0-10A19.614 19.614 0 0 1 12 2.412 19.57 19.57 0 0 1 15.222 7ZM9.4 2.356A19.676 19.676 0 0 0 6.574 7H3.353A10.031 10.031 0 0 1 9.4 2.356ZM2.461 9H5.9a12.016 12.016 0 0 0-.4 3 12.016 12.016 0 0 0 .4 3H2.461a9.992 9.992 0 0 1 0-6Zm.892 8h3.221A19.676 19.676 0 0 0 9.4 21.644 10.031 10.031 0 0 1 3.353 17Zm11.252 4.644A19.676 19.676 0 0 0 17.426 17h3.221a10.031 10.031 0 0 1-6.042 4.644ZM21.539 15H18.1a12.016 12.016 0 0 0 .4-3 12.016 12.016 0 0 0-.4-3h3.437a9.992 9.992 0 0 1 0 6Z" />
              </svg>
              <span className="text-secondary-300 ml-1">English</span>
            </li>
            <li className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-white fill-current w-4 h-4"
              >
                <path d="M17.5 1.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 8.967c0 4.547 4.786 9.513 8.8 12.88a4.974 4.974 0 0 0 6.4 0c4.014-3.367 8.8-8.333 8.8-12.88a6.8 6.8 0 0 0-6.5-7.05Zm-3.585 18.4a2.973 2.973 0 0 1-3.83 0C4.947 16.006 2 11.87 2 8.967a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05 1 1 0 0 0 2 0 4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05c0 2.903-2.947 7.039-8.085 11.346Z" />
              </svg>
              <span className="text-secondary-300 ml-1">0</span>
            </li>
            
          </ul>
          <div className="mt-1" />
          <div className="bg-secondary-300 w-full h-[2px]" />
          <div className="pt-1" />
          <div className="flex flex-row items-center space-x-2">
            <Button classNames="px-3 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-tertiary-300 group-hover:text-primary-300 group-focus:text-primary-300 fill-current w-6 h-6 inline-flex"
              >
                <path d="M17.5 1.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 8.967c0 4.547 4.786 9.513 8.8 12.88a4.974 4.974 0 0 0 6.4 0c4.014-3.367 8.8-8.333 8.8-12.88a6.8 6.8 0 0 0-6.5-7.05Zm-3.585 18.4a2.973 2.973 0 0 1-3.83 0C4.947 16.006 2 11.87 2 8.967a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05 1 1 0 0 0 2 0 4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05c0 2.903-2.947 7.039-8.085 11.346Z" />
              </svg>
            </Button>
            <Button
              primary={true}
              onClick={() => {
                navigate(`/courses/1`);
              }}
            >
              Watch now
            </Button>
          </div>
        </article>
      </div>
    </main>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Note not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
