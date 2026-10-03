# Decisions (interview prep)

Ye file isliye hai kyunki Phase 0 ka bada hissa guided build tha. Har decision ke saath "kyun" hai.
Interview se pehle ise padho aur har point apne shabdon mein bolke practice karo.

## Architecture

**Server Components by default.** `"use client"` sirf chaar jagah, aur har ek ki wajah browser API ya state hai:

| Component         | Kyun client                                                           |
| ----------------- | --------------------------------------------------------------------- |
| `NavLinks`        | `IntersectionObserver` se pata karta hai kaunsa section dikh raha hai |
| `WorkTabs`        | Kaunsa tab khula hai, ye state hai                                    |
| `CopyEmailButton` | `navigator.clipboard` + "copied" state                                |
| `CustomCursor`    | `pointermove` events                                                  |

Baaki sab (Hero, About, Projects, Skills, Contact) server par render hota hai, browser ko kam JavaScript jaata hai.

> "Most of the page is Server Components. I only made a component client-side when it needed browser APIs or state, like the tabs or the copy-email button."

**Content typed data files mein.** `src/data/` mein `projects.ts`, `experience.ts`, `skills.ts`, `site.ts`. Components sirf data dikhate hain. Type galat ho (field missing, spelling galat) to build fail hota hai.

**Static generation.** `generateStaticParams` build time par har project ka HTML bana deta hai. `dynamicParams = false` matlab list ke bahar ka slug seedha 404. Koi database nahi, koi server cost nahi.

**`params` is a Promise** (Next.js 15+). Isliye detail page `async` hai aur `await params` karta hai.

## Design

**Reference se adapt kiya.** Visual design ek public portfolio se inspired hai (README mein credit hai). Code copy nahi kiya, Next.js + Tailwind mein shuru se banaya. Original jQuery-style JS (Swiper, ScrollReveal, anime.js) ki jagah CSS aur chhote React components.

**Dark-only, `next-themes` hata diya.** Ye design glow aur kaale background par tika hai; light version mein woh effect nahi bachta. Ek theme = kam code, kam JS, flash ka sawal hi nahi.

**Design tokens `@theme` mein** (`globals.css`): `--color-bg`, `--color-accent` waghera. Tailwind inse classes banata hai (`bg-bg`, `text-accent`). Accent colour badalna ho to sirf `--hue` badlo.

**Fonts `next/font/local` se**, files `src/app/fonts/` mein (OFL licence). Google Fonts se build time par download nahi hota, isliye build bina network ke bhi chalta hai (CI, Docker). `next/font` font preload aur fallback size-adjust khud karta hai, layout jump kam.

**Animation bina library ke:**

- Hero ke letters: har letter ek `<span>`, CSS keyframes, `--i` variable se delay
- Scroll par reveal: CSS scroll-driven animations (`animation-timeline: view()`). `@supports` ke andar hai, to jis browser mein support nahi wahan content seedha dikhta hai
- Sab `prefers-reduced-motion: no-preference` ke andar, motion band karne wale users ko animation nahi

**Skills cards `<details>`/`<summary>` se.** Open/close browser khud karta hai: keyboard, screen reader sab built-in, JavaScript zero.

**Project card stretched link.** Title ka `<Link>` `::after` se poora card cover karta hai, to card kahin bhi click ho to detail page khulta hai. Code/Live links `relative z-10` se upar hain. Bug jo mila: overview panel `relative` tha aur link ke upar aa raha tha, isliye `::after` ko `z-[1]` diya.

## Testing

- `ProjectCard`: title link, tech chips, Code/Live links sirf jab data ho (conditional rendering)
- `ProjectGrid`: har project ka card, `#projects` region maujood
- Data: slugs unique hain (slug = URL, duplicate se ek page gayab ho jaata)
- `WorkTabs`: default Experience, click se Education, arrow keys se focus aur tab badalta hai, saal na ho to nahi dikhta
- `CopyEmailButton`: clipboard ko mock kiya, check kiya email copy hua, "Email copied" dikha, 2 second baad wapas

Queries `getByRole` se hain, CSS class se nahi. User ko button dikhta hai, class nahi; aur role se test karna accessibility bhi check karta hai.

## Docker and CI

**Multi-stage Dockerfile:** deps → builder → runner. Final image mein sirf `.next/standalone` server, static files aur `public`. Source code, devDependencies nahi. Non-root user se chalta hai.

**`output: "standalone"`** (`next.config.ts`): Next.js ek chhota `server.js` aur sirf zaroori node_modules bana deta hai. Dockerfile isi par depend karta hai. Vercel ise ignore karta hai.

**Honest note:** Vercel deploy Docker use nahi karta. Docker yahan isliye hai ki same app kisi bhi server (EC2, Render) par chal sake, aur CI har push par check karta hai ki image build hoti hai.

**CI** (`.github/workflows/ci.yml`): `npm ci` → lint → format check → tests → build, phir alag job mein Docker build. `concurrency` naya push aane par purana run cancel karta hai.

## Trade-offs I'd mention

- No CMS/MDX: 3 projects ke liye TS file kaafi hai; 15+ hon to MDX ya CMS.
- No animation library: framer-motion ke liye components client banane padte; CSS se kaam ho gaya.
- Scroll reveal Firefox mein nahi chalta (scroll-driven animations support nahi). Wahan content bina animation ke dikhta hai, jo theek hai.
- Custom cursor sirf decoration hai: touch par aur reduced motion par hidden, system cursor waisa hi rehta hai.

## Likely interview questions

1. Server vs Client Component kya hai, aur tumne `"use client"` kahan aur kyun lagaya?
2. Scroll animation bina JavaScript ke kaise kiya? Jis browser mein support nahi wahan kya hota hai?
3. `generateStaticParams` kya karta hai? Naya project add karo to kya karna padega?
4. Tumhare tests kya check karte hain, aur kya nahi?
5. Fonts local kyun rakhe? `next/font` kya fayda deta hai?
6. Docker image chhota kaise rakha? Vercel par Docker kyun nahi chahiye?
7. CI fail ho jaaye to kaise debug karoge?
