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
          <h2 class="font-mono text-xl text-gray-200">Quack Match</h2>
          <p class="text-gray-500 text-sm">Godot 4.6 · Bilingual · Toddler-friendly</p>
        </div>
      </div>

      <p class="text-gray-400 mb-6 leading-relaxed">
        A memory match game for toddlers aged 2–5, with bilingual support (English and Bahasa Melayu). Simple card-matching, large touch targets, high-contrast visuals, and a no-fail design to build confidence.
      </p>

      <!-- Screenshots: add your own in public/projects/quack-match/ (hero.png, screen1–3.png) -->
      <div class="mb-8">
        <h3 class="flex items-center gap-2 text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
          <i class="fas fa-images text-nix-accent"></i>
          Screenshots
        </h3>
        <div class="space-y-4">
          <div
            class="rounded-xl overflow-hidden border border-nix-border bg-nix-dark/50 shadow-inner ring-1 ring-black/20 cursor-pointer"
            @click="openLightbox(0)"
          >
            <img
              :src="screenshots[0].src"
              :alt="screenshots[0].alt"
              class="w-full aspect-video object-cover hover:scale-105 transition-transform duration-300"
              @error="onImgError($event, screenshots[0].fallback)"
            />
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div
              v-for="(shot, i) in screenshots.slice(1)"
              :key="i"
              class="rounded-lg overflow-hidden border border-nix-border bg-nix-dark/50 aspect-video ring-1 ring-black/10 cursor-pointer"
              @click="openLightbox(i + 1)"
            >
              <img
                :src="shot.src"
                :alt="shot.alt"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                @error="onImgError($event, shot.fallback)"
              />
            </div>
          </div>
        </div>
      </div>

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
      <p class="mt-4 text-sm text-gray-500">
        <router-link :to="{ name: 'privacy-quack-match' }" class="text-nix-accent hover:text-nix-accentDim transition-colors">
          <i class="fas fa-shield-alt mr-1"></i>Privacy policy (app)
        </router-link>
      </p>
    </article>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-show="lightboxOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        @click.self="closeLightbox"
      >
        <button
          type="button"
          class="absolute top-4 right-4 z-10 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close"
          @click="closeLightbox"
        >
          <i class="fas fa-times text-xl"></i>
        </button>

        <button
          v-if="screenshots.length > 1"
          type="button"
          class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Previous"
          @click.stop="prev"
        >
          <i class="fas fa-chevron-left text-xl"></i>
        </button>
        <button
          v-if="screenshots.length > 1"
          type="button"
          class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Next"
          @click.stop="next"
        >
          <i class="fas fa-chevron-right text-xl"></i>
        </button>

        <div class="max-w-6xl max-h-[90vh] w-full mx-4 flex items-center justify-center">
          <img
            :key="currentIndex"
            :src="screenshots[currentIndex]?.src"
            :alt="screenshots[currentIndex]?.alt"
            class="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            @error="onImgError($event, screenshots[currentIndex]?.fallback)"
          />
        </div>

        <div
          v-if="screenshots.length > 1"
          class="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-500"
        >
          {{ currentIndex + 1 }} / {{ screenshots.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const screenshots = [
  { src: '/projects/quack-match/hero.png', fallback: 'https://picsum.photos/seed/quack-hero/800/450', alt: 'Quack Match gameplay' },
  { src: '/projects/quack-match/screen1.png', fallback: 'https://picsum.photos/seed/quack-1/400/225', alt: 'Quack Match card grid' },
  { src: '/projects/quack-match/screen2.png', fallback: 'https://picsum.photos/seed/quack-2/400/225', alt: 'Quack Match match found' },
  { src: '/projects/quack-match/screen3.png', fallback: 'https://picsum.photos/seed/quack-3/400/225', alt: 'Quack Match menu' },
];

const lightboxOpen = ref(false);
const currentIndex = ref(0);

function onImgError(e, fallback) {
  if (e?.target) e.target.src = fallback;
}

function openLightbox(index) {
  currentIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + screenshots.length) % screenshots.length;
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % screenshots.length;
}

function onKeydown(e) {
  if (!lightboxOpen.value) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'ArrowRight') next();
}

onMounted(() => window.addEventListener('keydown', onKeydown));
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
