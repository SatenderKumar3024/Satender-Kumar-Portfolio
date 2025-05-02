"use client"

import { useState, useEffect } from "react"
import { AlertCircle, CheckCircle, Skull, FileText, RefreshCcw, LockIcon } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Define the incident response steps
const irSteps = [
  {
    id: "detection",
    title: "1. Detection & Analysis",
    description:
      "Suspicious login detected from an unrecognized location. Multiple failed password attempts followed by successful authentication.",
    icon: <AlertCircle className="h-8 w-8" />,
    tasks: [
      { task: "Trigger SIEM alert based on login anomaly", complete: true },
      { task: "Capture IP address and device information", complete: true },
      { task: "Log timestamp and affected user account", complete: true },
      { task: "Analyze login attempt patterns", complete: false },
      { task: "Isolate affected systems from network", complete: false },
    ],
    metrics: {
      timeToDetect: "47 seconds",
      alertPriority: "High",
      confidence: 85,
    },
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/20",
    borderColor: "border-red-200 dark:border-red-800/30",
    links: [
      { text: "SIEM Alert Details", url: "#" },
      { text: "Login Audit Logs", url: "#" },
    ],
  },
  {
    id: "containment",
    title: "2. Containment",
    description:
      "Implement immediate controls to limit the attack scope and prevent lateral movement within the network.",
    icon: <LockIcon className="h-8 w-8" />,
    tasks: [
      { task: "Lock affected user account", complete: true },
      { task: "Block suspicious IP address", complete: true },
      { task: "Enable enhanced logging for the environment", complete: true },
      { task: "Isolate affected workstation", complete: false },
      { task: "Revoke active sessions for the user", complete: false },
    ],
    metrics: {
      containmentTime: "3 minutes 12 seconds",
      numberOfSystems: 2,
      effectiveness: 92,
    },
    color: "text-amber-500",
    bgColor: "bg-amber-100 dark:bg-amber-900/20",
    borderColor: "border-amber-200 dark:border-amber-800/30",
    links: [
      { text: "Firewall Block Log", url: "#" },
      { text: "Isolation Procedure", url: "#" },
    ],
  },
  {
    id: "investigation",
    title: "3. Investigation",
    description:
      "Deep forensic analysis reveals phishing email led to credential compromise. Evidence of data exfiltration attempts found.",
    icon: <FileText className="h-8 w-8" />,
    tasks: [
      { task: "Review login history for affected user", complete: true },
      { task: "Check for indicators of compromise", complete: true },
      { task: "Analyze email logs for phishing attempts", complete: true },
      { task: "Verify data access and exfiltration", complete: false },
      { task: "Document evidence for potential legal action", complete: false },
    ],
    metrics: {
      forensicAnalysis: "1 hour 27 minutes",
      compromisePeriod: "8 hours 14 minutes",
      evidenceItems: 17,
    },
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800/30",
    links: [
      { text: "Forensic Analysis Report", url: "#" },
      { text: "IOC List", url: "#" },
    ],
  },
  {
    id: "eradication",
    title: "4. Eradication",
    description:
      "Remove malicious artifacts, strengthen affected systems, and implement additional security controls to prevent recurrence.",
    icon: <Skull className="h-8 w-8" />,
    tasks: [
      { task: "Reset all user credentials", complete: true },
      { task: "Scan systems for persistence mechanisms", complete: true },
      { task: "Remove identified malware", complete: false },
      { task: "Patch exploited vulnerabilities", complete: false },
      { task: "Verify system integrity post-eradication", complete: false },
    ],
    metrics: {
      maliciousItems: 3,
      patchesApplied: 2,
      systemsRemediated: 2,
    },
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800/30",
    links: [
      { text: "Malware Analysis", url: "#" },
      { text: "Patch Management", url: "#" },
    ],
  },
  {
    id: "recovery",
    title: "5. Recovery",
    description:
      "Restore affected systems to normal operation with enhanced security controls and monitoring in place.",
    icon: <RefreshCcw className="h-8 w-8" />,
    tasks: [
      { task: "Restore systems from clean backups", complete: true },
      { task: "Enable multi-factor authentication", complete: true },
      { task: "Implement stricter access controls", complete: true },
      { task: "Perform recovery testing", complete: false },
      { task: "Return systems to production", complete: false },
    ],
    metrics: {
      recoveryTime: "4 hours 8 minutes",
      serviceAvailability: "99.1%",
      dataSanityCheck: "Passed",
    },
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800/30",
    links: [
      { text: "Recovery Checklist", url: "#" },
      { text: "Post-Incident Status", url: "#" },
    ],
  },
  {
    id: "lessons",
    title: "6. Lessons Learned",
    description:
      "Document findings, evaluate response effectiveness, and implement improvements to the security posture.",
    icon: <CheckCircle className="h-8 w-8" />,
    tasks: [
      { task: "Conduct post-incident review", complete: true },
      { task: "Document timeline and response actions", complete: true },
      { task: "Update incident response playbook", complete: false },
      { task: "Enhance security awareness training", complete: false },
      { task: "Share findings with security team", complete: false },
    ],
    metrics: {
      mttr: "5 hours 43 minutes",
      processImprovements: 7,
      costOfIncident: "$12,500",
    },
    color: "text-cyan-500",
    bgColor: "bg-cyan-100 dark:bg-cyan-900/20",
    borderColor: "border-cyan-200 dark:border-cyan-800/30",
    links: [
      { text: "Incident Report", url: "#" },
      { text: "Lessons Learned Document", url: "#" },
    ],
  },
]

