import type { Document } from "langchain/document";
import { OpenAI } from "langchain/llms";
import { loadSummarizationChain, AnalyzeDocumentChain} from "langchain/chains";

export async function qna(docs:Document[], question:string): Promise<string>{
    const model = new OpenAI({ openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY, temperature: 0.9 });
    const chain = loadSummarizationChain(model); // might switch to type "stuff"
    const res = await chain.call({
        input_documents: docs,
        question: question
        });
        return res.value.toString();
}