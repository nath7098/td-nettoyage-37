<template>
  <section id="services" class="py-20 bg-slate-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-sky-600 font-semibold uppercase tracking-wide text-sm">Nos prestations</span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-2 text-slate-800">Nettoyage &amp; peinture en Indre-et-Loire</h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          De la toiture au portail, en passant par la peinture intérieure et extérieure : nous redonnons de l'éclat à votre habitat, pour les particuliers comme pour les professionnels.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
            v-for="(service, index) in services"
            :key="index"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            :features="service.features"
            :delay="index * 100"
        />
      </div>

      <div class="mt-16 text-center">
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
          Appelez-nous pour un devis
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContact } from '~/composables/useContact';
const contact = useContact();

const services = [
  {
    title: 'Nettoyage de toiture & démoussage',
    description: 'Élimination des mousses, lichens et salissures pour préserver et prolonger la vie de votre toiture.',
    icon: 'i-lucide-house',
    features: ['Démoussage manuel & traitement', 'Application anti-mousse', 'Traitement hydrofuge de protection']
  },
  {
    title: 'Nettoyage de façade & pignons',
    description: 'Redonnez à vos murs extérieurs et pignons leur aspect d\'origine, sans traces ni salissures.',
    icon: 'i-lucide-building-2',
    features: ['Nettoyage haute pression', 'Traitement anti-mousse', 'Ravalement d\'aspect']
  },
  {
    title: 'Nettoyage de terrasse & murets',
    description: 'Terrasses, dallages et murets nettoyés en profondeur pour retrouver un extérieur impeccable.',
    icon: 'i-lucide-grip',
    features: ['Dalle, béton, pierre & carrelage', 'Décrassage en profondeur', 'Murets et bordures']
  },
  {
    title: 'Nettoyage de volets & portail',
    description: 'Nettoyage soigné de vos volets et portails pour un extérieur net et bien entretenu.',
    icon: 'i-lucide-fence',
    features: ['Volets PVC, bois & alu', 'Portails et clôtures', 'Finition sans traces']
  },
  {
    title: 'Peinture intérieure',
    description: 'Murs, plafonds et boiseries : une mise en peinture nette et durable pour rénover vos pièces.',
    icon: 'i-lucide-paint-roller',
    features: ['Murs & plafonds', 'Préparation des supports', 'Finitions soignées']
  },
  {
    title: 'Peinture extérieure',
    description: 'Façades, murets, volets et boiseries extérieures protégés et embellis par une peinture adaptée.',
    icon: 'i-lucide-paintbrush',
    features: ['Façades & pignons', 'Boiseries & volets', 'Peintures résistantes aux intempéries']
  }
];
</script>
