import {
  Page,
  Layout,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { HomePageCard } from "../components";

export default function HomePage() {
  return (
    <Page fullWidth>
      <TitleBar title="Stack App" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <HomePageCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
