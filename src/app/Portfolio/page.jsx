"use client";
import { motion } from "framer-motion";
import React from 'react'

function PortfolioPage() {
  return (
    <motion.div
    className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
  >port</motion.div>
  )
}

export default PortfolioPage