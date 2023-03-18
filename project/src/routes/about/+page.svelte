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
    import Automater from "../../components/Automater.svelte";
  
    let isSideNavOpen = false;
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
          <Automater/>
        </Column>
      </Row>
    </Grid>
  </Content>
  