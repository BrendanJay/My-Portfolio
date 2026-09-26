export interface TimelineEntry {
  id: string
  type: "work" | "training"
  role: string
  company: string
  location: string
  period: string
  duration: string
  status: "Completed" | "In Progress"
  description: string
  highlights: string[]
  tags: string[]
}

export const timeline: TimelineEntry[] = [
  {
    id: "tesda-stacktrek-ai",
    type: "training",
    role: "ICpEP R7 Regional Convention – Advancement in AI: Innovating Towards Sustainable Development",
    company: "TESDA ADVANCED /nby StackTrek",
    location: "Region VII, Philippines",
    period: "2026",
    duration: "Seminar + Workshop",
    status: "Completed",
    description:
      "Regional training program focused on applied artificial intelligence, sustainable development workflows, and modern automation tooling. Intensive hands-on workshop covering Activepieces workflows and AI-driven process optimization for business automation and sustainable development initiatives.",
    highlights: [
      "Mastered Activepieces workflow orchestration: designed multi-step automation workflows with app integrations, conditional logic, and trigger-based execution patterns.",
      "Built practical automation projects connecting SaaS tools into unified workflow pipelines for real-world business scenarios.",
      "Explored AI-powered automation for sustainable development goals, including predictive analytics integration and intelligent task routing within workflow systems.",
      "Completed advanced labs on error handling, workflow monitoring, execution history tracking, and performance optimization in production automation environments.",
    ],
    tags: ["Activepieces", "Workflow Automation", "AI Integration", "No-Code/Low-Code", "Business Process Automation", "Sustainable Development"],
  },
  {
    id: "ojt-codelikeus",
    type: "work",
    role: "IT Support Intern",
    company: "CodeLikeUs Technologies Inc.",
    location: "Manila, Philippines",
    period: "June 2025 — July 2025",
    duration: "8 weeks",
    status: "Completed",
    description:
      "On-the-job training rotation covering end-user support and internal IT operations in a fast-moving technology services environment.",
    highlights: [
      "Provided tier-1 technical support and troubleshooting for hardware and software issues across workstations and peripherals.",
      "Assisted in network configuration, router setup, and POS system deployment for retail clients.",
      "Gained hands-on experience in a professional IT environment adhering to change management and ticketing workflows.",
      "Documented system configurations and assisted with asset inventory tracking.",
    ],
    tags: ["POS Deployment", "Networking", "Windows Desktop Support", "Hardware Troubleshooting", "Deployment"],
  },
]