/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kida0ju3hzw7qxn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nnuvbiwz",
    "name": "media",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 99,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kida0ju3hzw7qxn")

  // remove
  collection.schema.removeField("nnuvbiwz")

  return dao.saveCollection(collection)
})
