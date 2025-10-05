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
import { contactConfig } from "@/config/contact";
import * as React from "react";

const baseUrl = process.env.URL ? `https://proinvest.rs` : "";

interface ApplicationConfirmationEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  propertyLocation: string;
  propertyValue: string;
  timeline: string;
  additionalInfo?: string;
  translations: {
    subject: string;
    greeting: string;
    message: string;
    applicationDetails: string;
    nextSteps: string;
    nextStepsList: string[];
    contactInfo: string;
    followUs: string;
    dear: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    submissionTime: string;
    propertyLocation: string;
    propertyValue: string;
    timeline: string;
    additionalInfo: string;
    successMessage: string;
    successDescription: string;
    errorMessage: string;
    errorDescription: string;
    submitting: string;
    successfullySubmitted: string;
    crmSystem: string;
    unsubscribe: string;
    managePreferences: string;
    footerText: string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
  };
}

export const ApplicationConfirmationEmail = ({
  firstName,
  lastName,
  email,
  phone,
  company,
  propertyLocation,
  propertyValue,
  timeline,
  additionalInfo,
  translations,
}: ApplicationConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
          theme: {
            extend: {
              colors: {
                brand: "#dc2626",
                offwhite: "#f8fafc",
                accent: "#ea580c",
                success: "#059669",
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
        <Preview>{translations.subject}</Preview>
        <Body className="bg-offwhite font-sans text-base">
          <Img
            src={`${baseUrl}/proinvest-logo.png`}
            width="200"
            height="60"
            alt="ProInvest"
            className="mx-auto my-20"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "200px",
              height: "auto",
            }}
          />
          <Container className="bg-white p-45">
            <Heading className="my-0 text-center leading-8 text-brand">
              {translations.greeting}
            </Heading>

            <Section>
              <Text className="text-base">
                {translations.dear} {firstName} {lastName},
              </Text>

              <Text className="text-base">{translations.message}</Text>

              <Text className="text-base font-semibold">
                {translations.applicationDetails}
              </Text>

              <Section className="bg-gray-50 p-4 rounded-lg">
                <Text className="text-sm">
                  <strong>{translations.name}:</strong> {firstName} {lastName}
                </Text>
                <Text className="text-sm">
                  <strong>{translations.email}:</strong> {email}
                </Text>
                <Text className="text-sm">
                  <strong>{translations.phone}:</strong> {phone}
                </Text>
                {company && (
                  <Text className="text-sm">
                    <strong>{translations.company}:</strong> {company}
                  </Text>
                )}
                <Text className="text-sm">
                  <strong>{translations.propertyLocation}:</strong>{" "}
                  {propertyLocation}
                </Text>
                <Text className="text-sm">
                  <strong>{translations.propertyValue}:</strong> {propertyValue}
                </Text>
                <Text className="text-sm">
                  <strong>{translations.timeline}:</strong> {timeline}
                </Text>
                {additionalInfo && (
                  <Text className="text-sm">
                    <strong>{translations.additionalInfo}:</strong>{" "}
                    {additionalInfo}
                  </Text>
                )}
              </Section>

              <Text className="text-base">
                <strong>{translations.nextSteps}</strong>
              </Text>

              <Text className="text-base">
                {translations.nextStepsList.map((step, index) => (
                  <React.Fragment key={index}>
                    • {step}
                    <br />
                  </React.Fragment>
                ))}
              </Text>
            </Section>

            <Section className="text-center">
              <Button className="rounded-lg bg-brand px-[18px] py-3 text-white">
                {translations.followUs}
              </Button>
            </Section>

            <Section>
              <Text className="text-sm text-gray-600">
                <strong>{translations.contactInfo}:</strong>
                <br />
                {translations.emailLabel}: {contactConfig.email.general}
                <br />
                {translations.phoneLabel}: {contactConfig.phone.number}
                <br />
                {translations.addressLabel}: {contactConfig.address}
              </Text>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="px-20 text-right">
                  <Link>{translations.unsubscribe}</Link>
                </Column>
                <Column className="text-left">
                  <Link>{translations.managePreferences}</Link>
                </Column>
              </Row>
            </Section>
            <Text className="mb-45 text-center text-gray-400">
              {translations.footerText}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
