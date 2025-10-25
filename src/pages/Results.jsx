import React from "react";
import Collapsible from "../components/Collapsible";
import modelChart from "../assets/placeholders/image1.png";
import { motion } from "framer-motion";

export default function Results() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Results
      </motion.h1>

      <Collapsible title="📊 Model Benchmark">
        <p>
          Several models were tested: <strong>Gemma3:1b</strong>, <strong>Mistral</strong>,
          <strong>DeepSeek</strong>, <strong>Phi</strong>, and a local ML model.  
          Gemma3:1b achieved the best balance of accuracy and inference speed.
        </p>
        <img
          src={modelChart}
          alt="Benchmark Chart"
          className="my-4 rounded-lg shadow-md"
        />
      </Collapsible>

      <Collapsible title="🧩 Components Identification">
        <p>
          GPIO-based component detection proved unreliable, but accelerometer-based
          vibration fingerprinting showed potential. Future work may use analog boards
          with ADC for accurate electrical signatures.
        </p>
      </Collapsible>

      <Collapsible title="⚙️ Robot Tests">
        <p>
          Two setups were tested:
          <br />
          <strong>Test 1:</strong> A simple circuit controlling two DC motors.
          <br />
          <strong>Test 2:</strong> A 4-wheel autonomous robot with live code generation
          from user speech commands.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Successful voice-to-code interactions via CGA.</li>
          <li>Autonomous boot and task execution on the RPi.</li>
          <li>Sensor readings (ultrasonic) confirmed real-time feedback.</li>
        </ul>
      </Collapsible>
    </div>
  );
}