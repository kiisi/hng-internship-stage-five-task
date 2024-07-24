"use client"
import { error, success } from '@/components/common/toast';
import { createClient } from '@/lib/utils/supabase/client';
import React, { createContext, useReducer, useEffect, ReactNode, useContext } from 'react';

export interface Link {
    id: string;
    title: string;
    url: string;
    user_id: string;
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
    | { type: 'SET_LINKS'; payload: Link[] }
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
        case "SET_LINKS": {

            return {
                ...state,
                links: action.payload
            }
        }
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

                console.log(data)

                if (data) {
                    dispatch({ type: 'SET_LINKS', payload: data as Link[] });
                }
            }
            catch (error) {
                console.log("Error", error);
            }
        };

        fetchLinks();
    }, [supabase]);

    const save = async (links: Link[]) => {
        console.log(links)

        try {
            const { data, error } = await supabase
                .from("url")
                .upsert(links, { onConflict: 'id' });

            if (error) {
                console.error('Error upserting data:', error);
                return;
            }

            success("Your changes have been successfully saved!")
        } catch (error) {
            console.error('Error:', error);
        }

    }


    const setLink = (link: Link) => {
        dispatch({ type: 'SET_LINK', payload: link });
    };

    const removeLink = async (link: Link) => {

        try {
            const { data, error: _error } = await supabase
                .from('url')
                .delete()
                .eq('id', link.id)
                .select()

            if (_error) {
                return error("Unable to remove link")
            }
            
            dispatch({ type: 'REMOVE_LINK', payload: data[0] });
        }
        catch (error) {
            console.log(error)
        }
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