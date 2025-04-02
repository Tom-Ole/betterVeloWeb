<script lang="ts">
	import { Anchor, BookPlus, BookText, FileBox, House, HousePlus, List, Scroll, ScrollText, Ship } from "@lucide/svelte";
	import type { PageServerData } from "./$types";

	let { data }: { data: PageServerData } = $props();
</script>

<!-- <h1>Hi, {data.user.username}!</h1>
<p>Your user ID is {data.user.id}.</p>
<form method='post' action='?/logout' use:enhance>
	<button>Sign out</button>
</form> -->

<main class="mainContainer">
	<h1>Welcome <span style="color: red">{data.user.username}</span> to VELO</h1>
	<div class="btnGrid">
		<a class="btnContainer" href="/createOrder">
			<FileBox color="black" />
			<h2>Create Order</h2>
		</a>
		<a class="btnContainer" href="/listOrder">
			<List color="black" />
			<h2>List Orders</h2>
		</a>
		<a class="btnContainer" href="/createQuote">
			<Scroll color="black" />
			<h2>Create Quote</h2>
		</a>
		<a class="btnContainer" href="/listQuote">
			<ScrollText color="black" />
			<h2>List Quotes</h2>
		</a>
		<a class="btnContainer" href="/createShip">
			<Anchor color="black" />
			<h2>Create Ship</h2>
		</a>
		<a class="btnContainer" href="/listShip">
			<Ship color="black" />
			<h2>List Ship</h2>
		</a>
		<a class="btnContainer" href="/createCompany">
			<HousePlus color="black" />
			<h2>Create Company</h2>
		</a>
		<a class="btnContainer" href="/listCompany">
			<House color="black" />
			<h2>List Company</h2>
		</a>
		<a class="btnContainer" href="/createArticle">
			<BookPlus color="black" />
			<h2>Create Article</h2>
		</a>
		<a class="btnContainer" href="/listArticle">
			<BookText color="black" />
			<h2>List Article</h2>
		</a>
	</div>
</main>

<style>
	.mainContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f0f0f0;
	}

	.btnGrid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		width: 80%;
	}

	.btnContainer {
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 8px;
		padding: 20px;
		text-align: center;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		transition: transform 0.2s;
		text-decoration: none;
	}


	.btnContainer:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}
	.btnContainer h2 {
		margin: 0;
		font-size: 1.5rem;
		color: #333;
	}

</style>
