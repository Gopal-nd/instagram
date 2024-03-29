
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"

import { useForm } from "react-hook-form"
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Signupvalidation } from "@/lib/validation";
import Loader from "@/components/ui/shared/Loader";
import { Link } from "react-router-dom";
import { createUserAccount } from "@/lib/appwrite/api";


const SignupForm = () => {
  const { toast } = useToast()
  const isLoading = false

    // 1. define the form
    const form = useForm<z.infer<typeof Signupvalidation>>({
        resolver: zodResolver(Signupvalidation),
        defaultValues: {
            name:"",
          username: "",
          email:"",
          password:"",
        },
      })
     
      // 2. Define a submit handler.
      async function onSubmit(values: z.infer<typeof Signupvalidation>) {
       const newUser = await createUserAccount(values)

        if(!newUser){
          return  toast({
            // variant: "destructive",
            title: "sign up failed. Please try again",
          })
        }

        // const session = await signInAccount()

        console.log(newUser)
      }
  return (

    <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
            <img src="/assets/images/logo.svg" alt="" />
            <h2 className="h3-bold md:h2-bold pt-4 sm:pt-12">Create New Account</h2>
            <p className="text-light-3 small-medium md:base-regular mt-2">to use snapgram enter your details</p>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4 ">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input className="shad-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input type="text" className="shad-input" {...field}  />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" className="shad-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" className="shad-input" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      <Button className="shad-button_primary" type="submit">
        {isLoading?(
          <div className="flex-center gap-2">
            <Loader/>Loading...
          </div>
        ):(
          "Sign Up"
        )}
      </Button>
      <p className="text-small-regular text-light-2 text-center mt-2">
        Already Have an Account? 
       <Link to={'/sign-in'} className="text-primary-500 text-small-semibold ml-1">Log In</Link>
      </p>
    </form>
   
        </div>
  </Form>


  )
};

export default SignupForm;
