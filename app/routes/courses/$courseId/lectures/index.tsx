import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useCatch, useLoaderData, Outlet, Link } from "@remix-run/react";

export async function loader({ request, params }: LoaderArgs) {
  console.log(request, params);

  return json({ params });
}

export default function LecturePage() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="flex items-start">
      <div className="w-[600px] h-[300px] flex-initial bg-purple-500">
        <ul>
          <Link to="/courses/25646/lectures/setup-auth">
            <li>
              <span className="block">02:03 - 02:56</span>
              Setup Auth
              <button>Edit</button>
            </li>
          </Link>
        </ul>
        <Link to="/courses/25646/lectures/new">Add Lecture</Link>
        <button>Generate Course</button>
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
