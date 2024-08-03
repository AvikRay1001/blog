import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/app/utils/auth";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

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
    return new NextResponse(JSON.stringify({posts,count}, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};


//CREATE A POST
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }
  
  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.error("Error creating comment:", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }  
};
