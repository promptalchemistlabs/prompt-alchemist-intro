/**
 * Public marketing copy scaffolded from docs/vision-plan-type4.md (Type 4 charter).
 */

export const siteMeta = {
  title: 'Prompt Alchemist',
  description:
    'A hub to navigate and excel in the agentic economy together — learn, master prompting as structured thinking, and shift toward sustainable leverage.',
  tagline: 'Navigate & Excel in the Agentic Economy',
  versionNote: 'Community Vision & Charter (Type 4), v4.0 · 2026',
} as const;

export const welcome = {
  lead: `**Prompt Alchemist** is a hub for navigating the **agentic economy** together: an era where clear thinking, delegation to tools, and human judgment compound. Whether you are deeply technical or just getting started, the aim is the same — stay **relevant**, **informed**, and **empowered** as AI and automation reshape how we work.`,
} as const;

/** Short charter beats for a scannable band under the hero */
export const charterHighlights = [
  {
    icon: 'invite' as const,
    title: 'Invite-only',
    detail:
      'A deliberate room for builders who want leverage and repeatability — not an endless open feed.',
  },
  {
    icon: 'signal' as const,
    title: 'Signal over noise',
    detail: 'Curated tech and AI context, plus patterns members actually ship — fewer hot takes, more clarity.',
  },
  {
    icon: 'execution' as const,
    title: 'Execution-first',
    detail: 'Prompting framed as structured thinking: intent, constraints, steps, and checks against real outcomes.',
  },
  {
    icon: 'human' as const,
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

export const audienceGroups = [
  {
    icon: 'makers' as const,
    label: 'Makers & builders',
    roles: ['Founders', 'Solopreneurs', 'Product leads', 'Content creators'],
    body: 'You have the vision. The gap is getting it out reliably. We give you the **prompting frameworks and execution patterns** to turn fuzzy ideas into shipped outcomes — fast and repeatably.',
  },
  {
    icon: 'operators' as const,
    label: 'Operators & teams',
    roles: ['Managers', 'Analysts', 'Ops leads', 'Team leads'],
    body: "AI is already in your team's hands, but usage is inconsistent. We help you build a **shared standard**: common workflows, reliable outputs, and the culture to sustain it.",
  },
  {
    icon: 'learners' as const,
    label: 'Learners & career-builders',
    roles: ['Students', 'Career-switchers', 'Early-career professionals'],
    body: 'Build the skill **before** you need it. Prompting as structured thinking compounds — the earlier you develop it, the more leverage it gives you in every role and project ahead.',
  },
] as const;

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
  { href: '#audience', label: 'Who it’s for' },
  { href: '#gap', label: 'The gap' },
  { href: '#community', label: 'Community' },
  { href: '#access', label: 'Access' },
] as const;


export const siteNav = [
  { href: '/', label: 'Home' },
  { href: '/periodic-table', label: 'Agentic Periodic Table' },
  { href: '/pattern-matrix', label: 'Pattern Matrix' },
  { href: '/about', label: 'About Us' },
] as const;

/** About page — origin story beat */
export const origin = {
  body: `Prompt Alchemist started as a small invite-only group. The conversation kept returning to the same gap: access to AI is everywhere, but **structured thinking** about how to use it is not. Wins were hard to reproduce. Frameworks were scarce. "Hacks" filled the void that real craft should occupy. So we built the space we wanted to be in — a deliberate room where signal compounds and trust is real.`,
} as const;

/** Strategic backbone — core belief, mission, brand promise */
export const coreBelief = {
  quote: 'The future belongs to those who can collaborate effectively with AI — with clarity, systems thinking, and outcome discipline.',
} as const;

export const mission = {
  statement: 'To teach, document, and productize outcome-driven prompting patterns and workflows so individuals and teams get reliable results with AI.',
  brandPromise: 'Turn a fuzzy idea into a clear plan, a strong output, and a repeatable workflow — fast.',
} as const;

/** About page — culture items (what it feels like to belong here) */
export const cultureItems = [
  {
    id: 'deliberate',
    label: 'Deliberately small',
    body: `We are not trying to be the biggest community. We curate who comes in because **trust compounds** — the quality of every conversation depends on the quality of every person in the room. Invite-only is a feature, not a constraint.`,
  },
  {
    id: 'signal',
    label: 'Signal over noise',
    body: `Most AI content is hype. We are obsessive about the opposite: curated context, patterns members actually ship, and breakdowns that explain **why something works** — not just that it does. Fewer hot takes. More clarity.`,
  },
  {
    id: 'craft',
    label: 'Prompting as a craft',
    body: `We treat prompting as a **learnable discipline** with structure, not a bag of tricks. Intent, constraints, steps, evaluation — frameworks that transfer across every tool and model, and that compound the more you practise them.`,
  },
  {
    id: 'vibe',
    label: 'Vibe working',
    body: `We advocate for using AI to work **smarter and flow better** — preserving energy for judgment, creativity, and relationships. The goal is sustainable leverage. Not burnout with a chatbot. Not grind dressed up in automation.`,
  },
  {
    id: 'human',
    label: 'Human always in the loop',
    body: `Our culture centres **judgment, dignity, and agency**. AI is a collaborator; we shape how it is used, not the other way around. Every framework, norm, and conversation here starts from that premise.`,
  },
  {
    id: 'original',
    label: 'Original research & frameworks',
    body: `From the **Agentic Periodic Table** to curated weekly signals, we produce resources that do not exist elsewhere — built from practice, not theory. Type 4 charter, Type 3 playbooks: both run on the same foundation.`,
  },
] as const;
