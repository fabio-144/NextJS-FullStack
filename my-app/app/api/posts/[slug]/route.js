import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    const isNumericID = /^\d+$/.test(String(slug));
    const where = isNumericID ? { id: Number(slug) } : { slug: String(slug) };

    const post = await prisma.post.findUnique({
      where: where,
    });
    if (!post) {
      return new NextResponse(JSON.stringify({ error: "Post not found" }), {
        status: 404,
      });
    }

    const updatedPost = await prisma.post.update({
      where: { slug: slug },
      data: { views: { increment: 1 } },
      include: {
        user: true,
      },
    });

    return new NextResponse(JSON.stringify(updatedPost), { status: 200 });
  } catch (error) {
    console.error("posts/[slug] GET error:", error);

    return new NextResponse(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
};
