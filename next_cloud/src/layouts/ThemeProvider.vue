<template>
  <slot />
</template>

<script setup>
import { ref, provide, onMounted, watch, computed } from 'vue'

// Reactive theme state
const theme = ref('light')

// Prevent localStorage writes until initial load finishes
const isInitialized = ref(false)

// Derived values
const isDarkMode = computed(() => theme.value === 'dark')

// Toggle theme
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

// Update HTML class manually
const updateHtmlClass = (newTheme) => {
  const htmlEl = document.documentElement
  if (newTheme === 'dark') {
    htmlEl.classList.add('dark')
  } else {
    htmlEl.classList.remove('dark')
  }
}

// On mount: check local storage or system preference
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')

  theme.value = initialTheme
  updateHtmlClass(theme.value)
  isInitialized.value = true
})

// Watch for theme changes
watch(
  () => theme.value,
  (newTheme) => {
    if (isInitialized.value) {
      localStorage.setItem('theme', newTheme)
      updateHtmlClass(newTheme)
    }
  }
)

// Provide the theme context to children
provide('theme', {
  theme,
  isDarkMode,
  toggleTheme
})
</script>