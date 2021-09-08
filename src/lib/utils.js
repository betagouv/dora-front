import showdown from "showdown";
import { get } from "svelte/store";

import { browser } from "$app/env";

import { token } from "$lib/auth";
import { defaultAcceptHeader } from "$lib/utils/api";

export function markdownToHTML(md) {
  const converter = new showdown.Converter();
  return converter.makeHtml(md);
}

export function htmlToMarkdown(html) {
  if (browser) {
    const converter = new showdown.Converter();
    return converter.makeMarkdown(html);
  }
  return "";
}

export async function fetchData(
  url,
  { acceptHeader = defaultAcceptHeader } = {}
) {
  const headers = {
    Accept: acceptHeader,
  };
  const tk = get(token);
  if (tk) {
    headers.Authorization = `Token ${tk}`;
  }
  const response = await fetch(url, {
    headers,
  });

  return {
    ok: response.ok,
    data: response.ok ? await response.json() : null,
    error: response.ok ? null : await response.json(),
    status: response.status,
    statusText: response.statusText,
  };
}

export function shortenString(str, length = 50) {
  if (str.length > length) {
    return `${str.slice(0, length)}…`;
  }
  return str;
}
