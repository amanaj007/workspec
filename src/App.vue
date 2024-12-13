<template>
  <v-container>
    <v-text-field v-model="searchQuery" label="Search Users"></v-text-field>
    <v-switch v-model="listView" label="List View"></v-switch>
    <v-alert v-if="error" type="error">{{ error }}</v-alert>
    <v-progress-circular v-if="loading" indeterminate></v-progress-circular>

    <v-row v-if="!listView">
      <v-col v-for="user in filteredUsers" :key="user.id" col="3">
        <UserCard :user="user" @open-dialog="selectUser" />
      </v-col>
    </v-row>

    <v-list v-else>
      <v-list-item v-for="user in filteredUsers" :key="user.id" >


        <!-- User Details -->
        <v-list-item-content class="d-flex flex-row align-center">
          <v-list-item-title>{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle class="d-flex flex-row align-center">
            <div><strong>Company:</strong> {{ user.company.name }}</div>
            <div><strong>Email:</strong> {{ user.email }}</div>
            <div><strong>Phone:</strong> {{ user.phone }}</div>
          </v-list-item-subtitle>
            
          <!--button to open dialog -->
          <v-btn icon @click="selectUser(user)">
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          </v-list-item-content>

      </v-list-item>
    </v-list>



    <UserDialog :user="selectedUser" />
  </v-container>
</template>

<script>
import { fetchUsers, fetchPhotos } from '../getApi.js';
import UserCard from './components/UserCard.vue';
import UserDialog from './components/UserDialog.vue';

export default {
  components: { UserCard, UserDialog },
  data () {
    return{
    users: [],
    photos: [],
    searchQuery: '',
    listView: false,
    loading: true,
    error: null,
    selectedUser: null,
  }
  },
  computed: {
  usersWithPhotos() {
    return this.users.map(user => ({
      ...user,
      photoUrl: this.photos.find(photo => photo.id === user.id)?.url || '',
    }));
  },
  filteredUsers() {
    return this.usersWithPhotos.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  },
  },
  methods: {
    async loadData() {
      try {
        const [users, photos] = await Promise.all([fetchUsers(), fetchPhotos()]);
        this.users = users;
        this.photos = photos.slice(0, users.length); // Limit photos to match users
      } catch (err) {
        this.error = 'Failed to load data.';
      } finally {
        this.loading = false;
      }
    },
    selectUser(user) {
      this.selectedUser = user;
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>

