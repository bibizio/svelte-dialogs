import crypto from "crypto";
global.crypto = crypto;

global.testutils = {
  wait: (millis = 1000) => new Promise((resolve) => setTimeout(resolve, millis)),
};