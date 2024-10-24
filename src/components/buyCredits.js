"use client"

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function Pay() {
    const [currencyCode, setCurrencyCode] = useState('USD')
    const fixedAmount = 4.99
    const { data: session, status } = useSession()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (status !== "authenticated") {
            console.error("User not authenticated");
            // You might want to redirect to login page or show an error message
            return;
        }

        console.log('Submitting with fixedAmount:', fixedAmount)
        try {
            const res = await fetch("/api/pesepay", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: fixedAmount,
                    currencyCode: "USD",
                    email: session.user.email,
                    userId: session.user.id
                }),
            });

            if (!res.ok) {
                throw new Error('Payment initiation failed');
            }

            const data = await res.json();
            if (data.redirectUrl) {
                window.location.href = data.redirectUrl; // Redirect to payment page
            } else {
                throw new Error('No redirect URL received');
            }
        } catch (error) {
            console.error('Error initiating payment:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (status !== "authenticated") {
        return <div>Please sign in to make a payment</div>
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-white dark:bg-gray-800">
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle className="text-4xl font-black text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Payment Details</CardTitle>
                        <CardDescription className="text-center text-gray-600 dark:text-gray-400">Confirm your payment information</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="amount" className="text-gray-700 dark:text-gray-300">Amount</Label>
                                <Input
                                    id="amount"
                                    type="text"
                                    value={`${fixedAmount} ${currencyCode}`}
                                    disabled
                                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transition-colors font-bold">
                            Pay {fixedAmount} {currencyCode}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
