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

export async function loader({ request, params }: LoaderArgs) {
  console.log(request, params);

  return json({ params });
}

export default function LecturePage() {
  const data = useLoaderData<typeof loader>();
  const { player } = useOutletContext();

  const playerSeekTo = (second: number) => {
    player?.seekTo(second, true);
  };
  return (
    <div className="flex flex-col h-auto">
      <div className="py-4" />
      <h2 className="font-primary text-secondary-50 text-3xl text-center">
        Lectures
      </h2>
      <div className="pb-2" />
      <div className="w-[500px] h-[300px] flex-initial bg-secondary-900 p-4">
        <ul className="flex flex-col items-start w-full">
          <li className="flex flex-row items-center justify-between border-b-2 border-secondary-50 w-full font-primary text-secondary-50">
            <div
              onClick={() => {
                playerSeekTo(120);
              }}
              className="hover:bg-red-500 cursor-pointer"
            >
              <span>02:03 - 02:56</span>
              <p className="font-bold">Setup Auth</p>
            </div>
            <Link
              className="px-4 py-1 font-primary bg-red-600 hover:bg-red-500 active:bg-red-700
       duration-100 text-md text-white text-center"
              to="/courses/25646/lectures/setup-auth"
            >
              Edit
            </Link>
          </li>
        </ul>
      </div>
      <div className="pt-4" />
      <div className="flex flex-row items-center justify-center space-x-6">
        <Button classNames="w-full" primary={true}>
          Generate Course
        </Button>
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
