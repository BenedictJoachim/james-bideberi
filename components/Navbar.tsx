// components/Navbar.tsx
import { Navbar, Link } from '@nextui-org/react';

const NavigationBar = () => {
  return (
    <Navbar isBordered variant="floating">
      <Navbar.Brand>
        <Link href="/">Jay Family</Link>
      </Navbar.Brand>
      <Navbar.Toggle showIn="sm" />
      <Navbar.Content hideIn="sm" variant="highlight">
        <Navbar.Link href="/photography">Photography</Navbar.Link>
        <Navbar.Link href="/fitness">Fitness</Navbar.Link>
        <Navbar.Link href="/art">Art</Navbar.Link>
        <Navbar.Link href="/blog">Blog</Navbar.Link>
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.CollapseItem>
          <Link href="/photography">Photography</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="/fitness">Fitness</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="/art">Art</Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link href="/blog">Blog</Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
