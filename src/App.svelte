<script lang="ts">
import { onMount } from 'svelte';
import todosService from './services/todos';
import TodoList from './lib/TodoList.svelte';

let todos = []

onMount(() => {
  loadData()
})

async function loadData () {
  const data = await todosService.getAll()
  todos = data
}

async function handleItemToggle (event) {
  const item = event.detail
  console.log('===~item.id, item.is_done~===', item.id, item.is_done)
  await todosService.setIsDone(item.id, !item.is_done)
  loadData()
}

$: notDoneTodos = todos.filter(i => !i.is_done)
$: doneTodos = todos.filter(i => i.is_done)


</script>

<main
  max-w="md"
  h="full"
  m="x-auto"
  p="4"
  relative="~"
>
  <h2 font="bold" text="lg" m="b-2">Todo</h2>
  {(console.log(notDoneTodos), '')}
  <TodoList
    items={notDoneTodos}
    on:itemtoggle={handleItemToggle}
  />

  <h2 font="bold" text="lg" m="b-2">Done</h2>

  <TodoList
    items={doneTodos}
    on:itemtoggle={handleItemToggle}
  />
</main>
