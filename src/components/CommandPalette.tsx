import { useEffect, useState } from "react";
import {
  Home,
  FolderGit2,
  Cpu,
  Terminal,
  Briefcase,
  FileText,
  Mail,
  Zap,
  Check,
} from "lucide-react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "./ui/command";

interface CommandPaletteProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function CommandPalette({ open: externalOpen, onOpenChange }: CommandPaletteProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = externalOpen !== undefined ? externalOpen : internalOpen;

  const setOpen = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
    setInternalOpen(newOpen);
  };

  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("reduce-motion") === "true" ||
        document.documentElement.classList.contains("reduce-motion")
      );
    }
    return false;
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(!isOpen);
      }
    };

    const handleCustomOpen = () => {
      setOpen(true);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  const toggleReducedMotion = () => {
    const nextState = !reducedMotion;
    setReducedMotion(nextState);
    if (nextState) {
      document.documentElement.classList.add("reduce-motion");
      localStorage.setItem("reduce-motion", "true");
    } else {
      document.documentElement.classList.remove("reduce-motion");
      localStorage.setItem("reduce-motion", "false");
    }
  };

  const navigateTo = (sectionId: string) => {
    setOpen(false);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    }
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search section..." />
      <CommandList className="py-2 font-mono text-xs">
        <CommandEmpty>No matching commands found.</CommandEmpty>
        <CommandGroup heading="NAVIGATION">
          <CommandItem onSelect={() => navigateTo("home")}>
            <Home className="mr-2 h-4 w-4 text-emerald-400" />
            <span>Home</span>
            <CommandShortcut className="font-mono text-xs text-zinc-500">⌘1</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("projects")}>
            <FolderGit2 className="mr-2 h-4 w-4 text-cyan-400" />
            <span>Projects</span>
            <CommandShortcut className="font-mono text-xs text-zinc-500">⌘2</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("aiml")}>
            <Cpu className="mr-2 h-4 w-4 text-purple-400" />
            <span>AI / ML</span>
            <CommandShortcut className="font-mono text-xs text-zinc-500">⌘3</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("skills")}>
            <Terminal className="mr-2 h-4 w-4 text-emerald-400" />
            <span>Skills</span>
            <CommandShortcut className="font-mono text-xs text-zinc-500">⌘4</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("experience")}>
            <Briefcase className="mr-2 h-4 w-4 text-blue-400" />
            <span>Experience</span>
            <CommandShortcut className="font-mono text-xs text-zinc-500">⌘5</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("resume")}>
            <FileText className="mr-2 h-4 w-4 text-amber-400" />
            <span>Resume</span>
            <CommandShortcut className="font-mono text-xs text-zinc-500">⌘6</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => navigateTo("contact")}>
            <Mail className="mr-2 h-4 w-4 text-rose-400" />
            <span>Contact</span>
            <CommandShortcut className="font-mono text-xs text-zinc-500">⌘7</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator className="my-1 bg-zinc-800" />

        <CommandGroup heading="PREFERENCES">
          <CommandItem onSelect={toggleReducedMotion}>
            <Zap className="mr-2 h-4 w-4 text-yellow-400" />
            <span>Toggle Reduced Motion</span>
            <div className="ml-auto flex items-center gap-1.5 font-mono text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
              {reducedMotion && <Check className="w-3 h-3 text-emerald-400" />}
              <span>{reducedMotion ? "ON" : "OFF"}</span>
            </div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
