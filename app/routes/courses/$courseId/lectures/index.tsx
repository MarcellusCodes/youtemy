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
import { Button, Lecture } from "../../../../components/index";

export async function loader({ request, params }: LoaderArgs) {
  console.log(request, params);

  return json({ params });
}

export default function LecturePage() {
  const data = useLoaderData<typeof loader>();
  const { player, playerSeekTo, playerPause } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      <div className="bg-primary-200 p-4 rounded-md flex flex-col items-start justify-between">
        <div className="flex flex-row items-center justify-between w-full">
          <h3 className="font-primary text-white text-3xl">Lectures</h3>
          <Button
            classNames="px-2"
            primary={true}
            onClick={async () => {
              await playerPause();
              navigate(`/courses/${data.params.courseId}/lectures/new`);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-current text-primary-300"
            >
              <path d="M23 11H13V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v10H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h10v10a1 1 0 0 0 1 1 1 1 0 0 0 1-1V13h10a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z" />
            </svg>
          </Button>
        </div>
        <div className="py-2" />
        <ul className="flex flex-col items-start w-full">
          <li
            onClick={() => {
              playerSeekTo(120);
            }}
            className="w-full z-0 relative"
          >
            <Lecture id="1" courseId="1" start="02:03" end="03:06" />
          </li>
        </ul>
      </div>
      <div className="py-2" />
      <Button classNames="w-full" primary={true}>
        Generate Course
      </Button>
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
