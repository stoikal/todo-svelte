<script lang="ts">
  export let items;
</script>

<ul>
  {#each items as item (item.id)}
	  <li>
      {item.title}
    </li>
  {/each}
</ul>