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
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function DesktopShell({ children }: { children: React.ReactNode }) {
  const [isMaximized, setIsMaximized] = useState(true);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
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
                        <Button variant={"ghost"} className="justify-start">
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
                        <Button variant={"ghost"} className="justify-start">
                          <CheckCircle2 className="h-5 w-5" />
                          <span>Habits</span>
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Button variant={"ghost"} className="justify-start">
                          <Calendar className="h-5 w-5" />
                          <span>Tasks</span>
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Button variant={"ghost"} className="justify-start">
                          <BarChart3 className="h-5 w-5" />
                          <span>Goals</span>
                        </Button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <div className="absolute bottom-4 left-4">
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
            </div>
            <SidebarRail />
          </Sidebar>

          <div className="flex flex-1 flex-col h-screen">
            <div className="flex h-14 items-center justify-between border-b px-4">
              <div className="text-sm font-medium">Dashboard</div>
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
            <div className="flex-1 overflow-auto p-6">{children}</div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
