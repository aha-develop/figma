aha.on("figmaLink", async ({ record }) => {
  const link = await aha.commandPrompt("Paste a Figma file URL");
  await record.setExtensionField("aha-develop.figma", "figmaLink", link);
});
