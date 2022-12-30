aha.on("figmaUnLink", async ({ record }) => {
  await record.setExtensionField("aha-develop.figma", "figmaLink", null);
});
