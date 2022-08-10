import React from "react";
import { EmbeddedContent } from "@aha-develop/aha-develop-react";
import { ensureEmbedFlags } from "../ensureEmbedFlags";

aha.on("figmaLink", async ({ record }) => {
  const link = await aha.commandPrompt("Paste a Figma file URL");
  await record.setExtensionField("aha-develop.figma", "figmaLink", link);
});

aha.on("figmaUnLink", async ({ record }) => {
  await record.setExtensionField("aha-develop.figma", "figmaLink", null);
});

async function link(record) {
  await aha.command("aha-develop.figma.figmaLink", { record });
}

async function unLink(record) {
  await aha.command("aha-develop.figma.figmaUnLink", { record });
}

aha.on("figmaAttribute", ({ record, fields }) => {
  const url = ensureEmbedFlags(fields.figmaLink);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gridGap: 10,
        }}
      >
        {!fields.figmaLink && <span />}
        {fields.figmaLink && <EmbeddedContent src={url} />}
        <aha-menu>
          <aha-button slot="control" kind="secondary" size="small">
            <aha-icon icon="fa-solid fa-ellipsis"></aha-icon>
          </aha-button>
          <aha-menu-content>
            <aha-menu-item>
              <aha-button kind="plain" onClick={() => link(record)}>
                Link Figma file...
              </aha-button>
            </aha-menu-item>
            {fields.figmaLink && (
              <aha-menu-item>
                <aha-button kind="plain" onClick={() => unLink(record)}>
                  Unlink
                </aha-button>
              </aha-menu-item>
            )}
          </aha-menu-content>
        </aha-menu>
      </div>
    </>
  );
});
