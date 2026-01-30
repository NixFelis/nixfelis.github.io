<template>
  <footer class="border-t border-nix-border bg-nix-surface mt-auto">
    <div class="container mx-auto px-4 py-12">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div class="flex items-center gap-2 font-mono text-nix-accent">
          <i class="fas fa-paw text-nix-cat"></i>
          <span>NixFelis</span>
        </div>
        <nav class="flex flex-wrap gap-6 text-sm text-gray-400">
          <router-link to="/" class="hover:text-nix-accent transition-colors">Home</router-link>
          <router-link to="/projects" class="hover:text-nix-accent transition-colors">Projects</router-link>
          <router-link to="/about" class="hover:text-nix-accent transition-colors">About</router-link>
          <router-link to="/contact" class="hover:text-nix-accent transition-colors">Contact</router-link>
          <router-link to="/legal/privacy" class="hover:text-nix-accent transition-colors">Privacy</router-link>
          <router-link to="/legal/terms" class="hover:text-nix-accent transition-colors">Terms</router-link>
        </nav>
      </div>
      <p class="mt-6 text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} NixFelis. All rights reserved.
      </p>
    </div>
  </footer>
</template>
