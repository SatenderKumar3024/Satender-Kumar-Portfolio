"use client"

import { motion } from "framer-motion"
import { AchievementCounter } from "@/components/ui/achievement-counter"
import { Shield, Users, TrendingUp, Zap } from "lucide-react"

export default function Achievements() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Key Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AchievementCounter
              value={40}
              suffix="%"
              title="Risk Reduction"
              icon={<Shield className="h-8 w-8" />}
              color="from-blue-500/20 to-blue-400/5 border-blue-500/30"
              delay={0.1}
            />
            <AchievementCounter
              value={5000}
              suffix="+"
              title="Users Protected"
              icon={<Users className="h-8 w-8" />}
              color="from-green-500/20 to-green-400/5 border-green-500/30"
              delay={0.2}
            />
            <AchievementCounter
              value={25}
              suffix="%"
              title="SOC Efficiency Improved"
              icon={<TrendingUp className="h-8 w-8" />}
              color="from-purple-500/20 to-purple-400/5 border-purple-500/30"
              delay={0.3}
            />
            <AchievementCounter
              value={30}
              suffix="%"
              title="MTTD Reduction"
              icon={<Zap className="h-8 w-8" />}
              color="from-amber-500/20 to-amber-400/5 border-amber-500/30"
              delay={0.4}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
