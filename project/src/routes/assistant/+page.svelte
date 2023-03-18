<script>
// @ts-nocheck

    import {
      Header,
      HeaderNav,
      HeaderNavItem,
      HeaderNavMenu,
      SkipToContent,
      Content,
      Grid,
      Row,
      Column,
    } from "carbon-components-svelte";
  
    let isSideNavOpen = false;
    let uploader;
    let textin;
    let question;
    let output = "output here";

    /**
     * @type {any}
     */
    let files;

    import { FileUploaderButton } from "carbon-components-svelte";

    import { Tabs, Tab, TabContent } from "carbon-components-svelte";

    import { TextInput } from "carbon-components-svelte";

    import { Button } from "carbon-components-svelte";

    import { CodeSnippet } from "carbon-components-svelte";

    function sum(){
      output = "loading...";
      console.log("here");
      fetch('/api/docsum', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({docs:[textin]})
    })
      .then(response => response.text())
      .then(data => output = data)
      .catch(error => console.error(error))
    }

    function qna(){
      output = "loading...";
      console.log("here");
      fetch('/api/qna', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({docs:[textin],question:question})
    })
      .then(response => response.text())
      .then(data => output = data)
      .catch(error => console.error(error))
    }
    

  </script>


<Header company="Atomhacks" platformName="DWGB" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
        <HeaderNavItem href="/" text="Home" />
        <HeaderNavItem href="/assistant" text="DWGB" />
        <HeaderNavItem href="/about" text="About" />
    </HeaderNav>
  </Header>
  
  <Content>
    <Grid>
      <Row>
        <Column>
          <h1 style="margin-bottom: 25px; font-weight: bold">Upload a file!</h1>
            <Tabs style="margin-top: 15px">
              <Tab label="Q&A"/>
              <Tab label="Summarisation" />
              <svelte:fragment slot="content">
                <TabContent style="width: 100%">
                  <FileUploaderButton labelText="Add files" bind:this={uploader} bind:files />
                  <TextInput bind:value={textin} labelText="" placeholder="Or enter sample text..." style="width: 100%; float: right; margin-top: 15px" />
                  <TextInput bind:value={question} labelText="" placeholder="Ask your question..." style="width: 50%; float: right; margin-top: 15px; margin-bottom: 15px;" />
                  <Button kind="danger-tertiary">Cancel</Button>
                  <Button  on:click={qna}>Submit</Button>
                  <h3 style="margin-top: 15px">
                    {output}
                    <CodeSnippet code="text"/>
                  </h3>
                </TabContent>
                <TabContent>
                  <FileUploaderButton labelText="Add files" bind:this={uploader} bind:files/>
                  <TextInput bind:value={textin} labelText="" placeholder="Or enter your text..." style="width: 100%; float: right; margin-top: 15px; margin-bottom: 15px;" />
                  <Button kind="danger-tertiary">Cancel</Button>
                  <Button on:click={sum}>Submit</Button>
                  <h3 style="margin-top: 15px">
                    {output}
                    <CodeSnippet code="text"/>
                  </h3>
                </TabContent>
              </svelte:fragment>
            </Tabs>
        </Column>
      </Row>
    </Grid>
  </Content>