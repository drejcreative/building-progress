"use server";

import { ApplicationConfirmationEmail } from "@/emails/application-confirmation";
import { ApplicationNotificationEmail } from "@/emails/application-notification";
import { render } from "@react-email/render";

// Helper function to get translations (same as in send-application-emails.tsx)
const getEmailTranslations = (locale: string) => {
  const translations = {
    en: {
      confirmation: {
        subject: "Application Confirmation - ProInvest VIP Program",
        greeting: "Thank you for your application!",
        message:
          "You have successfully applied for the ProInvest VIP Program! Your application has been received and our team will contact you as soon as possible.",
        applicationDetails: "Your Application Details:",
        nextSteps: "What's Next?",
        nextStepsList: [
          "Our team will review your application within 24 hours",
          "We will contact you to schedule a consultation",
          "We begin with free consultations",
          "We prepare a personalized investment plan",
        ],
        contactInfo: "Contact Information",
        followUs: "Follow Our Platform",
        dear: "Dear",
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        submissionTime: "Submission Time",
        propertyLocation: "Property Location",
        propertyValue: "Property Value",
        timeline: "Timeline",
        additionalInfo: "Additional Information",
        successMessage: "Application submitted successfully!",
        successDescription:
          "We'll review your application and get back to you within 24 hours.",
        errorMessage: "Submission failed",
        errorDescription:
          "Please try again or contact support if the problem persists.",
        submitting: "Submitting...",
        successfullySubmitted: "Successfully Submitted!",
        crmSystem: "ProInvest CRM - Automatic system notification",
        unsubscribe: "Unsubscribe",
        managePreferences: "Manage Preferences",
        footerText:
          "ProInvest, proinvest.rs - Your partner for real estate investments",
        emailLabel: "Email",
        phoneLabel: "Phone",
        addressLabel: "Address",
      },
      notification: {
        subject: "New VIP Program Application - {firstName} {lastName}",
        title: "New VIP Program Application",
        urgent: "URGENT - Contact client within 24 hours",
        clientInfo: "CLIENT INFORMATION:",
        investmentDetails: "INVESTMENT DETAILS:",
        nextSteps: "Next Steps:",
        nextStepsList: [
          "Contact client - call or send email within 24 hours",
          "Schedule consultation - arrange a meeting",
          "Prepare personalized plan - based on their needs",
          "Track progress - use CRM system",
        ],
        quickActions: "Quick Actions:",
        openCrm: "Open CRM System",
        newApplication:
          "You have received a new application for the ProInvest VIP Program!",
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        submissionTime: "Submission Time",
        propertyLocation: "Property Location",
        propertyValue: "Property Value",
        timeline: "Timeline",
        additionalInfo: "Additional Information",
        notSpecified: "Not specified",
        call: "Call",
        emailLabel: "Email",
        companyLabel: "Company",
        crmSystem: "ProInvest CRM - Automatic system notification",
      },
    },
    rs: {
      confirmation: {
        subject: "Potvrda prijave - ProInvest VIP Program",
        greeting: "Hvala vam na prijavi!",
        message:
          "Uspešno ste se prijavili za ProInvest VIP Program! Vaša prijava je primljena i naš tim će vas kontaktirati u najkraćem mogućem roku.",
        applicationDetails: "Detalji vaše prijave:",
        nextSteps: "Šta sledi?",
        nextStepsList: [
          "Naš tim će pregledati vašu prijavu u roku od 24 sata",
          "Kontaktiraćemo vas da dogovorimo detalje",
          "Počinjemo sa besplatnim konsultacijama",
          "Pripremamo personalizovani plan investicije",
        ],
        contactInfo: "Kontakt informacije",
        followUs: "Pratite našu platformu",
        dear: "Poštovani/a",
        name: "Ime i prezime",
        email: "Email",
        phone: "Telefon",
        company: "Kompanija",
        submissionTime: "Vreme prijave",
        propertyLocation: "Lokacija nekretnine",
        propertyValue: "Vrednost nekretnine",
        timeline: "Vremenski okvir",
        additionalInfo: "Dodatne informacije",
        successMessage: "Prijava je uspešno poslata!",
        successDescription:
          "Pregledaćemo vašu prijavu i odgovorićemo vam u roku od 24 sata.",
        errorMessage: "Slanje nije uspešno",
        errorDescription:
          "Molimo pokušajte ponovo ili kontaktirajte podršku ako se problem nastavi.",
        submitting: "Šalje se...",
        successfullySubmitted: "Uspešno poslato!",
        crmSystem: "ProInvest CRM - Automatska notifikacija sistema",
        unsubscribe: "Odjavi se",
        managePreferences: "Upravljaj preferencijama",
        footerText:
          "ProInvest, proinvest.rs - Vaš partner za investicije u nekretnine",
        emailLabel: "Email",
        phoneLabel: "Telefon",
        addressLabel: "Adresa",
      },
      notification: {
        subject: "Nova prijava za VIP Program - {firstName} {lastName}",
        title: "Nova prijava za VIP Program",
        urgent: "HITNO - Kontaktirajte klijenta u roku od 24 sata",
        clientInfo: "KLIJENT INFORMACIJE:",
        investmentDetails: "INVESTICIONI DETALJI:",
        nextSteps: "Sledeći koraci:",
        nextStepsList: [
          "Kontaktirajte klijenta - pozovite ili pošaljite email u roku od 24 sata",
          "Zakazite konsultacije - dogovorite sastanak",
          "Pripremite personalizovani plan - na osnovu njihovih potreba",
          "Pratite napredak - koristite CRM sistem",
        ],
        quickActions: "Brze akcije:",
        openCrm: "Otvori CRM sistem",
        newApplication: "Dobili ste novu prijavu za ProInvest VIP Program!",
        name: "Ime i prezime",
        email: "Email",
        phone: "Telefon",
        company: "Kompanija",
        submissionTime: "Vreme prijave",
        propertyLocation: "Lokacija nekretnine",
        propertyValue: "Vrednost nekretnine",
        timeline: "Vremenski okvir",
        additionalInfo: "Dodatne informacije",
        notSpecified: "Nije navedeno",
        call: "Pozovite",
        emailLabel: "Email",
        companyLabel: "Kompanija",
        crmSystem: "ProInvest CRM - Automatska notifikacija sistema",
      },
    },
  };

  return translations[locale as keyof typeof translations] || translations.en;
};

