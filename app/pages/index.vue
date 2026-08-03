<template>
  <div>
    <header class="relative">
      <SiteHeader transparent />

      <HeroSection />
    </header>

    <main>
      <ServicesSection />
      <RealisationsSection />
      <EnhancedCTA />
      <HowItWorksSection />
      <AdvantagesSection />
      <CoverageSection />
      <FAQSection />
      <QuoteForm />
    </main>

    <SiteFooter />

    <StickyContactBar />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://td-nettoyage37.fr'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Services',
                item: 'https://td-nettoyage37.fr#services'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Devis',
                item: 'https://td-nettoyage37.fr#quote-form'
              }
            ]
          },
          {
            '@type': 'LocalBusiness',
            name: 'TD Nettoyage 37',
            image: 'https://td-nettoyage37.fr/og-image.jpg',
            '@id': 'https://td-nettoyage37.fr',
            url: 'https://td-nettoyage37.fr',
            telephone: '+33 7 56 80 43 64',
            email: 'tdnettoyage37@gmail.com',
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '9 Rue des Rabatteries',
              addressLocality: 'Fondettes',
              addressRegion: 'Indre-et-Loire',
              postalCode: '37230',
              addressCountry: 'FR'
            },
            areaServed: [
              { '@type': 'City', name: 'Tours' },
              { '@type': 'City', name: 'Fondettes' },
              { '@type': 'AdministrativeArea', name: 'Indre-et-Loire' }
            ],
            description: 'TD Nettoyage 37 : nettoyage de toiture (démoussage, hydrofuge), façade, terrasse, volets, portail, murets et pignons, ainsi que peinture intérieure et extérieure à Tours et en Indre-et-Loire (37).',
            makesOffer: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage de toiture et démoussage' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage de façade et pignons' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage de terrasse et murets' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nettoyage de volets et portail' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture intérieure' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Peinture extérieure' } }
            ],
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '08:00',
                closes: '12:00'
              }
            ]
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'À quelle fréquence faut-il nettoyer sa toiture ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'On recommande un démoussage de toiture tous les 5 à 10 ans selon l\'exposition, l\'environnement et le type de tuiles. Un traitement hydrofuge appliqué après le nettoyage prolonge nettement cet intervalle.'
                }
              },
              {
                '@type': 'Question',
                name: 'Quelle est la différence entre nettoyage et traitement hydrofuge ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Le nettoyage retire les mousses, lichens et salissures. Le traitement hydrofuge, appliqué ensuite, imperméabilise le support et ralentit la réapparition des mousses. Les deux sont complémentaires pour un résultat durable.'
                }
              },
              {
                '@type': 'Question',
                name: 'Intervenez-vous pour les particuliers et les professionnels ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Oui, nous travaillons pour les particuliers comme pour les professionnels dans tout l\'Indre-et-Loire (37).'
                }
              },
              {
                '@type': 'Question',
                name: 'Faites-vous aussi de la peinture intérieure et extérieure ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Oui, nous réalisons la peinture intérieure (murs, plafonds, boiseries) et extérieure (façades, pignons, volets) avec préparation des supports et finitions soignées.'
                }
              },
              {
                '@type': 'Question',
                name: 'Le devis est-il gratuit ?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Oui, le devis est totalement gratuit et sans engagement. Nous nous déplaçons pour évaluer vos besoins et vous répondons sous 24h.'
                }
              }
            ]
          }
        ]
      })
    }
  ]
});
</script>

<style>
:root {
  scroll-behavior: smooth;
}

body {
  font-family: 'Manrope', sans-serif;
  color: #1e293b;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
