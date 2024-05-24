
import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from "@/components/HelloWorld.vue";
import NavComponent from '@/components/NavComponent.vue';
import MostrarMensaje from '@/components/MostrarMensaje.vue';
import MostrarVshow from '@/components/MostrarVshow.vue';
import MostrarVfor from '@/components/MostrarVfor.vue';
import MostrarVbind from '@/components/MostrarVbind.vue';
import MostrarVon from '@/components/MostrarVon.vue';
import MostrarVmodel from '@/components/MostrarVmodel.vue';
import ComponentePadre from '@/components/ComponentePadre.vue';
import ComponenteHijo from '@/components/ComponenteHijo.vue';
import ElPadre from '@/components/ElPadre.vue';
import ElHijo from '@/components/ElHijo.vue';

const routes = [
{ path: '/', component: NavComponent },
{ path: '/mostrar-mensaje', component: MostrarMensaje },
{ path: '/v-show', component: MostrarVshow },
{ path: '/v-for', component: MostrarVfor },
{ path: '/v-bind', component: MostrarVbind },
{ path: '/v-on', component: MostrarVon },
{ path: '/v-model', component: MostrarVmodel },
{ path: '/props-event-padre', component: ComponentePadre },
{ path: '/props-event-hijo', component: ComponenteHijo },
{ path: '/el-padre', component: ElPadre },
// { path: '/about', component: AboutView },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})