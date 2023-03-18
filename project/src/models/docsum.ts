import type { Document } from "langchain/document";
import { OpenAI } from "langchain/llms";
import { loadSummarizationChain, AnalyzeDocumentChain} from "langchain/chains";

export async function docsum(docs:Document[]): Promise<string>{
    const model = new OpenAI({ openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY, temperature: 0.9 });
    const chain = loadSummarizationChain(model);
    const res = await chain.call({
    input_documents: docs,
    });
    return res.value.toString();
}