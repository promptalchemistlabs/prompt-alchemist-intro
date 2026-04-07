/**
 * Agentic AI Design Patterns — Periodic Table taxonomy.
 *
 * X-axis (7 groups)  = Function: what job does the pattern do?
 * Y-axis (5 periods) = Autonomy: how much is the human in the loop?
 *
 * Atomic number = (period - 1) * 7 + group  →  1–35, read left-to-right top-to-bottom.
 *
 * Additional axes for the Matrix view:
 *   difficulty     = learning / usage complexity (1 = beginner … 4 = expert)
 *   scalability    = how configurable / scalable the pattern is (1 = fixed … 4 = composable)
 *   difficultyRank = unique rank 1–35 (1 = easiest to learn/use, 35 = hardest)
 *   scalabilityRank= unique rank 1–35 (1 = least scalable/configurable, 35 = most)
 */

export type GroupId =
  | 'perception'
  | 'reasoning'
  | 'memory'
  | 'action'
  | 'coordination'
  | 'evaluation'
  | 'governance';

export type PeriodId = 1 | 2 | 3 | 4 | 5;

/** 1 = Beginner, 2 = Intermediate, 3 = Advanced, 4 = Expert */
export type DifficultyLevel = 1 | 2 | 3 | 4;

/** 1 = Fixed, 2 = Configurable, 3 = Extensible, 4 = Composable */
export type ScalabilityLevel = 1 | 2 | 3 | 4;

export interface Pattern {
  /** Atomic number 1–35 */
  number: number;
  /** 2–4 letter symbol, e.g. "CoT" */
  symbol: string;
  /** Full pattern name */
  name: string;
  /** One-sentence description */
  description: string;
  group: GroupId;
  period: PeriodId;
  /** Learning / usage difficulty level (1–4) */
  difficulty: DifficultyLevel;
  /** Scalability / configurability level (1–4) */
  scalability: ScalabilityLevel;
  /** Unique difficulty rank across all 35 patterns (1 = easiest, 35 = hardest) */
  difficultyRank: number;
  /** Unique scalability rank across all 35 patterns (1 = least scalable, 35 = most) */
  scalabilityRank: number;
}

export const difficultyLevels: { id: DifficultyLevel; label: string; sublabel: string }[] = [
  { id: 1, label: 'Beginner',     sublabel: 'Works out of the box, minimal setup' },
  { id: 2, label: 'Intermediate', sublabel: 'Requires some design & configuration' },
  { id: 3, label: 'Advanced',     sublabel: 'Needs system design & integration work' },
  { id: 4, label: 'Expert',       sublabel: 'Complex orchestration & deep expertise' },
];

export const scalabilityLevels: { id: ScalabilityLevel; label: string; sublabel: string }[] = [
  { id: 1, label: 'Fixed',       sublabel: 'Hard-coded, single-purpose use' },
  { id: 2, label: 'Configurable', sublabel: 'Parameterised, adapts to context' },
  { id: 3, label: 'Extensible',  sublabel: 'Plugin-friendly, grows with the system' },
  { id: 4, label: 'Composable',  sublabel: 'Combines freely with other patterns' },
];

export const groups: { id: GroupId; label: string; shortLabel: string; color: string }[] = [
  { id: 'perception',   label: 'Perception',   shortLabel: 'Per', color: 'group-perception' },
  { id: 'reasoning',    label: 'Reasoning',    shortLabel: 'Rsn', color: 'group-reasoning' },
  { id: 'memory',       label: 'Memory',       shortLabel: 'Mem', color: 'group-memory' },
  { id: 'action',       label: 'Action',       shortLabel: 'Act', color: 'group-action' },
  { id: 'coordination', label: 'Coordination', shortLabel: 'Crd', color: 'group-coordination' },
  { id: 'evaluation',   label: 'Evaluation',   shortLabel: 'Evl', color: 'group-evaluation' },
  { id: 'governance',   label: 'Governance',   shortLabel: 'Gov', color: 'group-governance' },
];

export const periods: { id: PeriodId; label: string; sublabel: string }[] = [
  { id: 1, label: 'Directed',   sublabel: 'Human writes every step' },
  { id: 2, label: 'Guided',     sublabel: 'Human sets goal, agent plans' },
  { id: 3, label: 'Supervised', sublabel: 'Agent runs, human reviews output' },
  { id: 4, label: 'Monitored',  sublabel: 'Agent runs, human watches for anomalies' },
  { id: 5, label: 'Autonomous', sublabel: 'Agent self-directs and self-corrects' },
];

