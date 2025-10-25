import React from 'react'
import { motion } from 'framer-motion'
import thesisPDF from '../assets/thesis.pdf'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Exploring Gen-AI in Embedded Software–Hardware Interfaces
      </motion.h1>
      <p className="mb-4 text-lg">
        This Master’s Thesis by <strong>Levi Fechete</strong> explores how Generative AI tools
        and Code Generation Agents (CGAs) can bridge digital intelligence and real-world robotics.
      </p>
      <p className="mb-4">
        The project integrates Large Language Models (LLMs) with embedded systems to create
        autonomous robotic control, demonstrating AI’s capability to reach beyond virtual boundaries.
      </p>
      <a
        href={thesisPDF}
        target="_blank"
        className="inline-block mt-6 bg-primary text-white px-5 py-3 rounded hover:bg-blue-600 transition"
      >
        📘 Download Full Thesis PDF
      </a>
    </div>
  )
}