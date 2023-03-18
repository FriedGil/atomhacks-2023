<script>
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

    import { FileUploaderButton } from "carbon-components-svelte";

    import { Tabs, Tab, TabContent } from "carbon-components-svelte";

    import { TextInput } from "carbon-components-svelte";

    import { ButtonSet, Button } from "carbon-components-svelte";

    import { CodeSnippet } from "carbon-components-svelte";

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
                  <FileUploaderButton labelText="Add files" />
                  <TextInput labelText="" placeholder="Or enter sample text..." style="width: 100%; float: right; margin-top: 15px" />
                  <TextInput labelText="" placeholder="Ask your question..." style="width: 50%; float: right; margin-top: 15px; margin-bottom: 15px;" />
                  <Button kind="danger-tertiary">Cancel</Button>
                  <Button>Submit</Button>
                  <h3 style="margin-top: 15px">
                    Output:
                    <CodeSnippet code="text" style="margin-top: 15px"/>
                  </h3>
                </TabContent>
                <TabContent>
                  <FileUploaderButton labelText="Add files" />
                  <TextInput labelText="" placeholder="Or enter your text..." style="width: 100%; float: right; margin-top: 15px; margin-bottom: 15px;" />
                  <Button kind="danger-tertiary">Cancel</Button>
                  <Button>Submit</Button>
                  <h3 style="margin-top: 15px">
                    Output:
                    <CodeSnippet code="text" style="margin-top: 15px"/>
                  </h3>
                </TabContent>
              </svelte:fragment>
            </Tabs>
        </Column>
      </Row>
    </Grid>
  </Content>