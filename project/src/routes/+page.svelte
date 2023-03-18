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
  import { ExpandableTile } from "carbon-components-svelte";
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
    </HeaderNavMenu>
  </HeaderNav>
</Header>

<Content style="background-color: #f4f8fb">
  <Grid>
    <Row>
      <Column>
              <div style="height: 3rem; font-size: 24px; ">About</div>
              <div style="background-color: white; height: 10rem; width: 60%; display:inline-block"></div>
              <div style="height: 10rem; font-size: 16px; background-color: #101e33; height: 10rem; width: 38%; 
                display:inline-block; float: right;"> </div>
      </Column>
    </Row>
  </Grid>
</Content>