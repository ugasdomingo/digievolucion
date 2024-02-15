<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../stores/utils-store';

//Import components
import MarketingModalComponent from '../components/modals/MarketingModalComponent.vue';
import LeadsModalComponent from '../components/modals/LeadsModalComponent.vue';
import AppsModalComponent from '../components/modals/AppsModalComponent.vue';

const utilStore = useUtilsStore();
</script>

<template>
    <main>
        <img
            class="background"
            src="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="background home"
        />
        <section @click="utilStore.marketingModal = true">
            <img src="images/marketing-360.jpg" alt="Marketing 360" />
            <h2>Marketing 360</h2>
        </section>

        <section @click="utilStore.leadsModal = true">
            <img src="images/leads.jpg" alt="Quiero Leads" />
            <h2>Quiero Leads</h2>
        </section>

        <section @click="utilStore.appsModal = true">
            <img src="images/apps.jpg" alt="Profitsite" />
            <h2>Profitsite</h2>
        </section>
        <MarketingModalComponent v-if="utilStore.marketingModal" class="modal-container" />
        <LeadsModalComponent v-if="utilStore.leadsModal" class="modal-container" />
        <AppsModalComponent v-if="utilStore.appsModal" class="modal-container" />
    </main>
</template>

<style scoped lang="scss">
main {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 4rem;
    box-sizing: border-box;
    position: relative;

    section {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem 0;
        box-sizing: border-box;
        animation: fade-in 1.5s ease-in-out;
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
            min-width: 300px;
            min-height: 300px;
            margin: 0;
            object-fit: cover;
            border-radius: 0.5rem 0.5rem 0 0;
            background-color: var(--color-primary);
        }

        h2 {
            width: 100%;
            font-size: 2rem;
            font-weight: 400;
            background-color: var(--color-accent);
            text-align: center;
            padding: 1rem 0;
            margin: 0;
            border-radius: 0 0 0.5rem 0.5rem;
        }
    }

    .modal-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
