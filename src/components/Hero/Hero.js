import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I am <br />
        CANAKIL, a software developer
      </SectionTitle>
      <SectionText>
        I am a software developer who is more than interested in new technologies and everything that includes computers.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:canakildev@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;