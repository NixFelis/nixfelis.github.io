<template>
  <div class="relative overflow-hidden">
    <section class="min-h-[85vh] flex flex-col items-center justify-center px-4 py-20 text-center relative">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,157,0.06)_0%,transparent_70%)] pointer-events-none" />
      <h1
        class="text-4xl md:text-6xl font-bold font-mono text-nix-accent mb-4 opacity-0 animate-fade-in-up"
        style="animation-delay: 0.1s; animation-fill-mode: forwards"
      >
        NixFelis
      </h1>
      <p
        class="text-xl md:text-2xl text-gray-400 mb-2 opacity-0 animate-fade-in-up max-w-xl"
        style="animation-delay: 0.25s; animation-fill-mode: forwards"
      >
        <span class="text-nix-cat">//</span> Software house & game development
      </p>
      <p
        class="text-gray-500 mb-10 max-w-lg opacity-0 animate-fade-in-up"
        style="animation-delay: 0.4s; animation-fill-mode: forwards"
      >
        We build apps and games with precision and craft. From product design to deployment.
      </p>
      <div
        class="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
        style="animation-delay: 0.55s; animation-fill-mode: forwards"
      >
        <router-link to="/projects" class="btn-primary">
          <i class="fas fa-folder-open"></i>
          View Projects
        </router-link>
        <router-link to="/contact" class="btn-secondary">
          <i class="fas fa-envelope"></i>
          Contact
        </router-link>
      </div>
    </section>

    <section class="container mx-auto px-4 py-16 border-t border-nix-border">
      <h2 class="text-2xl font-mono text-nix-accent mb-8 text-center">What we do</h2>
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          class="p-6 rounded-xl border border-nix-border bg-nix-surface card-hover opacity-0 animate-fade-in-up"
          style="animation-delay: 0.1s; animation-fill-mode: forwards"
        >
          <i class="fas fa-code text-nix-accent text-2xl mb-4"></i>
          <h3 class="font-mono text-lg text-gray-200 mb-2">Software House</h3>
          <p class="text-gray-500 text-sm">
            Web apps, mobile apps, APIs, and internal tools. We ship clean, maintainable code.
          </p>
        </div>
        <div
          class="p-6 rounded-xl border border-nix-border bg-nix-surface card-hover opacity-0 animate-fade-in-up"
          style="animation-delay: 0.2s; animation-fill-mode: forwards"
        >
          <i class="fas fa-gamepad text-nix-cat text-2xl mb-4"></i>
          <h3 class="font-mono text-lg text-gray-200 mb-2">Game Development</h3>
          <p class="text-gray-500 text-sm">
            Indie games and interactive experiences. From concept to release.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
