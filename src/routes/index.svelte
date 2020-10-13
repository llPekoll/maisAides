<script context="module">
    export async function preload(page) {
        const res = await this.fetch(`./getLists`);
        const data = await res.json();

        if (res.status === 200) {
            return { post: data };
        } else {
            this.error(res.status, data.message);
        }
    }
</script>

<script>
    import Button from "sveltestrap/src/Button.svelte";

    export let post;

    const color = "primary";
    const title = "Mes Aides";

</script>
<style>
    img {
        max-height: 100px;
    }
    .max-min-width-250{
        max-width: 250px;
        min-width: 250px;
    }
</style>

<svelte:head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title> {title} </title>
</svelte:head>
<div class="text-center pb-4 pt-4">
    <h1> {title} </h1>
</div>
<div class="container-fuild">
    <div class="row">
        {#each post.aides as posts}
            <div class="col-sm-3 pb-4 d-flex">
                <div class="card max-min-width-250 p-3 flex-fill offset-sm-auto text-center">
                    <div class="cad-body m-auto">
                        <h4>
                            {posts.title}
                        </h4>
                        <div class="pt-2 pb-2">
                            <img src={posts.picture} alt="logo" />
                        </div>
                        <div class="pb-3 pt-2">
                        {#if posts.description.length > 180}
                            {@html posts.description.substring(0, 180)}
                        {:else }
                            {@html posts.description}
                        {/if }
                        </div>
                    </div>
                    <div class="footer mb-0">
                        <Button {color} >Visites > </Button>
                        <div class="pt-4 pb-4">
                            <a href="/">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>