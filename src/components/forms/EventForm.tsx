"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import InputField from "../InputField";

const schema = z.object({
  title: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  startDate: z.date().min(1, { message: "Start Date is required!" }),
  endDate: z.date().min(1, { message: "End Date is required!" }),
});

const EventForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new event</h1>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Exam title"
          register={register}
          name="title"
          defaultValue={data?.title}
          error={errors.title}
        />
        <InputField
          label="Start Date"
          type="date"
          register={register}
          name="startDate"
          defaultValue={data?.startDate}
          error={errors.startDate}
        />
        <InputField
          label="End Date"
          type="date"
          register={register}
          name="endDate"
          defaultValue={data?.endDate}
          error={errors.endDate}
        />
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default EventForm;
