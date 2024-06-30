onRecordAfterCreateRequest((e) => {
  console.log(e.httpContext);
  console.log(e.record);

  const collection = $app.dao().findCollectionByNameOrId("pages");

  const record = new Record(collection, {
    title: "John Doe",
    subtitle: "Lorem ipsum dorcet sit.",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user: e.record.getId(),
    alias: "alias",
  });

  $app.dao().saveRecord(record);
}, "users");
