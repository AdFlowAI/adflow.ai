"use client";

import React from "react";

interface WithAuthProps {
  children: React.ReactNode;
  permissions?: [];
  redirect?: string;
  fallback?: React.ReactNode;
}

export const WithAuth = React.memo(({ children }: WithAuthProps) => {
  return children;
});

WithAuth.displayName = "WithAuth";
