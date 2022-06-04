<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { userStore } from '../store/dataStore'

interface Props {
    search: string;
}

const store = userStore()
const { queryData } = storeToRefs(store)

 const props = withDefaults(defineProps<Props>(), {
    search: ''
 })

 const filterQueryData = computed(() => queryData.value.filter(item => item.companyName.includes(props.search)))
</script>

<template>
<v-expansion-panels v-if="filterQueryData.length" variant="inset" class="my-4">
      <v-expansion-panel
        elevation="0"
        v-for="item in filterQueryData"
        :key="item.customerID"
        :title="item.companyName"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></v-expansion-panel>
    </v-expansion-panels>
</template>