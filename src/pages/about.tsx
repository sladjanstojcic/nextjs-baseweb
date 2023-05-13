import { StyledLink } from 'baseui/link';
import { LabelLarge } from 'baseui/typography';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <LabelLarge>
                Web application starter package using NextJS, TypeScript and
                BaseWeb
            </LabelLarge>
            <StyledLink $as={Link} href="https://baseweb.design">
                BaseWeb website
            </StyledLink>
        </>
    );
}
