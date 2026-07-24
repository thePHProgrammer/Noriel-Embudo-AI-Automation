import { CalendarDays } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

export function CalendlyButton({
  variant = "outline",
  className,
}: {
  variant?: "outline" | "gradient";
  className?: string;
}) {
  return (
    <Button asChild variant={variant} size="lg" className={className}>
      <a href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
        <CalendarDays />
        Book a call
      </a>
    </Button>
  );
}
