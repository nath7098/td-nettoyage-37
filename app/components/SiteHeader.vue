<template>
  <header :class="[
    'text-white py-4 z-50',
    transparent ? 'absolute top-0 left-0 right-0' : 'bg-slate-900 sticky top-0 shadow-lg'
  ]">
    <div class="container mx-auto px-4">
      <nav class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center shadow-lg">
            <UIcon name="i-lucide-sparkles" class="text-2xl text-white" />
          </div>
          <div>
            <div class="font-bold text-lg leading-tight">TD Nettoyage 37</div>
            <div class="text-xs text-sky-200">Toiture · Façade · Peinture</div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink to="/#services" class="text-white hover:text-sky-300 transition-colors">
            Services
          </NuxtLink>
          <NuxtLink to="/#comment-ca-marche" class="text-white hover:text-sky-300 transition-colors">
            Déroulement
          </NuxtLink>
          <NuxtLink to="/#zone-couverture" class="text-white hover:text-sky-300 transition-colors">
            Zone d'intervention
          </NuxtLink>
          <NuxtLink to="/#faq" class="text-white hover:text-sky-300 transition-colors">
            FAQ
          </NuxtLink>
          <UButton color="primary" size="sm" to="#quote-form" class="font-semibold">
            <template #leading>
              <UIcon name="i-heroicons-document-text" />
            </template>
            Devis Gratuit
          </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <UButton
          icon="i-heroicons-bars-3"
          color="primary"
          variant="ghost"
          class="md:hidden"
          @click="isMenuOpen = !isMenuOpen"
        />
      </nav>
    </div>

    <!-- Mobile Menu -->
    <MobileMenu v-if="isMenuOpen" :items="navigationItems" @close="isMenuOpen = false" />
  </header>
</template>

<script setup lang="ts">
interface Props {
  transparent?: boolean
}

defineProps<Props>()

const isMenuOpen = ref(false)

const navigationItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'Déroulement', to: '/#comment-ca-marche' },
  { label: 'Zone d\'intervention', to: '/#zone-couverture' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Devis', to: '/#quote-form' }
]
</script>
