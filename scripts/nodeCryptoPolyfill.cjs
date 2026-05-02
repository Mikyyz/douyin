const nodeCrypto = require("crypto");
const v8 = require("v8");

if (
  typeof globalThis.crypto !== "object" ||
  typeof globalThis.crypto?.getRandomValues !== "function"
) {
  globalThis.crypto = nodeCrypto.webcrypto;
}

if (
  typeof nodeCrypto.getRandomValues !== "function" &&
  typeof nodeCrypto.webcrypto?.getRandomValues === "function"
) {
  nodeCrypto.getRandomValues = nodeCrypto.webcrypto.getRandomValues.bind(
    nodeCrypto.webcrypto,
  );
}

if (typeof globalThis.structuredClone !== "function") {
  globalThis.structuredClone = (value) => v8.deserialize(v8.serialize(value));
}
