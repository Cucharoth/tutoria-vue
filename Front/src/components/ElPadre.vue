<template>
    <div class="container">
        <!-- Título del componente padre -->
        <h1 class="text-center my-4">Componente Padre</h1>
        <h2 v-if="mensaje">{{ mensaje }}</h2>
        <!-- Componente hijo con un prop y un evento personalizado -->
        <Hijo :mensaje="mensajePadre" @actualizarMensaje="mensajePadre =
            $event" />
        <!-- Botón para resetear el mensaje del padre -->
        <button class="btn btn-primary mt-3" v-on:click="resetearMensaje">Resetear Mensaje</button>
        <!-- Mensajes condicionales basados en el valor de mensajePadre -->
        <p v-if="mensajePadre === 'Hola desde el padre'" class="mt-3">El
            mensaje está en su estado original</p>
        <p v-else class="mt-3 text-warning">El mensaje ha sido cambiado por
            el hijo</p>
        <!-- Lista de tareas con checkboxes -->
        <div class="mt-5">
            <h2>Lista de tareas</h2>
            <div v-for="(tarea, index) in tareas" :key="index" class="form-check">
                <!-- Checkbox vinculado a la propiedad completada de cada tarea -->
                <input type="checkbox" v-model="tarea.completada" :id="'tarea' + index" class="form-check-input"
                    @change="actualizarTarea(index)">
                <label :for="'tarea' + index" class="form-check-label">{{ tarea.nombre }}</label>

                <!-- Mensaje condicional que se muestra cuando la tarea está completada -->
                <p v-if="tarea.completada" class="text-success">¡Tarea completada!</p>
            </div>
        </div>
    </div>
</template>
<script>
import Hijo from './ElHijo.vue';
export default {
    components: {
        Hijo // Importación del componente hijo
    },
    name: 'Base',
    data() {
        return {
            mensajePadre: 'Hola desde el padre', // Mensaje inicial del padre
            tareas: [],
            mensaje: "",
        }
    },
    methods: {
        fetchTareas() {
            fetch('http://localhost:3005/tareas')
                .then(response => response.json())
                .then(data => {
                    this.tareas = data;
                });
        },
        actualizarTarea(index) {
            fetch('http://localhost:3005/tareas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    index: index,
                    completada: this.tareas[index].completada
                }),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(`Tarea ${index} actualizada:
                    ${data.completada}`);
                });
        },
        obtenerMensaje() {
            fetch('http://localhost:3005/hello')
                .then(response => response.text())
                .then(data => {
                    this.mensaje = data;
                });
        },
        resetearMensaje() {
            this.mensajePadre = 'Hola desde el padre'; // Método para resetear el mensaje del padre
        }
    },
    created() {
        this.obtenerMensaje();
        this.fetchTareas();
    }

}
</script>
