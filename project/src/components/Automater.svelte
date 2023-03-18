<script>
        import { FileUploaderButton,      ProgressIndicator,
      ProgressStep,
      Button,} from "carbon-components-svelte";
        import { ComboBox } from "carbon-components-svelte";
        let currentIndex = 0;



</script>

<body>
      
    <FileUploaderButton labelText="Add files"/>

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