import { Schema, SchemaOptions } from "mongoose";

export const createMongoosePluginObjectIdToString = () => {
  Schema.Types.ObjectId.get((v) => (v != null ? v.toString() : v));

  const optionKeys: Array<keyof SchemaOptions> = ["toObject", "toJSON"];

  return (schema: Schema) => {
    optionKeys.forEach((optionKey) => {
      if (schema.get(optionKey) == null) {
        schema.set(optionKey, {
          getters: true,
        });
      }
    });
  };
};
