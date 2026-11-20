# PAL resources

- Library: `/resource`
- First resource: `/resource/prompting-basics`
- Neither route is added to the shared header or footer navigation. They are public URLs, not access-controlled pages.

## First case study: prompting basics

**Show AI what you mean** is PAL's beginner visual guide to zero-shot, one-shot and few-shot prompting. The complete instruction and invoice request are identical across the three prompts; the completed example counts are 0, 1 and 3. Suggested output is illustrative, not a measured model comparison.

The detail page contains a 42-second video lesson with native playback controls, a video download and a readable transcript, followed by a keyboard-accessible, swipeable five-page reader, full-size image links, three prompt tabs with copy buttons, plain-text downloads and a practice exercise. Without JavaScript, the reader still scrolls and all prompts and download links remain available. A clipboard failure selects the prompt for manual copying.

Concept source: [Microsoft's Prompt Engineering Fundamentals](https://github.com/microsoft/generative-ai-for-beginners/blob/main/04-prompt-engineering-fundamentals/README.md#using-examples). The teaching examples and vector artwork are PAL originals. The source credit and illustrative-output label remain in the PDF and webpage.

## Storage and maintenance

Resource metadata lives in `src/data/resources.ts`. Pages are generated statically from that registry at `src/pages/resource/index.astro` and `src/pages/resource/[id].astro`.

Assets are committed under `public/resources/prompting-basics/` and served alongside the website. No external file-storage service or user uploads are involved.

- `pal-prompting-basics-42s.mp4`: SceneShift-rendered lesson, with QwenWork production and original synthesized music.
- `pal-prompting-basics-video-poster.png`: a frame from the opening of the lesson.
- `pal-prompting-basics.pdf`: reviewed five-page visual guide, v4.
- `pal-prompting-basics.zip`: PDF, five 1080 × 1350 PNGs, preview, Markdown/text prompts and source manifest.
- `slide-1.png` through `slide-5.png`: reader and carousel images.
- `zero-shot.txt`, `one-shot.txt`, `few-shot.txt`: downloadable prompts, imported as raw text by the registry so the on-page copy matches the files.
- `copy-and-try.md` and `SOURCE-MANIFEST.json`: copyable lesson and provenance.

Original editable PDF authoring source remains in the SceneShift workspace at `scripts/build-pal-prompting-visual.py`. Rebuild and visually review the PDF before replacing the website assets. The source manifest records the PDF and carousel hashes.

To add a resource, place its reviewed assets under `public/resources/<id>/` and add its metadata, slides and prompt variants to the typed registry. Use a stable lowercase hyphenated ID; existing shared URLs should remain stable. The current detail template is designed for visual prompt guides.

The site's canonical origin is `https://prompt-alchemist-labs.vercel.app`. Resource pages include cover images in their social metadata. Download links have no email or follow gate; distribution and follower conversion have not been measured.

## Video production

The lesson was produced through QwenWork using SceneShift's deterministic authored-plan renderer, then encoded as H.264/AAC MP4. The resource page hosts the reviewed video alongside its guide assets. The MP4 end card points back to `/resource/prompting-basics`. No external video platform, Page deployment or Drive backup is required for this delivery.

The on-page illustrative result remains a teaching example, not a model benchmark. The soundtrack is generated locally from oscillator sources; there is no narration or third-party recording. Production source and the exact plan remain in the SceneShift workspace under `videos/pal-prompting-basics/` and `studio/`. The PDF/ZIP teaching pack is unchanged; the video is a separate download.
