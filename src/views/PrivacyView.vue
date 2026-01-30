<template>
  <div class="container mx-auto px-4 py-12 max-w-3xl">
    <header class="mb-8">
      <router-link to="/" class="text-nix-accent hover:text-nix-accentDim text-sm font-mono mb-4 inline-block">
        <i class="fas fa-arrow-left mr-2"></i> Back
      </router-link>
      <h1 class="text-3xl font-mono font-bold text-nix-accent">Privacy Policy</h1>
      <p class="text-gray-500 text-sm mt-2">Last updated: {{ lastUpdated }}</p>
    </header>

    <article class="prose prose-invert max-w-none space-y-6 text-gray-400">
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">1. Overview</h2>
        <p>
          NixFelis ("we") operates this static website. We do not collect personal data through this site. This policy describes what data we might receive and how we handle it.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">2. Data We Do Not Collect</h2>
        <p>
          This website is static. We do not run forms, analytics, or tracking scripts that collect personal information. We do not use cookies for tracking.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">3. Hosting (GitHub Pages)</h2>
        <p>
          The site is hosted on GitHub Pages. GitHub may collect logs (e.g. IP, access times) as described in their privacy policy. We do not have access to or control over that data.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">4. Contact</h2>
        <p>
          If you contact us by email, we will use your email only to respond. We do not sell or share contact information.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">5. Changes</h2>
        <p>
          We may update this policy. The "Last updated" date at the top will reflect changes. Continued use of the site after changes constitutes acceptance.
        </p>
      </section>
    </article>
  </div>
</template>

<script setup>
const lastUpdated = '2025-01-30'
</script>
