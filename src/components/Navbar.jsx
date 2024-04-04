"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../components/NavLink";
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // framer Motion

  const topVarient = {
    closed: {
      rotate: 0,
    },
    opend: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVarient = {
    closed: {
      opacity: 1,
    },
    opend: {
      opacity: 0,
    },
  };

  const bottomVarient = {
    closed: {
      rotate: 0,
    },
    opend: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVarient ={
    closed:{
      x:"100vw"
    },
    opend:{
      x:0,
      transition:{
        when:"beforeChildren",
        staggerChildren: 0.2,
      }
    }
  }

const listItemVatient ={
  closed:{
    x: -10,
    opacity:0
  },
  opend:{
    x:0,
    opacity:1
  }
}

  return (
    <div className="h-full flex items-center justify-between px-8 md:px-12 lg:px-20 xl:px-48">
      {/* links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title}></NavLink>
        ))}
      </div>

      {/* logo */}
      <div className="md:hidden lg:flex xl:w-1/3 ">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Lama</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* icons */}
      <div className="hidden md:flex gap-10 ">
        <Link href={"#"}>
          <Image src="/github.png" alt="" width={40} height={40} />
        </Link>
        <Link href={"#"}>
          <Image src="/linkedin.png" alt="" width={40} height={40} />
        </Link>
      </div>

      {/* responsive menu */}
      <div className="md:hidden">
        {/* menu button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVarient}
            animate= {open ? "opend" :"closed" }
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVarient}
            animate= {open ? "opend" :"closed" }
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVarient}
            animate= {open ? "opend" :"closed" }
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* menu list */}
        {open && (
          <motion.div variants={listVarient} initial="closed" animate="opend" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
           
           
            {links.map((link) => (
              <motion.div key={link.title} className="" variants={listItemVatient} >
              <Link href={link.url} >
                {link.title}
              </Link>
              </motion.div>

            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
