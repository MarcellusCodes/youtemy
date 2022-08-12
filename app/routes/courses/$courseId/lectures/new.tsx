import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useCatch,
  useLoaderData,
  Outlet,
  Link,
  useOutletContext,
} from "@remix-run/react";
import { Button } from "../../../../components/index";
import { useNavigate } from "react-router-dom";

export async function loader({ request, params }: LoaderArgs) {
  console.log(request, params);

  return json({ params, request });
}

export default function LecturePage() {
  const data = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const { currentTime, player } = useOutletContext();

  return (
    <div className="flex flex-col h-auto w-[500px]">
      <div className="py-4" />
      <h2 className="font-primary text-secondary-50 text-3xl text-center">
        Lecture
      </h2>
      <div className="pb-2" />

      <div className="flex flex-col">
        <form action="">
          <div className="flex flex-col item-start">
            <div className="py-2" />
            <label htmlFor="from-video">From Video Second</label>
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              id="from-video"
              name="from-video"
            />
          </div>
          <div className="py-1" />
          <div className="flex flex-col item-start">
            <label htmlFor="to-video">To Video Second</label>
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              id="to-video"
              name="to-video"
            />
          </div>
          <div className="py-1" />
          <input
            type="text"
            name="course-lecture"
            id="course-lecture"
            placeholder="Title of your lecture"
            className="border-2 border-secondary-50 bg-transparent px-2 py-2 w-full focus:outline-none hover:bg-secondary-200 duration-100 focus:bg-secondary-100 focus:text-white text-secondary-50"
          />
          <div className="py-2" />
          <Button
            primary={true}
            classNames="w-full"
            onClick={async () => {
              console.log(currentTime);
              console.log("add lecture to db");
              await player?.playVideo();
              navigate(`/courses/${data.params.courseId}/lectures`);
            }}
          >
            Add
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
