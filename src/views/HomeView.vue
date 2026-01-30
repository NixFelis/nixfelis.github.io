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
          <i class="fas fa-gamepad"></i>
          View our game
        </router-link>
        <router-link to="/contact" class="btn-secondary">
          <i class="fas fa-envelope"></i>
          Contact
        </router-link>
      </div>
    </section>
  </div>
</template>
