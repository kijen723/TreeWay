'use client'

import { useState } from 'react';
import FormField from "./components/FormField";

export default function Regist() {
    const [email, setEmail] = useState('email@example.com');
    const [name, setName] = useState('정다운');

    return (
        <form>
            <FormField 
                label="이메일" 
                htmlFor="email" 
                type="email" 
                value={email}
                onChange={() => {}}
                disabled={true}
            />
            <FormField 
                label="이름" 
                htmlFor="name" 
                type="name" 
                value={name}
                onChange={() => {}}
                disabled={true}
            />
        </form>
    );
}
