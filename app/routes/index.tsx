import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button, TextInput } from "../components/index";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Youtemy",
    description: "Welcome to your udemy and youtube learning alternative",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  return (
    <>
      <header className="pb-20 flex flex-col items-center">
        <h1 className="text-secondary-300 font-bold font-primary text-6xl text-center">
          The youtube and udemy <br /> course generator
        </h1>
        <div className="py-2" />
        <p className="text-white font-primary text-xl opacity-80">
          Create courses based on youtube videos and export them like udemy
          courses
        </p>
        <div className="py-10" />

        <div className="w-[400px] bg-primary-200 rounded-md p-6 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className=" w-[100px] h[100px] mx-auto"
            viewBox="0 0 350 350"
          >
            <defs>
              <path
                d="m459.352 402.4-102.336-33.168c-2.439-.828-5-1.245-7.576-1.232H348l-21.6-28.8a8 8 0 0 0-5.392-3.136 6.953 6.953 0 0 0-1.008.08V336h-8v-25.552a82.634 82.634 0 0 0 32-65.248v-65.776a7.9 7.9 0 0 0 3.936-1.024 8 8 0 0 0 4.064-6.96v-63.336l40-16.224V104c-8.837 0-16 7.163-16 16v48c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-48c0-8.837-7.163-16-16-16V80a8 8 0 0 0-4.704-7.296l-160-72a7.998 7.998 0 0 0-6.56 0l-160 72a8 8 0 0 0 .272 14.712L128 108.104v63.336a8 8 0 0 0 8 8v65.76a82.634 82.634 0 0 0 32 65.248V336h-8v.144a6.953 6.953 0 0 0-1.008-.08 8 8 0 0 0-5.392 3.136L132 368h-1.44a22.9 22.9 0 0 0-7.424 1.184L20.176 402.56A31.738 31.738 0 0 0 0 432.24V472a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-39.76a31.87 31.87 0 0 0-20.648-29.84zM408 168h-16v-48h16v48zm-74.824 206.912-60.856 54.096L252 408.664l66.576-53.264 14.6 19.512zM144 158.64V104h-.16c.089-.421.143-.85.16-1.28V86.864l96-14.768 96 14.768v15.856c.017.43.071.859.16 1.28H336v54.64a98.998 98.998 0 0 0-36-6.64 91.083 91.083 0 0 0-55.576 17.704 56.483 56.483 0 0 0-4.424 3.792 60.792 60.792 0 0 0-4.408-3.776A91.06 91.06 0 0 0 180 152a98.977 98.977 0 0 0-36 6.64zM240 16.8l139.656 62.84L352 90.84V80a7.999 7.999 0 0 0-6.784-7.904l-104-16a7.727 7.727 0 0 0-2.4 0l-104 16A8 8 0 0 0 128 80v10.84l-27.656-11.2L240 16.8zm-88 228.4v-72.328A83.092 83.092 0 0 1 180 168a74.815 74.815 0 0 1 45.704 14.296 41.86 41.86 0 0 1 7.88 7.92 8 8 0 0 0 12.8 0 41.999 41.999 0 0 1 7.896-7.936A74.827 74.827 0 0 1 300 168a83.092 83.092 0 0 1 28 4.872V245.2c-.044 36.874-29.926 66.756-66.8 66.8h-42.4c-36.874-.044-66.756-29.926-66.8-66.8zm66.8 82.8h42.4a82.142 82.142 0 0 0 34.8-7.768v32.72l-56 44.8-56-44.8v-32.72A82.145 82.145 0 0 0 218.8 328zm-57.352 27.4L228 408.664l-20.32 20.344-60.856-54.096 14.624-19.512zM464 464H16v-31.76a15.704 15.704 0 0 1 9.6-14.64l102.632-33.248a7.104 7.104 0 0 1 2.328-.352h2.4l69.728 61.976a8 8 0 0 0 10.968-.32L240 419.312l26.344 26.344a8 8 0 0 0 10.968.32L347.04 384h2.4a7.365 7.365 0 0 1 2.488.408l102.016 33.032A15.815 15.815 0 0 1 464 432.24V464z"
                transform="matrix(.66917 0 0 .66917 15.4 15.4)"
                fill="#dabfff"
                id="a"
              />
            </defs>
            <g>
              <pattern
                id="b"
                width={350}
                height={350}
                patternUnits="userSpaceOnUse"
              >
                <use xlinkHref="#a" x={-350} y={-350} />
                <use xlinkHref="#a" y={-350} />
                <use xlinkHref="#a" x={350} y={-350} />
                <use xlinkHref="#a" x={-350} />
                <use xlinkHref="#a" />
                <use xlinkHref="#a" x={350} />
                <use xlinkHref="#a" x={-350} y={350} />
                <use xlinkHref="#a" y={350} />
                <use xlinkHref="#a" x={350} y={350} />
              </pattern>
              <rect width="100%" height="100%" fill="url(#b)" />
            </g>
          </svg>
          <div className="py-2" />
          <form action="" className="w-full">
            <TextInput name="course-name" placeholder="Title of your course" />
            <div className="py-2" />
            <TextInput
              name="youtube-link"
              placeholder="Youtube link or video id"
            />
            <div className="py-3" />
            <Button primary={true} type="submit" classNames={"w-full"}>
              Start Learning
            </Button>
          </form>
        </div>
      </header>
    </>
  );
}
