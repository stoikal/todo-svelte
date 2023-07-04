<script lang="ts">
import { onMount } from 'svelte';
import todosService from './services/todos';
import TodoList from './lib/TodoList.svelte';

let todos = []

let input = ''

onMount(() => {
  loadData()
})

async function loadData () {
  const data = await todosService.getAll()
  todos = data
}

async function createTodo () {
  await todosService.create({
    title: input,
    parent: null,
    is_done: false
  })

  input = ''
  loadData()
}

async function handleItemToggle (event) {
  const item = event.detail
  await todosService.setIsDone(item.id, !item.is_done)
  loadData()
}

async function handleItemDelete (event) {
  const item = event.detail
  await todosService.delete(item.id)
  loadData()
}

$: notDoneTodos = todos.filter(i => !i.is_done)
$: doneTodos = todos.filter(i => i.is_done)


async function handleAdd () {
  createTodo()
}

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    createTodo()
  }
}

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
    on:itemdelete={handleItemDelete}
  />

  {#if doneTodos.length}
    <h2 font="bold" text="lg" m="b-2">Done</h2>
  {/if}

  <TodoList
    items={doneTodos}
    on:itemtoggle={handleItemToggle}
    on:itemdelete={handleItemDelete}
  />

  <div class="flex">
    <input
      bind:value={input}
      class="text-black grow-1 rounded-l px-2 py-1"
      on:keydown={handleKeyDown}
    >
    <button
      class="bg-orange hover:bg-orange-600 p-2 rounded-r"
      on:click={handleAdd}
    >
      <div class="i-ph-plus-bold">
        add
      </div>
    </button>
  </div>
</main>
