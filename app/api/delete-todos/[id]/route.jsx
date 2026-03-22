import { NextResponse } from "next/server";
import { todos } from "../../get-todos/route";

export const DELETE = async (request, { params }) => {
  try {
    const { id } = await params;
    const TodoId = parseInt(id);
    const TododIndex = todos.findIndex((todo) => todo.id === TodoId);

    if (!TododIndex === -1) {
      return NextResponse.json(
        {
          error: "user not found",
        },
        { status: 404 },
      );
    }

    const deleteTodo = todos[TododIndex];
    todos.splice(TododIndex, 1);

    return NextResponse.json({
        data: deleteTodo
    }, {status: 200})
  } catch (error) {
    return NextResponse.json(
      {
        error: "Faild to delete the Todo",
      },
      { status: 500 },
    );
  }
};
