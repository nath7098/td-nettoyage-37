<template>
  <section class="py-16 bg-gradient-to-r from-sky-600 to-cyan-600">
    <div
        v-motion
        class="container mx-auto px-4"
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
    >
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <!-- Contenu texte -->
          <div class="p-8 md:p-12 flex flex-col justify-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Une toiture ou une façade à rafraîchir ?</h2>
            <p class="text-slate-600 mb-8">
              Obtenez un devis gratuit et sans engagement en quelques minutes. Notre équipe se déplace pour évaluer vos besoins et vous répond sous 24h.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
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
                  class="rounded-lg font-bold justify-center"
                  @click="scrollToForm"
              >
                <template #leading>
                  <UIcon name="i-heroicons-document-text" />
                </template>
                Demande de devis
              </UButton>
            </div>
          </div>

          <!-- Encart visuel -->
          <div class="relative bg-gradient-to-br from-slate-800 to-sky-900 p-8 md:p-12 flex items-center justify-center">
            <div class="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div class="bg-white/10 backdrop-blur rounded-xl p-5 text-center border border-white/10">
                <UIcon name="i-heroicons-clock" class="text-3xl text-sky-300 mb-2" />
                <div class="text-white font-bold text-lg">Sous 24h</div>
                <div class="text-slate-300 text-xs">Réponse à votre demande</div>
              </div>
              <div class="bg-white/10 backdrop-blur rounded-xl p-5 text-center border border-white/10">
                <UIcon name="i-heroicons-currency-euro" class="text-3xl text-sky-300 mb-2" />
                <div class="text-white font-bold text-lg">Gratuit</div>
                <div class="text-slate-300 text-xs">Devis sans engagement</div>
              </div>
              <div class="bg-white/10 backdrop-blur rounded-xl p-5 text-center border border-white/10">
                <UIcon name="i-heroicons-map-pin" class="text-3xl text-sky-300 mb-2" />
                <div class="text-white font-bold text-lg">37</div>
                <div class="text-slate-300 text-xs">Tout l'Indre-et-Loire</div>
              </div>
              <div class="bg-white/10 backdrop-blur rounded-xl p-5 text-center border border-white/10">
                <UIcon name="i-heroicons-shield-check" class="text-3xl text-sky-300 mb-2" />
                <div class="text-white font-bold text-lg">Soigné</div>
                <div class="text-slate-300 text-xs">Travail garanti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useContact } from '~/composables/useContact';
const contact = useContact();

const scrollToForm = () => {
  const formElement = document.getElementById('quote-form');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
