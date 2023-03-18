<script>
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
    <HeaderNavItem href="/" text="Home" />
    <HeaderNavItem href="/assistant" text="DWGB" />
    <HeaderNavItem href="/about" text="About" />
  </HeaderNav>
</Header>

<Content>
  <Grid>
    <Row>
      <Column>
              <div style="height: 3rem; font-size: 36px; font-weight: bold;">About</div>
              <div style="background-color: white; height: 10rem; width: 60%; display:inline-block; border: 2px solid; border-color: #f2fff8 "></div>
              <div style="height: 10rem; font-size: 16px; background-color: #101e33; height: 10rem; width: 38%; 
                display:inline-block; float: right; border: 2px solid; border-color: #f2fff8 "> </div>
      </Column>
    </Row>
  </Grid>
</Content>
  