<script setup>

</script>

<template>
    <ul>
        <li>
            <RouterLink to="mostrar-mensaje">v-if</RouterLink>
        </li>
        <li>
            <RouterLink to="v-show">v-show</RouterLink>
        </li>
        <li>
            <RouterLink to="v-for">v-for</RouterLink>
        </li>
        <li>
            <RouterLink to="v-bind">v-bind</RouterLink>
        </li>
        <li>
            <RouterLink to="v-on">v-on</RouterLink>
        </li>
        <li>
            <RouterLink to="v-model">v-model</RouterLink>
        </li>
        <li>
            <p>props-event</p>
            <ul>
                <li>
                    <RouterLink to="props-event-padre">props-event-padre</RouterLink>
                </li>
                <li>
                    <RouterLink to="props-event-hijo">props-event-hijo</RouterLink>
                </li>
            </ul>

        </li>
        <li>
            <p>Ejemplo final</p>
            <ul>
                <li>
                    <RouterLink to="el-padre">ejemplo</RouterLink>
                </li>
            </ul>
        </li>
    </ul>
</template>