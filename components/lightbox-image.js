"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function LightboxImage({ src, alt, width, height, thumbClassName = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="block w-full text-left"
        aria-label="Ampliar mapa conceitual"
      >
        <Image src={src} alt={alt} width={width} height={height} className={thumbClassName} />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-6"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mapa conceitual ampliado"
        >
          <div
            className="relative w-full max-w-6xl rounded-[1.75rem] border border-stone-700 bg-[#0a0a0a] p-4 md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="mb-4 ml-auto flex rounded-full border border-stone-700 px-3 py-1 text-sm text-stone-300 transition-colors hover:border-stone-500 hover:text-stone-100"
            >
              Fechar
            </button>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="max-h-[82vh] h-auto w-full object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
