<script>
  import Button from "$lib/components/button.svelte";

  export let icon;
  export let label = undefined;
  export let disabled = false;
  export let small = false;
  let isOpen = false;

  function clickOutside(node) {
    const handleClick = (event) => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent("click_outside", node));
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      },
    };
  }

  function handleClickOutside(_event) {
    isOpen = false;
  }
</script>

<div class="wrapper">
  <Button
    {icon}
    {label}
    noBackground
    {disabled}
    {small}
    on:click={() => (isOpen = !isOpen)}
  />
  <div
    class="children"
    class:open={isOpen}
    use:clickOutside
    on:click_outside={handleClickOutside}
    class:top-s40={small}
    class:top-s48={!small}
  >
    <slot onClose={() => (isOpen = false)} />
  </div>
</div>

<style lang="postcss">
  .wrapper {
    position: relative;
  }

  .children {
    position: absolute;
    z-index: 1000;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: flex-end;
    padding: var(--s8);
    background-color: var(--col-white);
    border-radius: var(--s8);
    box-shadow: var(--shadow-md);
  }

  .open {
    display: flex;
  }
</style>