// Automated simulation timeline
const simulationTimeline = [
  { time: "08:42:17", event: "Initial failed login attempt detected from IP 185.143.XX.XX" },
  { time: "08:43:05", event: "Multiple password attempts trigger brute force detection" },
  { time: "08:43:29", event: "Successful authentication from suspicious IP address" },
  { time: "08:44:02", event: "SIEM alert triggered for anomalous login pattern" },
  { time: "08:46:44", event: "Security team acknowledges alert" },
  { time: "08:47:15", event: "Account locked and suspicious IP blocked" },
  { time: "08:52:30", event: "User contacted for verification - confirms no login attempt" },
  { time: "09:10:22", event: "Investigation of user's inbox shows opened phishing email" },
  { time: "09:45:17", event: "Evidence of data exfiltration attempt discovered in logs" },
  { time: "10:15:00", event: "All user credentials reset and MFA enforced" },
  { time: "11:22:37", event: "Affected systems scanned and cleaned" },
  { time: "12:30:05", event: "Systems restored from backup with enhanced monitoring" },
  { time: "14:15:00", event: "Incident response team conducts post-incident review" },
]

export function IncidentResponseSimulator() {
  const [activeStep, setActiveStep] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)
  const [timelineVisible, setTimelineVisible] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  // Auto-advance the steps when in autoplay mode
  useEffect(() => {
    if (!autoPlay) return

    const timer = setTimeout(() => {
      if (activeStep < irSteps.length - 1) {
        setActiveStep(activeStep + 1)
      } else {
        setAutoPlay(false)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [activeStep, autoPlay])

  // Trigger animation when component comes into view
  useEffect(() => {
    if (isInView && !autoPlay) {
      setActiveStep(0)
    }
  }, [isInView])

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setAutoPlay(false)
  }

  const handleAutoPlay = () => {
    setActiveStep(0)
    setAutoPlay(true)
  }

  const handleTimelineToggle = () => {
    setTimelineVisible(!timelineVisible)
  }

  const currentStep = irSteps[activeStep]

  return (
    <div ref={ref} className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Incident Response Simulator</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Interactive walkthrough of a cybersecurity incident response process
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button
              onClick={handleAutoPlay}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                autoPlay
                  ? "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                  : "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
              }`}
              disabled={autoPlay}
            >
              Auto-Play Simulation
            </button>
            <button
              onClick={handleTimelineToggle}
              className="px-4 py-2 rounded-md text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              {timelineVisible ? "Hide Timeline" : "Show Timeline"}
            </button>
          </div>
        </div>

        {/* Step navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {irSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(index)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
                index === activeStep
                  ? `${currentStep.bgColor} ${currentStep.color} ${currentStep.borderColor} border-2`
                  : "bg-gray-100 text-gray-700 border-gray-200 border dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
              }`}
            >
              {step.title.split(".")[0]}
            </button>
          ))}
        </div>

        {/* Current step content */}
        <div
          className={`p-6 rounded-lg border-2 transition-all duration-300 ${currentStep.borderColor} ${currentStep.bgColor}`}
        >
          <div className="flex items-start gap-4">
            <div className={`${currentStep.color} p-2 rounded-full bg-white dark:bg-gray-800`}>{currentStep.icon}</div>
            <div className="flex-1">
              <h4 className={`text-xl font-bold ${currentStep.color}`}>{currentStep.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{currentStep.description}</p>

              {/* Tasks */}
              <div className="mt-4 space-y-2">
                <h5 className="font-semibold text-gray-900 dark:text-white">Response Tasks:</h5>
                <ul className="space-y-1">
                  {currentStep.tasks.map((task, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span
                        className={`inline-block w-5 h-5 rounded-full flex items-center justify-center ${
                          task.complete ? "bg-green-500 text-white" : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      >
                        {task.complete && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`${
                          task.complete ? "text-gray-700 dark:text-gray-300" : "text-gray-500 dark:text-gray-400"
                        }`}
                      >
                        {task.task}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(currentStep.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
                  >
                    <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                    </div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{value}</div>
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex flex-wrap gap-2">
                {currentStep.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    className="inline-flex items-center px-3 py-1 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <FileText className="h-4 w-4 mr-1" />
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        {timelineVisible && (
          <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Incident Timeline</h4>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
              {simulationTimeline.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 pb-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
                >
                  <div className="text-sm font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {item.time}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300">{item.event}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="px-4 py-2 rounded-md text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
          >
            Previous Step
          </button>
          <button
            onClick={() => setActiveStep(Math.min(irSteps.length - 1, activeStep + 1))}
            disabled={activeStep === irSteps.length - 1}
            className="px-4 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  )
}
