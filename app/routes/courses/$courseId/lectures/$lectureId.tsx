import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useCatch,
  useLoaderData,
  Outlet,
  Link,
  useOutletContext,
  useNavigate,
} from "@remix-run/react";
import { useState } from "react";
import { Button, TextInput, RangeInput } from "../../../../components/index";

export async function loader({ request, params }: LoaderArgs) {
  console.log(request, params);

  return json({ params });
}

export default function LecturePage() {
  const data = useLoaderData<typeof loader>();
  const { currentTime, playerPause } = useOutletContext();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-primary-200 p-4 rounded-md w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="font-primary text-white text-3xl">Lecture</h3>
        <Button
          classNames="px-2"
          primary={true}
          onClick={async () => {
            await playerPause();
            navigate(`/courses/${data.params.courseId}/lectures`);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 text-primary-300 fill-current"
          >
            <g data-name="01 align center">
              <path d="M22 4h-5V2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H2v2h2v15a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6h2ZM9 2h6v2H9Zm9 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6h12Z" />
              <path d="M9 10h2v8H9zM13 10h2v8h-2z" />
            </g>
          </svg>
        </Button>
      </div>
      <div className="py-2" />
      <div className="flex flex-col">
        <form action="">
          <RangeInput name="from-video" label="From video second" max="100" />
          <div className="py-1" />
          <RangeInput name="to-video" label="To video second" max="100" />
          <div className="py-1" />
          <TextInput
            name="course-lecture"
            placeholder="Title of your lecture"
          />
          <div className="py-2" />
          <Button primary={true} classNames="w-full">
            Edit
          </Button>
        </form>
      </div>
    </div>
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
