import React, { createContext, useState, useContext } from 'react';


export type UserData = {
    id: number;
    nome: string;
    sobrenome: string;
    nascimento: string;
    genero: string;
    cidade: string;
    uf: string;
    telefone: string;
    email: string;
    senha: string;
    dor: string;
    doenca: string;
    cirurgico: string;
    esporte: string;
};


interface UserContextType {
    user: UserData | null;
    
    login: (userData: UserData) => void;
    logout: () => void;    
    updateUser: (updatedData: Partial<UserData>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserData | null>(null);
    const login = (userData: UserData) => {
        setUser(userData);
    };
    
    const logout = () => {
        setUser(null);
    };
    
    const updateUser = (updatedData: Partial<UserData>) => {
        if (user) {
            setUser({ ...user, ...updatedData });
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}