# Muhammad Ammar Ibrahim — Portfolio

Personal portfolio + blog for Muhammad Ammar Ibrahim (Senior AI Engineer & SaaS Founder).

Built on the [Magic UI portfolio template](https://github.com/dillionverma/portfolio) and customized.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** + **Motion** (animations)
- **content-collections** + MDX for the blog
- **Resend** for the contact form (email-only)
- Deploys on **Vercel**

## Develop

```bash
pnpm install
cp .env.example .env.local   # fill in RESEND_API_KEY + CONTACT_EMAIL
pnpm dev
```

Open http://localhost:3000.

## Edit content

- **Profile, work, projects, skills, links:** `src/data/resume.tsx`
- **Blog posts:** add `.mdx` files under `content/` (frontmatter: `title`, `publishedAt`, `summary`, `author`)
- **Contact form:** `src/components/section/contact-section.tsx` + API at `src/app/api/contact/route.ts`

## Environment variables

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key — required for the contact form |
| `CONTACT_EMAIL` | Where contact submissions are delivered |
| `CONTACT_FROM_EMAIL` | Sender address (use `onboarding@resend.dev` until your domain is verified) |

## Deploy

```bash
pnpm build
# or push to a Vercel-linked repo
```
