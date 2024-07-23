import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  // console.log(searchParams);

  const page = parseInt(searchParams.get("page"), 10) || 1;
  let cat = searchParams.get("cat");

  // Check if 'cat' is an object and convert it to a string or leave it as an empty string
  // cat = typeof cat === 'object' && !Array.isArray(cat) ? JSON.stringify(cat) : cat || "";
  if (cat === 'undefined'){
    cat = "";
  }
  console.log(page);
  console.log(cat);

  const POST_PER_PAGE = 2;


    let query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1),
      where: {
       ...(cat && { catSlug: cat }),
      },
    };

  

  try {
    const posts = await prisma.post.findMany(query);
    console.log(posts);
    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
