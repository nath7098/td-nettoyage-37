<template>
  <section id="quote-form" class="py-16 bg-gradient-to-b from-white to-slate-50">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold mb-4 text-slate-800">Demande de devis gratuit</h2>
          <p class="text-lg text-slate-600 max-w-2xl mx-auto">
            Remplissez ce formulaire et notre équipe vous recontacte rapidement avec une proposition adaptée à votre projet de nettoyage ou de peinture.
          </p>
        </div>

        <div v-motion class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200"
             :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }">
          <div class="grid grid-cols-1 lg:grid-cols-5">
            <!-- Formulaire -->
            <div class="col-span-3 p-8 lg:p-10">
              <UForm :state="form" class="grid grid-cols-1 md:grid-cols-2 gap-6" @submit.prevent="submitForm">
                <!-- Progression du formulaire -->
                <UProgress v-model="formProgress" :max="6" class="col-span-1 md:col-span-2" />

                <UFormField label="Nom *" name="lastName">
                  <UInput v-model="form.lastName" placeholder="Votre nom" class="w-full" />
                </UFormField>

                <UFormField label="Prénom *" name="firstName">
                  <UInput v-model="form.firstName" placeholder="Votre prénom" class="w-full" />
                </UFormField>

                <UFormField label="Téléphone *" name="phone">
                  <UInput v-model="form.phone" placeholder="Votre numéro de téléphone" class="w-full" />
                </UFormField>

                <UFormField label="Email *" name="email">
                  <UInput v-model="form.email" type="email" placeholder="Votre adresse email" class="w-full" />
                </UFormField>

                <!-- Type de client -->
                <UFormField label="Vous êtes" name="clientType" class="col-span-1 md:col-span-2">
                  <div class="grid grid-cols-2 gap-4">
                    <button
                        type="button" class="flex items-center justify-center p-4 rounded-xl border transition-all"
                        :class="form.clientType === 'particulier' ? 'border-sky-500 bg-sky-50 text-sky-700' : 'border-slate-200 hover:bg-slate-50'"
                        @click="form.clientType = 'particulier'">
                      <UIcon name="i-heroicons-user" class="mr-2" />
                      Particulier
                    </button>
                    <button
                        type="button" class="flex items-center justify-center p-4 rounded-xl border transition-all"
                        :class="form.clientType === 'professionnel' ? 'border-sky-500 bg-sky-50 text-sky-700' : 'border-slate-200 hover:bg-slate-50'"
                        @click="form.clientType = 'professionnel'">
                      <UIcon name="i-heroicons-building-office" class="mr-2" />
                      Professionnel
                    </button>
                  </div>
                </UFormField>

                <!-- Type de prestation -->
                <UFormField label="Prestation souhaitée *" name="serviceType" class="col-span-1 md:col-span-2">
                  <USelect
                      v-model="form.serviceType" :items="serviceTypes" placeholder="Sélectionnez une prestation"
                      class="w-full" icon="i-lucide-sparkles" />
                </UFormField>

                <!-- Adresse d'intervention -->
                <UFormField label="Adresse d'intervention *" name="address" class="col-span-1 md:col-span-2">
                  <UTextarea
                      v-model="form.address" placeholder="Adresse complète où réaliser les travaux"
                      class="w-full" :rows="3" />
                </UFormField>

                <!-- Date souhaitée -->
                <UFormField label="Date souhaitée (approximative)" name="date" class="col-span-1 md:col-span-2">
                  <UInput v-model="form.date" type="date" class="w-full" />
                </UFormField>

                <!-- Message -->
                <UFormField label="Décrivez votre projet" name="message" class="col-span-1 md:col-span-2">
                  <UTextarea
                      v-model="form.message" placeholder="Surface, type de toiture/façade, état actuel, précisions..."
                      class="w-full" :rows="4" />
                </UFormField>

                <!-- Bouton de soumission -->
                <div class="flex justify-end mt-8 col-span-1 md:col-span-2">
                  <UButton
                      type="submit" size="lg" color="primary" :loading="isSubmitting" :disabled="!isFormValid"
                      class="rounded-xl font-bold px-8 py-4 shadow-md hover:shadow-lg transition-all">
                    <template #leading>
                      <UIcon name="i-heroicons-paper-airplane" />
                    </template>
                    Envoyer ma demande
                  </UButton>
                </div>
              </UForm>
            </div>

            <!-- Sidebar -->
            <div class="col-span-2 bg-slate-800 text-white p-8 lg:p-10">
              <div class="space-y-8">
                <div>
                  <h3 class="text-2xl font-bold mb-6 border-b border-slate-700 pb-4">Pourquoi nous choisir ?</h3>
                </div>

                <div>
                  <div class="flex items-start mb-6">
                    <div class="bg-sky-500 rounded-full p-3 mr-4 shrink-0">
                      <UIcon name="i-heroicons-clock" class="text-white text-xl" />
                    </div>
                    <div>
                      <h4 class="text-xl font-bold mb-2 text-sky-400">Réponse rapide</h4>
                      <p class="text-slate-300">
                        Un retour garanti sous 24h avec une proposition claire et détaillée.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start mb-6">
                    <div class="bg-sky-500 rounded-full p-3 mr-4 shrink-0">
                      <UIcon name="i-heroicons-currency-euro" class="text-white text-xl" />
                    </div>
                    <div>
                      <h4 class="text-xl font-bold mb-2 text-sky-400">Devis transparent</h4>
                      <p class="text-slate-300">
                        Des tarifs clairs, sans frais cachés, adaptés à votre projet.
                      </p>
                    </div>
                  </div>

                  <div class="flex items-start mb-6">
                    <div class="bg-sky-500 rounded-full p-3 mr-4 shrink-0">
                      <UIcon name="i-heroicons-sparkles" class="text-white text-xl" />
                    </div>
                    <div>
                      <h4 class="text-xl font-bold mb-2 text-sky-400">Travail soigné</h4>
                      <p class="text-slate-300">
                        Une équipe professionnelle et méticuleuse, chantier laissé propre.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="pt-4 mt-8 border-t border-slate-700">
                  <h4 class="text-xl font-bold mb-4 flex items-center">
                    <UIcon name="i-heroicons-phone" class="mr-2 text-sky-400" />
                    Contact direct
                  </h4>
                  <p class="text-slate-300 mb-3">
                    Besoin d'une réponse immédiate ? Appelez-nous :
                  </p>
                  <a
                      :href="`tel:${contact.phone}`"
                      class="inline-flex items-center justify-center w-full py-3 px-4 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-400 transition-colors mt-2">
                    <UIcon name="i-heroicons-phone" class="mr-2" />
                    {{ contact.phone }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useContact } from '~/composables/useContact';
