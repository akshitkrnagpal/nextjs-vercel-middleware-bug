import { NextResponse } from "next/server";

export const middleware = (req) => {
  const url = req.nextUrl;
  if (url.searchParams.get("lng")) {
    const language = url.searchParams.get("lng").substr(0, 2);
    url.searchParams.delete("lng");
    if (language !== url.locale) {
      url.locale = language;
    }
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
};
