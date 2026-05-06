'use client'
import React from 'react';
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
const RegisterPage = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const { register, handleSubmit } = useForm();
    const handleRegister = async (data) => {
        // console.log(data, 'data login');
        const { data: res, error } = await authClient.signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            rememberMe: true,
            image: data.photo,
            callbackURL: '/login'
        },
            {
                onSuccess: async () => {
                    await authClient.signOut()
                    router.push('/login')
                }
            }
        )
        // console.log(res, error, 'logup');

        if (res) {
            toast.success("Register successfully")
        }
        if (error) {
            toast.error(`${error.message}`)
        }
    }
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className='container mx-auto bg-white min-h-[80vh] flex justify-center items-center mt-6'>
            <Form
                onSubmit={handleSubmit(handleRegister)}
                className="flex justify-center flex-col shadow-xl rounded-lg items-center bg-purple-100 mx-auto py-7 px-12 gap-4"
                render={(props) => <form {...props} data-custom="foo" />}
            >
                {/* name */}
                <TextField
                    className='w-full max-w-70'
                    isRequired
                    name="name"
                    type="text"

                >
                    <Label>Name</Label>
                    <Input {...register('name')} className='rounded-xl' placeholder="Type Your Name" />
                    <FieldError />
                </TextField>
                {/* email */}
                <TextField
                    className='w-full max-w-70'
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input {...register('email')} className='rounded-xl' placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    className='w-full max-w-70'
                    isRequired
                    name="photo"
                    type="text"

                >
                    <Label>Photo URL</Label>
                    <Input {...register('photo')} className='rounded-xl' placeholder="Type Your Photo URL" />
                    <FieldError />
                </TextField>
                <TextField className="w-full max-w-70" name="password">
                    <Label>Password</Label>
                    <InputGroup>
                        <InputGroup.Input
                            className="w-full max-w-70"
                            type={isVisible ? "text" : "password"}
                            {...register('password')}
                        />
                        <InputGroup.Suffix className="pr-0">
                            <Button
                                isIconOnly
                                aria-label={isVisible ? "Hide password" : "Show password"}
                                size="sm"
                                variant="ghost"
                                onPress={() => setIsVisible(!isVisible)}
                            >
                                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                            </Button>
                        </InputGroup.Suffix>
                    </InputGroup>
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Register
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
                <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
                <p>Have Already Account?<Link href={'/login'} className="text-blue-400">Login</Link></p>
            </Form>
        </div>
    );
};

export default RegisterPage;