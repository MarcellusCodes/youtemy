import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useCatch, useLoaderData } from "@remix-run/react";

export async function loader({ request, params }: LoaderArgs) {
  console.log(request, params);

  return json({ params });
}

export default function CoursePage() {
  const data = useLoaderData<typeof loader>();
  return (
    <main>
      <h3 className="text-2xl font-bold">All Courses</h3>
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
