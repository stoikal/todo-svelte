<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import TodoItem from './TodoItem.svelte'

  const dispatch = createEventDispatcher();

  export let items;

  function handleItemClick (event) {
    dispatch('itemtoggle', event.detail)
  }
</script>

<ul>
  {#each items as item (item.id)}
	  <li>
      <TodoItem
        item={item}
        on:click={handleItemClick}
      />
    </li>
  {/each}
</ul>