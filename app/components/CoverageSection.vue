<template>
  <section id="zone-couverture" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-sky-600 font-semibold uppercase tracking-wide text-sm">Zone d'intervention</span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-2 text-slate-800">Nous intervenons dans tout l'Indre-et-Loire</h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          Basés à Fondettes, nous nous déplaçons à Tours et dans les communes environnantes pour vos travaux de nettoyage et de peinture.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0 }"
        >
          <div class="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-gradient-to-br from-slate-800 to-sky-900 p-10 text-white">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center">
                <UIcon name="i-heroicons-map-pin" class="text-2xl text-sky-300" />
              </div>
              <div>
                <div class="font-bold text-lg">TD Nettoyage 37</div>
                <div class="text-slate-300 text-sm">Fondettes (37230)</div>
              </div>
            </div>
            <p class="text-slate-200 mb-6">
              Notre atelier est situé au cœur de l'agglomération tourangelle, ce qui nous permet d'intervenir rapidement chez vous.
            </p>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <UIcon name="i-heroicons-map-pin" class="text-sky-300" />
                <span>{{ contact.address }}</span>
              </div>
              <a :href="`tel:${contact.phone}`" class="flex items-center gap-3 hover:text-sky-300 transition-colors">
                <UIcon name="i-heroicons-phone" class="text-sky-300" />
                <span>{{ contact.phone }}</span>
              </a>
              <a :href="`mailto:${contact.email}`" class="flex items-center gap-3 hover:text-sky-300 transition-colors">
                <UIcon name="i-heroicons-envelope" class="text-sky-300" />
                <span>{{ contact.email }}</span>
              </a>
            </div>
          </div>
        </div>

        <div
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0 }"
        >
          <h3 class="text-2xl font-bold mb-6 text-slate-800">Nos communes d'intervention</h3>

          <div class="flex flex-wrap gap-3 mb-8">
            <span
                v-for="(area, index) in coverageAreas"
                :key="index"
                class="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 hover:border-sky-300 hover:text-sky-700 transition-colors"
            >
              <UIcon name="i-heroicons-map-pin" class="text-sky-500 text-sm" />
              {{ area }}
            </span>
          </div>

          <p class="text-slate-600 font-medium mb-6">
            Votre commune n'apparaît pas ? Contactez-nous : nous couvrons l'ensemble du département.
          </p>

          <UButton
              size="lg"
              color="primary"
              variant="solid"
              class="rounded-lg font-bold"
              :to="`tel:${contact.phone}`"
          >
            <template #leading>
              <UIcon name="i-heroicons-phone" />
            </template>
            Vérifier ma zone
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContact } from '~/composables/useContact';
const contact = useContact();

const coverageAreas = [
  'Tours',
  'Fondettes',
  'Saint-Cyr-sur-Loire',
  'La Membrolle-sur-Choisille',
  'Luynes',
  'Saint-Étienne-de-Chigny',
  'La Riche',
  'Joué-lès-Tours',
  'Saint-Avertin',
  'Chambray-lès-Tours',
  'Ballan-Miré',
  'Saint-Pierre-des-Corps',
  'Vouvray',
  'Montlouis-sur-Loire',
  'Amboise',
  'Langeais'
];
</script>
