import { NextResponse } from "next/server";
import { todos } from "../route";

export const GET = async (request, { params }) => {
  try {
    const { id } = await params;
    const todoId = parseInt(id);
    const todo = todos.find((todo) => todo.id === todoId);

    if (!todo) {
      return NextResponse.json(
        {
          error: "Todo not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        data: todo,
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
