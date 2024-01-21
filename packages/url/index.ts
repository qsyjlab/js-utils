import { isArray } from "../utils";
import { decode } from "./encode";

type LocationQueryValue = string | null;
type LocationQuery = Record<string, LocationQueryValue | LocationQueryValue[]>;

const PLUS_RE = /\+/g; // %2B
export function parseQuery(search: string): LocationQuery {
  const query: LocationQuery = {};
  if (search === "" || search === "?") return query;

  const hasLeadingIM = search[0] === "?";
  const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
  for (let i = 0; i < searchParams.length; ++i) {
    const searchParam = searchParams[i].replace(PLUS_RE, " ");
    const eqPos = searchParam.indexOf("=");
    const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
    const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));

    if (key in query) {
      let currentValue = query[key];
      if (!isArray(currentValue)) {
        currentValue = query[key] = [currentValue];
      }
      // we force the modification
      (currentValue as LocationQueryValue[]).push(value);
    } else {
      query[key] = value;
    }
  }
  return query;
}
