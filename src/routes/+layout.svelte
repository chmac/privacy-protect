<script lang="ts">
  import "../app.css";
  import "prismjs/themes/prism-okaidia.css";

  import Footer from "$components/Footer.svelte";
  import Header from "$components/Header.svelte";
</script>

<svelte:head>
  {#if import.meta.env.PROD}
    <script
      defer
      data-domain="privacyprotect.dev"
      data-api="/data/api/event"
      src="/data/js/script.js"
    ></script>
  {/if}
</svelte:head>

<div class="bg-yellow-50 border-l-4 border-yellow-400 px-6 py-3 text-sm text-yellow-800">
  <strong>Note:</strong> This is a fork of
  <a class="underline" href="https://github.com/therockstorm/privacy-protect">therockstorm/privacy-protect</a>
  created to address
  <a class="underline" href="https://github.com/therockstorm/privacy-protect/issues/69">#69</a>
  and
  <a class="underline" href="https://github.com/therockstorm/privacy-protect/issues/130">#130</a>.
  Hopefully those will be fixed upstream and this fork can be retired.
</div>
<div class="antialiased mx-auto my-6 max-w-3xl overflow-x-hidden px-6">
  <Header />
  <slot />
  <Footer />
</div>
