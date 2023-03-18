<script>
  import { ExpandableTile, Link } from "carbon-components-svelte";
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
    <HeaderNavItem href="/" text="DWGB" />
    <HeaderNavItem href="/" text="About" />
  </HeaderNav>
</Header>

<Content>
  <Grid>
    <Row>
      <Column>
              <div style ="height: 3rem; font-size: 36px; font-weight: bold;">About</div>
              <div style="background-color: white; height: 10rem; width: 60%; display:inline-block; border: 2px solid; border-color: #f2fff8 ">
                <h4>
                  The emergence of LLMs --  heralded first by innovations first in "All You Need is Attention" and most recently in
                  ChatGPT -- has  revolutionized the way we can productively live our lives. 
                </h4>
              </div>
              <div style="height: 10rem; font-size: 16px; background-color: #101e33; height: 10rem; width: 38%; 
                display:inline-block; float: right; border: 2px solid; border-color: #f2fff8;"> 
                <h5 style = "color: #fff">
                  DWGB builds upon Gpt-3 with model chaining techniques such as those proposed in Tongshuang Wu 2022 et. Al. 
                  In doing so, we have allow for accurate q&a and summarization of anything from sentences to pdfs.
                </h5>
              </div>
      </Column>
    </Row>
  </Grid>
</Content>
  