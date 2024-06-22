<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';

const utilStore = useUtilsStore();
</script>

<template>
    <div class="modal">
        <div class="modal-content">
            <span class="close" @click="utilStore.leadsModal = false"
                >&times;</span
            >
            <h1>Quiero Leads</h1>
            <h5>Llega a más potenciales clientes</h5>

            <p>
                Descansa, Quiero Leads es un servicio enfocado en maximizar la
                efectividad de tus campañas publicitarias en redes sociales,
                Google y YouTube. Para aumentar tu base de datos de clientes
                potenciales.
            </p>
            <p>¿Qué gana tu negocio con este servicio?</p>
            <div class="benefit-info">
                <div class="card">
                    <img
                        src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="image"
                    />
                    <h3>Ahorrar tiempo</h3>
                    <p>
                        Estudiamos el mercado y a tu público objetivo por ti.
                        Además de hacerlas campañas y elaborar reportes que
                        mejorarán tu toma de decisiones en marketing.
                    </p>
                </div>
                <div class="card">
                    <img
                        src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="image"
                    />
                    <h3>Ahorrar dinero</h3>
                    <p>
                        Invertimos tu presupuesto solo en publiaciones que ya
                        hemos estimado que tendrán un alto porcentaje de
                        efectividad.
                    </p>
                </div>
                <div class="card">
                    <img
                        src="https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="image"
                    />
                    <h3>Muchos Leads</h3>
                    <p>
                        Llenaremos tu base de datos de tantos potenciales
                        clientes como tu presupuesto lo permita.
                    </p>
                </div>
            </div>
            <p>
                Deja que nuestro equipo de expertos transforme tu inversión
                publicitaria en un motor de crecimiento y éxito para tu empresa.
            </p>
            <div class="buttoms">
                <button class="btn-contact" @click="utilStore.goToContact()">
                    Solicitar Presupuesto
                </button>
                <button class="btn-close" @click="utilStore.leadsModal = false">
                    Cerrar
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);

    .modal-content {
        background-color: var(--color-primary);
        margin: 6rem auto;
        padding: 2rem 4rem;
        border: 1px solid var(--color-gray);
        border-radius: 1rem;
        width: 80%;
        max-height: 80vh;
        overflow-y: auto;
        box-sizing: border-box;

        h1 {
            font-family: nunito;
            margin-bottom: 0;
        }

        h5 {
            margin: 0 0 4rem;
            color: var(--color-accent);
            letter-spacing: 0.2rem;
        }

        p {
            font-weight: 100;
            letter-spacing: 0.1rem;
            margin-bottom: 4rem;
        }

        .benefit-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 4rem;

            .card {
                width: 30%;
                padding: 0 0 2rem;
                border: 1px solid var(--color-gray);
                border-radius: 1rem;
                box-sizing: border-box;

                img {
                    width: 100%;
                    height: 11rem;
                    border-radius: 1rem 1rem 0 0;
                    object-fit: cover;
                    margin-bottom: 0.5rem;
                }

                h3 {
                    font-family: nunito;
                    margin-bottom: 0.5rem;
                    padding: 0 0.5rem;
                }

                p {
                    font-weight: 100;
                    letter-spacing: 0.1rem;
                    margin-bottom: 0;
                    font-size: 0.9rem;
                    padding: 0 0.5rem;
                }
            }
        }
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 1.75rem;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    .buttoms {
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;

        .btn-contact {
            background-color: var(--color-accent);
            color: var(--color-white);
            transition: all 0.3s ease-in-out;

            &:hover {
                background-color: var(--color-secondary);
            }
        }

        .btn-close {
            background-color: var(--color-gray);
            color: var(--color-white);
            transition: all 0.3s ease-in-out;

            &:hover {
                background-color: var(--color-accent);
                border-color: transparent;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .modal {
        .modal-content {
            padding: 2rem 1rem;
            width: 90%;

            h1 {
                font-size: 3rem;
            }

            .benefit-info {
                flex-direction: column;

                .card {
                    width: 100%;
                    margin-bottom: 2rem;
                }
            }

            .buttoms {
                flex-direction: column;

                .btn-contact {
                    width: 100%;
                    margin-bottom: 1rem;
                }
            }
        }
    }
}
</style>
