import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/Components/ui/sidebar";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "@/Components/ui/dropdown-menu";
import React, { PropsWithChildren } from "react";
import { AudioWaveform, ChevronsUpDown, Command, Plus, Wallet } from "lucide-react";

const teams = [
  {
    name: "Salary Spr",
    logo: Wallet,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
];

export default function MSidebarHeader({teamId = 0}) {
  const [activeTeam, setActiveTeam] = React.useState(teams[teamId])

  return (
      <SidebarHeader>
          <SidebarMenu>
              <SidebarMenuItem>
                  <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                          <SidebarMenuButton
                              size="lg"
                              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                          >
                              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                  <activeTeam.logo className="size-4" />
                              </div>
                              <div className="grid flex-1 text-left text-sm leading-tight">
                                  <span className="truncate font-semibold">
                                      {activeTeam.name}
                                  </span>
                                  <span className="truncate text-xs">
                                      {activeTeam.plan}
                                  </span>
                              </div>
                              <ChevronsUpDown className="ml-auto" />
                          </SidebarMenuButton>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                          align="start"
                          side="bottom"
                          sideOffset={4}
                      >
                          <DropdownMenuLabel className="text-xs text-muted-foreground">
                              Teams
                          </DropdownMenuLabel>
                          {teams.map((team, index) => (
                              <DropdownMenuItem
                                  key={team.name}
                                  onClick={() => setActiveTeam(team)}
                                  className="gap-2 p-2"
                              >
                                  <div className="flex size-6 items-center justify-center rounded-sm border">
                                      <team.logo className="size-4 shrink-0" />
                                  </div>
                                  {team.name}
                                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                              </DropdownMenuItem>
                          ))}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="gap-2 p-2">
                              <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                                  <Plus className="size-4" />
                              </div>
                              <div className="font-medium text-muted-foreground">
                                  Add team
                              </div>
                          </DropdownMenuItem>
                      </DropdownMenuContent>
                  </DropdownMenu>
              </SidebarMenuItem>
          </SidebarMenu>
      </SidebarHeader>
  );
}
