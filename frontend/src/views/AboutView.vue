<script setup lang="ts"></script>

<template>
    <main>
        <img
            class="background"
            src="https://img.freepik.com/free-vector/technological-design-ecology-concept_23-2148446482.jpg?w=740&t=st=1702324207~exp=1702324807~hmac=a50af07f0435ba0eef0fd68baeeeeb13642c8433edd05ba3bb4ba0411390b0c1"
            alt="background home"
        />
        <section class="question">
            <h1>¿Qué es Digiempresas?</h1>
            <p>
                Digiempresas es una firma de vanguardia en el ámbito del marketing digital y
                desarrollo web, especializada en transformar la presencia online de negocios de todo
                tamaño. Somos un equipo de profesionales apasionados y expertos en tecnología,
                dedicados a ofrecer soluciones innovadoras y personalizadas para satisfacer las
                necesidades únicas de cada cliente. Con una gama de servicios que incluyen Marketing
                360, Quiero Leads y Profitsite, nos posicionamos como líderes en la creación de
                estrategias digitales integrales que impulsan el crecimiento y el éxito empresarial.
            </p>
        </section>
        <section class="objetives">
            <article>
                <h3>Misión</h3>
                <p>
                    Nuestra misión en Digiempresas es empoderar a las empresas, desde startups hasta
                    corporaciones establecidas, para que alcancen su máximo potencial en el mundo
                    digital. Nos esforzamos por desmitificar el marketing digital y el desarrollo de
                    soluciones web, ofreciendo servicios accesibles, eficientes y de alto impacto.
                    Estamos comprometidos con la generación de resultados tangibles, asegurando que
                    cada estrategia y solución no solo cumpla, sino que supere las expectativas de
                    nuestros clientes.
                </p>
            </article>
            <article>
                <h3>Visión</h3>
                <p>
                    En Digiempresas, aspiramos a ser reconocidos globalmente como sinónimo de
                    innovación y excelencia en marketing digital y desarrollo web. Nuestra visión es
                    continuar evolucionando y adaptándonos a las rápidas transformaciones del mundo
                    digital, manteniendo siempre un paso adelante en las tendencias y tecnologías
                    emergentes. Nos proyectamos como el socio estratégico preferido para empresas
                    que buscan no solo sobrevivir, sino prosperar en el ecosistema digital.
                </p>
            </article>
        </section>
        <p>
            Con Digiempresas, cada cliente se embarca en un viaje de transformación digital, donde
            las posibilidades son ilimitadas y los resultados, excepcionales. Somos más que un
            proveedor de servicios; somos tu aliado estratégico en el camino hacia el éxito digital.
        </p>
        <section class="contact">
            <h3>Contacto</h3>
            <ul>
                <li>
                    <img src="../assets/icon-mail.svg" alt="icono email" />
                    <a href=""> ugasdomingo@digiempresas.com.es </a>
                </li>
                <li>
                    <img src="../assets/icon-whatsapp.svg" alt="icono whatsapp" />
                    <a href="tel:+34604822385">+34 604 82 23 85 </a>
                </li>
                <li>
                    <img src="../assets/icon-map.svg" alt="icono maps" />
                    Calle de Siena 9, Madrid
                </li>
            </ul>
        </section>
    </main>
</template>

<style scoped lang="scss">
main {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    box-sizing: border-box;
    animation: fade-in 1.5s ease-in-out;

    .objetives {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        width: 100%;
        margin: 4rem 0;
    }

    .contact ul {
        display: flex;
        gap: 2rem;
        width: 100%;

        li {
            width: 100%;
            display: flex;
            align-items: center;
            list-style: none;

            img {
                width: 2rem;
                height: 2rem;
                margin-right: 1rem;
            }

            a {
                color: var(--color-white);
                text-decoration: none;

                &:hover {
                    color: var(--color-accent);
                }
            }
        }
    }
}
</style>
