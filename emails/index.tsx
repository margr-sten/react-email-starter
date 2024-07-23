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
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface TangifyWelcomeEmailProps {
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
  links?: { text: string, url: string }[];
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const PropDefaults: TangifyWelcomeEmailProps = {
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-20" key={1}>
          <strong>Deploy your first invention.</strong>{" "}
          Log in, choose a document and let us help you with your patent application.
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-20" key={2}>
          <strong>Go over the answers.</strong> Read over the answers that were generated and add on.{" "}
          <Link href="https://tangify.co/start-patent-process">Learn how to start the patent process</Link>
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-20" key={3}>
          <strong>Show it to your lawyer</strong> to save time and effort on tasks you'd rather not do. 
          Make the most of your resources and discover how our tool can streamline your legal processes. <Link href="https://tangify.co/read-more-about-patents">Read more about patents here</Link>.
        </li>
      ),
    },
    
  ],
  links: [
    { text: "Contact us", url: "https://tangify.co/contact" },
    { text: "Blog", url: "https://tangify.co/blog" },
    { text: "Feedback", url: "https://tangify.co/feedback" },
  ],
};

export const TangifyWelcomeEmail = ({
  steps = PropDefaults.steps,
  links = PropDefaults.links,
}: TangifyWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Tangify Welcome</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "rgb(253, 80, 80)",
                offwhite: "#fafbfb",
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
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src="https://drive.google.com/uc?export=view&id=1EhUKYlBcKUkYSp7RO8omx-zZOsR3Rk9z"
            width="75"
            height="75"
            alt="Tangify"
            className="mx-auto my-20 text-center"
          />
          <Container className="bg-white p-45">
            <Heading className="text-center my-0 leading-8">
              Welcome to Tangify!
            </Heading>

            <Section>
              <Row>
                <Text className="text-base">Thank you for signing up.</Text>
                <Text className="text-base">
                  At Tangify, our mission is to simplify the patent application process using the power of AI. 
                  We understand that navigating the patent landscape can be complex, and we're here to make it easier for you.
                </Text>

                <Text className="text-base">Here's how to get started:</Text>
              </Row>
            </Section>

            <ul>{steps?.map(({ Description }) => Description)}</ul>

            <Section className="text-center">
              <Link href="https://tangify.ai" className="no-underline">
                <Button className="bg-brand text-white rounded-lg py-3 px-[18px]">
                  Go to your dashboard
                </Button>
              </Link>
            </Section>

            <Section>
              <Row>
                <Text className="text-base">
                  If you have any questions, feel free to <Link href="https://tangify.co/contact">contact us</Link>.
                </Text>
                <Text className="text-base">
                  We are here to assist you with any inquiries you may have.
                </Text>
              </Row>
            </Section>

            <Section className="mt-45 text-center">
              <Row>
                {links?.map((link) => (
                  <Column key={link.text}>
                    <Link href={link.url} className="text-black underline font-bold">
                      {link.text}
                    </Link>{" "}
                    <span className="text-center-black-500">→</span>
                  </Column>
                ))}
              </Row>
            </Section>
          </Container>

          <Container className="mt-20">
            <Section>
              <Row>
                <Column className="text-right px-20">
                  <Link href="https://tangify.co/unsubscribe">Unsubscribe</Link>
                </Column>
                <Column className="text-left">
                  <Link href="https://tangify.co/manage-preferences">Manage Preferences</Link>
                </Column>
              </Row>
            </Section>
            <Text className="text-center text-gray-400 mb-45">
              10 Fan Pier Boulevard 3rd floor, Boston, MA 02210, USA
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default TangifyWelcomeEmail;
