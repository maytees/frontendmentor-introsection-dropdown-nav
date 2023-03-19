import Head from "next/head";
import Image from "next/image";
import { Epilogue } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

const epilogue = Epilogue({ subsets: ["latin"] });

function OpenedArrow() {
  return (
    <img
      src="/images/icon-arrow-up.svg"
      alt="arrow down"
      width={10}
      height={10}
      className="inline-block align-middle hover:cursor-pointer"
    />
  );
}

function ClosedArrow() {
  return (
    <img
      src="/images/icon-arrow-down.svg"
      alt="arrow up"
      width={10}
      height={10}
      className="inline-block align-middle hover:cursor-pointer"
    />
  );
}

function TodoListIcon() {
  return (
    <img
      src="/images/icon-todo.svg"
      alt=""
      width={15}
      height={15}
      className="inline-block align-middle"
    />
  );
}

function CalendarIcon() {
  return (
    <img
      src="/images/icon-calendar.svg"
      alt=""
      width={15}
      height={15}
      className="inline-block align-middle"
    />
  );
}

function RemindersIcon() {
  return (
    <img
      src="/images/icon-reminders.svg"
      alt=""
      width={15}
      height={15}
      className="inline-block align-middle"
    />
  );
}

function PlanningIcon() {
  return (
    <img
      src="/images/icon-planning.svg"
      alt=""
      width={15}
      height={15}
      className="inline-block align-middle"
    />
  );
}

export default function Home() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <>
      <Head>
        <title>SNAP - Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="font-['Epilogue'] text-zinc-600">
        <div className="flex flex-row justify-between items-center px-20">
          <div className="flex flex-row justify-between content-center items-center h-20 space-x-10">
            <motion.img
              whileHover={{ scale: 1.3 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: [0, 0, 0, 0, 1.5, 1] }}
              transition={{
                duration: 4,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 0.31],
              }}
              src="/images/logo.svg"
              alt="logo"
              width={100}
              height={120}
              className="hover:cursor-pointer"
            />
            <div className="text-md font-medium flex content-center flex-row space-x-16 pl-10 text-center">
              <a
                onClick={(e) => {
                  if (featuresOpen) {
                    setFeaturesOpen(false);
                  } else {
                    setCompanyOpen(
                      companyOpen && !featuresOpen ? false : companyOpen
                    );
                    setFeaturesOpen(true);
                  }
                }}
                className={`hover:cursor-pointer inline-block align-middle`}
              >
                <span
                  className={`hover:font-semibold ${
                    featuresOpen ? "font-semibold" : null
                  }`}
                >
                  Features
                </span>{" "}
                <span className="ml-1">
                  {!featuresOpen ? (
                    <ClosedArrow />
                  ) : (
                    <>
                      <OpenedArrow />
                      <div className="flex flex-col space-y-4 justify-center items-center pt-2 bg-slate-50 shadow-xl absolute h-48 w-44 rounded-2xl mr-6">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                          className="flex flex-row space-x-3 items-center w-32 ml-5"
                        >
                          <TodoListIcon />
                          <p className="text-left">Todo List</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                          className="flex flex-row space-x-3 items-center w-32 ml-5"
                        >
                          <CalendarIcon />
                          <p className="text-left">Calendar</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                          className="flex flex-row space-x-3 items-center w-32 ml-5"
                        >
                          <RemindersIcon />
                          <p className="text-left">Reminders</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                          className="flex flex-row space-x-3 items-center w-32 ml-5"
                        >
                          <PlanningIcon />
                          <p className="text-left">Planning</p>
                        </motion.div>
                      </div>
                    </>
                  )}
                </span>
              </a>
              <a
                onClick={(e) => {
                  if (companyOpen) {
                    setCompanyOpen(false);
                  } else {
                    setFeaturesOpen(
                      featuresOpen && !companyOpen ? false : featuresOpen
                    );
                    setCompanyOpen(true);
                  }
                }}
                className={`hover:cursor-pointer inline-block align-middle`}
              >
                <span
                  className={`hover:font-semibold ${
                    companyOpen ? "font-semibold" : null
                  }`}
                >
                  Company
                </span>{" "}
                <span className="ml-1">
                  {!companyOpen ? (
                    <ClosedArrow />
                  ) : (
                    <>
                      <OpenedArrow />
                      <div className="flex flex-col space-y-4 justify-center items-center pt-2 bg-slate-50 shadow-xl absolute h-36 w-32 rounded-2xl mr-6">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                          className="flex flex-row space-x-3 items-center w-20 ml-5"
                        >
                          <p className="text-center">History</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                          className="flex flex-row space-x-3 items-center w-20 ml-5"
                        >
                          <p className="text-left">Our Team</p>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          onHoverStart={(e) => {}}
                          onHoverEnd={(e) => {}}
                          className="flex flex-row space-x-3 items-center w-20 ml-5"
                        >
                          <p className="text-left">Blog</p>
                        </motion.div>
                      </div>
                    </>
                  )}
                </span>
              </a>
              <a className="hover:font-semibold hover:cursor-pointer">
                Careers
              </a>
              <a className="hover:font-semibold hover:cursor-pointer">About</a>
            </div>
          </div>
          <div className="flex flex-row space-x-16">
            <button>Login</button>
            <button
              className="hover:bg-transparent font-light align-middle outline-zinc-900 text-zinc-900 
            hover:outline-1 outline-none transition-all hover:scale-105 h-10 w-28 rounded-xl
             font-['Epilogue']"
            >
              Register
            </button>
          </div>
        </div>
      </nav>
      {/* Hero */}
      <div className="flex flex-row items-center justify-center space-x-40 mt-16">
        <div className="flex flex-col items-start justify-end space-y-14 h-[700px]">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: [2, 1] }}
            transition={{
              duration: 5,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-8xl font-bold"
          >
            Make <br />
            remote work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: [0, 0, 1] }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-xl font-light text-zinc-600 font-['Epilogue']"
          >
            Get your team in sync, no matter your location.
            <br />
            Streamline processes, create team rituals, and
            <br /> watch productivity soar.
          </motion.p>
          <div className="pb-16">
            <motion.button
              initial={{ opacity: 0, scale: 0.3, x: -800 }}
              animate={{ opacity: 1, scale: [1], x: [100, 0] }}
              transition={{
                duration: 4,
                stiffness: 260,
                damping: 20,
              }}
              className="hover:bg-transparent hover:text-md align-middle hover:outline-zinc-900 hover:text-zinc-900 
            hover:outline-1 bg-zinc-900 outline-none transition-all hover:scale-105 h-12 w-40 rounded-xl
             text-zinc-100 font-['Epilogue']"
            >
              Learn more
            </motion.button>
          </div>
          <div className="flex flex-row items-center space-x-14 pb-2">
            <Image
              src="/images/client-databiz.svg"
              width={100}
              height={40}
              alt="Databiz"
            />
            <Image
              src="/images/client-audiophile.svg"
              width={100}
              height={40}
              alt="audiophile"
            />
            <Image
              src="/images/client-meet.svg"
              width={100}
              height={40}
              alt="meet"
            />
            <Image
              src="/images/client-maker.svg"
              width={100}
              height={40}
              alt="maker"
            />
          </div>
        </div>
        <Image
          src="/images/image-hero-desktop.png"
          alt="hero-image"
          width={500}
          height={700}
        />
      </div>
    </>
  );
}
