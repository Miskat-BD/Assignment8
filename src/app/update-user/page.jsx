'use client'
import React from 'react';
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';


const UpdateUserPage = () => {
    const { register, handleSubmit } = useForm();
    const handleUpdate = async (data) => {
        // console.log(data, 'update');
        await authClient.updateUser({
            image: data.photo,
            name: data.name
        })
        toast.success("Profile Update Successfully")
    }
    return (
        <div className='container mx-auto bg-purple-100 min-h-[80vh] flex justify-center items-center mt-6'>
            <Form
                onSubmit={handleSubmit(handleUpdate)}
                className="flex sm:w-96 justify-center flex-col gap-4"
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
                    name="photo"
                    type="text"

                >
                    <Label>Photo URL</Label>
                    <Input {...register('photo')} className='rounded-xl' placeholder="Enter Photo URL" />
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Update
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default UpdateUserPage;