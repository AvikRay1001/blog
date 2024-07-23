import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  // console.log(searchParams);

  const page = parseInt(searchParams.get("page"), 10) || 1;
  let cat = searchParams.get("cat");

  if (cat === 'undefined'){
    cat = "";
  }


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
    const count = await prisma.post.count({where: query.where});
    console.log(posts);
    return new NextResponse(JSON.stringify({posts,count}, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
