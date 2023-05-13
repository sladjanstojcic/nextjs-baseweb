import { Block } from 'baseui/block';
import { StyledLink } from 'baseui/link';
import { LabelLarge } from 'baseui/typography';
import Link from 'next/link';

export default function Home() {
    return (
        <Block
            paddingTop="50px"
            paddingRight="20px"
            paddingBottom="5px"
            paddingLeft="50px"
        >
            <LabelLarge>
                Web application starter package using NextJS, TypeScript and
                BaseWeb
            </LabelLarge>
            <StyledLink $as={Link} href="https://baseweb.design">
                BaseWeb website
            </StyledLink>
        </Block>
    );
}
