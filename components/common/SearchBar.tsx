"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { BriefcaseBusiness, MapPin, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { governorate } from "@/data/governorates";
import { trades } from "@/data/trades";

interface SearchBarProps {
  initialTrade?: string;
  initialGovernorate?: string;
  initialQuery?: string;
}

function SearchBar({
  initialTrade = "",
  initialGovernorate = "all",
  initialQuery = "",
}: SearchBarProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedTrade, setSelectedTrade] = useState(initialTrade || "all");
  const [selectedGovernorate, setSelectedGovernorate] =
    useState(initialGovernorate);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const params = new URLSearchParams();
    const normalizedQuery = searchQuery.trim();
    if (normalizedQuery) {
      params.set("q", normalizedQuery);
    }
    if (selectedTrade !== "all") {
      params.set("trade", selectedTrade);
    }
    if (selectedGovernorate !== "all") {
      params.set("governorate", selectedGovernorate);
    }

    const queryString = params.toString();
    router.push(queryString ? `/craftspeople?${queryString}` : "/craftspeople");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-md border border-border bg-card shadow-sm transition-shadow focus-within:shadow-md"
    >
      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-[5fr_3fr_3fr_2fr]">
        <div className="flex h-14 items-center gap-3 bg-card px-4">
          <Search size={18} className="shrink-0 text-muted-foreground" />
          <input
            name="q"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search by name or skill"
            aria-label="Search by name or skill"
            className="h-full w-full bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted-foreground/80"
          />
        </div>

        <Select
          value={selectedTrade}
          onValueChange={(value) => setSelectedTrade(value ?? "all")}
        >
          <SelectTrigger
            aria-label="All trades"
            className="h-14! w-full rounded-none border-0 bg-card px-4 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground shadow-none focus:ring-0"
          >
            <div className="flex min-w-0 items-center gap-2">
              <BriefcaseBusiness
                size={14}
                className="shrink-0 text-primary"
              />
              <span className="truncate">
                <SelectValue placeholder="ALL TRADES" />
              </span>
            </div>
          </SelectTrigger>

          <SelectContent className="max-h-100 overflow-y-auto rounded-md border-border bg-card p-1 **:data-[slot=select-scroll-up-button]:hidden **:data-[slot=select-scroll-down-button]:hidden">
            <SelectItem
              value="all"
              className="w-full py-2.5 font-mono text-[11px] uppercase tracking-[0.12em]"
            >
              ALL TRADES
            </SelectItem>
            {trades.map((trade) => (
              <SelectItem
                key={trade.slug}
                value={trade.slug}
                className="w-full py-2.5 text-sm"
              >
                {trade.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={selectedGovernorate}
          onValueChange={(value) => setSelectedGovernorate(value ?? "all")}
        >
          <SelectTrigger
            aria-label="All governorates"
            className="h-14! w-full rounded-none border-0 bg-card px-3 font-mono text-[11px] uppercase tracking-[0.12em] text-foreground shadow-none focus:ring-0"
          >
            <div className="flex min-w-0 items-center gap-2">
              <MapPin size={14} className="shrink-0 text-primary" />
              <span className="truncate">
                <SelectValue placeholder="ALL GOVERNORATES" />
              </span>
            </div>
          </SelectTrigger>

          <SelectContent className="max-h-100  overflow-y-auto rounded-md border-border bg-card p-1 **:data-[slot=select-scroll-up-button]:hidden **:data-[slot=select-scroll-down-button]:hidden">
            <SelectItem
              value="all"
              className="w-full py-2.5 font-mono text-[11px] uppercase tracking-[0.12em]"
            >
              ALL
            </SelectItem>
            {governorate.map((gov) => (
              <SelectItem
                key={gov.slug}
                value={gov.slug}
                className="w-full py-2.5 text-sm"
              >
                {gov.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-2 bg-primary px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          <Search size={14} className="shrink-0" />
          <span className="truncate">Search</span>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
