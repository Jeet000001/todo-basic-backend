import { NextResponse } from "next/server";
import { todos } from "../../get-todos/route";

export const PATCH = async (request, { params }) => {
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

    const body = await request.json();

    todos[todoIndex] = {
      ...todos[todoIndex],
      ...body,
      id: todoId,
    };

    return NextResponse.json(
      {
        data: todos[todoIndex],
        message: "Todo Updated",
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Faild to update the Todo",
      },
      { status: 500 },
    );
  }
};
