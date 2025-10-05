"use server";

import { ApplicationConfirmationEmail } from "@/emails/application-confirmation";
import { ApplicationNotificationEmail } from "@/emails/application-notification";
import { contactConfig } from "@/config/contact";
import Plunk from "@plunk/node";
import { render } from "@react-email/render";

// Helper function to get translations based on locale
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

interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  propertyLocation: string;
  propertyValue: string;
  timeline: string;
  additionalInfo?: string;
  locale: string;
}

export const sendApplicationEmails = async (formData: ApplicationFormData) => {
  try {
    const apiKey = process.env.PLUNK_API_KEY;

    if (!apiKey) {
      console.error("PLUNK_API_KEY is not configured");
      throw new Error("Email service not configured");
    }

    const plunk = new Plunk(apiKey);
    const translations = getEmailTranslations(formData.locale);
    const submittedAt = new Date().toLocaleString(
      formData.locale === "rs" ? "sr-RS" : "en-US",
      {
        timeZone: "Europe/Belgrade",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    );

    // Subscribe user to contact list first
    try {
      const subscribeResponse = await fetch(
        "https://api.useplunk.com/v1/contacts",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone,
            company: formData.company || "",
            subscribed: true,
            custom_fields: {
              property_location: formData.propertyLocation,
              property_value: formData.propertyValue,
              timeline: formData.timeline,
              application_date: submittedAt,
            },
          }),
        }
      );

      if (subscribeResponse.ok) {
        console.log(`User ${formData.email} subscribed to contact list`);
      } else {
        const errorText = await subscribeResponse.text();
        console.error(
          `Failed to subscribe user: ${subscribeResponse.status} - ${errorText}`
        );
      }
    } catch (subscribeError) {
      console.error("Failed to subscribe user:", subscribeError);
      // Continue with email sending even if subscription fails
    }

    // Send confirmation email to customer
    const confirmationBody = await render(
      <ApplicationConfirmationEmail
        {...formData}
        translations={translations.confirmation}
      />
    );

    await plunk.emails.send({
      to: formData.email,
      subject: translations.confirmation.subject,
      body: confirmationBody,
    });

    console.log(`Confirmation email sent to ${formData.email}`);

    // Send notification email to sales team
    const notificationBody = await render(
      <ApplicationNotificationEmail
        {...formData}
        submittedAt={submittedAt}
        translations={translations.notification}
      />
    );

    await plunk.emails.send({
      to: contactConfig.email.sales,
      subject: translations.notification.subject
        .replace("{firstName}", formData.firstName)
        .replace("{lastName}", formData.lastName),
      body: notificationBody,
    });
    console.log(`Notification email sent to ${contactConfig.email.sales}`);

    return {
      success: true,
      message: "Emails sent successfully",
    };
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send emails");
  }
};
