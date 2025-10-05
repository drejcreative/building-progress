import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  pixelBasedPreset,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.URL ? `https://proinvest.rs` : "";

interface ApplicationNotificationEmailProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  propertyLocation: string;
  propertyValue: string;
  timeline: string;
  additionalInfo?: string;
  submittedAt: string;
  translations: {
    subject: string;
    title: string;
    urgent: string;
    clientInfo: string;
    investmentDetails: string;
    nextSteps: string;
    nextStepsList: string[];
    quickActions: string;
    openCrm: string;
    newApplication: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    submissionTime: string;
    propertyLocation: string;
    propertyValue: string;
    timeline: string;
    additionalInfo: string;
    notSpecified: string;
    call: string;
    emailLabel: string;
    companyLabel: string;
    crmSystem: string;
  };
}

export const ApplicationNotificationEmail = ({
  firstName,
  lastName,
  email,
  phone,
  company,
  propertyLocation,
  propertyValue,
  timeline,
  additionalInfo,
  submittedAt,
  translations,
}: ApplicationNotificationEmailProps) => {
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
                warning: "#d97706",
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
          {translations.subject
            .replace("{firstName}", firstName)
            .replace("{lastName}", lastName)}
        </Preview>
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
              🚨 {translations.title}
            </Heading>

            <Section>
              <Text className="text-base">{translations.newApplication}</Text>

              <Text className="text-base font-semibold text-warning">
                ⚠️ {translations.urgent}
              </Text>

              <Section className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <Text className="text-sm font-semibold text-red-800">
                  {translations.clientInfo}
                </Text>
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
                  <strong>{translations.submissionTime}:</strong> {submittedAt}
                </Text>
              </Section>

              <Section className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <Text className="text-sm font-semibold text-blue-800">
                  {translations.investmentDetails}
                </Text>
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

              <Text className="text-base font-semibold">
                {translations.nextSteps}
              </Text>

              <Text className="text-base">
                {translations.nextStepsList.map((step, index) => (
                  <React.Fragment key={index}>
                    {index + 1}. <strong>{step.split(" - ")[0]}</strong> -{" "}
                    {step.split(" - ")[1]}
                    <br />
                  </React.Fragment>
                ))}
              </Text>
            </Section>

            <Section className="text-center">
              <Button className="rounded-lg bg-brand px-[18px] py-3 text-white">
                {translations.openCrm}
              </Button>
            </Section>

            <Section>
              <Text className="text-sm text-gray-600">
                <strong>{translations.quickActions}</strong>
                <br />
                📞 {translations.call}: {phone}
                <br />
                📧 {translations.emailLabel}: {email}
                <br />
                💼 {translations.companyLabel}:{" "}
                {company || translations.notSpecified}
              </Text>
            </Section>
          </Container>

          <Container className="mt-20">
            <Text className="mb-45 text-center text-gray-400">
              {translations.crmSystem}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
