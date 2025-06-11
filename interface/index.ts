// interface/index.ts

import { ReactNode } from "react";

// Interface for Button component props
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action: () => void;
}

// Interface for Layout component props
export interface LayoutProps {
  children: ReactNode;
}

// Interface for index.tsx imperative routing
export interface PageRouteProps {
  pageRoute: string;
}

