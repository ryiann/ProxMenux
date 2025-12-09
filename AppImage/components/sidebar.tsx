"use client"

import { LayoutDashboard, HardDrive, Network, Server, Cpu, FileText, SettingsIcon, Terminal } from "lucide-react"

const menuItems = [
    { name: "概览", href: "/", icon: LayoutDashboard },
    { name: "存储", href: "/storage", icon: HardDrive },
    { name: "网络", href: "/network", icon: Network },
    { name: "虚拟机", href: "/virtual-machines", icon: Server },
    { name: "硬件", href: "/hardware", icon: Cpu },
    { name: "系统日志", href: "/logs", icon: FileText },
    { name: "终端", href: "/terminal", icon: Terminal },
    { name: "设置", href: "/settings", icon: SettingsIcon },
]

const Sidebar = ({ currentPath, setOpen }) => {
  const handleNavigation = (tabName: string) => {
    // Dispatch custom event to change tab in dashboard
    const event = new CustomEvent("changeTab", { detail: { tab: tabName } })
    window.dispatchEvent(event)
    setOpen(false)
  }

  return (
    <div>
      <button
        onClick={() => handleNavigation("overview")}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          currentPath === "/" || currentPath === "/overview"
            ? "bg-blue-500/10 text-blue-500"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        }`}
      >
        <LayoutDashboard className="h-5 w-5" />
        <span>概览</span>
      </button>

      <button
        onClick={() => handleNavigation("storage")}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          currentPath === "/storage"
            ? "bg-blue-500/10 text-blue-500"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        }`}
      >
        <HardDrive className="h-5 w-5" />
        <span>存储</span>
      </button>

      <button
        onClick={() => handleNavigation("network")}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          currentPath === "/network"
            ? "bg-blue-500/10 text-blue-500"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        }`}
      >
        <Network className="h-5 w-5" />
        <span>网络</span>
      </button>

      <button
        onClick={() => handleNavigation("vms")}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          currentPath === "/virtual-machines"
            ? "bg-blue-500/10 text-blue-500"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        }`}
      >
        <Server className="h-5 w-5" />
        <span>虚拟机与LXC容器</span>
      </button>

      <button
        onClick={() => handleNavigation("hardware")}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          currentPath === "/hardware"
            ? "bg-blue-500/10 text-blue-500"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        }`}
      >
        <Cpu className="h-5 w-5" />
        <span>硬件</span>
      </button>

      <button
        onClick={() => handleNavigation("logs")}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          currentPath === "/logs"
            ? "bg-blue-500/10 text-blue-500"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        }`}
      >
        <FileText className="h-5 w-5" />
        <span>系统日志</span>
      </button>

      <button
        onClick={() => handleNavigation("terminal")}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          currentPath === "/terminal"
            ? "bg-blue-500/10 text-blue-500"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        }`}
      >
        <Terminal className="h-5 w-5" />
        <span>终端</span>
      </button>

      <button
        onClick={() => handleNavigation("settings")}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
          currentPath === "/settings"
            ? "bg-blue-500/10 text-blue-500"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        }`}
      >
        <SettingsIcon className="h-5 w-5" />
        <span>设置</span>
      </button>
    </div>
  )
}

export default Sidebar
