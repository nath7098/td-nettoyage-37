<template>
  <footer class="bg-slate-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center gap-3 mb-4">
            <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center">
              <UIcon name="i-lucide-sparkles" class="text-xl text-white" />
            </div>
            <div class="font-bold text-lg">TD Nettoyage 37</div>
          </div>
          <p class="text-slate-400">
            Nettoyage de toiture, façade, terrasse et peinture intérieure/extérieure à Tours et en Indre-et-Loire.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Nos services</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/#services" class="text-slate-400 hover:text-sky-400 transition-colors">Nettoyage toiture</NuxtLink></li>
            <li><NuxtLink to="/#services" class="text-slate-400 hover:text-sky-400 transition-colors">Nettoyage façade</NuxtLink></li>
            <li><NuxtLink to="/#services" class="text-slate-400 hover:text-sky-400 transition-colors">Terrasse & murets</NuxtLink></li>
            <li><NuxtLink to="/#services" class="text-slate-400 hover:text-sky-400 transition-colors">Peinture int. & ext.</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/#realisations" class="text-slate-400 hover:text-sky-400 transition-colors">Réalisations</NuxtLink></li>
            <li><NuxtLink to="/#comment-ca-marche" class="text-slate-400 hover:text-sky-400 transition-colors">Déroulement</NuxtLink></li>
            <li><NuxtLink to="/#zone-couverture" class="text-slate-400 hover:text-sky-400 transition-colors">Zone d'intervention</NuxtLink></li>
            <li><NuxtLink to="/#faq" class="text-slate-400 hover:text-sky-400 transition-colors">Questions fréquentes</NuxtLink></li>
            <li><NuxtLink to="/#quote-form" class="text-slate-400 hover:text-sky-400 transition-colors">Demande de devis</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <ul class="space-y-2">
            <li class="flex items-center">
              <UIcon name="i-heroicons-phone" class="mr-2 text-sky-400" />
              <a :href="`tel:${contact.phone}`" class="hover:text-sky-400 transition-colors">{{ contact.phone }}</a>
            </li>
            <li class="flex items-center">
              <UIcon name="i-heroicons-envelope" class="mr-2 text-sky-400" />
              <a :href="`mailto:${contact.email}`" class="hover:text-sky-400 transition-colors">{{ contact.email }}</a>
            </li>
            <li class="flex items-start mt-4">
              <UIcon name="i-heroicons-map-pin" class="mr-2 mt-1 text-sky-400 shrink-0" />
              <span class="text-slate-400">{{ contact.address }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
        <p>© {{ new Date().getFullYear() }} TD Nettoyage 37. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useContact } from '~/composables/useContact'

const contact = useContact()
</script>
