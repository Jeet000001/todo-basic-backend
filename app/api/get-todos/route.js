import { NextResponse } from "next/server";

export const todos = [
  {
    id: 1,
    heading: "Learn React",
    description: "Start Learning React.js",
  },
  {
    id: 2,
    heading: "Learn Next.js",
    description: "Start Learning Next.js",
  },
  {
    id: 3,
    heading: "Interview prep",
    description: "Start Interview prepration",
  },
];
export const GET = async (request) => {
  try {
    return NextResponse.json({
        data: todos
    }, {status: 200})
  } catch (error) {
    return NextResponse.json({
        error: "Faild to Get Todos"
    }, {status: 500})
  }
};
