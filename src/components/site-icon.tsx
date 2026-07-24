import { NEMark } from "@/lib/ne-mark";

export function SiteIcon({
  id,
  className = "h-8 w-8",
}: {
  id: string;
  className?: string;
}) {
  return <NEMark id={id} className={className} />;
}
