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

  </script>


<Header company="Atomhacks" platformName="DWGB" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
      <HeaderNavItem href="/" text="Home" />
      <HeaderNavItem href="/" text="DWGB" />
      <HeaderNavItem href="/" text="About" />
    </HeaderNav>
  </Header>
  
  <Content>
    <Grid>
      <Row>
        <Column>
          <h1 style="margin-bottom: 25px; font-weight: bold">Upload a file!</h1>
            <Tabs style="margin-top: 15px">
              <Tab label="Q&A" />
              <Tab label="Summarisation" />
              <svelte:fragment slot="content">
                <TabContent style="width: 100%">
                  <FileUploaderButton labelText="Add files" />
                  <TextInput labelText="" placeholder="Ask your question..." style="width: 100%; float: right; margin-top: 15px; margin-bottom: 15px;" />
                  <Button kind="danger-tertiary">Cancel</Button>
                  <Button>Submit</Button>
                  <p style="margin-top: 15px">
                    "output text here"
                  </p>
                </TabContent>
                <TabContent>
                  <FileUploaderButton labelText="Add files" />
                <p style="margin-top: 15px">
                  "output text here"
                </p>
                </TabContent>
              </svelte:fragment>
            </Tabs>
        </Column>
      </Row>
    </Grid>
  </Content>