export const patterns: Pattern[] = [
  // Period 1 — Directed
  { number: 1,  symbol: 'Pr',  name: 'Prompt Engineering',      group: 'perception',   period: 1, difficulty: 1, scalability: 2, difficultyRank: 6,  scalabilityRank: 7,  description: 'Structuring input text to shape model output through precise instruction.' },
  { number: 2,  symbol: 'ZsF', name: 'Zero / Few-shot',          group: 'reasoning',    period: 1, difficulty: 1, scalability: 1, difficultyRank: 1,  scalabilityRank: 2,  description: 'Providing zero or a handful of examples to guide model behaviour in-context.' },
  { number: 3,  symbol: 'Ctw', name: 'Context Window',           group: 'memory',       period: 1, difficulty: 1, scalability: 1, difficultyRank: 2,  scalabilityRank: 3,  description: 'Using the active prompt window as the sole memory store for a single exchange.' },
  { number: 4,  symbol: 'Fn',  name: 'Function Call',            group: 'action',       period: 1, difficulty: 2, scalability: 2, difficultyRank: 11, scalabilityRank: 8,  description: 'Invoking a single named tool or API from a model response.' },
  { number: 5,  symbol: 'Sa',  name: 'Solo Agent',               group: 'coordination', period: 1, difficulty: 1, scalability: 1, difficultyRank: 3,  scalabilityRank: 4,  description: 'One model, one task, no inter-agent communication.' },
  { number: 6,  symbol: 'Fv',  name: 'Format Validation',        group: 'evaluation',   period: 1, difficulty: 1, scalability: 2, difficultyRank: 7,  scalabilityRank: 5,  description: 'Checking that output matches an expected schema or format before use.' },
  { number: 7,  symbol: 'Pg',  name: 'Prompt Guardrails',        group: 'governance',   period: 1, difficulty: 1, scalability: 1, difficultyRank: 4,  scalabilityRank: 1,  description: 'Hard-coded constraints in the system prompt that limit unsafe or off-topic output.' },

  // Period 2 — Guided
  { number: 8,  symbol: 'Rag', name: 'RAG',                      group: 'perception',   period: 2, difficulty: 2, scalability: 3, difficultyRank: 13, scalabilityRank: 13, description: 'Retrieval-augmented generation: fetching relevant chunks and injecting them into context before reasoning.' },
  { number: 9,  symbol: 'CoT', name: 'Chain-of-Thought',         group: 'reasoning',    period: 2, difficulty: 1, scalability: 2, difficultyRank: 5,  scalabilityRank: 6,  description: 'Prompting the model to reason step-by-step before producing a final answer.' },
  { number: 10, symbol: 'Sp',  name: 'Scratchpad',               group: 'memory',       period: 2, difficulty: 2, scalability: 2, difficultyRank: 12, scalabilityRank: 12, description: 'A writable working-memory buffer the agent uses to track intermediate state across steps.' },
  { number: 11, symbol: 'Tc',  name: 'Tool Chaining',            group: 'action',       period: 2, difficulty: 2, scalability: 3, difficultyRank: 14, scalabilityRank: 14, description: 'Sequentially calling multiple tools where each output feeds the next input.' },
  { number: 12, symbol: 'Sh',  name: 'Sequential Handoff',       group: 'coordination', period: 2, difficulty: 2, scalability: 2, difficultyRank: 10, scalabilityRank: 11, description: 'Passing a task linearly from one agent or step to the next.' },
  { number: 13, symbol: 'Sc',  name: 'Self-Critique',            group: 'evaluation',   period: 2, difficulty: 2, scalability: 2, difficultyRank: 9,  scalabilityRank: 10, description: 'The model reviews and scores its own output before returning it.' },
  { number: 14, symbol: 'Cp',  name: 'Checkpoint Approval',      group: 'governance',   period: 2, difficulty: 2, scalability: 2, difficultyRank: 8,  scalabilityRank: 9,  description: 'Human approval gate inserted at defined points in an agentic workflow.' },

  // Period 3 — Supervised
  { number: 15, symbol: 'Msr', name: 'Multi-source Retrieval',   group: 'perception',   period: 3, difficulty: 3, scalability: 3, difficultyRank: 18, scalabilityRank: 16, description: 'Querying and fusing results from multiple retrieval sources before reasoning.' },
  { number: 16, symbol: 'ToT', name: 'Tree-of-Thought / ReAct',  group: 'reasoning',    period: 3, difficulty: 3, scalability: 3, difficultyRank: 17, scalabilityRank: 17, description: 'Exploring multiple reasoning branches and interleaving thought with tool use to solve complex tasks.' },
  { number: 17, symbol: 'Vs',  name: 'Vector Store',             group: 'memory',       period: 3, difficulty: 3, scalability: 3, difficultyRank: 16, scalabilityRank: 18, description: 'Persisting and retrieving semantic chunks via embedding similarity search.' },
  { number: 18, symbol: 'Pt',  name: 'Parallel Tool Exec.',      group: 'action',       period: 3, difficulty: 3, scalability: 3, difficultyRank: 19, scalabilityRank: 19, description: 'Dispatching multiple tool calls simultaneously and merging results.' },
  { number: 19, symbol: 'Sw',  name: 'Supervisor / Worker',      group: 'coordination', period: 3, difficulty: 3, scalability: 3, difficultyRank: 22, scalabilityRank: 21, description: 'An orchestrator agent delegates sub-tasks to specialised worker agents.' },
  { number: 20, symbol: 'Xc',  name: 'Cross-agent Critique',     group: 'evaluation',   period: 3, difficulty: 3, scalability: 3, difficultyRank: 20, scalabilityRank: 22, description: 'A dedicated critic agent reviews the output of a peer agent.' },
  { number: 21, symbol: 'Ie',  name: 'Interrupt & Escalation',   group: 'governance',   period: 3, difficulty: 3, scalability: 3, difficultyRank: 21, scalabilityRank: 20, description: 'The agent pauses and routes a decision to a human when confidence is low or risk is high.' },

  // Period 4 — Monitored
  { number: 22, symbol: 'As',  name: 'Active Sensing',           group: 'perception',   period: 4, difficulty: 3, scalability: 4, difficultyRank: 24, scalabilityRank: 25, description: 'The agent proactively queries its environment for information rather than waiting for input.' },
  { number: 23, symbol: 'Ref', name: 'Reflection + Replan',      group: 'reasoning',    period: 4, difficulty: 3, scalability: 4, difficultyRank: 25, scalabilityRank: 26, description: 'The agent evaluates its own trajectory and revises its plan mid-execution.' },
  { number: 24, symbol: 'Ep',  name: 'Episodic Memory',          group: 'memory',       period: 4, difficulty: 3, scalability: 4, difficultyRank: 26, scalabilityRank: 24, description: 'Storing and recalling structured records of past interactions or task runs.' },
  { number: 25, symbol: 'Al',  name: 'Autonomous Action Loop',   group: 'action',       period: 4, difficulty: 4, scalability: 4, difficultyRank: 31, scalabilityRank: 28, description: 'The agent executes a self-directed action loop with intermediate observation and re-planning.' },
  { number: 26, symbol: 'Pp',  name: 'Peer-to-Peer Network',     group: 'coordination', period: 4, difficulty: 4, scalability: 4, difficultyRank: 29, scalabilityRank: 27, description: 'Agents communicate directly with one another without a central orchestrator.' },
  { number: 27, symbol: 'Ae',  name: 'Automated Eval Loop',      group: 'evaluation',   period: 4, difficulty: 3, scalability: 4, difficultyRank: 23, scalabilityRank: 23, description: 'Continuous automated scoring of agent outputs against defined success metrics.' },
  { number: 28, symbol: 'Ob',  name: 'Audit Trail / Observ.',    group: 'governance',   period: 4, difficulty: 2, scalability: 3, difficultyRank: 15, scalabilityRank: 15, description: 'Logging every agent decision, tool call, and output for traceability and review.' },

  // Period 5 — Autonomous
  { number: 29, symbol: 'Amb', name: 'Ambient Awareness',        group: 'perception',   period: 5, difficulty: 4, scalability: 4, difficultyRank: 35, scalabilityRank: 35, description: 'Continuous passive monitoring of the environment to detect relevant signals autonomously.' },
  { number: 30, symbol: 'Mc',  name: 'Meta-cognition',           group: 'reasoning',    period: 5, difficulty: 4, scalability: 4, difficultyRank: 27, scalabilityRank: 30, description: 'The agent reasons about its own capabilities, limitations, and reasoning process.' },
  { number: 31, symbol: 'Pwm', name: 'Persistent World Model',   group: 'memory',       period: 5, difficulty: 4, scalability: 4, difficultyRank: 32, scalabilityRank: 32, description: 'A continuously updated structured model of the environment that persists across sessions.' },
  { number: 32, symbol: 'Wax', name: 'World-affecting Exec.',    group: 'action',       period: 5, difficulty: 4, scalability: 4, difficultyRank: 30, scalabilityRank: 29, description: 'The agent takes actions with real-world side-effects: deploying code, sending messages, moving funds.' },
  { number: 33, symbol: 'Swm', name: 'Swarm Coordination',       group: 'coordination', period: 5, difficulty: 4, scalability: 4, difficultyRank: 33, scalabilityRank: 33, description: 'Many agents coordinate via emergent behaviour and shared signals with no central authority.' },
  { number: 34, symbol: 'Sil', name: 'Self-improving Loop',      group: 'evaluation',   period: 5, difficulty: 4, scalability: 4, difficultyRank: 34, scalabilityRank: 34, description: 'The agent iteratively updates its own prompts, tools, or weights based on performance feedback.' },
  { number: 35, symbol: 'Cal', name: 'Constitutional Alignment', group: 'governance',   period: 5, difficulty: 4, scalability: 4, difficultyRank: 28, scalabilityRank: 31, description: 'Encoding explicit principles the agent uses to self-evaluate and refuse misaligned instructions.' },
];

/** Helper: get a pattern by period + group */
export function getPattern(period: PeriodId, groupId: GroupId): Pattern | undefined {
  return patterns.find((p) => p.period === period && p.group === groupId);
}
