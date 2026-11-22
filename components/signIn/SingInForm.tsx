import { ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectValue, SelectTrigger } from "../ui/select";
import { governorate } from "@/data/governorates";
import { trades } from "@/data/trades";

function SingInForm() {
  return (
    <form className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Full Name */}
        <div className="sm:col-span-2">
          <label
            htmlFor="join-name"
            className="mono-label block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            FULL NAME
          </label>
          <input
            id="join-name"
            type="text"
            placeholder="Ahmed Mostafa"
            className="mt-2 h-11 w-full rounded-md border border-border bg-background/70 px-4 text-sm text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
          />
        </div>

        {/* Trade */}
        <div>
          <label
            htmlFor="join-trade"
            className="mono-label block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            TRADE
          </label>
          <Select defaultValue="plumbing">
            <SelectTrigger
              id="join-trade"
              className="mt-2 h-11 w-full rounded-md border-border bg-background/70 py-5 px-3 text-sm text-foreground shadow-none"
            >
              <SelectValue placeholder="Plumbing" />
            </SelectTrigger>
            <SelectContent className="max-h-100 overflow-y-auto">
              {trades.map((trade) => (
                <SelectItem key={trade.slug} value={trade.slug}>
                  {trade.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Governorate */}
        <div>
          <label
            htmlFor="join-governorate"
            className="mono-label block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            GOVERNORATE
          </label>
          <Select defaultValue="cairo">
            <SelectTrigger
              id="join-governorate"
              className="mt-2 h-11 w-full rounded-md border-border py-5 px-3 bg-background/70 text-sm text-foreground shadow-none"
            >
              <SelectValue placeholder="Cairo" />
            </SelectTrigger>
            <SelectContent className="max-h-100 overflow-y-auto">
              {governorate.map((item) => (
                <SelectItem key={item.slug} value={item.slug}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* WhatsApp Number */}
        <div>
          <label
            htmlFor="join-whatsapp"
            className="mono-label block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            WHATSAPP NUMBER
          </label>
          <input
            id="join-whatsapp"
            type="tel"
            inputMode="tel"
            placeholder="201001234567"
            className="mt-2 h-11 w-full rounded-md border border-border bg-background/70 px-4 text-sm text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
          />
          <p className="mt-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            INCLUDE THE COUNTRY CODE, E.G. 201001234567
          </p>
        </div>

        {/* Years of Experience */}
        <div>
          <label
            htmlFor="join-experience"
            className="mono-label block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            YEARS OF EXPERIENCE
          </label>
          <input
            id="join-experience"
            type="text"
            inputMode="numeric"
            placeholder="8"
            className="mt-2 h-11 w-full rounded-md border border-border bg-background/70 px-4 text-sm text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
          />
        </div>

        {/* About Your Work */}
        <div className="sm:col-span-2">
          <label
            htmlFor="join-about"
            className="mono-label block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            ABOUT YOUR WORK
          </label>
          <textarea
            id="join-about"
            rows={4}
            placeholder="What do you do, which areas do you cover, what are you known for?"
            className="mt-2 w-full resize-none rounded-md border border-border bg-background/70 p-4 text-sm text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
          />
        </div>

        {/* Portfolio Link */}
        <div className="sm:col-span-2">
          <label
            htmlFor="join-portfolio"
            className="mono-label block text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground"
          >
            PORTFOLIO LINK (OPTIONAL)
          </label>
          <input
            id="join-portfolio"
            type="url"
            placeholder="https://"
            className="mt-2 h-11 w-full rounded-md border border-border bg-background/70 px-4 text-sm text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        className="mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
      >
        <span>SUBMIT APPLICATION</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

export default SingInForm;
