<script lang="ts">
    import { enhance } from "$app/forms";
    import type { PageServerData } from "./$types";
    let { data, children }: { data: PageServerData, children: () => any} = $props();

</script>

<header class="headerContainer">
    {#if data.user}
    <nav class="navContainer">
        <a href="/" class="navItem">Home</a>
        <a href="/profile" class="navItem">Profile</a>
        <form method="post" action="?/logout" class="navItem" use:enhance>
            <button>Sign out</button>
        </form>
    </nav>
    {:else}
    <nav class="navContainer">
        <a href="/login" class="navItem">Login</a>
        <a href="/register" class="navItem">Register</a>
    </nav>
    {/if}
</header>

<style>

    .headerContainer {
        display: flex;
        justify-content: end;
        background-color: #333;
        padding: 1rem;
    }

    .navContainer {
        display: flex;
        gap: 1rem;
        margin-right: 1rem;
    }

    .navItem {
        color: white;
        text-decoration: none;
    }

    .navItem:hover {
        text-decoration: underline;
    }

    .navItem:hover button {
        background-color: #ccc;
        cursor: pointer;
    }

</style>

{@render children()}