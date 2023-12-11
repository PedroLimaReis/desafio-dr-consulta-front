import React, { createContext, useState, useCallback, useEffect } from 'react';

interface User {
    id: string;
    username: string;
    password: string;
}

interface IUserContext {
    isError: boolean;
    isLoading: boolean;
    user?: User;
    login: (username: string, password: string) => Promise<boolean>;
}

const UserContext = createContext<IUserContext | null>(null);

export const UserProvider: React.FC = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState<User>();

    const login = useCallback(async (username: string, password: string) => {
        setIsLoading(true);
        setIsError(false);

        await new Promise(resolve => setTimeout(resolve, 2000));

        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                body: JSON.stringify({ user: username, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Login inválido');
            }

            const data = await response.json();
            setUser(data);

            return true;
        } catch (e) {
            setIsError(true);
            return false;
        }
         finally {
            setIsLoading(false);
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, login, isError, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = React.useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    return context;
} 