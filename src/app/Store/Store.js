"use client";

import React, {createContext, useState, useEffect} from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Request from '@/Sources/Request';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseApp, auth, fireStore } from '@/Sources/firebase';
import { addDoc, collection } from 'firebase/firestore';
import {getStorage, uploadBytes, ref} from 'firebase/storage';

const url = "https://movies-api14.p.rapidapi.com/";

export const ContextProvider = createContext();

const storage = getStorage(firebaseApp);
const col = collection(fireStore, 'profile')

export const Store = ({children})=> {
    
    const searchParams = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [datas, setDatas] = useState({});
    const [darkMode, setDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const pageNo = searchParams.get("no") || 1;
    const [user, setUser] = useState(auth.currentUser)
    const [page, setPage] = useState(pageNo);
    const router = useRouter();
    const searchQuery = searchParams.get('query')
    const [apiRoute, setApiRoute] = useState(searchQuery?'search':'movies')

    useEffect(()=> {
        window.onload = ()=> {
            if(searchQuery) setApiRoute('search');
            else setApiRoute('movies')
        }
    }, [])

    const signUp = (email, password)=> {
        createUserWithEmailAndPassword(auth, email, password).then((userCredential)=> {
            setUser(auth.currentUser)
            console.log(userCredential);
            router.push('../')
        }).catch(err=> {
            console.log(err)
        })
    }

    console.log(user)

    const signIn = (email, password)=> {
        signInWithEmailAndPassword(auth, email, password).then(userCredential=> {
            setUser(auth.currentUser);
            console.log(userCredential);
            router.push('../')
        }).catch(err=> {
            console.log(err)
        })
    }

    const logOut = async ()=> {
       await signOut(auth);
       setUser(null)
    }

    const setProfile = async (name, mobile, image=undefined)=> {
        const imgRef = ref(storage, `user/profile-image${Date.now()}-${image.name}`);
        const uploadedImg = await uploadBytes(imgRef, image);
        addDoc(col, {
            name: name,
            mobile: mobile,
            userImg: uploadedImg.ref.fullPath
        }).then(value=> {
            console.log(value)
        }).catch(err=> {
            console.log(err)
        })
    }

    useEffect(()=> {
        Request.get(url+apiRoute, {
            params: {
                page: page,
                query: searchQuery
            }
        }).then(res=> {
            console.log(res.data)
            setDatas(res.data)
            setMovies(res.data?.movies || res.data?.contents)
            setIsLoading(false)
            setPage(pageNo || 1);
        }).catch(err=> {
            console.log(err)
        })
    }, [page, searchQuery])

    useEffect(()=> {
        window.onload = ()=> {
            if(searchQuery) setApiRoute('search');
            else setApiRoute('movies')
        }
    }, [])

    return (
        <ContextProvider.Provider value={{movies, setMovies, datas, setDatas,user,setProfile, darkMode, setDarkMode, isLoading, setIsLoading, page, setPage, signUp, signIn, logOut, router, setApiRoute, searchQuery}}>
            {children}
        </ContextProvider.Provider>
    )
}