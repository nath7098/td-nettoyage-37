<template>
  <section id="realisations" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-sky-600 font-semibold uppercase tracking-wide text-sm">Avant / Après</span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-2 text-slate-800">Nos réalisations</h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          Quelques chantiers réalisés en Indre-et-Loire. Le meilleur argument, c'est le résultat.
        </p>
      </div>

      <div class="max-w-5xl mx-auto space-y-12">
        <article
            v-for="(project, index) in projects"
            :key="'realisation-' + index"
            v-motion
            class="bg-slate-50 rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
        >
          <div class="p-6 pb-0">
            <h3 class="text-xl font-bold text-slate-800">{{ project.title }}</h3>
            <p class="text-slate-600 mt-1">{{ project.description }}</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
            <figure
                v-for="shot in project.shots"
                :key="shot.src"
                class="overflow-hidden rounded-xl bg-slate-200"
            >
              <NuxtImg
                  :src="shot.src"
                  :alt="shot.alt"
                  :width="shot.width"
                  :height="shot.height"
                  loading="lazy"
                  class="w-full h-auto transition-transform duration-500 hover:scale-105"
              />
              <figcaption class="sr-only">{{ shot.alt }}</figcaption>
            </figure>
          </div>
        </article>

        <article
            v-motion
            class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-slate-50 rounded-2xl border border-slate-100 shadow-sm p-6"
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0 }"
        >
          <figure class="overflow-hidden rounded-xl bg-slate-200">
            <NuxtImg
                src="/realisations/pignon-apres.jpeg"
                alt="Pignon de maison nettoyé et remis à neuf après intervention TD Nettoyage 37"
                width="576"
                height="302"
                loading="lazy"
                class="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </figure>

          <div>
            <h3 class="text-xl font-bold text-slate-800">Pignon remis à neuf</h3>
            <p class="text-slate-600 mt-2">
              Pignon nettoyé sur toute sa hauteur, jusqu'à la rive de toiture. Un support propre et
              uniforme, prêt à durer plusieurs années.
            </p>
            <UButton
                size="lg"
                color="primary"
                variant="solid"
                class="rounded-lg font-bold mt-6"
                to="#quote-form"
            >
              <template #leading>
                <UIcon name="i-heroicons-document-text" />
              </template>
              Demander un devis gratuit
            </UButton>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Démoussage de toiture',
    description: 'Mousses et lichens éliminés, tuiles ravivées et traitement de protection appliqué.',
    shots: [
      {
        src: '/realisations/toiture-avant.jpeg',
        alt: 'Toiture envahie par les mousses et les lichens avant démoussage',
        width: 576,
        height: 283
      },
      {
        src: '/realisations/toiture-apres.jpeg',
        alt: 'Même toiture après démoussage, tuiles propres et couleur d\'origine retrouvée',
        width: 584,
        height: 284
      }
    ]
  },
  {
    title: 'Nettoyage de façade',
    description: 'Façade décrassée en profondeur : traces noires et salissures supprimées, enduit assaini.',
    shots: [
      {
        src: '/realisations/facade-avant.jpeg',
        alt: 'Façade de maison marquée par les coulures noires et les salissures avant nettoyage',
        width: 574,
        height: 316
      },
      {
        src: '/realisations/facade-apres.jpeg',
        alt: 'Même façade après nettoyage, enduit propre et uniforme',
        width: 586,
        height: 320
      }
    ]
  }
];
</script>
