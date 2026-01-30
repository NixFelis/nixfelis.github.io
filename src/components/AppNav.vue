<template>
  <header class="sticky top-0 z-50 border-b border-nix-border bg-nix-dark/90 backdrop-blur-sm">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <router-link
        to="/"
        class="flex items-center gap-2 font-mono font-medium text-nix-accent hover:text-nix-accentDim transition-colors"
      >
        <i class="fas fa-paw text-nix-cat"></i>
        <span>NixFelis</span>
      </router-link>

      <button
        type="button"
        class="md:hidden p-2 text-gray-400 hover:text-nix-accent"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <i :class="mobileOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <ul
        class="absolute md:static top-full left-0 right-0 flex flex-col md:flex-row md:gap-8 py-4 md:py-0 bg-nix-dark md:bg-transparent border-b md:border-0 border-nix-border items-center transition-all"
        :class="mobileOpen ? 'flex' : 'hidden md:flex'"
        @click="mobileOpen = false"
      >
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/projects" class="nav-link">Projects</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileOpen = ref(false)
</script>

<style scoped>
.nav-link {
  @apply block px-4 py-2 md:px-0 md:py-0 text-gray-400 hover:text-nix-accent transition-colors;
}
</style>
