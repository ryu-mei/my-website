import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
})

export const getList = async (queries) => {
  const listData = await client.getList({
    endpoint: "articles",
    queries,
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return listData;
}

export const getDetail = async (contentId, queries) => {
  const detailData = await client.getListDetail({
    endpoint: "articles",
    contentId,
    queries,
  })

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return detailData;
}