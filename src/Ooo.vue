<template>
	<v-row no-gutters>

		<v-col  cols="12" style="height: 12vh;border: white 1px solid">
			<v-textarea readonly variant="underlined" :width="300" style="margin-left: 100vh" v-model="serch" @keydown.enter="SearchUser">
			</v-textarea>




		<v-btn :class="meniaetsia == 'knopochka'  ? 'najatOn' : 'najatOff'" @click="meniaetsia = 'knopochka'" >
				nazmi suda
			</v-btn>



			<router-link to="/stranica">
		<v-btn :class="meniaetsia == 'knopochka2' ? 'jmatOn' : 'najatOff' " @click="meniaetsia = 'knopochka2';activeComp = 'animal-collection'>Knopka;">
			Перейти
			</v-btn>
			</router-link>
		</v-col>




		<v-col class="d-flex" cols="2"	 style="height: 88vh;border:white 1px solid">
			<router-link to="/Stranichka2">
			<div style="width: 10vh; top: 13vh; position: absolute; font-size: 5vh;left: 10vh; border-radius: 20px;color: green">
			тоже
		</div>
			</router-link>


			<v-select v-model="selectedItem" placeholder="Выбор" @change="navigateToPage" :items="['бананчики','рофл','и последнее'] " outlined
					   style="margin-top: 90px;width: 300px;height: 60px"/>


			<v-select :items="aa" style= "width: 300px;height: 60px;margin-top: 40px"/>

		</v-col>


		<v-col cols="13" style="height: 88vh; border:white 1px solid">
			<v-text-field class="poisk2" v-model="serch2" @keydown.enter="SearchUser2" style="width: 100vh;margin-left: 30vh;margin-top: 1vh" >

			</v-text-field>

			<v-virtual-scroll
				style="scrollbar-width: none; height: 74vh "
				class="mt-4 ml-7 mr-7"
				:height="300"
				:items="['1', '2', '3', '4', '5','6', '7','8', '9','10',]">

				<template v-slot:default="{ item }">
					<h1 class="d-flex justify-center mb-6" style="font-family: Lora sans-serif">
						ЭЭЭЭ ЧЕЕЕ???
						{{uuuu}}
					</h1>

					<v-card class="mb-4 ml-4 mr-15" style="word-wrap: break-word; background-color: #FFFFFF; border-radius: 10px; min-height: calc(18vh); height: fit-content ">

						<v-card-text style="font-size: 25px; font-family: 'Lora', sans-serif; color: black" >
							{{user}}


						</v-card-text>
					</v-card>
				</template>
			</v-virtual-scroll>
		</v-col>
	</v-row>
</template>




<script setup lang="ts">


import {ref} from "vue";
import {Aa} from "@/styles/asdasd";


let user: {name: string, age: number,


}

const meniaetsia = ref<string>('')

const aa = ref<Aa[]>([])

const serch = ref<string>('')

const SearchUser = () => {  users_store.SearchUser(serch.value)}


const serch2 = ref<string>('')

const SearchUser2 = () => {  users_store.SearchUser(serch2.value)}

const items = [
	{ text: 'бананчики', route: '/bananchiki' },
	{ text: 'рофл', route: '/rofl' },
	{ text: 'и последнее', route: '/last' },
];
const selectedItem = ref(null);
// const router = useRouter();
// const navigateToPage = () => {
// 	if (selectedItem.value) {
// 		router.push(selectedItem.value.route);
// 	}
// };
</script>

<style scoped>

.najatOff {
		background-color: plum;
		width: 20vh;
		height: 50px !important;




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
