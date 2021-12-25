<template>
	<div class="character">
		{{ data }}
		<div v-for="(character, index) in characters" :key="index" class="flex items-center my-2 cursor-pointer px-5 py-1 rounded-2xl hover:bg-black">
			<div style="width: 80px; height: 80px" class="rounded-full overflow-hidden">
				<img :src="character.image" :alt="character.name"  class="w-full h-full object-cover object-center"/>
			</div>
			<div>
				<p>{{ character.name }}</p>
				<p>{{ character.gender }}</p>
				<p>{{ character.status }}</p>
				<p>{{ character.species }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { CharacterRequest } from '@/app/api/characters/CharacterRequest';
	import { HttpStatusCode } from '@/app/constants';
	export default {
		name: 'Characters',
		setup() {
			const api = new CharacterRequest();
			let characters = ref([]);

			getListCharacter();

			async function getListCharacter() {
				try {
					let response = await api.list();

					if (response.status === HttpStatusCode.SUCCESS) {
						const { results } = response.data;
						characters.value = results;

						console.log(characters);
					}
				} catch (error) {
					console.log(error);
				}
			}

			return { characters };
		},
	};
</script>