import emailjs from 'emailjs-com';

const contact = useContact();
const toast = useToast();

const form = ref({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  clientType: 'particulier',
  serviceType: null,
  address: '',
  date: '',
  message: '',
});

const serviceTypes = [
  { label: 'Nettoyage de toiture / démoussage', value: 'toiture' },
  { label: 'Traitement hydrofuge toiture', value: 'hydrofuge' },
  { label: 'Nettoyage de façade / pignons', value: 'facade' },
  { label: 'Nettoyage de terrasse / murets', value: 'terrasse' },
  { label: 'Nettoyage de volets / portail', value: 'volets_portail' },
  { label: 'Peinture intérieure', value: 'peinture_interieure' },
  { label: 'Peinture extérieure', value: 'peinture_exterieure' },
  { label: 'Autre / plusieurs prestations', value: 'autre' }
];

// EmailJS — même compte / template partagé que TD Location Benne 37.
// On différencie l'origine de la demande via le paramètre `type_prestation`
// (comme sur le projet td-terrassement-37).
const EMAILJS_SERVICE_ID = 'service_9sip9sp';
const EMAILJS_TEMPLATE_ID = 'template_td_benne_37';
const EMAILJS_PUBLIC_KEY = 'user_W3AFP2shDIAiHW0MFhaPv';

const isSubmitting = ref(false);
const formSubmitted = ref(false);

// Libellé lisible de la prestation sélectionnée (pour l'email reçu)
const selectedServiceLabel = computed(() => {
  return serviceTypes.find(s => s.value === form.value.serviceType)?.label || '';
});

// Calcul de la progression du formulaire
const formProgress = computed(() => {
  let filled = 0;
  if (form.value.firstName) filled++;
  if (form.value.lastName) filled++;
  if (form.value.phone) filled++;
  if (form.value.email) filled++;
  if (form.value.serviceType) filled++;
  if (form.value.address) filled++;
  return filled;
});

// Validation du formulaire
const isFormValid = computed(() => {
  return form.value.firstName &&
      form.value.lastName &&
      form.value.phone &&
      form.value.email &&
      form.value.serviceType &&
      form.value.address;
});

const submitForm = async () => {
  if (!isFormValid.value) {
    toast.add({
      color: 'warning',
      title: 'Formulaire incomplet',
      description: 'Veuillez remplir tous les champs obligatoires.',
      icon: 'i-heroicons-exclamation-triangle'
    });
    return;
  }

  isSubmitting.value = true;

  try {
    const responseStatus = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        ...form.value,
        prestation: selectedServiceLabel.value,
        type_prestation: 'nettoyage'
      },
      EMAILJS_PUBLIC_KEY
    );
    console.log(responseStatus);
    toast.add({
      color: 'success',
      duration: 5000,
      icon: 'i-heroicons-check-circle',
      title: 'Demande envoyée avec succès !',
      description: 'Merci pour votre demande. Nous l\'étudions et vous recontacterons dans les plus brefs délais.'
    });

    form.value = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      clientType: 'particulier',
      serviceType: null,
      address: '',
      date: '',
      message: ''
    };
  } catch (error) {
    console.log(error);
    toast.add({
      color: 'error',
      duration: 5000,
      title: 'Erreur lors de l\'envoi',
      description: 'Vous pouvez nous contacter directement par téléphone ou par email !',
      icon: 'i-heroicons-exclamation-triangle'
    });
  } finally {
    isSubmitting.value = false;
    formSubmitted.value = true;
  }
};
</script>