// Test function to verify email templates render correctly
export const testEmailTemplates = async () => {
  const testData = {
    firstName: "Marko",
    lastName: "Petrović",
    email: "marko.petrovic@example.com",
    phone: "+381 11 123 4567",
    company: "Test Company",
    propertyLocation: "belgrade",
    propertyValue: "200k-350k",
    timeline: "1-3-months",
    additionalInfo: "Interested in luxury apartments in Belgrade city center.",
    locale: "rs",
  };

  try {
    const translations = getEmailTranslations(testData.locale);

    // Test confirmation email
    const confirmationHtml = await render(
      <ApplicationConfirmationEmail
        {...testData}
        translations={translations.confirmation}
      />
    );
    console.log("✅ Confirmation email template renders successfully");
    console.log("Confirmation email length:", confirmationHtml.length);

    // Test notification email
    const notificationHtml = await render(
      <ApplicationNotificationEmail
        {...testData}
        submittedAt="15. januar 2024, 14:30"
        translations={translations.notification}
      />
    );
    console.log("✅ Notification email template renders successfully");
    console.log("Notification email length:", notificationHtml.length);

    return {
      success: true,
      confirmationLength: confirmationHtml.length,
      notificationLength: notificationHtml.length,
    };
  } catch (error) {
    console.error("❌ Email template test failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
