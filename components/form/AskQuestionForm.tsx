"use client";
import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { MDXEditorMethods } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import TagCard from "../card/TagCard";
const Editor = dynamic(() => import("@/components/editor"), {
  // Make sure we turn SSR off
  ssr: false,
});
const AskQuestionForm = () => {
  const editorRef = useRef<MDXEditorMethods>(null);
  const form = useForm({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });
  const onSubmit = () => {};
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: { value: string[] },
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const tagInput = e.currentTarget.value.trim();
      if (tagInput && tagInput.length < 15 && !field.value.includes(tagInput)) {
        form.setValue("tags", [...field.value, tagInput]);
        e.currentTarget.value = "";
        form.clearErrors("tags");
      } else if (tagInput.length > 15) {
        form.setError("tags", {
          type: "manual",
          message: "Tag should be less than 15 characters",
        });
      } else if (field.value.includes(tagInput)) {
        form.setError("tags", {
          type: "manual",
          message: "Tag already exists",
        });
      }
    }
  };

  const handleRemove = (tag: string, field: { value: string[] }) => {
    const newTags = field.value.filter((t) => t !== tag);
    form.setValue("tags", newTags);
    if (newTags.length === 0) {
      form.setError("tags", { message: "Tags at least 1" });
    }
  };
  return (
    <Card className="w-full   ">
      <CardHeader>
        <CardTitle className="font-bold text-2xl">Ask a Question</CardTitle>
        <CardDescription>
          Help us improve by reporting bugs you encounter.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-6.5">
        <form id="form-ask-question" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="gap-10">
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-title"
                    className="font-semibold text-xl after:content-['*'] after:ml-0.5 after:text-amber-500"
                  >
                    Title
                  </FieldLabel>
                  <Input
                    id="form-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="your title..."
                    autoComplete="off"
                    className="min-h-[56px]"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="content"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-content"
                    className="font-semibold text-xl after:content-['*'] after:ml-0.5 after:text-amber-500"
                  >
                    Explain your details for your question
                  </FieldLabel>
                  <Editor
                    editorRef={editorRef}
                    value={field.value}
                    fieldChange={field.onChange}
                  />
                  <CardDescription>
                    Please description Your question details Please description
                    Your question details Please description Your question
                    details
                  </CardDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="tags"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor="form-tags"
                    className="font-semibold text-xl after:content-['*'] after:ml-0.5 after:text-amber-500"
                  >
                    Tags
                  </FieldLabel>
                  <div>
                    <Input
                      // {...field}
                      id="form-tags"
                      aria-invalid={fieldState.invalid}
                      placeholder="your tags..."
                      autoComplete="off"
                      className="min-h-[56px]"
                      onKeyDown={(e) => {
                        handleKeyDown(e, field);
                      }}
                    />

                    {field.value.length > 0 && (
                      <div className="flex gap-2 flex-wrap mt-4.5">
                        {field?.value?.map((tag: string) => (
                          <TagCard
                            key={tag}
                            _id={tag}
                            name={tag}
                            remove
                            compact
                            isButton
                            handleRemove={() => {
                              handleRemove(tag, field);
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <CardDescription>
                    The tags is limited at 3 tags
                  </CardDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="mt-4.5">
        <Field orientation="horizontal">
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset()}
            className="px-6 py-5"
          >
            Reset
          </Button>
          <Button type="submit" form="form-ask-question" className="px-6 py-5">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};

export default AskQuestionForm;
