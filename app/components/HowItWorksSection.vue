<template>
  <section id="comment-ca-marche" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-sky-600 font-semibold uppercase tracking-wide text-sm">Simple &amp; transparent</span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-2 text-slate-800">Comment ça se passe ?</h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          De la demande de devis à la finition, nous vous accompagnons en 4 étapes simples.
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
              v-for="(step, index) in steps"
              :key="index"
              v-motion
              class="text-center"
              :initial="{ opacity: 0, y: 30 }"
              :enter="{ opacity: 1, y: 0, transition: { delay: index * 150 } }"
          >
            <div class="w-20 h-20 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-white shadow-lg">
              {{ index + 1 }}
            </div>
            <div class="mb-4">
              <UIcon :name="step.icon" class="text-5xl text-sky-500 mx-auto" />
            </div>
            <h3 class="text-xl font-bold mb-3 text-slate-800">{{ step.title }}</h3>
            <p class="text-slate-600">{{ step.description }}</p>
          </div>
        </div>

        <div class="mt-16 text-center">
          <UButton size="xl" color="primary" to="#quote-form" class="font-bold">
            <template #leading>
              <UIcon name="i-heroicons-rocket-launch" />
            </template>
            Demander mon devis
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: 'Demandez un devis',
    description: 'Contactez-nous par téléphone ou via le formulaire en ligne. Nous répondons sous 24h.',
    icon: 'i-heroicons-phone'
  },
  {
    title: 'Visite & estimation',
    description: 'Nous évaluons votre toiture, façade ou surface à peindre et établissons un devis clair et gratuit.',
    icon: 'i-heroicons-clipboard-document-check'
  },
  {
    title: 'Intervention soignée',
    description: 'Notre équipe réalise le nettoyage ou la peinture avec un matériel professionnel et un travail méticuleux.',
    icon: 'i-lucide-spray-can'
  },
  {
    title: 'Résultat garanti',
    description: 'Nous vérifions ensemble le résultat et laissons votre chantier propre. Votre satisfaction avant tout.',
    icon: 'i-heroicons-sparkles'
  }
];
</script>
