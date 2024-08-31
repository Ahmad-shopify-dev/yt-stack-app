import {LegacyCard, Text} from '@shopify/polaris';
import React, { useEffect } from 'react'
import { useAuthenticatedFetch } from '../hooks';

// THIS IS FOR UPCOMING VIDEO
export function HomePageCard() {


    let fetch = useAuthenticatedFetch();

    useEffect(() => {
      async function testOrder() {
        let request = await fetch("/api/store/orders");
        let response = await request.json();
        console.log(response)
      }

      async function sotreAssets() {
        let request = await fetch("/api/assets/all");
        let response = await request.json();
        console.log(response)
      }

      testOrder()
      sotreAssets();

    }, []);

  return (
    <React.Fragment>
      <LegacyCard sectioned>
        <Text as="h2" variant="bodyMd">
            Content inside a card
        </Text>
      </LegacyCard>
    </React.Fragment>
  )
}
