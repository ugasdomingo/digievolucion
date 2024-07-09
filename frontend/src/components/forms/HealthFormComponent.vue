<script setup lang="ts">
//Import tools
import { useUserStore } from '../../stores/user-store';
import { useHealtStore } from '../../stores/healt-store';
import { useRouter } from 'vue-router';
import { onBeforeMount, ref } from 'vue';

//Import components
import LoadingComponent from '../LoadingComponent.vue';

//Define variables
const userStore = useUserStore();
const healtStore = useHealtStore();
const router = useRouter();
const loading = ref(false);
//User
const name = ref('');
const email = ref('');
const password = ref('');
const politiquesAccepted = ref(false);
// Social Media
const carousel = ref(false);
const shortVideos = ref(false);
const longVideos = ref(false);
const automation = ref(false);
const adsBudget = ref(false);
const kpis = ref(false);
// Real Customer
const realCustomersCanal = ref('');
const realCustomersPercentage = ref('');
const realCustomerStrategy = ref('');
// Marketing Strategy
const marketingDepartment = ref(false);
const marketingObjectives = ref('');
// Web or App
const webUX = ref(false);
const webTeam = ref(false);
const message = ref('');

//Define functions
const handleSubmit = async () => {
    try {
        loading.value = true;
        const isUserLogged = localStorage.getItem('user');
        const sendHealthForm = async () => {
            const data = {
                carousel: carousel.value,
                shortVideos: shortVideos.value,
                longVideos: longVideos.value,
                automation: automation.value,
                adsBudget: adsBudget.value,
                kpis: kpis.value,
                realCustomersCanal: realCustomersCanal.value,
                realCustomersPercentage: realCustomersPercentage.value,
                realCustomerStrategy: realCustomerStrategy.value,
                marketingDepartment: marketingDepartment.value,
                marketingObjectives: marketingObjectives.value,
                webUX: webUX.value,
                webTeam: webTeam.value,
                message: message.value,
                politiquesAccepted: politiquesAccepted.value
            };
            await healtStore.createHealt(data);
        };

        if (isUserLogged) {
            await sendHealthForm();
        } else {
            await userStore.register(
                name.value,
                email.value,
                password.value,
                'user'
            );
            await sendHealthForm();
        }

        router.push('/escritorio');
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false;
    }
};

onBeforeMount(() => {
    if (userStore.token) {
        healtStore.getUserHealtByUser();
    }
});
</script>

