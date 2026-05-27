<script setup>
const cards = [
  {
    title: 'Profil académique',
    value: 'À compléter',
    description: 'Ajoutez vos informations validées par l’établissement.',
  },
  {
    title: 'Projets',
    value: '0 en attente',
    description: 'Publiez vos réalisations pour préparation à la validation.',
  },
  {
    title: 'Badges',
    value: 'Bientôt',
    description: 'Les validations institutionnelles apparaîtront ici.',
  },
]
</script>

<template>
  <main class="dashboard-page">
    <section class="dashboard-header">
      <p class="eyebrow">Espace étudiant</p>
      <h1>Tableau de bord</h1>
      <p>
        Suivez l’état de votre portfolio académique et les validations en cours.
      </p>
    </section>

    <section class="dashboard-grid" aria-label="Résumé du compte">
      <article v-for="card in cards" :key="card.title" class="dashboard-card">
        <span>{{ card.title }}</span>
        <strong>{{ card.value }}</strong>
        <p>{{ card.description }}</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  padding: 48px;
  background: #f6f8fb;
  color: #172033;
}

.dashboard-header {
  max-width: 720px;
  margin-bottom: 32px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #2f6fed;
  font-weight: 700;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 12px;
  font-size: 40px;
}

.dashboard-header p {
  color: #5c667a;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.dashboard-card {
  padding: 20px;
  border: 1px solid #dde4ef;
  border-radius: 8px;
  background: #ffffff;
}

.dashboard-card span {
  display: block;
  margin-bottom: 10px;
  color: #5c667a;
  font-size: 14px;
}

.dashboard-card strong {
  display: block;
  margin-bottom: 8px;
  font-size: 24px;
}

.dashboard-card p {
  margin: 0;
  color: #6d7688;
}
</style>
