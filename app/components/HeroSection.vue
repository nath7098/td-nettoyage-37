<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
    <!-- Fond dégradé + motif -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900" />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />
      <div class="absolute inset-0 bg-pattern opacity-[0.07]" />
      <!-- Halos décoratifs -->
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
      <div class="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
    </div>

    <div class="container mx-auto px-4 relative z-10 pt-28 pb-16">
      <div class="max-w-3xl">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-sm font-medium mb-6">
          <UIcon name="i-heroicons-map-pin" />
          Tours & Indre-et-Loire (37)
        </span>

        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Nettoyage de toiture &amp; façade
          <span class="text-sky-400">à Tours</span>
        </h1>
        <p class="text-xl text-slate-200 mb-8 max-w-2xl">
          Démoussage de toiture, nettoyage de façade, terrasse, volets, portail, murets et pignons.
          Peinture intérieure et extérieure. Un travail soigné par des professionnels de l'Indre-et-Loire.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mb-10">
          <UButton
              size="xl"
              color="primary"
              variant="solid"
              class="rounded-lg font-bold justify-center"
              :to="`tel:${contact.phone}`"
          >
            <template #leading>
              <UIcon name="i-heroicons-phone" />
            </template>
            {{ contact.phone }}
          </UButton>

          <UButton
              size="xl"
              color="neutral"
              variant="outline"
              class="rounded-lg font-bold justify-center text-white ring-white/30 hover:bg-white/10"
              to="#quote-form"
          >
            <template #leading>
              <UIcon name="i-heroicons-document-text" />
            </template>
            Devis gratuit sous 24h
          </UButton>
        </div>

        <div class="flex flex-wrap gap-x-6 gap-y-3 text-white">
          <div class="flex items-center">
            <UIcon name="i-heroicons-check-badge" class="mr-2 text-sky-400 text-xl" />
            <span>Devis gratuit &amp; sans engagement</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-shield-check" class="mr-2 text-sky-400 text-xl" />
            <span>Travail soigné &amp; garanti</span>
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-clock" class="mr-2 text-sky-400 text-xl" />
            <span>Réponse sous 24h</span>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
      <UButton
          variant="ghost"
          color="neutral"
          icon="i-heroicons-chevron-down"
          class="rounded-full text-white"
          to="#services"
      />
    </div>
  </section>
</template>

<script setup>
import { useContact } from '~/composables/useContact';
const contact = useContact();
</script>

<style scoped>
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
