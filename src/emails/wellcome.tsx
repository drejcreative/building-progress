import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  pixelBasedPreset,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import type * as React from "react";

const baseUrl = process.env.URL ? `https://proinvest.rs` : "";

const links = [
  {
    title: "Pregledajte objekte",
    href: "https://proinvest.rs",
  },
  { title: "Kontaktirajte nas", href: "https://proinvest.rs" },
];

export const ProInvestWelcomeEmail = () => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                brand: "#1e40af",
                offwhite: "#f8fafc",
                accent: "#059669",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Preview>
          Dobrodošli u ProInvest - Vaš partner za investicije u nekretnine
        </Preview>
        <Body className="bg-offwhite font-sans text-base">
          <Img
            src={`${baseUrl}/proinvest-logo.svg`}
            width="200"
            height="60"
            alt="ProInvest"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45">
            <Heading className="my-0 text-center leading-8 text-brand">
              Dobrodošli u ProInvest
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">
                  Čestitamo! Pridružili ste se investitorima koji koriste
                  ProInvest za pametne investicije u nekretnine. Naša platforma
                  vam omogućava da pronađete i upravljate najboljim
                  investicionim prilikama.
                </Text>

                <Text className="text-base">Evo kako da započnete:</Text>
              </Row>
            </Section>

            <Section className="text-center">
              <Button className="rounded-lg bg-brand px-[18px] py-3 text-white">
                Idite na vaš dashboard
              </Button>
            </Section>

            <Section className="mt-45">
              <Row>
                {links?.map((link) => (
                  <Column key={link.title}>
                    <Link
                      className="font-bold text-black underline"
                      href={link.href}
                    >
                      {link.title}
                    </Link>{" "}
                    <span className="text-accent">→</span>
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="px-20 text-right">
                  <Link>Odjavi se</Link>
                </Column>
                <Column className="text-left">
                  <Link>Upravljaj preferencijama</Link>
                </Column>
              </Row>
            </Section>
            <Text className="mb-45 text-center text-gray-400">
              ProInvest, proinvest.rs - Vaš partner za investicije u nekretnine
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
