import {
  RiApps2Line,
  RiMegaphoneLine,
  RiPieChartLine,
  RiRocket2Line,
  RiSettings3Line,
  RiUserCommunityLine,
  RiWalletLine,
} from "@remixicon/react";

import type { RouteProps } from "@/types";

export const ADMIN_ROUTES: RouteProps[] = [
  {
    href: "/admin",
    icon: RiApps2Line,
    label: "Dashboard",
  },
];

export const DASHBOARD_ROUTES: RouteProps[] = [
  {
    href: "/dashboard",
    icon: RiApps2Line,
    label: "Overview",
  },
  {
    href: "/dashboard/ads",
    icon: RiMegaphoneLine,
    label: "Ads",
  },
  {
    href: "/dashboard/campaigns",
    icon: RiRocket2Line,
    label: "Campaigns",
  },
  {
    href: "/dashboard/analytics",
    icon: RiPieChartLine,
    label: "Analytics",
  },
  {
    href: "/dashboard/audiences",
    icon: RiUserCommunityLine,
    label: "Audiences",
  },
  {
    href: "/dashboard/finance",
    icon: RiWalletLine,
    label: "Finance",
  },
  {
    href: "/dashboard/settings",
    icon: RiSettings3Line,
    label: "Settings",
  },
];

export const FOOTER_ROUTES = [
  { label: "Pricing", href: "/pricing" },
  { label: "Help Center", href: "/help-center" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];
