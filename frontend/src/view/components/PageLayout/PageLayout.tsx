import { Container } from '@mantine/core';

import { BaseComponent } from '../../../app/interfaces/BaseComponent';
import { Navbar } from '../Navbar/Navbar';

export const PageLayout = ({ children }: BaseComponent) => (
    <>
        <Navbar />
        <Container>{children}</Container>
    </>
);
