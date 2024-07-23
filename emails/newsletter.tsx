import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

export const TangifyWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>Welcome to Tangify!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <div style={logoContainer}>
            <Img
              width={50}
              src="logo.png" 
              alt="Tangify Logo"
            />
            <Text style={logoText}>Tangify</Text>
          </div>
        </Section>
        <Heading style={welcomeText}>Welcome to us!</Heading>
        <Section style={introSection}>
          <div style={introContainer}>
            <Row style={introRow}>
              <Column style={introImageColumn}>
                <Img
                  width={200}
                  src="sleeping.png"
                  alt="Sleeping"
                />
              </Column>
              <Column style={introTextColumn}>
                <Heading style={introHeading}>Does IP keep <br/> you up at night?</Heading>
              </Column>
            </Row>
            <Row style={buttonRow}>
              <Link style={introButton} href="tangify.co">
                Sleep better here
              </Link>
            </Row>
          </div>
        </Section>
        <Section style={contentSection}>
          <Text style={contentText}>
            Hi, Margrethe
            <br />
            <br />
            Thank you for signing up.
            <br />
            <br />
            At Tangify, our mission is to simplify the patent application process
            using the power of AI. We understand that navigating the patent
            landscape can be complex, and we're here to make it easier for you.
            <br />
            <br />
            If you have any questions or need assistance, feel free to reach out
            to us at [support email] or visit our [Help Center/FAQ page]. We’re
            here to help!
          </Text>
        </Section>
        <Section style={footerSection}>
        <Link href="mailto:support@example.com" style={footerLink}>
          <Text style={footerText}>CONTACT US</Text>
        </Link>
          <Row>
            <Column style={socialColumn}>
              <Link href="https://www.linkedin.com/company/tangify">
                <Img
                  width={30}
                  src="linkedin-logo"
                  alt="LinkedIn"
                />
              </Link>
            </Column>
            <Column style={socialColumn}>
              <Link href="https://x.com/tangifyapp">
                <Img
                  width={30}
                  src="x-logo"
                  alt="X-logo"
                />
              </Link>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  fontFamily: "'Roboto', sans-serif",
  backgroundColor: "#f3f3f5",
  padding: "20px",
};

const logo = () => {
  return <Img src="tangify-logo.png" alt="Tangify" width="300" height="300" />;
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
  margin: "0 auto",
  maxWidth: "600px",
  padding: "20px",
};

const logoSection = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "20px",
};

const logoContainer = {
  display: "flex",
  alignItems: "center",
};

const logoText = {
  color: "#fb5e5e",
  fontSize: "24px",
  marginLeft: "10px",
  fontWeight: "bold",
};

const welcomeText = {
  textAlign: "center" as "center",
  color: "#fb5e5e",
  fontSize: "24px",
  marginBottom: "20px",
};

const introSection = {
  display: "flex",
  flexDirection: "column" as "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
  backgroundColor: "#FDF8F5", 
  padding: "20px",
  borderRadius: "8px",
};

const introContainer = {
  width: "100%",
  textAlign: "center" as "center",
};

const introRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
};

const introImageColumn = {
  flex: "0 0 auto",
  textAlign: "center" as "center",
  padding: "0 20px",
};

const introTextColumn = {
  flex: "1",
  textAlign: "center" as "center",
};

const introHeading = {
  color: "#fb5e5e",
  fontSize: "18px",
  marginBottom: "10px",
};

const buttonRow = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const introButton = {
  display: "inline-block",
  backgroundColor: "#fb5e5e",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "5px",
  textDecoration: "none",
  textAlign: "center" as "center",
};

const contentSection = {
  marginBottom: "20px",
  textAlign: "center" as "center",
  padding: "0 50px",
};

const contentText = {
  fontSize: "14px",
  color: "#333333",
  lineHeight: "1.5",
};

const footerSection = {
  textAlign: "center" as "center",
  backgroundColor: "#fb5e5e",
  color: "#ffffff",
  padding: "10px 0",
  borderRadius: "0 0 8px 8px",
};

const footerText = {
  fontSize: "14px",
  marginBottom: "10px",
};

const footerLink = {
  textDecoration: "none",
  marginBottom: "10px",
  color: "#ffffff",
};

const socialColumn = {
  display: "inline-block",
  margin: "0 10px",
};

export default TangifyWelcomeEmail;
