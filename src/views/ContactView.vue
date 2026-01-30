<template>
  <div class="container mx-auto px-4 py-12">
    <header class="mb-12 text-center">
      <h1 class="text-3xl md:text-4xl font-mono font-bold text-nix-accent mb-4">Contact</h1>
      <p class="text-gray-500 max-w-xl mx-auto">
        Get in touch for projects, partnerships, or just to say hi.
      </p>
    </header>

    <div class="max-w-md mx-auto space-y-6 opacity-0 animate-fade-in-up" style="animation-fill-mode: forwards">
      <a
        href="mailto:hello@nixfelis.com"
        class="flex items-center gap-4 p-6 rounded-xl border border-nix-border bg-nix-surface card-hover text-gray-300 hover:text-nix-accent"
      >
        <span class="w-12 h-12 rounded-lg bg-nix-accent/20 flex items-center justify-center text-nix-accent">
          <i class="fas fa-envelope text-xl"></i>
        </span>
        <div>
          <span class="block font-mono text-nix-accent text-sm">Email</span>
          <span>hello@nixfelis.com</span>
        </div>
        <i class="fas fa-external-link-alt ml-auto text-gray-500"></i>
      </a>

      <a
        href="https://github.com/nixfelis"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-4 p-6 rounded-xl border border-nix-border bg-nix-surface card-hover text-gray-300 hover:text-nix-accent"
      >
        <span class="w-12 h-12 rounded-lg bg-nix-border flex items-center justify-center text-gray-400">
          <i class="fab fa-github text-xl"></i>
        </span>
        <div>
          <span class="block font-mono text-nix-accent text-sm">GitHub</span>
          <span>github.com/nixfelis</span>
        </div>
        <i class="fas fa-external-link-alt ml-auto text-gray-500"></i>
      </a>
    </div>
  </div>
</template>
