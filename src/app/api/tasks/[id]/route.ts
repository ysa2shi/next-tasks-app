import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest, props: { params: Promise<{ id: string }> }) => {
  try {
    await connectDb();
    const resolvedParams = await props.params;
    const id = resolvedParams.id;
    const task = await TaskModel.findById(id);

    if (!task) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Task fetched successfully", task });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return NextResponse.json({ message: "Failed to fetch tasks" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
