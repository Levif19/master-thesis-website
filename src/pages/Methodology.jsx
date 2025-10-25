import React from "react";
import Collapsible from "../components/Collapsible";
import { motion } from "framer-motion";
import robotPlaceholder from "../assets/placeholders/image1.png"

export default function Methodology() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Methodology
      </motion.h1>

      <p className="mb-6">
        This section outlines the <strong>step-by-step build process</strong> — from
        environment setup and feasibility tests to AI model training and robot assembly.
      </p>

      <Collapsible title="🧪 Feasibility Tests">
        <p>
          Early experiments tested component identification using GPIO pin states and
          vibration sensors. The idea was to let robots automatically detect connected
          hardware. However, due to Raspberry Pi’s lack of ADC, this approach was
          postponed.
        </p>
        <ul className="list-disc ml-6">
          <li>Voltage and vibration tests using accelerometers.</li>
          <li>Explored object-recognition ML models for hardware detection.</li>
          <li>Settled on assuming components are known for integration stages.</li>
        </ul>
      </Collapsible>

      <Collapsible title="🧰 Environment Setup">
        <p>
          The project integrates <strong>ML and LLM pipelines</strong> in Python,
          TensorFlow, and Hugging Face.
        </p>
        <ul className="list-disc ml-6">
          <li>Developed ML model to classify robots from component lists.</li>
          <li>Trained LLM (Mistral 7B) with LoRA fine-tuning for system prediction.</li>
          <li>Benchmarked with Gemma3:1b, Mistral, DeepSeek, and Phi models.</li>
        </ul>
      </Collapsible>

      <Collapsible title="💡 Model Training">
        <p>
          Custom neural networks were trained to classify robot types from JSON datasets.
          TF-IDF was used for text vectorization, and a <strong>Keras model</strong> was
          deployed for fast predictions on embedded systems.
        </p>
        <img
          src={robotPlaceholder}
          alt="Training Illustration"
          className="my-4 rounded-lg shadow-md"
        />
      </Collapsible>

      <Collapsible title="🤖 Hardware Setup">
        <p>
          The physical robot uses a <strong>Raspberry Pi 4 Model B</strong> and consists
          of:
        </p>
        <ul className="list-disc ml-6">
          <li>4 DC motors with dual L298N motor drivers</li>
          <li>USB camera, microphone, and speakers</li>
          <li>Three HC-SR04 ultrasonic sensors</li>
          <li>3D printed PLA chassis (assembled with bowtie connectors)</li>
        </ul>
      </Collapsible>

      <Collapsible title="🔗 Software-Hardware Integration">
        <p>
          The integration used the <strong>Roo Code extension in VS Code</strong> as a
          Code Generation Agent (CGA). The LLM describes the system, sends JSON commands
          to the CGA, which generates Python code and deploys it on the robot.
        </p>
        <p>
          The program runs autonomously at boot using RPi task automation and the
          <code>LLM_text_extract.py</code> script.
        </p>
      </Collapsible>
    </div>
  );
}