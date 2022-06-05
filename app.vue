<script setup lang="ts">
import { ResourceType, userStore } from './store/dataStore'
import Expanasion1 from './components/Expanasion.vue';
   
  const store = userStore()
  const search = ref<string>()
  onMounted(async () => {
     try {
       const res =  await $fetch<ResourceType[], '/api'>('/api', { method: 'GET' })
       console.log(res);
       
         store.queryData = res
     } catch (error: any) {
        console.log(error.message);
     }
   
  })
   
        
     
</script>

<template>
 <v-app>
   <v-main>
     <v-container>
       <v-toolbar dense>
         <v-spacer></v-spacer>
         <v-text-field
           name="name"
           label="label"
           id="id"
           class="mt-9"
           density="compact"
           variant="outlined"
           v-model="search"
         ></v-text-field>
         <v-spacer></v-spacer>
         <v-btn color="success">text</v-btn>
       </v-toolbar>
        <expanasion1 :search="search" />
     </v-container>
   </v-main>
 </v-app>
</template>
