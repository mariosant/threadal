/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kida0ju3hzw7qxn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ulrbywyw",
    "name": "alias",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kida0ju3hzw7qxn")

  // remove
  collection.schema.removeField("ulrbywyw")

  return dao.saveCollection(collection)
})
