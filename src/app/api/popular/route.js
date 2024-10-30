import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";


export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const fetchType = searchParams.get("type") || "";
  let cat = searchParams.get("cat");

  if (cat === 'undefined'){
    cat = "";
  }

  const POST_PER_PAGE = 4;

  
  let query = {
    take: POST_PER_PAGE,
    where: {},
    orderBy: {},
    include: { user: true}
  };


  try {
    if (fetchType === "editors-pick") {

      query.where = { ...query.where, isEditorPick: true };
      query.orderBy = { createdAt: 'desc' };

    } else if (fetchType === "most-views") {

      query.orderBy = { views: 'desc' };
    }

    const posts = await prisma.post.findMany(query);
    const count = await prisma.post.count({ where: query.where });

    console.log(posts);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

