'use client';

import { JSX, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// les cookies servent à stocker la préférence du thème
const THEME_COOKIE = 'theme';
const DEFAULT_DAYS = 365;

// lit un cookie par son nom
const readCookie = (name: string): string | undefined => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : undefined;
};

// ecrit un cookie avec le nom, la valeur et les jours d’expiration
const writeCookie = (name: string, value: string, days = DEFAULT_DAYS) => {
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )};path=/;expires=${expires};SameSite=Lax`;
};

export default function NavbarComponent(): JSX.Element {
  useEffect(() => {
    const stored = readCookie(THEME_COOKIE);
    document.documentElement.classList.toggle('dark', stored === 'dark');
  }, []);

  const toggleTheme = useCallback(() => {
    const isNowDark = document.documentElement.classList.toggle('dark');
    writeCookie(THEME_COOKIE, isNowDark ? 'dark' : 'light');
  }, []);

  return (
    <div className="flex justify-between mb-10">
      <Link href="/" aria-label="Home">
        <Image
          src="/ninja.svg"
          className="dark:invert"
          alt="Logo"
          width={35}
          height={35}
        />
      </Link>

      <div>
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="text-white bg-red-400 hover:bg-red-500 rounded-xl text-sm cursor-pointer px-5 py-2"
        >
          Switch theme
        </button>
      </div>
    </div>
  );
}
