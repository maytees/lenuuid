import {
  assertEquals,
  assertFalse,
  assertNotEquals,
} from "https://deno.land/std@0.179.0/testing/asserts.ts";
import { LenUUID } from "./main.ts";

Deno.test(function lengthCorrectTest() {
  assertEquals(LenUUID.genLenUUID(10).length, 10);
});

Deno.test(function lengthWrongTest() {
  assertNotEquals(LenUUID.genLenUUID(10).length, 11);
});
