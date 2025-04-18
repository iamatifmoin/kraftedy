import { FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const btnStyle = `rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto`;

  return (
    <div className="w-screen flex flex-col items-center justify-center sm:p-12">
      <main className="w-[90%] max-w-6xl rounded-2xl bg-white/5 shadow-xl ring-1 ring-white/10 backdrop-blur-md border border-white/10 sm:p-8 space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Welcome Hiring Manager!
        </h1>
        <p className="text-base sm:text-lg text-white text-center pb-12">
          Now that you're here, here's why you should hire me:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-16 text-white">
          <div className="space-y-8 pb-12">
            <ul className="list-disc list-outside pl-6 space-y-6">
              <li>
                <h3 className="text-base sm:text-lg font-semibold underline mb-2">
                  14 months of practical experience.
                </h3>
                <p className="text-sm leading-6">
                  Two internships completed as a Full-Stack Developer, shipping
                  real-world features that are now in production:
                  <br />
                  – 11 months at Elphe, working with AWS, Google Cloud, Firebase
                  & React.
                  <br />– 3 months at Finlife Tech, developing dashboards and
                  authentication flows using NextJs & MongoDB.
                </p>
              </li>
              <li className="pt-6">
                <h3 className="text-base sm:text-lg font-semibold underline mb-2">
                  Can get things done, fast.
                </h3>
                <p className="text-sm leading-6">
                  Experience in working within remote agile teams, with a focus
                  on quick learning and self-management.
                </p>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <ul className="list-disc list-outside pl-6 space-y-6">
              <li>
                <h3 className="text-base sm:text-lg font-semibold underline mb-2">
                  Excellent communication skills.
                </h3>
                <p className="text-sm leading-6">
                  Actively involved in Open Source with the sharp ability to
                  clearly document and explain complex concepts.
                  <br />
                  Communication is always a priority.
                  <br />
                  Watch me talk in this YT video:{" "}
                  <a
                    href="https://www.youtube.com/watch?v=1uLvud22Blg&t=1061s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-lg !text-yellow-500 underline underline-offset-4"
                  >
                    Watch here →
                  </a>
                </p>
              </li>

              <li className="pt-6">
                <h3 className="text-base sm:text-lg font-semibold underline mb-2">
                  Strong Analytical & Problem-Solving Skills
                </h3>
                <p className="text-sm leading-6">
                  Completed this task in just 1.5 days.
                  <br />
                  (Help from Google Searches and Prompts)
                  <br />
                  Can do much more :)
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center">
          <a
            href="https://drive.google.com/file/d/14SrvTxYqEUZn2d5v8rb0Ibkrz2cVfw2G/view"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            <FileText size={20} />
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/atifmoin/"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/iamatifmoin"
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </main>

      <footer className="relative top-8 text-white text-sm text-center space-y-2">
        <div className="">Made up your mind already?</div>
        <div className="flex items-center justify-center gap-2">
          <span>Get in touch here:</span>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:atifmoin3@gmail.com"
          >
            <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
            atifmoin3@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
