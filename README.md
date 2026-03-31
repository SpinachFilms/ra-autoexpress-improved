# RA Auto Express — Website Redesign
A complete rebuild of a local auto body shop's website, focused on performance, mobile experience, and conversion. This was a real client project through HO Studio.

**Live site:** https://ra-autoexpress-improved.vercel.app

## The problem

The original site had a 12MB+ video hero, poor mobile layout, and a Lighthouse score around 60. It was slow, hard to navigate on phones, and didn't communicate services clearly.

## What I built

A clean, fast, conversion-focused website from scratch using Next.js 14 and TypeScript. Key decisions:

- Replaced the video hero with a static gradient — shaved ~12MB from initial load
- Rebuilt from 8 components down to 5 focused ones
- Mobile-first responsive layout throughout
- Prominent CTAs placed at decision points
- Lighthouse score improved to 90+

## Tech stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Vercel (deployment)

## Results

| Metric | Before | After |
|--------|--------|-------|
| Load time | 3–4s | <2s |
| Lighthouse score | ~60 | 90+ |
| Codebase size | 8 components | 5 components |
| Mobile experience | Poor | Excellent |

## Running locally
````bash
npm install
npm run dev
````
