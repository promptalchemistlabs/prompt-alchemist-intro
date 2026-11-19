import zeroShot from '../../public/resources/prompting-basics/zero-shot.txt?raw';
import oneShot from '../../public/resources/prompting-basics/one-shot.txt?raw';
import fewShot from '../../public/resources/prompting-basics/few-shot.txt?raw';

export interface Resource {
  id: string;
  title: string;
  summary: string;
  category: string;
  audience: string;
  cover: string;
  pdf: string;
  pack: string;
  slides: { src: string; title: string; alt: string }[];
  prompts: { id: string; title: string; count: string; description: string; text: string; download: string }[];
}

const base = '/resources/prompting-basics';

/** Shareable resources live outside the site's header and footer navigation. */
export const resources: Resource[] = [{
  id: 'prompting-basics',
  title: 'Show AI what you mean.',
  summary: 'Learn zero-shot, one-shot and few-shot prompting with one everyday task. A visual starter for giving AI useful examples.',
  category: 'Prompting basics',
  audience: 'Beginner friendly',
  cover: `${base}/slide-1.png`,
  pdf: `${base}/pal-prompting-basics.pdf`,
  pack: `${base}/pal-prompting-basics.zip`,
  slides: [
    { src: `${base}/slide-1.png`, title: 'What is a shot?', alt: 'Illustrated introduction: a shot is an example input paired with its desired output. Zero-shot has no examples, one-shot has one, and few-shot has several.' },
    { src: `${base}/slide-2.png`, title: 'Zero-shot', alt: 'Zero-shot: give clear instructions without examples. Rewrite the invoice request politely, preserve the deadline and use 15 words or fewer.' },
    { src: `${base}/slide-3.png`, title: 'One-shot', alt: 'One-shot: the same instruction and invoice request, with one completed example showing how to rewrite a blunt message politely.' },
    { src: `${base}/slide-4.png`, title: 'Few-shot', alt: 'Few-shot: three completed input and output examples covering polite work requests, followed by the same invoice task.' },
    { src: `${base}/slide-5.png`, title: 'Try it yourself', alt: 'Practice: change the final input to Need the draft by Monday. Use the same model in fresh chats and check polite tone, request and deadline. More examples are not automatically better.' },
  ],
  prompts: [
    { id: 'zero-shot', title: 'Zero-shot', count: 'No examples', description: 'Start with a clear instruction. A good first try for a simple, familiar task.', text: zeroShot.trim(), download: `${base}/zero-shot.txt` },
    { id: 'one-shot', title: 'One-shot', count: 'One example', description: 'Show a completed example to demonstrate the tone or format you want.', text: oneShot.trim(), download: `${base}/one-shot.txt` },
    { id: 'few-shot', title: 'Few-shot', count: 'Three examples here', description: 'Show several relevant examples covering different cases of the same task.', text: fewShot.trim(), download: `${base}/few-shot.txt` },
  ],
}];
