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
import { Button, TextInput, RangeInput } from "../../../../components/index";
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
    <div className="flex flex-col w-full bg-primary-200 p-4 rounded-md">
      <h3 className="font-primary text-white text-3xl text-left">Lecture</h3>
      <div className="pb-2" />
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
            Add Lecture
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
