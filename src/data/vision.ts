/**
 * Public marketing copy scaffolded from docs/vision-plan-type4.md (Type 4 charter).
 */

export const siteMeta = {
  title: 'Prompt Alchemist',
  description:
    'A hub for navigating the agentic economy — learn, master prompting as structured thinking, and shift toward sustainable leverage. Turn words into outcomes.',
  tagline: 'Turn words into outcomes.',
  versionNote: 'Community Vision & Charter (Type 4), v4.0 · 2026',
} as const;

export const welcome = {
  lead: `**Prompt Alchemist** is a hub for navigating the **agentic economy** together: an era where clear thinking, delegation to tools, and human judgment compound. Whether you are deeply technical or just getting started, the aim is the same — stay **relevant**, **informed**, and **empowered** as AI and automation reshape how we work.`,
  charterNote:
    'This site reflects our member-facing charter: how we talk, what we optimize for, and how that connects to the longer-term mission.',
} as const;

/** Short charter beats for a scannable band under the hero */
export const charterHighlights = [
  {
    title: 'Invite-only',
    detail:
      'A deliberate room for builders who want leverage and repeatability — not an endless open feed.',
  },
  {
    title: 'Signal over noise',
    detail: 'Curated tech and AI context, plus patterns members actually ship — fewer hot takes, more clarity.',
  },
  {
    title: 'Execution-first',
    detail: 'Prompting framed as structured thinking: intent, constraints, steps, and checks against real outcomes.',
  },
  {
    title: 'Human in the loop',
    detail: 'Culture and norms that treat models as collaborators — judgment, dignity, and agency stay centered.',
  },
] as const;

export const pillars = [
  {
    id: 'learn',
    title: 'Learn',
    subtitle: 'Stay in the loop',
    body: 'We share **signal-heavy** updates: tech and AI news that matters, notable events, and industry shifts — so you spend less time drowning in noise and more time understanding what is actually changing.',
  },
  {
    id: 'master',
    title: 'Master the craft',
    subtitle: 'Prompting as the new way of work',
    body: 'We treat **prompting as structured thinking**: clarify intent, set constraints, break work into steps, evaluate outputs against outcomes. Members share patterns, tips, and real use cases so skills compound.',
  },
  {
    id: 'culture',
    title: 'Shift the culture',
    subtitle: 'Vibe working',
    body: 'We advocate for **vibe working**: using AI to work **smarter** and **flow better** — preserving energy for judgment, creativity, and relationships — instead of glorifying grind for its own sake. The goal is sustainable leverage, not burnout with a chatbot.',
  },
] as const;

export const northStar = {
  quote:
    'Build toward a micro-utopia where humans, AI, and robotics coexist, collaborate, and thrive — with people in the loop where it matters, systems that augment dignity and agency, and technology treated as partners in solving real problems, not as replacements to fear or worship.',
  context:
    'Alongside our operational vision: a world where people are **intentionally skilled** at directing intelligent systems so results are **reliable**, not accidental.',
} as const;

export const backbone = {
  coreBelief:
    'The future belongs to those who can collaborate effectively with AI — with clarity, systems thinking, and outcome discipline.',
  visionOutcomes:
    'A world where people are skilled at **directing** models — making AI a **predictable collaborator** for productivity, better decisions, and new economic opportunity.',
  mission:
    'To **teach**, **document**, and **productize** outcome-driven prompting patterns and workflows so individuals and teams get **reliable results** with AI.',
  brandPromise:
    '“I can turn a fuzzy idea into a clear plan, a strong output, and a repeatable workflow — fast.”',
  positioning:
    'Prompt Alchemist is **invite-only**, **signal over noise**, **practical over theoretical**, **execution-focused**, and **outcome-driven**. It is a focused space for leverage and repeatability — not an open-ended generic AI chat dump.',
} as const;

export const audience = {
  primary:
    'Founders and builders; product and engineering folks; analysts and operators who want repeatable workflows (marketing, ops, finance, etc.).',
  secondary:
    'Non-technical professionals seeking leverage; students and career switchers; teams exploring adoption and standards.',
} as const;

export const gap = {
  body: 'Access to AI is everywhere; **direction** is not. Most usage stays inconsistent because knowledge is scattered, “hacks” replace frameworks, and wins are hard to reproduce. We close that gap with **structure**, **shared standards**, and **culture** that rewards what actually works.',
} as const;

export const communityRules = [
  '**No cross-promotion** of other WhatsApp / Telegram groups without **admin approval** (keeps trust and avoids spam).',
  '**No harassment or bullying.** Disputes: contact an **admin** privately; admins will review and act as needed.',
  '**Topics:** keep the conversation centered on **tech**, **AI**, **prompting**, and adjacent tools/workflows that serve the community’s purpose.',
  '**No unsolicited business or marketing** (services, funnels, recruiting blasts, etc.) without **admin permission**.',
  '**Good faith toward the community’s purpose.** Active **bad-faith** behavior or actions that **undermine Prompt Alchemist or its partners** (e.g. coordinated disruption, sabotage, or using the space against its mission) may result in **removal from the group**. We believe humans and AI can **coexist productively**; this is a space for people who want to **build** that future, not deny that these tools are part of the landscape.',
] as const;

export const memberAccess = {
  body: 'Invite and join links are **distributed by admins** and through **official events** — keep your live link in event copy or a pinned message so it stays current.',
  footnote: 'Admins may update community rules; the latest version should be pinned or linked where members join.',
} as const;

export const nav = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#charter-glance', label: 'At a glance' },
  { href: '#pillars', label: 'Pillars' },
  { href: '#north-star', label: 'North star' },
  { href: '#backbone', label: 'Mission' },
  { href: '#audience', label: 'Who it’s for' },
  { href: '#gap', label: 'The gap' },
  { href: '#community', label: 'Community' },
  { href: '#access', label: 'Access' },
] as const;
