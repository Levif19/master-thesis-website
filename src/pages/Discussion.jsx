import React from "react";
import Collapsible from "../components/Collapsible";
import { motion } from "framer-motion";

export default function Discussion() {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6 text-primary"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Discussion
      </motion.h1>

      <Collapsible title="🔍 Methodology Insights">
        <p>
          The detailed methodology revealed where Gen-AI currently excels — primarily
          in <strong>code generation</strong> and communication layers — and where it still
          struggles, like component self-identification.  
          The balance between software depth and hardware feasibility defined project focus.
        </p>
      </Collapsible>

      <Collapsible title="📈 Model Evaluation Discussion">
        <p>
          The Ollama-based LLMs outperformed fine-tuned ones due to their pre-trained
          diversity. Fine-tuning Mistral-7B required larger, cleaner datasets to surpass
          baseline models.  
          The benchmark introduced a “focus factor” — how closely model outputs followed
          a required JSON format.
        </p>
      </Collapsible>

      <Collapsible title="🤖 Robotics Findings">
        <p>
          The prototype robot validated the central hypothesis: <strong>AI can bridge
          digital and physical spaces</strong>. The CGA dynamically generated executable
          code, ran it on the robot, and responded to user voice commands in real-time.
        </p>
      </Collapsible>

      <Collapsible title="⚠️ Ethics & Safety">
        <p>
          Cybersecurity and operational safety are critical. Future iterations should
          consider:
        </p>
        <ul className="list-disc ml-6">
          <li>Local-only model hosting to prevent cloud dependency.</li>
          <li>Auditory and spatial safety mechanisms during robot operation.</li>
          <li>Addressing potential societal impacts of automation on employment.</li>
        </ul>
      </Collapsible>
    </div>
  );
}