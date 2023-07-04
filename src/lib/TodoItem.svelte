<script lang="ts">
  import { createEventDispatcher } from 'svelte';


  const dispatch = createEventDispatcher();
  
  export let item;

  function handleClick () {
    dispatch('click', item)
  }

  function handleDelete () {
    dispatch('delete', item)
  }
</script>

<div
  class="flex items-center"
>  
  {#if item.is_done}
    <button
      class="bg-transparent p-2"
      on:click={handleClick}
    >
      <div class="i-ph-check-circle-fill">done</div>
    </button>
  {:else}
    <button
      class="bg-transparent p-2"
      on:click={handleClick}
    >
    <div class="i-ph-circle-bold">no</div>
    </button>
  {/if}

  {#if item.is_done}
    <button
      class="bg-transparent line-through grow-1 text-left"
      on:click={handleClick}
    >
      {item.title}
    </button>
  {:else}
    <button
      class="bg-transparent grow-1 text-left"
      on:click={handleClick}
    >
      {item.title}
    </button>
  {/if}

  <button
    class="bg-transparent pl-2"
    on:click={handleDelete}
  >
    <div class="i-ph-trash"></div>
  </button>
</div>