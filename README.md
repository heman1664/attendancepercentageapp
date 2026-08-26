# DFA Password Lab — Live Trace Edition

React + Vite interactive password validator with a DFA visualization generated from the live input stream.

## Run
```bash
npm install
npm run dev
```

## What changed in v2
- DFA graph is generated from the password as it is typed; it is not a fixed pre-drawn graph.
- The initial state is `q0`. Typing the first character creates `q1`; the next creates `q2`, and so on.
- Each new transition gets a moving arrow/particle animation.
- Minimum length is exactly 8 characters for acceptance.
- Strength uses a stable 0–100 score with a smooth animated number transition.
- Text contrast was cleaned up so labels are crisp rather than hazy.
- Rejected passwords get suggestions that preserve the input and add missing requirements.
