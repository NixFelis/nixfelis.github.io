<template>
  <div class="container mx-auto px-4 py-12 max-w-3xl">
    <header class="mb-8">
      <router-link to="/" class="text-nix-accent hover:text-nix-accentDim text-sm font-mono mb-4 inline-block">
        <i class="fas fa-arrow-left mr-2"></i> Back
      </router-link>
      <h1 class="text-3xl font-mono font-bold text-nix-accent">Terms of Service</h1>
      <p class="text-gray-500 text-sm mt-2">Last updated: {{ lastUpdated }}</p>
    </header>

    <article class="prose prose-invert max-w-none space-y-6 text-gray-400">
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">1. Acceptance</h2>
        <p>
          By accessing or using the NixFelis website, you agree to these Terms of Service. If you do not agree, do not use the site.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">2. Use of the Site</h2>
        <p>
          This site is provided for informational purposes. You may view and link to it for personal or non-commercial use. You may not scrape, frame, or use automated tools to access the site in a way that burdens our hosting or violates applicable law.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">3. No Warranty</h2>
        <p>
          The site and its content are provided "as is." We do not warrant accuracy, availability, or fitness for any purpose. We are not liable for any damages arising from your use of the site.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">4. Intellectual Property</h2>
        <p>
          Content on this site (text, design, logos) is owned by NixFelis or used with permission. You may not copy, modify, or distribute it without our written consent, except for fair use or as allowed by law.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">5. Changes</h2>
        <p>
          We may update these terms. The "Last updated" date will change. Your continued use after changes constitutes acceptance. For material changes, we may note them on the site.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">6. Contact</h2>
        <p>
          Questions about these terms? Contact us at the email listed on the Contact page.
        </p>
      </section>
    </article>
  </div>
</template>

<script setup>
const lastUpdated = '2025-01-30'
</script>
