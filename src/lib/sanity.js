import {createClient} from 'next-sanity';
export const client = createClient({
  projectId: "9fd6bban",
  dataset: "production",
    apiVersion: "2023-10-17",
    useCdn: false,});