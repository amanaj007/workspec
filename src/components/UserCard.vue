<template>
    <v-card @click="openDialog">
      <v-card-title>
        <v-avatar size="56">
          <img :src="user.photoUrl" alt="User Photo" />
        </v-avatar>
        <span>{{ user.name }}</span>
      </v-card-title>
      <v-card-subtitle>{{ user.company.name }}</v-card-subtitle>
      <v-card-text>
        <p>Email: {{ user.email }}</p>
        <p>Phone: {{ user.phone }}</p>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {

    // accepting the prop from app.vue for user details
    props: {
      user: {
        type: Object,
        required: true,
      },
    },
    methods: {
      openDialog() {
        this.$emit('open-dialog', this.user);
      },
    },
  };
  </script>
  