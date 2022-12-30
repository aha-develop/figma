import React from "react";
import { EmbeddedContent } from "@aha-develop/aha-develop-react";
import { ensureEmbedFlags } from "../ensureEmbedFlags";

const AhaPanel = aha.getPanel("aha-develop.figma", "figmaPanel", {
  name: "Figma",
});

AhaPanel.on("render", ({ props }) => {
  const { panel } = props;
  const url = ensureEmbedFlags(panel.settings.url);

  return <EmbeddedContent src={url} />;
});

// Settings
AhaPanel.on({ action: "settings" }, () => {
  return [
    {
      key: "url",
      type: "Text",
      title: "Embed url",
    },
  ];
});
