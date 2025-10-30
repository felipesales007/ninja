'use client';

import React, { useState } from 'react';
import type { FontDetail } from '@/models/fontDetail';

type CardProps = {
  item: FontDetail;
};

export default function CardFontDetailComponent({ item }: CardProps) {
  // state to manage selected preview type
  const [selected, setSelected] = useState<'pangram' | 'alphabet'>('pangram');

  // dynamic classes for buttons based on selection
  const pangramClass =
    selected === 'pangram'
      ? 'text-sm text-red-400 cursor-pointer py-2 px-2'
      : 'text-sm dark:text-white cursor-pointer py-2 px-2';

  const alphabetClass =
    selected === 'alphabet'
      ? 'text-sm text-red-400 cursor-pointer py-2 px-2'
      : 'text-sm dark:text-white cursor-pointer py-2 px-2';

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
      <div className="md:col-span-8 rounded-2xl bg-white dark:bg-zinc-800 px-8 py-6">
        {/* prévisualisation de la police */}
        {selected === 'pangram' && item.images?.pangram?.svg && (
          <div
            className="svg-responsive w-full max-w-sm sm:max-w-md lg:max-w-lg dark:invert"
            title="Pangram preview"
            aria-hidden
            dangerouslySetInnerHTML={{ __html: item.images.pangram.svg }}
          />
        )}

        {selected === 'alphabet' && item.images?.alphabet?.svg && (
          <div
            className="svg-responsive w-full max-w-sm sm:max-w-md lg:max-w-lg dark:invert"
            title="Alphabet preview"
            aria-hidden
            dangerouslySetInnerHTML={{ __html: item.images.alphabet.svg }}
          />
        )}

        {/* boutons de sélection de prévisualisation */}
        <div className="mt-26">
          <button
            className={pangramClass}
            onClick={() => setSelected('pangram')}
            aria-pressed={selected === 'pangram'}
          >
            Pangram
          </button>

          <button
            className={alphabetClass}
            onClick={() => setSelected('alphabet')}
            aria-pressed={selected === 'alphabet'}
          >
            Alphabet
          </button>
        </div>
      </div>

      {/* informations sur la police */}
      <div className="md:col-span-4 rounded-2xl bg-white dark:bg-zinc-800 px-8 py-6">
        <div className="text-sm font-bold mb-1">{item.name}</div>
        <div className="text-xs">{item.foundry.name}</div>
      </div>
    </div>
  );
}
