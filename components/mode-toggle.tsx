'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { THEME } from '@/enums';
import { Check, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    className="justify-between"
                    onClick={() => setTheme(THEME.LIGHT)}
                >
                    Light {theme === THEME.LIGHT && <Check />}
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="justify-between"
                    onClick={() => setTheme(THEME.DARK)}
                >
                    Dark {theme === THEME.DARK && <Check />}
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="justify-between"
                    onClick={() => setTheme(THEME.SYSTEM)}
                >
                    System {theme === THEME.SYSTEM && <Check />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
