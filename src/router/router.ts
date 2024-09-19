import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import {createApp} from "vue";
import App from 'src/App.vue'

import Kakhochesh from "@/styles/Kakhochesh.vue";
import Ooo from "@/Ooo.vue";
import Stranichka2 from "@/styles/Stranichka2.vue";
import Banani from "@/styles/Banani.vue";
import Rofl from "@/styles/Rofl.vue";
import Last from "@/styles/Last.vue";



export default createRouter({

	history: createWebHistory(),
	routes:[
		{path:'/stranica',component: Kakhochesh},
		{path:'/',component: Ooo},
		{path: '/Stranichka2', component: Stranichka2},
		{path: '/bananchiki', component: Banani},
		{path: '/rofl', component: Rofl},
		{path: '/last', component: Last}
	]
})





