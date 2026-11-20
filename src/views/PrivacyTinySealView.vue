<template>
  <div class="container mx-auto px-4 py-12 max-w-3xl">
    <header class="mb-8">
      <router-link to="/projects" class="text-nix-accent hover:text-nix-accentDim text-sm font-mono mb-4 inline-block">
        <i class="fas fa-arrow-left mr-2"></i> Back
      </router-link>
      <h1 class="text-3xl font-mono font-bold text-nix-accent">Privacy Policy</h1>
      <p class="text-gray-500 text-sm mt-2">Tiny Seal · Last updated: {{ lastUpdated }}</p>
    </header>

    <article class="prose prose-invert max-w-none space-y-6 text-gray-400">
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">1. Overview</h2>
        <p>
          This privacy policy applies to the mobile app
          <strong class="text-gray-300">Tiny Seal</strong>
          (<code class="text-gray-300">com.nixfelis.tinyseal</code>) by NixFelis ("we").
          Tiny Seal is a kid-safe Android launcher / home screen with a parent PIN and app allowlist.
          We do not collect personal or usage data through Tiny Seal.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">2. Data We Do Not Collect</h2>
        <p>
          Tiny Seal does not collect, store on our servers, or transmit any personal or usage data.
          We do not use accounts, analytics, advertising, crash reporters that upload data, or any
          third-party services that collect data. The app does not phone home.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">3. Data on Your Device</h2>
        <p>
          The parent <strong class="text-gray-300">PIN</strong> and
          <strong class="text-gray-300">app allowlist</strong> are stored only on your device
          (local preferences). Theme choices and related settings stay on-device as well.
          This data is never sent to us or to third parties, and is removed when the app is
          uninstalled (standard Android behavior).
        </p>
        <p>
          Tiny Seal may use Android’s built-in screen pinning (Lock Task Mode) when enabled in
          system settings, and may set the device wallpaper via the standard Android wallpaper API.
          Those features keep images and state on-device; no data leaves the device.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">4. Network</h2>
        <p>
          Tiny Seal is designed to operate without a network connection for its core launcher and
          parental-control features. The app does not require an internet connection to run.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">5. Children</h2>
        <p>
          Tiny Seal is intended for use on a child’s phone or tablet under a parent’s or guardian’s control.
          Parents configure the PIN and allowlist. The app does not include user-generated content,
          chat, or social features, and we do not collect data from children.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">6. Third-party fonts</h2>
        <p>
          Tiny Seal bundles Font Awesome Free under the SIL Open Font License 1.1 (font) and
          Creative Commons Attribution 4.0 (icon glyphs). License text ships in the APK.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">7. Contact</h2>
        <p>
          If you have questions about this privacy policy, contact us at
          <a href="mailto:hello@nixfelis.com" class="text-nix-accent hover:text-nix-accentDim">hello@nixfelis.com</a>
          or through the Contact page on our website.
        </p>
      </section>
      <section>
        <h2 class="text-xl font-mono text-nix-accent mb-2">8. Changes</h2>
        <p>
          We may update this policy from time to time. The "Last updated" date at the top will
          reflect any changes. Continued use of Tiny Seal after changes constitutes acceptance of
          the updated policy.
        </p>
      </section>
    </article>
  </div>
</template>

<script setup>
const lastUpdated = '2026-11-21'
</script>
