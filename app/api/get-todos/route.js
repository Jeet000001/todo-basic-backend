import { NextResponse } from "next/server";

export const todos = [
  {
    id: 1,
    heading: "Learn React",
    discription: "Start Learning React.js",
  },
  {
    id: 2,
    heading: "Learn Next.js",
    discription: "Start Learning Next.js",
  },
  {
    id: 3,
    heading: "Interview prep",
    discription: "Start Interview prepration",
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
