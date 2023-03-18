// @ts-nocheck
import { OpenAI } from "langchain/llms";
import { TextLoader } from "langchain/document_loaders";

async function loader(path){
    const loader = new TextLoader(path);
    const docs = await loader.load();
    console.log({ docs });
}

