"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

interface WorkImageGridProps {
  images: string[];
  tradeLabel: string;
}

export default function WorkImageGrid({
  images,
  tradeLabel,
}: WorkImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = (src: string) => {
    setSelectedImage(src);
  };

  const close = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !selectedImage) return;

    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      if (dialog.open) dialog.close();
    };
  }, [selectedImage]);

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => open(src)}
            aria-label={`Open ${tradeLabel} work sample ${index + 1}`}
            className="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-md border border-border bg-card text-left"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(50vw - 2rem), 460px"
              loading={index < 3 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
            />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={`${tradeLabel} work image viewer`}
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => setSelectedImage(null)}
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("img, button")) return;
          close();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none items-center justify-center bg-black/95 p-3 text-white backdrop:bg-black/80 open:flex sm:p-6"
      >
        {selectedImage && (
          <div className="relative flex h-full w-full items-center justify-center">
            <div className="relative h-[88dvh] w-[96vw] max-w-[1600px]">
              <Image
                src={selectedImage}
                alt={`${tradeLabel} work sample enlarged`}
                fill
                sizes="(max-width: 1667px) 96vw, 1600px"
                className="object-contain"
              />
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute right-0 top-0 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <X size={20} />
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}