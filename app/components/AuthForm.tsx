"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";


const formSchema = z.object({
  username: z.string().min(1).max(50),
});

const AuthForm = () => {
  // Define a form using react-hook-form and zod for validation.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // Define a submit handler.
  function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(data);
  }

  return (<div className="auth-card-border lg:min-w-[566px]">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Form.Field>
          <Form.Label>Username</Form.Label>
          <Form.Control>
            <Input placeholder="Enter your username" {...form.register("username")} />
          </Form.Control>
          <Form.Message />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  </div>);
};

export default AuthForm;
