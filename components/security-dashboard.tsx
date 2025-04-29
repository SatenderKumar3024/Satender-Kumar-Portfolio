"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Download, Share2, BarChart3, PieChart, Info } from "lucide-react"
import { KpiCards } from "./dashboard/kpi-cards"
import SkillDomainChart from "./dashboard/skill-domain-chart"
import SkillRadarChart from "./dashboard/skill-radar-chart"
import CertificationChart from "./dashboard/certification-chart"
import CertificationsDonutChart from "./dashboard/certifications-donut-chart"
import SkillProjectMatrix from "./dashboard/skill-project-matrix"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function SecurityDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [expandedMobile, setExpandedMobile] = useState<string[]>(["overview"])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    if (!expandedMobile.includes(value)) {
      setExpandedMobile([...expandedMobile, value])
    }
  }

  const handleAccordionChange = (value: string) => {
    if (expandedMobile.includes(value)) {
      setExpandedMobile(expandedMobile.filter((item) => item !== value))
    } else {
      setExpandedMobile([...expandedMobile, value])
    }
  }

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Security Impact Analytics
            </h2>
            <p className="text-gray-400">Visualizing security expertise, certifications, and project impact</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="text-gray-300 border-gray-700 hover:bg-gray-800">
                    <Download className="mr-2 h-4 w-4" /> Export
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export dashboard as PDF</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" className="text-gray-300 border-gray-700 hover:bg-gray-800">
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Share dashboard with colleagues</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Key Performance Indicators - Always visible */}
        <div className="mb-8">
          <Card className="bg-gray-800/30 border-gray-700">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Key Performance Indicators</CardTitle>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Info className="h-4 w-4" />
                        <span className="sr-only">Info</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Metrics showing security impact across projects</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <CardDescription>Security impact metrics across projects</CardDescription>
            </CardHeader>
            <CardContent>
              <KpiCards />
            </CardContent>
          </Card>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:block">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8 bg-gray-800/50">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="skills">Skills Analysis</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="projects">Project Impact</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Skill Domain Focus</CardTitle>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Distribution of skills across security domains</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardDescription>Distribution across security domains</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SkillDomainChart />
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Certifications by Category</CardTitle>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Breakdown of certifications by provider</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardDescription>Breakdown by certification provider</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CertificationsDonutChart />
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Technical Proficiency</CardTitle>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Skill level across key technical areas</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardDescription>Skill level across key areas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SkillRadarChart />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Skill Domain Focus</CardTitle>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Distribution of skills across security domains</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardDescription>Distribution across security domains</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SkillDomainChart />
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Technical Proficiency</CardTitle>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Skill level across key technical areas</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardDescription>Skill level across key areas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SkillRadarChart />
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Skill-Project Matrix</CardTitle>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Correlation between skills and their application in projects</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardDescription>Correlation between skills and project applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SkillProjectMatrix />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="certifications" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Certifications by Category</CardTitle>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Breakdown of certifications by provider</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardDescription>Breakdown by certification provider</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CertificationsDonutChart />
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Certification Timeline</CardTitle>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Timeline of certification acquisition</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardDescription>Certification acquisition over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CertificationChart />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Skill-Project Matrix</CardTitle>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4" />
                              <span className="sr-only">Info</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Correlation between skills and their application in projects</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <CardDescription>Correlation between skills and project applications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SkillProjectMatrix />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden">
          <Accordion
            type="multiple"
            value={expandedMobile}
            onValueChange={(value) => setExpandedMobile(value)}
            className="w-full"
          >
            <AccordionItem value="overview" className="border-gray-700">
              <AccordionTrigger
                onClick={() => handleAccordionChange("overview")}
                className="hover:no-underline py-4 text-lg"
              >
                Overview
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Skill Domain Focus</CardTitle>
                      <CardDescription>Distribution across security domains</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <SkillDomainChart />
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Certifications by Category</CardTitle>
                      <CardDescription>Breakdown by certification provider</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <CertificationsDonutChart />
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Technical Proficiency</CardTitle>
                      <CardDescription>Skill level across key areas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <SkillRadarChart />
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="skills" className="border-gray-700">
              <AccordionTrigger
                onClick={() => handleAccordionChange("skills")}
                className="hover:no-underline py-4 text-lg"
              >
                Skills Analysis
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Skill Domain Focus</CardTitle>
                      <CardDescription>Distribution across security domains</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <SkillDomainChart />
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Technical Proficiency</CardTitle>
                      <CardDescription>Skill level across key areas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <SkillRadarChart />
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="certifications" className="border-gray-700">
              <AccordionTrigger
                onClick={() => handleAccordionChange("certifications")}
                className="hover:no-underline py-4 text-lg"
              >
                Certifications
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Certifications by Category</CardTitle>
                      <CardDescription>Breakdown by certification provider</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <CertificationsDonutChart />
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Certification Timeline</CardTitle>
                      <CardDescription>Certification acquisition over time</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <CertificationChart />
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="projects" className="border-gray-700">
              <AccordionTrigger
                onClick={() => handleAccordionChange("projects")}
                className="hover:no-underline py-4 text-lg"
              >
                Project Impact
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Skill-Project Matrix</CardTitle>
                      <CardDescription>Correlation between skills and project applications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <SkillProjectMatrix />
                    </CardContent>
                  </Card>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Navigation Footer */}
        <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-700">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <ChevronLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-gray-300 border-gray-700 hover:bg-gray-800">
              <BarChart3 className="mr-2 h-4 w-4" /> Charts
            </Button>
            <Button variant="outline" size="sm" className="text-gray-300 border-gray-700 hover:bg-gray-800">
              <PieChart className="mr-2 h-4 w-4" /> Metrics
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
