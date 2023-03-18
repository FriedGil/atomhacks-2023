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
    import Automater from "../components/Automater.svelte";
  
    let isSideNavOpen = false;

    import { FileUploaderButton } from "carbon-components-svelte";

    import { ContentSwitcher, Switch } from "carbon-components-svelte";

  </script>


<Header company="IBM" platformName="Carbon Svelte" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderNav>
      <HeaderNavItem href="/" text="Link 1" />
      <HeaderNavItem href="/" text="Link 2" />
      <HeaderNavItem href="/" text="Link 3" />
      <HeaderNavMenu text="Menu">
        <HeaderNavItem href="/" text="Link 1" />
        <HeaderNavItem href="/" text="Link 2" />
        <HeaderNavItem href="/" text="Link 3" />
      </HeaderNavMenu>
    </HeaderNav>
  </Header>
  
  <Content>
    <Grid>
      <Row>
        <Column>
            <FileUploaderButton labelText="Add files" style="margin-bottom: 15px" />
        </Column>
      </Row>
      <Row>
        <ContentSwitcher selectedIndex={1}>
            <Switch text="Latest news" />
            <Switch text="Trending" />
            <Switch text="Recommended" />
          </ContentSwitcher>
      </Row>
    </Grid>
  </Content>