import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from "urql";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });
const client = createClient({
  url: `https://api-sa-east-1.graphcms.com/v2/cl4w3kvnp20fh01ueartp6fuy/master`,
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetchOptions: () => {
    return { headers: {} };
  },
});

export { client, ssrCache };