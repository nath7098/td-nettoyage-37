<template>
  <section id="faq" class="py-20 bg-slate-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <span class="text-sky-600 font-semibold uppercase tracking-wide text-sm">Questions fréquentes</span>
        <h2 class="text-3xl md:text-4xl font-bold mb-4 mt-2 text-slate-800">Vous vous posez des questions ?</h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          Tout ce qu'il faut savoir sur le nettoyage de toiture, façade et nos travaux de peinture en Indre-et-Loire (37).
        </p>
      </div>

      <div class="max-w-3xl mx-auto">
        <UAccordion :items="faqItems" />
      </div>
    </div>
  </section>
</template>

<script setup>
const faqItems = [
  {
    label: 'À quelle fréquence faut-il nettoyer sa toiture ?',
    content: 'On recommande un démoussage de toiture tous les 5 à 10 ans selon l\'exposition, l\'environnement (arbres, humidité) et le type de tuiles. Un traitement hydrofuge appliqué après le nettoyage prolonge nettement cet intervalle.',
    defaultOpen: false
  },
  {
    label: 'Quelle est la différence entre nettoyage et traitement hydrofuge ?',
    content: 'Le nettoyage retire les mousses, lichens et salissures présentes sur la toiture ou la façade. Le traitement hydrofuge, appliqué ensuite, imperméabilise le support et ralentit la réapparition des mousses. Les deux sont complémentaires pour un résultat durable.',
    defaultOpen: false
  },
  {
    label: 'Intervenez-vous pour les particuliers et les professionnels ?',
    content: 'Oui, nous travaillons aussi bien pour les particuliers (maisons, terrasses, volets) que pour les professionnels (bâtiments, façades, copropriétés) dans tout l\'Indre-et-Loire.',
    defaultOpen: false
  },
  {
    label: 'Faites-vous aussi de la peinture intérieure et extérieure ?',
    content: 'Absolument. Nous réalisons la peinture intérieure (murs, plafonds, boiseries) et extérieure (façades, pignons, volets, boiseries) avec préparation des supports et finitions soignées.',
    defaultOpen: false
  },
  {
    label: 'Le devis est-il gratuit ?',
    content: 'Oui, le devis est totalement gratuit et sans engagement. Nous nous déplaçons pour évaluer précisément vos besoins et vous transmettons une proposition claire sous 24h.',
    defaultOpen: false
  },
  {
    label: 'Comment obtenir un devis ?',
    content: 'Remplissez notre formulaire en ligne ou appelez-nous directement. Nous vous recontactons rapidement pour organiser une visite et établir votre devis personnalisé.',
    defaultOpen: false
  }
];
</script>
