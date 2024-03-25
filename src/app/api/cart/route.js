import { NextResponse } from "next/server";

export async function GET(req) {

    const { searchParams } = new URL(req.url)   // method 1
    const searchParams2 = req.nextUrl.searchParams
    // get all keys from url
    console.log('searchParams', searchParams)
    console.log('searchParams2', searchParams2)

    // get specific key's value
    const item = searchParams.get('name')
    console.log('Name', item)

    return NextResponse.json({ "msg": "Hello nextjs api" })
}