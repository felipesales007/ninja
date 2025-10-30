# 🧠 Test Technique – Dev Fullstack (Next.js 15)

Ce projet a été réalisé dans le cadre du test technique pour le poste de **Développeur Fullstack Senior**.  
Il s’agit d’une mini-application Next.js 15 utilisant **App Router**, **TypeScript** et **TailwindCSS**.

L’application contient :
- Une **page d’accueil** avec une liste paginée de polices de caractères.
- Une **page de détails** pour chaque police.
- Un **thème clair/sombre** géré via un cookie et partagé sur tout le site.
- Un layout global avec logo et bouton de changement de thème.

---

## ⚙️ Technologies utilisées

- **Next.js 15 (App Router)**
- **TypeScript**
- **TailwindCSS**
- **Google Font Inter**
- **Cookies** pour la gestion du thème
- **Données mockées JSON** (aucun appel externe)

---

## 📁 Structure du projet

```bash
src/
├─ app/
│   ├─ api/
│   │   ├─ families/route.ts          → Route API pour la liste des familles
│   │   └─ familyDetails/route.ts     → Route API pour les détails d’une police
│   ├─ components/
│   │   ├─ cards/                     → Composants de cartes (Home + Détails)
│   │   ├─ navbar.tsx                 → Barre de navigation avec switch du thème
│   │   └─ pagination.tsx             → Composant de pagination
│   ├─ font/[id]/page.tsx             → Page de détails d’une police
│   ├─ globals.css                    → Styles globaux (inclut Tailwind)
│   ├─ layout.tsx                     → Layout global (logo + switch thème)
│   ├─ not-found.tsx                  → Page d’erreur 404
│   └─ page.tsx                       → Page d’accueil avec pagination
│
├─ data/                              → Données mockées JSON fournies
│   ├─ fontDetails.json
│   ├─ fontFamiliesPage1.json
│   ├─ fontFamiliesPage2.json
│   └─ fontFamiliesPage3.json
│
├─ models/                            → Typages TypeScript
│   ├─ fontDetail.ts
│   └─ fontFamilie.ts
│
└─ …
```

---

## 🚀 Installation & Lancement

### Cloner le projet
```bash
git clone https://github.com/felipesales007/ninja.git
cd ninja
```

```bash
npm install
```

```bash
npm run dev
```

---

### L’application est accessible sur
👉 http://localhost:3000

---

## 🧠 Points supplémentaires

	•	Une page 404 personnalisée (not-found.tsx) a été ajoutée.
	•	Les SVG sont rendus avec dangerouslySetInnerHTML pour garder leur structure vectorielle.
	•	Tous les composants sont réactifs et respectent les classes dark: pour le mode sombre.
	•	Code organisé, commenté et facilement maintenable.

---

## 🧾 Auteur

Felipe — Développeur Senior

Projet réalisé dans le cadre d’un test technique pour évaluer la maîtrise de Next.js 15, TypeScript, App Router, TailwindCSS et la logique de rendu serveur.

