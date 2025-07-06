<template>
  <li>
    <a href="#"
      class="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white-800 rounded-lg text-red-800  ">
      {{ title }}
    </a>
  </li>
</template>

<script setup>
defineProps({
  title: String
});
</script>