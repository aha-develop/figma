import React from "react";

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
  return (
    <>
      <aha-flex alignItems="start" justifycontent="space-between">
        {!fields.figmaLink && <span />}
        {fields.figmaLink && (
          <iframe
            width="95%"
            height="400"
            frameBorder="0"
            style={{ border: "1px solid #ccc" }}
            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
              fields.figmaLink
            )}`}
            allowFullScreen
          ></iframe>
        )}
        <aha-action-menu buttonSize="medium" style={{ marginLeft: 5 }}>
          <aha-menu>
            <aha-menu-item onClick={() => link(record)}>
              Link Figma file...
            </aha-menu-item>
            {fields.link && (
              <aha-menu-item onClick={() => unLink(record)}>
                Unlink
              </aha-menu-item>
            )}
          </aha-menu>
        </aha-action-menu>
      </aha-flex>
    </>
  );
});
