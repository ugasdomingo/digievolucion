//Import tools
import { defineStore } from 'pinia';
import { ref } from 'vue';

//Define store
export const useUtilsStore = defineStore('utils', () => {
    const marketingModal = ref(false);
    const leadsModal = ref(false);
    const appsModal = ref(false);
    const showMenu = ref(false);

    const goToContact = () => {
        window.open('https://wa.me/34604822385', '_blank');
    };

    return {
        marketingModal,
        leadsModal,
        appsModal,
        goToContact,
        showMenu
    };
});
