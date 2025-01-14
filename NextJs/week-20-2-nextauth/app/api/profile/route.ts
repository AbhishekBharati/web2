import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function GET(req: NextRequest) {
  // const headers = req.headers;
  // const authorizationHeader = headers["authorization"];
  // const decode = jwt.decode(authorizationHeader);
  //
  // //@ts-ignore
  // const userID = decode.userId;
  //
  // // Hit the DB to get the users Profile Picture :-

  return NextResponse.json({
    avatarURL: "http://images.google.com/cat.png"
  });
}
