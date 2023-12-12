"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import addRecipeAction, {
  AddRecipeActionReturnT,
} from "@/lib/actions/addRecipe";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AddRecipeFormSchema, {
  AddRecipeFormSchemaType,
  AddRecipeFormSchemaInputType,
} from "@/lib/zod/schemas/addRecipeForm";
import { Checkbox } from "@/components/ui/checkbox";
import FormSubmitBtn from "@/components/Form/SubmitBtn";
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import FormError from "@/components/Form/Error";

export default function AddRecipe() {
  const [data, setData] = useState<null | AddRecipeActionReturnT>(null);
  const [isSending, setIsSending] = useState(false);
  const form = useForm<
    AddRecipeFormSchemaInputType,
    any,
    AddRecipeFormSchemaType
  >({
    resolver: zodResolver(AddRecipeFormSchema),
    defaultValues: {
      description: "",
      isVegan: false,
      timeToCookMins: "",
      title: "",
    },
  });
  const { handleSubmit, control } = form;

  async function onSubmit(data: AddRecipeFormSchemaType) {
    setIsSending(true);
    setData(await addRecipeAction(data));
    setIsSending(false);
    form.reset();
  }

  return (
    <>
      <PageTitle>Add New Recipe</PageTitle>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 max-w-lg">
          {/* title */}
          <FormField
            control={control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* description */}
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* time to cook */}
          <FormField
            control={control}
            name="timeToCookMins"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Time to cook (in minutes)</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* isVegan */}
          <FormField
            control={control}
            name="isVegan"
            render={({ field }) => {
              return (
                <FormItem>
                  <div className="flex gap-1 items-center">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Vegan</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormSubmitBtn isLoading={isSending}>Create</FormSubmitBtn>
          <FormError
            msg={data?.error && "Something went wrong. Try again later"}
          />
        </form>
      </FormProvider>
    </>
  );
}
