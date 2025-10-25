import React from "react";
import Collapsible from "../components/Collapsible";
import { motion } from "framer-motion";
import factoryFlow from "../assets/factory_flow.png";

export default function Motivation() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Motivation & Objectives
      </motion.h1>

      <p className="mb-4">
        The thesis explores whether <strong>Generative AI</strong> can move beyond its
        virtual environment and interact with the <strong>physical world</strong>.
        The motivation comes from observing AI’s dominance in digital applications
        while its potential in embedded systems and robotics remains underutilized.
      </p>

      <img
        src={factoryFlow}
        alt="AI in Robotics Flow Diagram"
        className="my-6 rounded-lg shadow-md"
      />

      <Collapsible title="🌟 Motivation Summary">
        <p>
          The project asks a simple yet profound question:
          <em> “Can AI reach out from the virtual world into the physical?”</em>
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Evaluate how fast an AI-assisted system can be built.</li>
          <li>Enhance robotics with AI-driven OS and setup efficiency.</li>
          <li>Bridge digital intelligence with robotic control.</li>
        </ul>
      </Collapsible>

      <Collapsible title="🎯 Objectives">
        <ul className="list-disc ml-6">
          <li>Identify robots based on component sets using ML/LLM models.</li>
          <li>Automatically generate control code for identified systems.</li>
          <li>Enable robots to interpret user instructions through LLMs.</li>
        </ul>
      </Collapsible>

      <Collapsible title="🧩 Thesis Roadmap">
        <p>
          The thesis follows two main branches:
          <br />
          <strong>System Identification</strong> (green branch) — understanding the
          components and capabilities of the robot.
          <br />
          <strong>Code Generation</strong> (blue branch) — automatically writing the
          code to control the system.
        </p>
      </Collapsible>
    </div>
  );
}