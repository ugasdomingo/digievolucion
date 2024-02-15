<script setup lang="ts">
//Import tools
import { useUtilsStore } from '../../stores/utils-store';

const utilStore = useUtilsStore();
</script>

<template>
    <div class="modal">
        <div class="modal-content">
            <span class="close" @click="utilStore.appsModal = false"
                >&times;</span
            >
            <h1>Profitsite</h1>
            <h5>Mejora tu Presencia Digital</h5>
            <p>
                Descansa, "Profitsite" crea u optimiza tu página o aplicación
                web para que, ademas de cautivar a tus usuarios, tu personal
                tenga herramientas para ser más eficiente.
            </p>
            <p>¿Qué gana tu negocio con este servicio?</p>
            <div class="benefit-info">
                <div class="card">
                    <img src="" alt="image" />
                    <h3>Autoridad y presencia digital</h3>
                    <p>
                        Cautivamos a tus usuarios y potenciales clientes con una
                        excelente experiencia en tu web, para que no duden de
                        que eres el mejor de tu industria.
                    </p>
                </div>
                <div class="card">
                    <img src="" alt="image" />
                    <h3>Personal más Eficiente</h3>
                    <p>
                        Creamos herramientas digitales para que tu personal
                        pueda ser más eficiente en sus tareas diarias.
                    </p>
                </div>
                <div class="card">
                    <img src="" alt="image" />
                    <h3>Más conversión a ventas</h3>
                    <p>
                        Fucionamos Neuroventas, Programación Neurolingüística y
                        nuestra experiencia para generar alta convertibilidad.
                    </p>
                </div>
            </div>
            <p>
                Transforma tu Presencia Digital con Soluciones Web Innovadoras.
            </p>
            <div class="buttoms">
                <button class="btn-contact" @click="utilStore.goToContact()">
                    Solicitar Presupuesto
                </button>
                <button class="btn-close" @click="utilStore.appsModal = false">
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
                padding: 1rem;
                border: 1px solid var(--color-gray);
                border-radius: 1rem;
                box-sizing: border-box;

                img {
                    width: 100%;
                    height: 10rem;
                    object-fit: cover;
                    border-radius: 1rem;
                    margin-bottom: 1rem;
                }

                h3 {
                    font-family: nunito;
                    margin-bottom: 0.5rem;
                }

                p {
                    font-weight: 100;
                    letter-spacing: 0.1rem;
                    margin-bottom: 0;
                    font-size: 0.9rem;
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
</style>
