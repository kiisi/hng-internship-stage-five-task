"use client"
import { success } from '@/components/common/toast';
import { createClient } from '@/lib/utils/supabase/client';
import React, { createContext, useReducer, useEffect, ReactNode, useContext } from 'react';

export interface Link {
    id: string;
    title: string;
    url: string;
}

export interface LinkContextType {
    linkState: LinkState;
    setLink: (link: Link) => void;
    removeLink: (link: Link) => void;
    save: (link: Link[]) => void;
}

// Define action types
type Action =
    | { type: 'SET_LINK'; payload: Link }
    | { type: 'REMOVE_LINK'; payload: Link }

interface LinkState {
    links: Link[];
    loading: boolean;
}
// Define initial state
const initialState: LinkState = {
    links: [],
    loading: false,
};

// Define the reducer function
const linkReducer = (state: LinkState, action: Action): LinkState => {
    switch (action.type) {
        case 'SET_LINK':

            const links = state.links

            const index = links.findIndex(item => item.id === action.payload.id);

            if (index !== -1) {
                // If the id exists, update the object
                links[index] = { ...links[index], ...action.payload };
            } else {
                // If the id doesn't exist, create a new object and add it to the array
                links.unshift(action.payload);
            }

            return {
                ...state,
                links: links
            };
        case 'REMOVE_LINK':

            const _links = state.links

            const _index = _links.findIndex(item => item.id === action.payload.id);

            if (_index !== -1) {
                // If the id exists, remove the object
                _links.splice(_index, 1);
            }

            return {
                ...state,
                links: _links,
            };
        default:
            console.log("Unknown Action!")
            return state;
    }
};

const LinkContext = createContext<LinkContextType | undefined>(undefined);

const LinkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const supabase = createClient();

    // Initialize useReducer with the reducer function and initial state
    const [linkState, dispatch] = useReducer(linkReducer, initialState);

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser();

                const { data } = await supabase
                    .from('url')
                    .select('*')
                    .eq('user_id', user?.id ?? '')

                // console.log(data)

                if (data) {
                    // const _data: User = {
                    //     id: data.user_id,
                    //     email: data.email,
                    //     first_name: data.first_name,
                    //     last_name: data.last_name,
                    //     profile_picture: data.profile_picture,
                    // }

                    // dispatch({ type: 'SET_USER', payload: _data as User });
                }
            }
            catch (error) {
                console.log("Error", error);
            }
        };

        fetchLinks();
    }, [supabase]);

    const save = async (links: Link[]) => {

        // if (!user) {
        //     console.error('No user data available');
        //     return;
        // }
        // console.log(user)
        // const { id } = user;
        // console.log(id)

        // // Check if the user exists by ID or email
        // const { data: existingUser, error: fetchError } = await supabase
        //     .from('profile')
        //     .select('*')
        //     .eq('user_id', id)
        //     .single();
        // console.log(existingUser)

        // if (existingUser) {
        //     // Update existing user
        //     const { error: updateError } = await supabase
        //         .from('profile')
        //         .update({
        //             first_name: user.first_name,
        //             last_name: user.last_name,
        //             profile_picture: user.profile_picture,
        //             email: user.email,
        //         })
        //         .eq('user_id', id);

        //     if (updateError) {
        //         console.error('Error updating user:', updateError.message);
        //     } else {
        //         success('Your changes have been successfully saved!')
        //         console.log('User updated successfully');
        //     }
        // } else {
        //     // Create new user
        //     const { error: insertError } = await supabase
        //         .from('profile')
        //         .insert({
        //             user_id: user.id,
        //             email: user.email,
        //             first_name: user.first_name,
        //             last_name: user.last_name,
        //             profile_picture: user.profile_picture,
        //         });

        //     if (insertError) {
        //         console.error('Error inserting user:', insertError.message);
        //     } else {
        //         success('Your changes have been successfully saved!')
        //         console.log('User created successfully');
        //     }
        // }
    };

    const setLink = (link: Link) => {
        dispatch({ type: 'SET_LINK', payload: link });
    };

    const removeLink = (link: Link) => {
        dispatch({ type: 'REMOVE_LINK', payload: link });
    };

    return (
        <LinkContext.Provider value={{ linkState, setLink, removeLink, save }}>
            {children}
        </LinkContext.Provider>
    );
};

const useLinkContext = () => {
    const context = useContext(LinkContext);

    if (context === undefined) {
        throw new Error('useLinkContext must be used within a LinkProvider');
    }

    return context;
};

export { LinkProvider, useLinkContext };