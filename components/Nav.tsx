"use client";

import Link from "next/link";
import { useUploadModal } from "@/lib/upload-modal";

export default function Nav() {
  const { setOpen } = useUploadModal();

  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between px-10 py-[18px] bg-paper border-b-3 border-ink backdrop-blur-sm max-md:px-5 max-md:py-3.5">
      <Link
        href="/"
        className="font-display text-[26px] flex items-center gap-2.5 no-underline text-ink"
      >
        <span className="w-[18px] h-[18px] bg-coral border-[2.5px] border-ink rounded-full inline-block" />
        PaperStory
      </Link>

      <div className="flex gap-8 items-center max-md:hidden">
        <a href="#features" className="nav-link">
          Features
        </a>
        <a href="#showcase" className="nav-link">
          Stories
        </a>
        <button
          onClick={() => setOpen(true)}
          className="nav-link bg-transparent border-0 cursor-pointer font-sans text-[15px] font-medium"
        >
          Upload
        </button>
        <button onClick={() => setOpen(true)} className="btn btn-primary">
          Get Started →
        </button>
      </div>

      <style jsx>{`
        .nav-link {
          text-decoration: none;
          color: #0a0a0a;
          font-weight: 500;
          font-size: 15px;
          position: relative;
          padding: 4px 0;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 3px;
          background: #0a0a0a;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
