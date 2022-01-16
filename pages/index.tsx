import Head from "next/head";
import { NextPage } from "next";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub, AiFillMail } from "react-icons/ai";

//sudhir.mannava@gmail.com

interface Props {
  title: string;
  siteLink: string;
  gitLink: string;
  videoSrcWebm: string;
  videoSrcMp4: string;
}

const ProjectCard: React.FC<Props> = ({
  gitLink,
  siteLink,
  title,
  videoSrcWebm,
  videoSrcMp4,
  children,
}) => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-auto border-2 bg-slate-800 border-slate-500 rounded-2xl">
        <div className="flex justify-between px-6 pt-4 pb-3">
          <h3 className="text-xl font-bold text-slate-300">{title}</h3>
          <div className="flex gap-6 align-middle">
            <a target="_blank" href={siteLink} rel="noreferrer">
              <BiLinkExternal className="inline-block w-6 h-6 leading-none text-slate-300" />
            </a>
            <a target="_blank" href={gitLink} rel="noreferrer">
              <AiFillGithub className="inline-block w-6 h-6 leading-none text-slate-300" />
            </a>
          </div>
        </div>
        <video className="mb-2" muted loop autoPlay>
          <source src={videoSrcWebm} type="video/webm" />
          <source src={videoSrcMp4} type="video/mp4" />
        </video>
        <p className="px-6 pb-2 text-xl leading-relaxed tracking-wide">
          {children}
        </p>
      </div>
    </div>
  );
};

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dev-Goutham</title>
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
      </Head>
      <main className="min-h-screen font-mono text-slate-50 bg-slate-900">
        <section className="px-8 py-6">
          <p className="pt-12 text-4xl">
            {
              "Hello, I'm Goutham. A Front-End Developer who can build large scalable web apps."
            }
          </p>
          <p className="pt-6 text-4xl">
            My current tech stack is <strong>Next.js</strong>,{" "}
            <strong>Typescript</strong>, <strong>Graphql</strong> and{" "}
            <strong>Tailwind</strong>, but I&apos;m always learning new
            technologies.
          </p>
          <p className="pt-6 text-4xl">
            When a project needs a backend, I use <strong>Node.js</strong> or a
            headless cms depending on the project.
          </p>
        </section>
        <section className="px-8 mt-4">
          <h2 className="inline-block px-4 py-2 mt-4 mb-4 text-2xl font-bold uppercase bg-slate-100 text-slate-600 rounded-xl">
            Featured projects
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <ProjectCard
              siteLink="https://fire-chat-iota.vercel.app/channels/IIaem28R4gEluCG9yLJK"
              gitLink="https://github.com/dev-goutham/fire-chat"
              videoSrcMp4="/videos/fire-chat.mp4"
              videoSrcWebm="/videos/fire-chat.webm"
              title="Fire Chat"
            >
              A live chat application with multiple channels built with{" "}
              <strong>React.js</strong>, <strong>Typescript</strong> and{" "}
              <strong>Tailwind</strong> powered by <strong>Firebase</strong>
            </ProjectCard>
          </div>
        </section>
        <section className="px-8 py-4 mt-6">
          <h4 className="inline-block px-4 py-2 mt-4 mb-2 text-2xl font-bold uppercase bg-slate-100 text-slate-600 rounded-xl">
            Contact
          </h4>
          <div className="flex gap-6 mt-2">
            <a
              target="_blank"
              href="mailto: dev.gouthamram95@gmail.com"
              rel="noreferrer"
            >
              <AiFillMail className="w-12 h-12" />
            </a>
            <a
              target={"_blank"}
              href="https://github.com/dev-goutham"
              rel="noreferrer"
            >
              <AiFillGithub className="w-12 h-12" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default Index;
