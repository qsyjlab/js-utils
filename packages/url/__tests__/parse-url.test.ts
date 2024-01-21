import { expect, test } from "vitest";
import { parseQuery } from "../index";

test("parseQuery", () => {
  const searchUrl = "?tab=repositories&muti=1&muti=2&b=&c=&c=&arr[]=0&arr[]=1";
  expect(parseQuery(searchUrl)).toStrictEqual({
    tab: "repositories",
    muti: ["1", "2"],
    b: "",
    c: ["", ""],
    "arr[]": ["0", "1"],
  });
});
