import {
  HomeIcon,
  ChartBarIcon,
  ClipboardDocumentIcon,
  UsersIcon,
  FlagIcon,
} from "@heroicons/react/24/outline";

export const SIDEBAR_LINKS = [
  {
    link: "/",
    name: "Home",
    Icon: HomeIcon,
  },
  {
    link: "/",
    name: "Dashboard",
    Icon: ChartBarIcon,
    badge: {
      text: 12,
    },
  },
  {
    link: "/",
    name: "Projects",
    Icon: HomeIcon,
  },
  {
    link: "/",
    name: "Tasks",
    Icon: ClipboardDocumentIcon,
  },
  {
    link: "/",
    name: "Reports",
    Icon: FlagIcon,
  },
  {
    link: "/",
    name: "Users",
    Icon: UsersIcon,
  },
];
