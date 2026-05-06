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
                onSuccess: () => {
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
                <p>Have Already Account?<Link href={'/login'} className="text-blue-400">Login</Link></p>
            </Form>
        </div>
    );
};

export default RegisterPage;