import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaGift, FaCode, FaDatabase, FaProjectDiagram, FaLayerGroup, FaBrain } from "react-icons/fa";
import { placementModules } from "../data/placementModules";

/* ===========================
   STEP 2: FREE ADD-ONS DATA
=========================== */
const freeAddOns = [
  {
    title: "Career & Mentorship Support",
    items: [
      "Personalized Career Counselling",
      "One-on-one guidance for placement goals",
      "FREE 1-on-1 mentorship by industry experts",
    ],
  },
  {
    title: "Profile & Resume Enhancement",
    items: [
      "ATS-friendly resume building",
      "LinkedIn profile optimization",
      "Mentor-guided real-world projects",
    ],
  },
  {
    title: "Internship & Exposure",
    items: [
      "Internship certificate",
      "Referrals for top performers",
    ],
  },
  {
    title: "Interview & Hiring Readiness",
    items: [
      "Technical + HR interview preparation",
      "Mock interviews with feedback",
      "Company-specific interview prep",
    ],
  },
  {
    title: "Skills Beyond Academics",
    items: [
      "Soft skills & communication training",
      "Salary negotiation guidance",
      "Case studies & guesstimation practice",
    ],
  },
];

/* ===========================
   ICON MAPPING (Optional polish)
=========================== */
const moduleIcons = {
  1: FaCode,
  2: FaProjectDiagram,
  3: FaDatabase,
  4: FaLayerGroup,
  5: FaCode,
  6: FaBrain,
  7: FaBrain,
};

/* ===========================
   ACCORDION ITEM
=========================== */
const AccordionItem = ({ title, description, topics, icon: Icon }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="text-primary-500 text-xl" />}
          <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        </div>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6"
          >
            {description && (
              <p className="text-gray-600 mb-4">{description}</p>
            )}

            {topics && (
              <ul className="grid md:grid-cols-2 gap-2 list-disc pl-5 text-gray-700">
                {topics.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ===========================
   MAIN PAGE
=========================== */
const PlacementJobs = () => {
  return (
    <div className="container-custom py-20 max-w-5xl">
      {/* HEADER */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        UnchaAi Placement-First Program
      </h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
        Our placement-first approach focuses on real-world skills, projects,
        interview preparation, and continuous mentorship — helping you become
        truly job-ready.
      </p>

      {/* MODULES */}
      <div className="space-y-5">
        {placementModules.map((module) => {
          const Icon = moduleIcons[module.id];
          return (
            <AccordionItem
              key={module.id}
              title={module.title}
              description={module.description}
              topics={module.topics}
              icon={Icon}
            />
          );
        })}
      </div>

      {/* ===========================
          STEP 3: FREE ADD-ONS ACCORDION
      =========================== */}
      <h2 className="text-3xl font-bold mt-20 mb-6 flex items-center gap-2">
        🎁 FREE Add-ons & Additional Services
      </h2>

      <div className="space-y-5">
        {freeAddOns.map((addon, index) => (
          <AccordionItem
            key={index}
            title={addon.title}
            topics={addon.items}
            icon={FaGift}
          />
        ))}
      </div>
    </div>
  );
};

export default PlacementJobs;