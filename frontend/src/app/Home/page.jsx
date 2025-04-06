"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/common/Button";
import {
  Code,
  Terminal,
  MessageSquare,
  Bookmark,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Home = ({}) => {
  const [isHovering, setIsHovering] = useState(null);

  const Rt = useRouter()

  
  const features = [
    {
      id: "snippets",
      title: "Code Snippets",
      description: "Store and organize code snippets with syntax highlighting",
      icon: Code,
      color:
        "bg-violet-100 text-violet-700 dark:bg-violet-900/20 dark:text-violet-400",
      link: "/snippets",
    },
    {
      id: "commands",
      title: "Terminal Commands",
      description: "Save frequently used terminal commands for quick access",
      icon: Terminal,
      color:
        "bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400",
      link: "/commands",
    },
    {
      id: "prompts",
      title: "AI Prompts",
      description: "Store and categorize your AI prompts for various platforms",
      icon: MessageSquare,
      color:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400",
      link: "/prompts",
    },
    {
      id: "bookmarks",
      title: "Smart Bookmarks",
      description: "Save and organize your bookmarks with rich previews",
      icon: Bookmark,
      color: "bg-pink-100 text-pink-700 dark:bg-pink-900/20 dark:text-pink-400",
      link: "/bookmarks",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-6 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">Snippety</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button varaint="ghost" title = "Dashboard"onClick={() => Rt.push("/dashboard")}/>
          <Button title="Get Started" onClick={() => Rt.push("/dashboard")}/>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <section className="py-20 px-4 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Organize your developer knowledge
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Store and access your code snippets, commands, AI prompts, and
              bookmarks in one beautiful, organized space.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={() => Rt.push("/dashboard")}>
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="py-16 px-4 bg-secondary/50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Everything you need, beautifully organized
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className="glass-panel rounded-xl p-6 card-transition"
                  variants={item}
                  onMouseEnter={() => setIsHovering(feature.id)}
                  onMouseLeave={() => setIsHovering(null)}
                  onClick={() => Rt.push(feature.link)}
                >
                  <div
                    className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${feature.color}`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-sm font-medium">
                    <span>Explore</span>
                    <ChevronRight
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        isHovering === feature.id ? "translate-x-1" : ""
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Snippety. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
