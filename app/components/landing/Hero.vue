<script setup lang="ts"></script>

<template>
  <UPageHero>
    <video
      src="/images/video.mp4"
      autoplay
      muted
      loop
      playsinline
      aria-hidden="true"
      class="absolute inset-0 object-cover -z-10 max-h-full h-full w-full"
    />

    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)',
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)',
        }"
        :transition="{
          duration: 0.6,
        }"
      >
        <NuxtImg
          src="/images/logo.png"
          alt="Logo"
          format="webp"
          quality="80"
          width="252"
          height="114"
          preload
          fetchpriority="high"
          class="w-full max-w-xl mx-auto px-16 py-32"
        />
      </Motion>
    </template>
  </UPageHero>
</template>
