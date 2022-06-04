import { defineStore } from "pinia";

export type ResourceType ={
    customerID: string;
    companyName: string;
    contactName: string;
    contactTitle: string;
    address: string;
    city: string;
    region: string;
    postalCode: string;
    country: string
    phone: string;
    fax: string;
 }

 interface StateData  {
     queryData: ResourceType[],
 }

export const userStore = defineStore('User-store',{
    state: (): StateData => ({
       queryData: [],
    })
})