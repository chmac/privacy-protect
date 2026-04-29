<script lang="ts">
  import { base } from "$app/paths";

  const links = [
    { href: `${base}/privacy-and-terms`, text: "Privacy" },
    { href: `${base}/privacy-and-terms`, text: "Terms" },
    { href: `${base}/security`, text: "Security" },
    {
      href: "https://github.com/therockstorm/privacy-protect",
      text: "GitHub",
    },
    { href: `${base}/blog`, text: "Blog" },
  ];
  const date = new Date().getFullYear();
</script>

<footer>
  <div
    class="text-sm mx-auto max-w-7xl pt-10 pb-8 md:flex md:items-center md:justify-between"
  >
    <ul class="flex justify-center space-x-4 md:order-2">
      {#each links as link (link.text)}
        <li>
          <a
            class="text-gray-500 hover:text-gray-600"
            href={link.href}
            rel="noreferrer"
          >
            {link.text}
          </a>
        </li>
      {/each}
    </ul>
    <div class="mt-8 md:order-1 md:mt-0">
      <p class="text-center text-gray-500">
        &copy; {date} privacyprotect.dev
      </p>
    </div>
  </div>
</footer>
