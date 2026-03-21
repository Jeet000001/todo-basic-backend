import { NextResponse } from "next/server";
import { todos } from "../get-todos/route";

export const POST = async (request) => {
  try {
    const { heading, description } = await request.json();

    if (!heading && !description) {
      return NextResponse.json(
        {
          error: "Heading & Description Is required",
        },
        { status: 400 },
      );
    }

    const neweTodo = {
      id: todos.length + 1,
      heading: heading,
      description: description,
    };

    todos.push(neweTodo);

    return NextResponse.json(
      {
        data: todos,
        message: "New todo created",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "faild to create new todo",
      },
      { status: 500 },
    );
  }
};
