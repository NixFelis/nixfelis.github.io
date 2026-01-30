<template>
  <div class="container mx-auto px-4 py-12">
    <header class="mb-12 text-center">
      <h1 class="text-3xl md:text-4xl font-mono font-bold text-nix-accent mb-4">About NixFelis</h1>
      <p class="text-gray-500 max-w-xl mx-auto">
        Who we are and what we stand for.
      </p>
    </header>

    <div class="max-w-3xl mx-auto space-y-12">
      <section class="opacity-0 animate-fade-in-up" style="animation-fill-mode: forwards">
        <h2 class="text-xl font-mono text-nix-accent mb-4 flex items-center gap-2">
          <i class="fas fa-bullseye"></i>
          Mission
        </h2>
        <p class="text-gray-400 leading-relaxed">
          To deliver high-quality software and games that solve real problems and bring joy. We focus on clean architecture, maintainable code, and user experience—whether it's a SaaS product or an indie game.
        </p>
      </section>

      <section class="opacity-0 animate-fade-in-up" style="animation-delay: 0.1s; animation-fill-mode: forwards">
        <h2 class="text-xl font-mono text-nix-accent mb-4 flex items-center gap-2">
          <i class="fas fa-eye"></i>
          Vision
        </h2>
        <p class="text-gray-400 leading-relaxed">
          To be a trusted software house known for reliability and craft. We aim to ship products that last and games that resonate—without cutting corners on quality or ethics.
        </p>
      </section>

      <section class="opacity-0 animate-fade-in-up" style="animation-delay: 0.2s; animation-fill-mode: forwards">
        <h2 class="text-xl font-mono text-nix-accent mb-4 flex items-center gap-2">
          <i class="fas fa-heart"></i>
          Values
        </h2>
        <ul class="space-y-3 text-gray-400">
          <li class="flex items-start gap-3">
            <i class="fas fa-check text-nix-accent mt-1"></i>
            <span><strong class="text-gray-300">Craft</strong> — We care about code quality, UX, and polish.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-check text-nix-accent mt-1"></i>
            <span><strong class="text-gray-300">Transparency</strong> — Clear communication and honest timelines.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-check text-nix-accent mt-1"></i>
            <span><strong class="text-gray-300">Iteration</strong> — Ship, learn, improve. No endless planning.</span>
          </li>
          <li class="flex items-start gap-3">
            <i class="fas fa-check text-nix-accent mt-1"></i>
            <span><strong class="text-gray-300">Independence</strong> — We build what we believe in.</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
