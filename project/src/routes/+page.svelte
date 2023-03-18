<script>
    import { OpenAI } from "langchain/llms";
    import { loadSummarizationChain } from "langchain/chains";
    import { AnalyzeDocumentChain } from "langchain/chains";

    async function t(){
        const text = "Hello World. You are looking very worldy today"
        const model = new OpenAI({ openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY, temperature: 0.9 });
        /** Load the summarization chain. */
        const combineDocsChain = loadSummarizationChain(model);
        /** Pass this into the AnalyzeDocumentChain. */
        const chain = new AnalyzeDocumentChain({
        combineDocumentsChain: combineDocsChain,
        });
        const res = await chain.call({
        input_document: text,
        });
        console.log(res);
        return res;
    }


</script>
<h1 style="">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#await t()}
	<p>...waiting</p>
{:then res}
	<p>The number is {res}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}


