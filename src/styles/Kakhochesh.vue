<script setup lang="ts">
import {ref} from "vue";
const meniaetsia = ref<string>('')
</script>

<template>
	<v-row no-gutters>

		<v-col class="d-flex" cols="12" style="height: 12vh;border: white 1px solid">
<div  style="margin-left: 65vh; font-size: 5vh"  >
	ТУТ ЧТО ТО ВАЖНОЕ ТИПО
</div>
			<router-link to="/">
			<v-btn :class="meniaetsia == 'knopochka2' ? 'jmatOn' : 'najatOff' " @click="meniaetsia = 'knopochka2';activeComp = 'animal-collection'">
				Назад
			</v-btn>
				</router-link>
		</v-col>


		<v-col class="d-flex" cols="2"	 style="height: 88vh;border:white 1px solid">
			</v-col>

		<v-col cols="13" style="height: 88vh; border:white 1px solid">
			</v-col>
	</v-row>
</template>

<style scoped>
.najatOff {
	background-color: #ffb252;
	width: 30vh;
	height: 55px !important;
	





}
.najatOn  {
	background-color: blue;
	width: 30vh;
	height: 100px !important;

}

.jmatOn {
	background-color: aquamarine;
	width: 30vh;
	height: 100px !important;
}

</style>
