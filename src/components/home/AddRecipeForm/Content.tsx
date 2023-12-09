"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import addRecipeAction from "@/lib/actions/addRecipe";
import { useFormState } from "react-dom";
import RecipesGridPublishBtn from "../RecipesGrid/PublishBtn";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import addRecipeFormSchema, {
  AddRecipeFormSchema,
  AddRecipeFormSchemaInput,
} from "@/lib/zod/schemas/addRecipeForm";
import { Checkbox } from "@/components/ui/checkbox";
import FormCheckboxContainer from "@/components/FormCheckboxContainer";

export default function AddRecipeFormContent() {
  // const [state, dispatch] = useFormState(addRecipeAction, {});
  const form = useForm<AddRecipeFormSchemaInput, any, AddRecipeFormSchema>({
    resolver: zodResolver(addRecipeFormSchema),
    defaultValues: {
      description: "",
      isVegan: false,
      timeToCookMins: "",
      title: "",
    },
  });
  const { handleSubmit, control } = form;

  async function onSubmit(data: AddRecipeFormSchema) {
    const resp = await addRecipeAction(data);
    console.log(resp);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
            const { value, ...rest } = field;
            return (
              <FormItem>
                <FormCheckboxContainer>
                  <FormControl>
                    <Checkbox {...rest} checked={value} />
                  </FormControl>
                  <FormLabel>Vegan</FormLabel>
                </FormCheckboxContainer>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}
