<template>
  <div
      v-motion
      class="group bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-sky-200 hover:-translate-y-1"
      :style="{ transitionDelay: `${delay}ms` }"
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0 }"
  >
    <div class="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-5 text-white shadow-md group-hover:scale-105 transition-transform">
      <UIcon :name="icon" class="text-2xl" />
    </div>
    <h3 class="text-xl font-bold mb-3 text-slate-800">{{ title }}</h3>
    <p class="text-slate-600 mb-4">{{ description }}</p>
    <ul v-if="features?.length" class="space-y-2">
      <li v-for="(feature, i) in features" :key="i" class="flex items-start text-sm text-slate-600">
        <UIcon name="i-heroicons-check-circle" class="text-sky-500 mr-2 mt-0.5 shrink-0" />
        <span>{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => []
  },
  delay: {
    type: Number,
    default: 0
  }
});
</script>
