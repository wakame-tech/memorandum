<template>
  <div class="section">
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="$themeConfig.about.avatar" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ $themeConfig.about.nickname }}</p>
            <a class="subtitle is-6" :href="'https://twitter.com/' + $themeConfig.about.sns.twitter">@{{ $themeConfig.about.sns.twitter }}</a>
          </div>
        </div>

        <div class="content">
          {{ $themeConfig.about.bio }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>