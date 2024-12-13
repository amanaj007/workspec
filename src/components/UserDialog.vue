<template>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>
          <span class="text-h6">{{ user.name }}</span>
        </v-card-title>
  
        <v-card-text>
          <v-tabs v-model="activeTab" grow>
            <v-tab>Contact Info</v-tab>
            <v-tab>Company</v-tab>
            <v-tab>Address</v-tab>
          </v-tabs>
  
          <v-tabs-window v-model="activeTab">
            <!-- Contact Info Tab -->
            <v-window-item>
              <v-card-text>
                <p><strong>Email:</strong> {{ user.email }}</p>
                <p><strong>Phone:</strong> {{ user.phone }}</p>
                <p><strong>Website:</strong> {{ user.website }}</p>
              </v-card-text>
            </v-window-item>
  
            <!-- Company Tab -->
            <v-window-item>
              <v-card-text>
                <p><strong>Company Name:</strong> {{ user.company.name }}</p>
                <p><strong>Catchphrase:</strong> {{ user.company.catchPhrase }}</p>
                <p><strong>Business:</strong> {{ user.company.bs }}</p>
              </v-card-text>
            </v-window-item>
  
            <!-- Address Tab -->
            <v-window-item>
              <v-card-text>
                <p><strong>Street:</strong> {{ user.address.street }}</p>
                <p><strong>Suite:</strong> {{ user.address.suite }}</p>
                <p><strong>City:</strong> {{ user.address.city }}</p>
                <p><strong>Zip:</strong> {{ user.address.zipcode }}</p>
              </v-card-text>
            </v-window-item>
          </v-tabs-window>
        </v-card-text>
  
        <v-card-actions>
          <v-btn color="primary" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  export default {
    props: ['user'],
    data() {
      return {
        dialog: false,
        activeTab: 0, // Default to the first tab
      };
    },
    watch: {
      user(newValue) {
        if (newValue) this.dialog = true;
      },
    },
  };
  </script>
  