import type React from "react";

import { useState } from "react";
import {
  BarChart3,
  Calendar,
  CheckCircle2,
  Home,
  Maximize2,
  Minimize2,
  Settings,
  X,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Dashboard } from "./dashboard";
import { GoalOrganizer } from "./goal-organizer";
import { TaskManager } from "./task-manager";
import { HabitTracker } from "./habit-tracker";

export function DesktopShell() {
  const [isMaximized, setIsMaximized] = useState(true);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  type PageKey = "dashboard" | "habitTracker" | "goalOrganizer" | "taskManager";
  const [activePage, setActivePage] = useState<PageKey>("dashboard");

  const pages: Record<PageKey, React.ReactNode> = {
      dashboard: <Dashboard />,
      habitTracker: <HabitTracker />,
      goalOrganizer: <GoalOrganizer />,
      taskManager: <TaskManager />,
  };

  return (
    <div className=" h-screen w-screen overflow-hidden bg-muted/40">
      <div
        className={` flex overflow-hidden rounded-xl bg-background transition-all duration-200`}
      >
        <SidebarProvider>
          <Sidebar className="border-r">
            <SidebarHeader className="flex justify-center h-14 border-b px-4 py-2">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Orbis</h1>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Button variant={"ghost"} className="justify-start" onClick={() => setActivePage("dashboard")}>
                          <Home className="h-5 w-5" />
                          <span>Dashboard</span>
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel>Track</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Button variant={"ghost"} className="justify-start" onClick={() => setActivePage("habitTracker")}>
                          <CheckCircle2 className="h-5 w-5" />
                          <span>Habits</span>
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Button variant={"ghost"} className="justify-start" onClick={() => setActivePage("taskManager")}>
                          <Calendar className="h-5 w-5" />
                          <span>Tasks</span>
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Button variant={"ghost"} className="justify-start" onClick={() => setActivePage("goalOrganizer")}>
                          <BarChart3 className="h-5 w-5" />
                          <span>Goals</span>
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Button variant={"ghost"} className="justify-start">
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </Button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>

          <div className="flex flex-1 flex-col h-screen">
            <div className="flex h-14 items-center justify-between border-b px-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <div className="text-sm font-medium">{
                  activePage === "dashboard"
                    ? "Dashboard"
                    : activePage === "goalOrganizer"
                    ? "Goal Organizer"
                    : "Task Manager"
                  }</div>
              </div>
              <div className="flex items-center gap-2">
                <ModeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMaximize}
                  className="h-8 w-8"
                >
                  {isMaximized ? (
                    <Minimize2 className="h-4 w-4" />
                  ) : (
                    <Maximize2 className="h-4 w-4" />
                  )}
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-6">
              {pages[activePage]}
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
