export interface Course {
  slug: string;
  title: string;
  status: 'active' | 'archived';
  summary: string;
  format: string;
  audience: string;
  prerequisite: string;
  modules: { title: string; description: string }[];
  outcomes: string[];
}

/** Course history is separate from the site's main navigation and current offer. */
export const courses: Course[] = [
  {
    slug: 'codex-masterclass',
    title: 'Codex Masterclass',
    status: 'archived',
    summary: 'A hands-on introduction to turning an idea into a practical first version with AI, then reviewing and improving the result.',
    format: '4-hour guided workshop',
    audience: 'Professionals, founders and operators',
    prerequisite: 'No coding background required',
    modules: [
      { title: 'AI operator mindset', description: 'Choose a meaningful use case, define the result you want, and set boundaries and success criteria.' },
      { title: 'Idea to first version', description: 'Turn your goal, audience, context and examples into clear instructions, then guide a first build.' },
      { title: 'Review and improve', description: 'Inspect the output for usefulness, clarity and missing pieces. Give focused feedback and refine the result.' },
      { title: 'Your AI work system', description: 'Create a reusable briefing method, review checklist and personal plan for continuing the work.' },
    ],
    outcomes: [
      'A reusable instruction template for an idea or workflow',
      'A first version or AI-assisted workflow started during the workshop',
      'A checklist for reviewing and improving AI output',
      'A personal 30-day execution plan',
    ],
  },
];
