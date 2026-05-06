'use client'
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const {register, handleSubmit} = useForm();
    const handleLogin = async(data)=>{
        // console.log(data, 'data login');
        const {data : res, error} = await authClient.signIn.email({
            email:data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: '/'
        })
       console.log(res, error, 'login');
    }
    return (
        <div className='container mx-auto bg-purple-100 min-h-[80vh] flex justify-center items-center mt-6'>
            <Form
                onSubmit={handleSubmit(handleLogin)}
                className="flex w-96 flex-col gap-4"
                render={(props) => <form {...props} data-custom="foo" />}
            // onSubmit={onSubmit}
            >
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
                        Login
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
                    <p>Do not have Account?<Link href={'/register'} className="text-blue-400">Register</Link></p>
            </Form>
        </div>
    );
};

export default LoginPage;