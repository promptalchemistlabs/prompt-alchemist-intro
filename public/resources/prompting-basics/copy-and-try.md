# PAL prompting basics: copy and try

Choose ONE prompt below. Paste it into a fresh AI chat. Use the same model for all three if you want to compare.

A shot is a completed example input/output pair. The new message you want rewritten is not an example.

## Zero-shot

Give the instruction. Let AI attempt the task.

```text
Rewrite politely. Keep deadlines. Use 15 words or fewer.
Return only the rewritten message.

Input: Send the invoice today.
Output:
```

## One-shot

Show one input and the response style you want.

```text
Rewrite politely. Keep deadlines. Use 15 words or fewer.
Return only the rewritten message.

Input: Check the draft.
Output: Could you please check the draft?

Input: Send the invoice today.
Output:
```

## Few-shot

Show several examples that cover different situations.

```text
Rewrite politely. Keep deadlines. Use 15 words or fewer.
Return only the rewritten message.

Input: Check the draft.
Output: Could you please check the draft?
Input: Need the report by Friday.
Output: Could you send the report by Friday?
Input: Tell me the status.
Output: Could you share a status update?

Input: Send the invoice today.
Output:
```

## Try your own

Change only the final Input to: Need the draft by Monday.

Check each response: Is it polite? Does it preserve the request? Is Monday still present? All three methods may work. More examples are not automatically better.

Examples steer the response in the current interaction; they do not permanently retrain the model.

Concept source: https://github.com/microsoft/generative-ai-for-beginners/blob/main/04-prompt-engineering-fundamentals/README.md#using-examples
Examples authored by PAL. Suggested outputs are illustrative; no model comparison was run.
