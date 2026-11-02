import { Building2, Bus, Home, MapPin, Package, Route, Truck, type LucideProps } from "lucide-react";
import type { IconKey } from "@/lib/content";

const map = { home: Home, building: Building2, package: Package, truck: Truck, route: Route, bus: Bus, pin: MapPin };

export default function Icon({ name, ...props }: { name: IconKey } & LucideProps) {
  const C = map[name];
  return <C aria-hidden="true" {...props} />;
}
