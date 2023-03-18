<script>
// @ts-nocheck

    import { FileUploader, Button } from "carbon-components-svelte";
    import { docsum } from "../../models/docsum";
    import { TextLoader } from "langchain/document_loaders";
    let fileUploader;
    let files = [];
    let result = "loading";
    async function summarize(){
        const loader = new TextLoader(files[0]);
        const docs = await loader.load();

        let res = await docsum(docs);
        console.log(res);
        result = res;
        result = result;
    }
  </script>
  
  <FileUploader
    bind:this={fileUploader}
    multiple
    labelTitle="Upload files"
    buttonLabel="Add files"
    status="complete"
    bind:files
  />
  
  <Button on:click={summarize}>
    summarize
  </Button>
  {result}
