<template>
  <div class="container mx-auto px-4 py-12 max-w-3xl">
    <header class="mb-8">
      <router-link to="/projects" class="text-nix-accent hover:text-nix-accentDim text-sm font-mono mb-4 inline-block">
        <i class="fas fa-arrow-left mr-2"></i> Back
      </router-link>
      <h1 class="text-3xl font-mono font-bold text-nix-accent">Privacy Policy</h1>
      <p class="text-gray-500 text-sm mt-2">Quack Match · Last updated: {{ lastUpdated }}</p>
    </header>

    <article class="prose prose-invert max-w-none space-y-6 text-gray-400">
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">1. Overview</h2>
        <p>
          This privacy policy applies to the mobile app <strong class="text-gray-300">Quack Match</strong> by NixFelis ("we"). The app is designed for toddlers and young children. We do not collect any personal or usage data through Quack Match.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">2. Data We Do Not Collect</h2>
        <p>
          Quack Match does not collect, store, or transmit any personal or usage data. We do not use accounts, analytics, advertising, or any third-party services that collect data. The app works offline and does not send data to us or to any other party.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">3. Data on Your Device</h2>
        <p>
          Any data stored by the app (for example, game progress or save state) is kept only on your device. This data is not transmitted to us or anyone else.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">4. Children</h2>
        <p>
          We do not collect data from children. Quack Match is designed to be safe for toddlers and above, and we have not built in any data collection.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">5. Contact</h2>
        <p>
          If you have questions about this privacy policy, you can contact us at <a href="mailto:hello@nixfelis.com" class="text-nix-accent hover:text-nix-accentDim">hello@nixfelis.com</a> or through the Contact page on our website.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">6. Changes</h2>
        <p>
          We may update this policy from time to time. The "Last updated" date at the top will reflect any changes. Continued use of Quack Match after changes constitutes acceptance of the updated policy.
        </p>
      </section>
    </article>
  </div>
</template>

<script setup>
const lastUpdated = '2025-02-22'
</script>
