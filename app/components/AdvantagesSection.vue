<template>
  <section id="avantages" class="py-20 bg-slate-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-sky-600 font-semibold uppercase tracking-wide text-sm">Pourquoi nous choisir</span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-2 text-slate-800">Nos engagements</h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          Une entreprise locale de confiance pour l'entretien et l'embellissement de votre habitat.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(advantage, index) in advantages"
            :key="'advantage-' + index"
            v-motion
            class="text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
            :initial="{ opacity: 0, scale: 0.9 }"
            :enter="{ opacity: 1, scale: 1, transition: { delay: index * 100 } }"
        >
          <div class="w-16 h-16 mx-auto bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md">
            <UIcon :name="advantage.icon" class="text-2xl" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-slate-800">{{ advantage.title }}</h3>
          <p class="text-slate-600">{{ advantage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const advantages = [
  {
    title: 'Travail soigné',
    description: 'Un souci du détail et des finitions impeccables, que ce soit en nettoyage ou en peinture.',
    icon: 'i-heroicons-sparkles'
  },
  {
    title: 'Devis gratuit & transparent',
    description: 'Des tarifs clairs et détaillés, sans frais cachés ni mauvaise surprise.',
    icon: 'i-heroicons-banknotes'
  },
  {
    title: 'Entreprise locale',
    description: 'Basés à Fondettes, nous intervenons rapidement dans tout l\'Indre-et-Loire.',
    icon: 'i-heroicons-map'
  },
  {
    title: 'Équipement professionnel',
    description: 'Matériel adapté et produits de qualité pour un résultat durable et respectueux des supports.',
    icon: 'i-lucide-wrench'
  },
  {
    title: 'Respect de votre habitat',
    description: 'Traitements adaptés à chaque surface et chantier laissé propre après intervention.',
    icon: 'i-heroicons-home-modern'
  },
  {
    title: 'À votre écoute',
    description: 'Des conseils personnalisés et une équipe réactive pour répondre à toutes vos questions.',
    icon: 'i-heroicons-chat-bubble-left-right'
  }
];
</script>
