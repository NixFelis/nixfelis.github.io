<template>
  <div class="container mx-auto px-4 py-12">
    <header class="mb-12 text-center">
      <h1 class="text-3xl md:text-4xl font-mono font-bold text-nix-accent mb-4">Projects</h1>
      <p class="text-gray-500 max-w-xl mx-auto">
        Games we've built.
      </p>
    </header>

    <article
      class="max-w-3xl mx-auto rounded-xl border border-nix-border bg-nix-surface p-8 md:p-10 card-hover opacity-0 animate-fade-in-up"
      style="animation-fill-mode: forwards"
    >
      <div class="flex items-center gap-3 mb-6">
        <span class="w-12 h-12 rounded-lg bg-nix-cat/20 flex items-center justify-center text-nix-cat">
          <i class="fas fa-gamepad text-xl"></i>
        </span>
        <div>
          <h2 class="font-mono text-xl text-gray-200">Quack Match (Memori Kita)</h2>
          <p class="text-gray-500 text-sm">Godot 4.6 · Bilingual · Toddler-friendly</p>
        </div>
      </div>

      <p class="text-gray-400 mb-6 leading-relaxed">
        A memory match game for toddlers aged 2–5, with bilingual support (English and Bahasa Melayu). Simple card-matching, large touch targets, high-contrast visuals, and a no-fail design to build confidence.
      </p>

      <ul class="space-y-2 text-gray-400 text-sm mb-6">
        <li class="flex items-start gap-2">
          <i class="fas fa-check text-nix-accent mt-0.5"></i>
          <span><strong class="text-gray-300">No-fail gameplay</strong> — No "Game Over"; encouraging experience</span>
        </li>
        <li class="flex items-start gap-2">
          <i class="fas fa-check text-nix-accent mt-0.5"></i>
          <span><strong class="text-gray-300">Bilingual</strong> — English and Bahasa Melayu for vocabulary</span>
        </li>
        <li class="flex items-start gap-2">
          <i class="fas fa-check text-nix-accent mt-0.5"></i>
          <span><strong class="text-gray-300">Audio</strong> — Sound effects, background music, and text-to-speech for card names</span>
        </li>
        <li class="flex items-start gap-2">
          <i class="fas fa-check text-nix-accent mt-0.5"></i>
          <span><strong class="text-gray-300">Sneak Peek</strong> — Briefly reveal all cards to help remember positions</span>
        </li>
        <li class="flex items-start gap-2">
          <i class="fas fa-check text-nix-accent mt-0.5"></i>
          <span><strong class="text-gray-300">Save & resume</strong> — Progress saved and restored on next launch</span>
        </li>
        <li class="flex items-start gap-2">
          <i class="fas fa-check text-nix-accent mt-0.5"></i>
          <span><strong class="text-gray-300">Tablet-optimized</strong> — Large landscape interface (1280×720), extra-large touch targets</span>
        </li>
      </ul>

      <div class="flex flex-wrap gap-2">
        <span class="px-2 py-1 text-xs rounded bg-nix-border text-gray-400">Godot 4.6</span>
        <span class="px-2 py-1 text-xs rounded bg-nix-border text-gray-400">English</span>
        <span class="px-2 py-1 text-xs rounded bg-nix-border text-gray-400">Bahasa Melayu</span>
        <span class="px-2 py-1 text-xs rounded bg-nix-border text-gray-400">Toddler</span>
        <span class="px-2 py-1 text-xs rounded bg-nix-border text-gray-400">Memory</span>
      </div>
    </article>
  </div>
</template>
