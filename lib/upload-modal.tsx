"use client";

import React, { createContext, useContext, useState } from "react";

type ModalCtx = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const UploadModalContext = createContext<ModalCtx | null>(null);

export function UploadModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <UploadModalContext.Provider value={{ open, setOpen }}>
      {children}
    </UploadModalContext.Provider>
  );
}

export function useUploadModal() {
  const ctx = useContext(UploadModalContext);
  if (!ctx) {
    throw new Error("useUploadModal must be used within UploadModalProvider");
  }
  return ctx;
}
