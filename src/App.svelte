<script lang="ts">
import { onMount } from 'svelte';
import todosService from './services/todos';

let todos = []

onMount(async () => {
  const data = await todosService.getAll()
  todos = data
  console.log('===~todos~===', todos)
})
</script>

<main
  max-w="md"
  h="full"
  m="x-auto"
  p="4"
  relative="~"
>
  <h2 font="bold" text="lg" m="b-2">Todo</h2>
</main>
