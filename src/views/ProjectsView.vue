<template>
  <div class="container mx-auto px-4 py-12">
    <header class="mb-12 text-center">
      <h1 class="text-3xl md:text-4xl font-mono font-bold text-nix-accent mb-4">Projects</h1>
      <p class="text-gray-500 max-w-xl mx-auto">
        Apps and games we've built. More coming soon.
      </p>
    </header>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      <article
        v-for="(project, i) in projects"
        :key="project.id"
        class="rounded-xl border border-nix-border bg-nix-surface p-6 card-hover opacity-0 animate-fade-in-up"
        :style="{ animationDelay: `${0.1 + i * 0.1}s`, animationFillMode: 'forwards' }"
      >
        <div class="flex items-center gap-3 mb-4">
          <span
            class="w-10 h-10 rounded-lg flex items-center justify-center text-nix-accent"
            :class="project.type === 'game' ? 'bg-nix-cat/20' : 'bg-nix-accent/20'"
          >
            <i :class="project.type === 'game' ? 'fas fa-gamepad' : 'fas fa-mobile-alt'"></i>
          </span>
          <h2 class="font-mono text-lg text-gray-200">{{ project.title }}</h2>
        </div>
        <p class="text-gray-500 text-sm mb-4">{{ project.description }}</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-2 py-1 text-xs rounded bg-nix-border text-gray-400"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'Placeholder App',
    description: 'A sample web application showcasing modern stack and UX patterns.',
    type: 'app',
    tags: ['Vue', 'Vite', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Indie Game Alpha',
    description: 'Work-in-progress indie game. Puzzle mechanics and minimal art style.',
    type: 'game',
    tags: ['Unity', 'C#'],
  },
  {
    id: 3,
    title: 'Internal Dashboard',
    description: 'Tooling for teams: metrics, logs, and config in one place.',
    type: 'app',
    tags: ['React', 'Node'],
  },
  {
    id: 4,
    title: 'Roguelike Prototype',
    description: 'Procedural dungeons and turn-based combat. Early prototype.',
    type: 'game',
    tags: ['Godot', 'GDScript'],
  },
  {
    id: 5,
    title: 'API Gateway',
    description: 'Lightweight API gateway for microservices. Auth and rate limiting.',
    type: 'app',
    tags: ['Go', 'Docker'],
  },
  {
    id: 6,
    title: 'Puzzle Game',
    description: 'Casual puzzle game with daily challenges and leaderboards.',
    type: 'game',
    tags: ['Web', 'Phaser'],
  },
]
</script>
