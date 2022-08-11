import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useCatch, useLoaderData, Outlet } from "@remix-run/react";
import YouTube from "react-youtube";
import { Text, Button } from "../../components/index";
import { useNavigate } from "react-router-dom";

export async function loader({ request, params }: LoaderArgs) {
  console.log(request, params);

  return json({ params });
}

export default function CoursePage() {
  const data = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  return (
    <>
      <main>
        <h2 className="text-3xl font-primary font-bold text-red-600">
          Course Name: {data.params.courseId}
        </h2>
        <Text>Get some insights before you start creating lectures.</Text>
        <div className="py-2" />
        <div className="flex flex-row items-center space-x-6">
          <Button
            onClick={() => {
              alert("Copy link");
            }}
          >
            Share Course
          </Button>
          <Button
            primary={true}
            onClick={() => {
              navigate(`/courses/${data.params.courseId}/lectures`);
            }}
          >
            Create Lectures
          </Button>
        </div>
        <div className="py-4" />
        <div className="flex flex-row items-start space-x-8">
          <YouTube
            videoId={"5-1LM2NySR0"}
            id={"1"}
            iframeClassName={"w-full aspect-video h-[640px]"}
          />
          <Outlet />
        </div>
      </main>
    </>
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
