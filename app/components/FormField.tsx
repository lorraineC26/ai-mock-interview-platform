import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,  } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { Form } from 'react-hook-form';

const FormField = () => (
  <FormField 
    control={form.control}
    name="username"
    render={({field}) => (
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input placeholder="Enter your username" {...field} />
        </FormControl>
        <FormDescription>
          This is your unique username that will be used for logging in.
        </FormDescription>
        <FormMessage />
      </FormItem>
    )}
  />
)