<template>
    <section
        class="user-loggued"
        v-if="Object.keys(healtStore.userHealt).length > 0"
    >
        <p>
            Ya realizaste este formulario puedes consultar el resultado en tu
            escritorio
        </p>
        <RouterLink to="/escritorio">Ir a mi escritorio</RouterLink>
    </section>
    <form v-else>
        <section class="user-register" v-if="!userStore.token">
            <input
                type="text"
                class="text-input"
                placeholder="Nombre"
                v-model="name"
            />
            <input
                type="text"
                class="text-input"
                placeholder="Correo Electrónico"
                v-model="email"
            />
            <input
                type="password"
                class="text-input"
                placeholder="Contraseña"
                v-model="password"
            />
        </section>
        <h2>Redes Sociales</h2>
        <p>Seleciona las herramientas que utilizas en tu negocio</p>
        <section class="social-media">
            <div>
                <p>Usas carruceles de imágenes o vídeos</p>
                <input class="checkbox" type="checkbox" v-model="carousel" />
            </div>
            <div>
                <p>Usas vídeos cortos <span> (menos de 3 minutos) </span></p>
                <input class="checkbox" type="checkbox" v-model="shortVideos" />
            </div>
            <div>
                <p>Usas vídeos largos <span> (5 minutos en adelante)</span></p>
                <input class="checkbox" type="checkbox" v-model="longVideos" />
            </div>
            <div>
                <p>Automatización o embudos de ventas automatizados</p>
                <input class="checkbox" type="checkbox" v-model="automation" />
            </div>
            <div>
                <p>Tienes un presupuesto para anuncios</p>
                <input class="checkbox" type="checkbox" v-model="adsBudget" />
            </div>
            <div>
                <p>Tienes KPIs definidos</p>
                <input class="checkbox" type="checkbox" v-model="kpis" />
            </div>
        </section>

        <h2>Clientes Reales</h2>
        <section class="customers">
            <input
                type="text"
                class="text-input"
                v-model="realCustomersCanal"
                placeholder="¿Cuál es el canal de adquisición de tus clientes reales?"
                required
            />

            <input
                type="number"
                class="text-input"
                v-model="realCustomersPercentage"
                placeholder="¿Qué porcentaje de tus clientes vienen de ese canal?"
                min="0"
                max="100"
                required
            />

            <input
                type="text"
                class="text-input"
                v-model="realCustomerStrategy"
                placeholder="¿Cuál es tu estrategia para conseguir clientes?"
                required
            />
        </section>

        <h2>Estrategia de Marketing</h2>
        <section class="marketing">
            <div>
                <p>¿Tienes departamento de marketing?</p>
                <input
                    class="checkbox"
                    type="checkbox"
                    v-model="marketingDepartment"
                />
            </div>

            <input
                type="text"
                class="text-input"
                v-model="marketingObjectives"
                placeholder="¿Cuáles son tus objetivos de marketing?"
                required
            />
        </section>

        <h2>Web o App</h2>
        <section class="web">
            <div>
                <p>¿Tu web da una buena experiencia a tus usuarios?</p>
                <input class="checkbox" type="checkbox" v-model="webUX" />
            </div>

            <div>
                <p>¿La web facilita el trabajo de tus empleados?</p>
                <input class="checkbox" type="checkbox" v-model="webTeam" />
            </div>
        </section>

        <section class="message">
            <textarea
                class="text-input"
                v-model="message"
                placeholder="Escribe aquí tu comentario (opcional)"
            ></textarea>
        </section>

        <div class="politiques">
            <input
                type="checkbox"
                class="checkbox"
                v-model="politiquesAccepted"
                required
            />
            <p>
                Acepto las
                <RouterLink to="/politicas">políticas de privacidad</RouterLink>
            </p>
        </div>
        <LoadingComponent v-if="loading" />
        <button @click="handleSubmit" :disabled="!politiquesAccepted" v-else>
            Calcular Salud de Marca
        </button>
    </form>
</template>

<style scoped lang="scss">
.user-loggued {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 50%;
    margin: 2rem 0 5rem;
    padding: 2rem;
    background-color: var(--color-secondary);
    border-radius: 1rem;

    p {
        text-align: center;
        margin: 0;
    }
}
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    h2 {
        margin: 0;
    }

    p {
        margin: 0 0 2rem;
    }

    .checkbox {
        width: 5%;
        border: 1px solid var(--color-white);
        border-radius: 5px;
    }
    .text-input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid var(--color-white);
        border-radius: 5px;
        font-size: 1.25rem;
    }

    .user-register {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        width: 50%;
        margin: 2rem 0 5rem;
    }

    .social-media {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 50%;
        margin: 2rem 0 5rem;

        div {
            display: flex;
            justify-content: space-between;
            width: 100%;

            p {
                margin: 0;

                span {
                    opacity: 0.5;
                }
            }
        }
    }

    .customers {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 50%;
        margin: 2rem 0 5rem;
    }

    .marketing {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 50%;
        margin: 2rem 0 5rem;

        div {
            display: flex;
            justify-content: space-between;
            width: 100%;

            p {
                margin: 0;
            }
        }
    }

    .web {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        width: 50%;
        margin: 2rem 0 5rem;

        div {
            display: flex;
            justify-content: space-between;
            width: 100%;

            p {
                margin: 0;
            }
        }
    }

    .politiques {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        width: 50%;
        margin: 2rem 0 5rem;

        p {
            margin: 0;

            a {
                color: var(--color-white);
            }
        }
    }
}

@media screen and (max-width: 768px) {
    form {
        h2 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }

        .checkbox {
            width: 2rem;
            height: 2rem;
        }

        .text-input {
            font-size: 1rem;
            height: 2rem;
        }

        .text-input::placeholder {
            white-space: normal;
            word-wrap: break-word;
        }

        .user-register {
            width: 100%;
        }

        .social-media,
        .marketing,
        .customers,
        .web,
        .politiques {
            width: 100%;
        }
    }
}
</style>
