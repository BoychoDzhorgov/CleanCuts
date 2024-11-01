import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "vb4xp3vc",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-05",
})