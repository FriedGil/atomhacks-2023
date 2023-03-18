<script>
    import { ImageLoader } from "carbon-components-svelte";
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

<ImageLoader
src="https://cdn.discordapp.com/attachments/1081330544362668163/1086732120350785617/imgnew.jpg"/>