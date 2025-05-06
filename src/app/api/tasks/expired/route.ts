import { TaskDocument, TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  const currentDate = new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");
  try {
    await connectDb();
    const completedTasks: TaskDocument[] = await TaskModel.find({
      isCompleted: false,
      dueDate: { $lt: currentDate },
    });

    return NextResponse.json({ message: "Tasks fetched successfully", tasks: completedTasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json({ message: "Failed to fetch tasks" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
