import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema:
    "https://api-sa-east-1.hygraph.com/v2/clcihev152dd001tafgy2fe2j/master",
  documents: ["src/**/*.graphql"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
