"use client"
import { success } from '@/components/common/toast';
import { createClient } from '@/lib/utils/supabase/client';
import React, { createContext, useReducer, useEffect, ReactNode, useContext } from 'react';

export interface User {
  id: string;
  email?: string;
  profile_picture?: string;
  first_name?: string;
  last_name?: string;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  save: (user: User | null) => void;
}

// Define action types
type Action =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'CLEAR_USER' }

// Define initial state
const initialState: User | null = null;

// Define the reducer function
const userReducer = (state: User | null, action: Action): User | null => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'CLEAR_USER':
      return null;
    default:
      console.log("Unknown Action!")
      return state;
  }
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const supabase = createClient();

  // Initialize useReducer with the reducer function and initial state
  const [user, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();

        const { data, error } = await supabase
          .from('profile')
          .select('*')
          .eq('user_id', user?.id ?? '')
          .single();
          console.log(error)

        if (data) {
          const _data: User = {
            id: data.user_id,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            profile_picture: data.profile_picture,
          }

          dispatch({ type: 'SET_USER', payload: _data as User });
        }
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchUser();
  }, [supabase]);

  // Define the setUser function to dispatch actions
  const setUser = (user: User | null) => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const save = async (user: User | null) => {

    if (!user) {
      console.error('No user data available');
      return;
    }
    console.log(user)
    const { id } = user;
    console.log(id)

    // Check if the user exists by ID or email
    const { data: existingUser, error: fetchError } = await supabase
      .from('profile')
      .select('*')
      .eq('user_id', id)
      .single();
      console.log(existingUser)

    if (existingUser) {
      // Update existing user
      const { error: updateError } = await supabase
        .from('profile')
        .update({
          first_name: user.first_name,
          last_name: user.last_name,
          profile_picture: user.profile_picture,
          email: user.email,
        })
        .eq('user_id', id);

      if (updateError) {
        console.error('Error updating user:', updateError.message);
      } else {
        success('Your changes have been successfully saved!')
        console.log('User updated successfully');
      }
    } else {
      // Create new user
      const { error: insertError } = await supabase
        .from('profile')
        .insert({
          user_id: user.id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          profile_picture: user.profile_picture,
        });

      if (insertError) {
        console.error('Error inserting user:', insertError.message);
      } else {
        success('Your changes have been successfully saved!')
        console.log('User created successfully');
      }
    }
  };


  return (
    <UserContext.Provider value={{ user, setUser, save }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
};

export { UserProvider, useUserContext };