"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="focus-visible:ring-0 focus-visible:ring-offset-0">
                {theme === "system" ? (
                    <SunMoon />
                ) : theme === "dark" ? (
                    <MoonIcon />
                ) : (
                    <SunIcon />
                )}
            </Button>
        </DropdownMenuTrigger> 
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Appearence</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={theme === 'system'} onClick={() => setTheme('system')}>
                System
            </DropdownMenuCheckboxItem>
             <DropdownMenuCheckboxItem checked={theme === 'light'} onClick={() => setTheme('light')}>
                Light
            </DropdownMenuCheckboxItem>
             <DropdownMenuCheckboxItem checked={theme === 'dark'} onClick={() => setTheme('dark')}>
                Dark
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
};

export default ModeToggle;
