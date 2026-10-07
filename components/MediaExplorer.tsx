"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, Play, Camera } from "lucide-react";
import { media } from "@/data/media";
import type { MediaItem } from "@/types";
export function MediaExplorer() {
  const [filter, setFilter] = useState("ALL");
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (selected) dialog.current?.showModal();
    else if (dialog.current?.open) dialog.current.close();
  }, [selected]);
  function close() {
    setSelected(null);
    opener.current?.focus();
  }
  const filtered = media.filter(
    (m) => filter === "ALL" || m.category === filter,
  );
  return (
    <>
      <div className="filter-group" aria-label="Filter media">
        {["ALL", "YouTube", "Highlights", "Photos", "Clips"].map((c) => (
          <button
            key={c}
            aria-pressed={filter === c}
            className={filter === c ? "active" : ""}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <p className="results-count" aria-live="polite">
        {filtered.length} COLLECTIONS · CONTENT COMING SOON
      </p>
      <div className="media-grid">
        {filtered.map((m) => (
          <button
            className="media-card card"
            key={m.id}
            onClick={(e) => {
              opener.current = e.currentTarget;
              setSelected(m);
            }}
          >
            <div className="media-art">
              <Image
                src={`/${m.art}.svg`}
                alt=""
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              <span className="media-play">
                {m.category === "Photos" ? <Camera /> : <Play />}
              </span>
              <span className="pill">{m.category}</span>
            </div>
            <div>
              <h3>{m.title}</h3>
              <span className="text-link">
                Explore collection <ArrowUpRight size={16} />
              </span>
            </div>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="media-dialog"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-labelledby="media-dialog-title"
      >
        <button
          onClick={close}
          className="dialog-close"
          aria-label="Close media details"
        >
          <X />
        </button>
        {selected && (
          <>
            <Image
              src={`/${selected.art}.svg`}
              width={800}
              height={560}
              alt="Original HYP concept artwork"
            />
            <div className="dialog-copy">
              <p className="eyebrow">{selected.category} · COMING SOON</p>
              <h2 id="media-dialog-title">{selected.title}</h2>
              <p>{selected.description}</p>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
