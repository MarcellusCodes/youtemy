import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useCatch, useLoaderData, Outlet, useLocation } from "@remix-run/react";
import { useState } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import { Text, Button } from "../../components/index";
import { useNavigate } from "react-router-dom";

export async function loader({ request, params }: LoaderArgs) {
  console.log(request, params);

  return json({ params });
}

export default function CoursePage() {
  const data = useLoaderData<typeof loader>();
  const [currentTime, setCurrentTime] = useState(0);
  const [player, setPlayer] = useState<YouTubePlayer>();
  const navigate = useNavigate();
  const location = useLocation();

  const onPlayerPause: YouTubeProps["onPause"] = (event) => {
    setCurrentTime(event.target.getCurrentTime());
  };

  const playerSeekTo = (second: number) => {
    player?.seekTo(second, true);
  };

  const playerPause = () => {
    player?.pauseVideo();
  };

  const context = {
    currentTime: currentTime,
    player: player,
    playerSeekTo: playerSeekTo,
    playerPause: playerPause,
  };

  console.log(location);
  return (
    <>
      <main>
        <h2 className="text-3xl font-primary font-bold text-white">
          Course Name:
          <span className="text-secondary-300"> {data.params.courseId}</span>
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
            Lectures
          </Button>
        </div>
        <div className="bg-primary-200 w-full h-[2px] my-4" />
        <div
          className={`grid ${
            location.pathname === "/courses/1"
              ? "lg:grid-cols-[minmax(auto,_100%)_minmax(auto,_500px)]"
              : ""
          } lg:grid-cols-[minmax(auto,_100%)_minmax(auto,_500px)] gap-4`}
        >
          <YouTube
            videoId={"5-1LM2NySR0"}
            id={"1"}
            iframeClassName={
              "w-full aspect-video h-[320px] md:h-[480px] xl:h-[680px]"
            }
            onPause={onPlayerPause}
            onReady={(event) => setPlayer(event.target)}
          />
          <div className="flex flex-col">
            {location.pathname === `/courses/${data.params.courseId}` ? (
              <article className="bg-primary-200 p-4 rounded-md flex flex-col items-start space-y-2">
                <h3 className="text-secondary-300 font-bold text-3xl">
                  The Git & Github Bootcamp
                </h3>
                <Text>
                  Master the essentials and the tricky bits: rebasing,
                  squashing, stashing, reflogs, blobs, trees, & more!
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
                  <li className="flex flex-row items-center">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      className="w-4 h-4 text-white fill-current"
                    >
                      <path d="M19 24H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5zM5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm4.342 15.005a2.368 2.368 0 0 1-1.186-.323 2.313 2.313 0 0 1-1.164-2.021V9.339a2.337 2.337 0 0 1 3.5-2.029l5.278 2.635a2.336 2.336 0 0 1 .049 4.084l-5.376 2.687a2.2 2.2 0 0 1-1.101.289zm-.025-8a.314.314 0 0 0-.157.042.327.327 0 0 0-.168.292v5.322a.337.337 0 0 0 .5.293l5.376-2.688a.314.314 0 0 0 .12-.266.325.325 0 0 0-.169-.292L9.545 9.073a.462.462 0 0 0-.228-.068z" />
                    </svg>
                    <span className="text-secondary-300 ml-1">
                      17 hours on-demand-video
                    </span>
                  </li>
                  <li className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      width={512}
                      height={512}
                      className="w-4 h-4 fill-current text-white"
                    >
                      <path d="M15.091 16C21.661 15.964 24 12.484 24 9.5a3.5 3.5 0 0 0-2.764-3.419c.136-.387.254-.742.333-1.011a3.887 3.887 0 0 0-.626-3.458A3.979 3.979 0 0 0 17.729 0H6.271a3.979 3.979 0 0 0-3.214 1.612 3.887 3.887 0 0 0-.626 3.458c.079.269.2.624.333 1.011A3.5 3.5 0 0 0 0 9.5c0 2.984 2.339 6.464 8.909 6.5a5.06 5.06 0 0 1 .091.921V20a1.883 1.883 0 0 1-2 2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-.992A1.885 1.885 0 0 1 15 20v-3.08a5.058 5.058 0 0 1 .091-.92ZM20.5 8A1.5 1.5 0 0 1 22 9.5c0 2.034-1.609 4.2-6.036 4.47a4.847 4.847 0 0 1 .762-.821 15.132 15.132 0 0 0 3.727-5.159c.016.001.03.01.047.01ZM2 9.5A1.5 1.5 0 0 1 3.5 8c.017 0 .031-.009.047-.01a15.132 15.132 0 0 0 3.727 5.159 4.847 4.847 0 0 1 .762.821C3.609 13.7 2 11.534 2 9.5ZM10.513 22A4.08 4.08 0 0 0 11 20v-3.079a6.93 6.93 0 0 0-2.431-5.295A15.338 15.338 0 0 1 4.349 4.5a1.9 1.9 0 0 1 .31-1.694A1.994 1.994 0 0 1 6.271 2h11.458a1.994 1.994 0 0 1 1.612.81 1.9 1.9 0 0 1 .31 1.694 15.338 15.338 0 0 1-4.22 7.122A6.928 6.928 0 0 0 13 16.92V20a4.08 4.08 0 0 0 .487 2Z" />
                    </svg>
                    <span className="text-secondary-300 ml-1">
                      Certification
                    </span>
                  </li>
                </ul>
                <div className="mt-1" />
                <div className="bg-secondary-300 w-full h-[2px]" />

                <h3 className="text-secondary-300 font-bold text-3xl">
                  You will learn
                </h3>

                <ul className="flex flex-col items-start space-y-1">
                  <li className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current text-white"
                    >
                      <path d="M22.319 4.431 8.5 18.249a1 1 0 0 1-1.417 0L1.739 12.9a1 1 0 0 0-1.417 0 1 1 0 0 0 0 1.417l5.346 5.345a3.008 3.008 0 0 0 4.25 0L23.736 5.847a1 1 0 0 0 0-1.416 1 1 0 0 0-1.417 0Z" />
                    </svg>
                    <span className="text-white text-opacity-80 ml-2">
                      Understand how Git works behind the scenes
                    </span>
                  </li>
                  <li className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current text-white"
                    >
                      <path d="M22.319 4.431 8.5 18.249a1 1 0 0 1-1.417 0L1.739 12.9a1 1 0 0 0-1.417 0 1 1 0 0 0 0 1.417l5.346 5.345a3.008 3.008 0 0 0 4.25 0L23.736 5.847a1 1 0 0 0 0-1.416 1 1 0 0 0-1.417 0Z" />
                    </svg>
                    <span className="text-white text-opacity-80 ml-2">
                      Explain the difference Git objects: trees, blobs, commits,
                      and annotated tags
                    </span>
                  </li>
                  <li className="flex flex-row items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current text-white"
                    >
                      <path d="M22.319 4.431 8.5 18.249a1 1 0 0 1-1.417 0L1.739 12.9a1 1 0 0 0-1.417 0 1 1 0 0 0 0 1.417l5.346 5.345a3.008 3.008 0 0 0 4.25 0L23.736 5.847a1 1 0 0 0 0-1.416 1 1 0 0 0-1.417 0Z" />
                    </svg>
                    <span className="text-white text-opacity-80 ml-2">
                      Master the essential Git workflow: adding & committing
                    </span>
                  </li>
                </ul>
                <div className="bg-secondary-300 w-full h-[2px]" />

                <h3 className="text-secondary-300 font-bold text-3xl">
                  Requirements
                </h3>
                <ul className="flex flex-row items-center flex-wrap gap-3">
                  <li className="flex flex-row items-center text-white text-opacity-80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="fill-current text-white w-4 h-4 mr-2"
                    >
                      <path d="M23.836 8.794a3.179 3.179 0 0 0-3.067-2.226H16.4l-1.327-4.136a3.227 3.227 0 0 0-6.146 0L7.6 6.568H3.231a3.227 3.227 0 0 0-1.9 5.832L4.887 15l-1.352 4.187A3.178 3.178 0 0 0 4.719 22.8a3.177 3.177 0 0 0 3.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 0 0 4.983-3.591L19.113 15l3.56-2.6a3.177 3.177 0 0 0 1.163-3.606Zm-2.343 1.991-4.144 3.029a1 1 0 0 0-.362 1.116l1.575 4.87a1.227 1.227 0 0 1-1.895 1.365l-4.075-3a1 1 0 0 0-1.184 0l-4.075 3a1.227 1.227 0 0 1-1.9-1.365l1.58-4.87a1 1 0 0 0-.362-1.116l-4.144-3.029a1.227 1.227 0 0 1 .724-2.217h5.1a1 1 0 0 0 .952-.694l1.55-4.831a1.227 1.227 0 0 1 2.336 0l1.55 4.831a1 1 0 0 0 .952.694h5.1a1.227 1.227 0 0 1 .724 2.217Z" />
                    </svg>
                    React
                  </li>
                  <li className="flex flex-row items-center text-white text-opacity-80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="fill-current text-white w-4 h-4 mr-2"
                    >
                      <path d="M23.836 8.794a3.179 3.179 0 0 0-3.067-2.226H16.4l-1.327-4.136a3.227 3.227 0 0 0-6.146 0L7.6 6.568H3.231a3.227 3.227 0 0 0-1.9 5.832L4.887 15l-1.352 4.187A3.178 3.178 0 0 0 4.719 22.8a3.177 3.177 0 0 0 3.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 0 0 4.983-3.591L19.113 15l3.56-2.6a3.177 3.177 0 0 0 1.163-3.606Zm-2.343 1.991-4.144 3.029a1 1 0 0 0-.362 1.116l1.575 4.87a1.227 1.227 0 0 1-1.895 1.365l-4.075-3a1 1 0 0 0-1.184 0l-4.075 3a1.227 1.227 0 0 1-1.9-1.365l1.58-4.87a1 1 0 0 0-.362-1.116l-4.144-3.029a1.227 1.227 0 0 1 .724-2.217h5.1a1 1 0 0 0 .952-.694l1.55-4.831a1.227 1.227 0 0 1 2.336 0l1.55 4.831a1 1 0 0 0 .952.694h5.1a1.227 1.227 0 0 1 .724 2.217Z" />
                    </svg>
                    React Router
                  </li>
                </ul>
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
            ) : (
              ""
            )}
            <Outlet context={context} />
          </div>
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
