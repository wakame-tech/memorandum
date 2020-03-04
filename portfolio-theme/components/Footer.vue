<template>
  <footer v-if="$themeConfig.footer && $themeConfig.footer.copyright" class="footer">
    <div class="content has-text-centered">
      <p>{{ $themeConfig.footer.copyright }}</p>
    </div>
  </footer>
</template>
