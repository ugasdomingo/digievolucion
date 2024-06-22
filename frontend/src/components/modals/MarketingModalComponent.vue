<script setup lang="ts">
import { useUtilsStore } from '../../stores/utils-store';

const utilStore = useUtilsStore();
</script>

<template>
    <div class="modal">
        <div class="modal-content">
            <span class="close" @click="utilStore.marketingModal = false"
                >&times;</span
            >
            <h1>Marketing 360</h1>
            <h5>Un departamento de Marketing a tu disposición</h5>

            <p>
                Descansa. Marketing 360 está diseñado para que nos delegues
                todas tus necesidades de marketing digital, permitiéndote
                enfocarte en lo que mejor sabes hacer:
                <span>dirigir tu negocio</span>.
            </p>
            <p>¿Qué gana tu negocio con este servicio?</p>
            <div class="benefit-info">
                <div class="card">
                    <img
                        src="https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="image"
                    />
                    <h3>Mejorar los ingresos</h3>
                    <p>
                        A través de mejorar la experiencia de usuario,
                        permitiendo una mayor convertibilidad, disminuyendo los
                        tiempos de atención al cliente y dando asesoramiento
                        inmediato.
                    </p>
                </div>
                <div class="card">
                    <img
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="image"
                    />
                    <h3>Personal más productivo</h3>
                    <p>
                        A la par de mejorar la experiencia de usuario, nos
                        enfocamos en darle al equipo de trabajo mejores
                        herramientas y mejoras al procedimiento para que sean
                        más efectivos en sus labores.
                    </p>
                </div>
                <div class="card">
                    <img
                        src="https://images.pexels.com/photos/7681097/pexels-photo-7681097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="image"
                    />
                    <h3>Menos gasto en nómina</h3>
                    <p>
                        Olvida los costos de captación, contratación y rotación
                        para tener tu equipo de Marketing, con sólo un pago
                        mensual tendrás tu equipo de marketing altamente
                        calificado.
                    </p>
                </div>
            </div>
            <p>
                Nuestros precios se ajustan al tamaño y las necesidades de tu
                negocio. <br />
                Desde 299,00 (USD) para autónomos y firmas personales.
            </p>

            <div class="buttoms">
                <button class="btn-contact" @click="utilStore.goToContact()">
                    Solicitar Presupuesto
                </button>
                <button
                    class="btn-close"
                    @click="utilStore.marketingModal = false"
                >
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
    background-color: rgba(0, 0, 0, 0.7);

    .modal-content {
        background-color: var(--color-primary);
        margin: 6rem auto;
        padding: 2rem 4rem;
        border: 1px solid var(--color-gray);
        border-radius: 1rem 0 0 1rem;
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

            span {
                font-weight: 700;
            }
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
                    margin: 0;
                    padding: 0 0.5rem;
                }

                p {
                    font-weight: 100;
                    letter-spacing: 0.1rem;
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
