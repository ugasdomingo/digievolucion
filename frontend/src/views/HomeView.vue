<script setup lang="ts">
//Import tools
import { RouterLink } from 'vue-router';
</script>

<template>
    <main>
        <img
            src="https://images.pexels.com/photos/3791119/pexels-photo-3791119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="background home"
        />
        <h1>Descansa, nos encargamos de todo</h1>
        <p>Más que Marketing, hacemos tu empresa más rentable.</p>

        <div>
            <RouterLink to="/salud-de-marca">
                Quiero ganar clientes online
            </RouterLink>
            <RouterLink to="/servicios" class="trans-buttom"
                >Ver Servicios</RouterLink
            >
        </div>
    </main>
</template>

<style scoped lang="scss">
main {
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 4rem;
    position: relative;
    overflow: hidden;
    text-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        opacity: 0.2;
        z-index: -1;
    }

    h1 {
        transition: all 0.2s ease-in-out;
        animation: slideInLeft 1.5s ease-in-out;
        margin-bottom: 0;

        &:hover {
            color: var(--color-tertiary);
        }
    }

    p {
        font-size: 1.5rem;
        font-weight: 300;
        margin: 0 0 2.5rem;
        animation: slideInLeft 1.5s ease-in-out;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        font-weight: 300;
        text-align: start;
        animation: slideInRigth 1.5s ease-in-out;

        li {
            margin-bottom: 1rem;
        }
    }

    div {
        display: flex;
        gap: 1rem;
        animation: slideInRigth 1.5s ease-in-out;

        a {
            padding: 0.5rem 1.5rem;
            border-radius: 0.5rem;
            background-color: var(--color-accent);
            color: var(--color-white);
            font-size: 1.25rem;
            text-decoration: none;
            transition: all 0.2s ease-in-out;

            &:hover {
                background-color: var(--color-tertiary);
            }
        }

        .trans-buttom {
            background-color: transparent;
            border: 1px solid var(--color-white);
            color: var(--color-white);

            &:hover {
                background-color: var(--color-tertiary);
                color: var(--color-white);
            }
        }
    }
}

@keyframes slideInLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}

@keyframes slideInRigth {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}

@media screen and (max-width: 768px) {
    main {
        padding: 0 2rem;

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1.25rem;
        }

        div {
            flex-direction: column;
            gap: 1rem;

            a {
                padding: 0.5rem 1rem;
            }
        }
    }
}
</style>
