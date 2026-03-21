import { NextResponse } from "next/server";
import { todos } from "../../get-todos/route";

export const PUT = async (request, { params }) => {
  try {
    const { id } = await params;
    const todoId = parseInt(id);
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex === -1) {
      return NextResponse.json(
        {
          error: "Todo not found",
        },
        { status: 404 },
      );
    }

    const { heading, discription } = await request.json();

    if (!heading || !discription) {
      return NextResponse.json(
        {
          error: "Heading & Description is required",
        },
        { status: 400 },
      );
    }

    todos[todoIndex] = {
      id: todoId,
      heading: heading,
      description: discription,
    };
    return NextResponse.json(
      {
        data: todos[todoIndex],
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Faild to get user",
      },
      { status: 500 },
    );
  }
};
