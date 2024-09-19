/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins


// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from "@/router/router";
import vuetify from "vite-plugin-vuetify";
import {createVuetify} from "vuetify";
import {components, directives} from "vuetify/dist/vuetify";

const app = createApp(App)
const dok_theme = {
	dark: true,
	colors: {
		// background: 'transparent',
		surface: '#120332', //for fill components
		'surface-bright': '#9370DBFF',
		'surface-light': '#9370DBFF',
		'surface-variant': '#424242',
		'on-surface-variant': '#120332',
		primary: '#1867C0',
		'primary-darken-1': '#1F5592',
		secondary: '#48A9A6',
		'secondary-darken-1': '#018786',
		error: '#B00020',
		// info: '#2196F3',
		success: '#4CAF50',
		warning: '#FB8C00',
	},
	variables: {
		'border-color': '#DB00FF',
		'border-opacity': 0.12,
		'high-emphasis-opacity': 0.87,
		'medium-emphasis-opacity': 0.60,
		'disabled-opacity': 0.38,
		'idle-opacity': 0.04,
		'hover-opacity': 0.04,
		'focus-opacity': 0.12,
		'selected-opacity': 0.08,
		'activated-opacity': 0.12,
		'pressed-opacity': 0.12,
		'dragged-opacity': 0.08,
		'theme-kbd': '#212529',
		// 'theme-on-kbd': '#9370DBFF',
		// 'theme-code': '#9370DBFF',
		'theme-on-code': '#000000',
	}
}

const vuetify = createVuetify({
	theme: {
		defaultTheme: 'dok_theme',
		themes: {
			dok_theme,
		},
	},
	icons: {
		defaultSet: "mdi",
	},
	components,
	directives,
});
app.use(vuetify)
app.use(router)
app.mount('#app')
