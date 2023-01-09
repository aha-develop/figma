import React from "react";
import { EmbeddedContentAttribute } from "@aha-develop/aha-develop-react";
import { ensureEmbedFlags } from "../ensureEmbedFlags";

const identifier = "aha-develop.figma";

aha.on("figmaAttribute", ({ record, fields }) => {
  return (
    <EmbeddedContentAttribute
      identifier={identifier}
      record={record}
      fields={fields}
      product="Figma"
      fieldName="figmaLink"
      placeholder="Add Figma URL"
      transformValue={ensureEmbedFlags}
    />
  );
});
