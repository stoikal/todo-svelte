<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import TodoItem from './TodoItem.svelte'

  const dispatch = createEventDispatcher();

  export let items;

  function handleItemToggle (event) {
    dispatch('itemtoggle', event.detail)
  }

  function handleItemDelete (event) {
    dispatch('itemdelete', event.detail)
  }
</script>

<ul
  class="mb-6"
>
  {#each items as item (item.id)}
	  <li
    >
      <TodoItem
        item={item}
        on:click={handleItemToggle}
        on:delete={handleItemDelete}
      />
    </li>
  {/each}
</ul>