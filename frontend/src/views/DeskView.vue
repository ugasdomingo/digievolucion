<script setup lang="ts">
//Import tools
import { ref, onBeforeMount, onBeforeUpdate } from 'vue';
import { useHealtStore } from '../stores/healt-store';
import { useUserStore } from '../stores/user-store';
import { conclutions } from '../static/resultsConclutions';
//Import components
import GaugeComponent from '../common/GaugeComponet.vue';

const healtStore = useHealtStore();
const userStore = useUserStore();
const finalResult = ref('red');
const conclutionsIntro = ref('');
const conclutionsDescription = ref('');
const conclutionsAction = ref('');

const setFinalResult = (value: number) => {
    value < 60
        ? (finalResult.value = 'bad')
        : value >= 61 && value <= 85
        ? (finalResult.value = 'regular')
        : (finalResult.value = 'good');

    const conclutionsNumber =
        value < 60 ? 0 : value >= 61 && value <= 85 ? 1 : 2;

    conclutionsIntro.value = conclutions[conclutionsNumber].intro;
    conclutionsDescription.value = conclutions[conclutionsNumber].description;
    conclutionsAction.value = conclutions[conclutionsNumber].action;
};

onBeforeMount(() => {
    healtStore.getUserHealtByUser();
    setFinalResult(parseInt(healtStore.userHealt.automaticResult));
});

onBeforeUpdate(() => {
    setFinalResult(parseInt(healtStore.userHealt.automaticResult));
});
</script>

<template>
    <main class="desk-page">
        <section class="left-content">
            <h2>Bienvenido {{ userStore.userName }}</h2>
            <h4>Recomendaciones:</h4>
            <p>{{ healtStore.userHealt.expertResult }}</p>
            <RouterLink to="/asesoria-gratuita" class="btn btn-primary">
                <button>Agendar Asesoría gratuita</button>
            </RouterLink>
        </section>
        <aside class="right-content">
            <h4>Indicador de salud</h4>
            <GaugeComponent
                :value="parseInt(healtStore.userHealt.automaticResult)"
                :type="finalResult"
            />
            <h4>Has obtenido un {{ healtStore.userHealt.automaticResult }}</h4>
            <h5>{{ conclutionsIntro }}</h5>
            <p>{{ conclutionsDescription }}</p>
            <p class="text-action">{{ conclutionsAction }}</p>
        </aside>
        <img
            src="/images/fondo-8.jpg"
            alt="background-tech"
            class="background"
        />
    </main>
</template>

<style scoped lang="scss">
.desk-page {
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    margin: 5rem 0;
    .left-content {
        width: 50%;
        h2 {
            margin-bottom: 1rem;
        }
        h4 {
            margin-bottom: 0.5rem;
        }
        p {
            margin-bottom: 1rem;
        }
        a {
            text-decoration: none;
        }
    }
    .right-content {
        width: 40%;
        h4 {
            margin-bottom: 1rem;
        }
    }
    .background {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        right: 0;
        top: 0;
        z-index: -1;
    }
}

@media screen and (max-width: 768px) {
    .desk-page {
        flex-direction: column-reverse;
        padding: 0 2rem;
        .left-content {
            width: 100%;
            h2 {
                text-align: center;
            }
            h4 {
                text-align: center;
            }
            p {
                text-align: center;
            }
            a {
                display: flex;
                justify-content: center;
            }
        }
        .right-content {
            width: 100%;
            h4 {
                text-align: center;
            }
        }
    }
}
</style>
