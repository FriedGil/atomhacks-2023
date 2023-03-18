<script>
// @ts-nocheck

      import { FileUploaderButton,      ProgressIndicator, ProgressStep, Button,} from "carbon-components-svelte";
      import { ComboBox } from "carbon-components-svelte";
    
      let currentIndex = 0;
      let fileUploader;
      let file;

        
    const key = import.meta.env.VITE_OPENAI_API_KEY;
    import { OpenAI } from "langchain/llms";
    // import {  CheerioWebBaseLoader} from "langchain/document_loaders";
    import { loadSummarizationChain, AnalyzeDocumentChain} from "langchain/chains";
    import { onMount } from "svelte";

    let selectedModel;
</script>

<body>
      
    <FileUploaderButton 
    bind:file
    labelText="Add files"
    on:change={console.log(file.text)}
    />

    <ComboBox
    titleText="Add Source"
    placeholder="Google?"
    items={[
      { id: "0", text: "Youtube" },
      { id: "1", text: "Google Search" },
      {id: "2", text: "Website"}
      ]
      }/>


    <ComboBox
  titleText="Select Chain"
  placeholder="Search Here"
  this:bind={selectedModel}

  items={[
    { id: "0", text: "Q&A" },
    { id: "1", text: "SUMMARIZATION" },
    ]
    }/>

  <ProgressIndicator bind:currentIndex>
    <ProgressStep
      label="Data Source"
      description="The progress indicator will listen for clicks on the steps"
    />
    <ProgressStep
      label="Chain"
      description="The progress indicator will listen for clicks on the steps"
    />
    <ProgressStep
      label="Deploy"
      description="The progress indicator will listen for clicks on the steps"
    />

  </ProgressIndicator>
    
  


      
</body>