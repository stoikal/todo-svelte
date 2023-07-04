<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  export let item;

  function handleClick () {
    dispatch('click', item)
  }
</script>

<li>
  <button
    class="bg-transparent"
    on:click={handleClick}
  >
    {item.title}
  </button>
</li>