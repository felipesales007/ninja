import React from 'react';
import type { FontFamily } from '@/models/fontFamilie';

type CardProps = {
  item: FontFamily;
};

export default function CardFontComponent({ item }: CardProps) {
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-800 px-8 py-6 m-1">
      <div className="h-26">
        {item.images?.alphabet?.svg && (
          <div
            className="scale-40 origin-top-left dark:invert"
            title="Alphabet preview"
            aria-hidden
            dangerouslySetInnerHTML={{ __html: item.images.alphabet.svg }}
          />
        )}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-bold">{item.name}</div>
          <div className="text-xs">{item.foundry.name}</div>
        </div>

        <div>
          <div className="text-xs">From ${item.price?.amount}</div>
          <div className="text-xs">{item.totalFonts} styles</div>
        </div>
      </div>
    </div>
  );
}
