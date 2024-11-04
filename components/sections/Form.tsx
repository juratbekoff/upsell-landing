"use client"

import React, {useState} from 'react';
import Input from "@/components/ui/Input";
import Button from "@/components/ui/button";

const Form = () => {
    const [email, setEmail] = useState<string>("");
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await fetch('/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email}),
        });
        setIsSent(true);
        setIsLoading(false);
    }

    return (
        isSent ? (
            <h1>Thank you!</h1>
        ) : (
            <form
                onSubmit={handleSubmit}
                className="flex gap-2 w-full max-sm:flex-col"
            >
                <Input
                    required
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[70%] max-sm:w-full"
                />

                <Button
                    variant="secondary"
                    type="submit"
                    className="w-[30%] max-sm:w-full"
                    disabled={isLoading}
                >
                    {isLoading ? "Sending..." : "Send"}
                </Button>
            </form>
        )
    );
};

export default Form;
