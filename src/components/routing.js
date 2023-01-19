import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './front/home/home.component'
import { Layout } from './front/layout/layout.component'


export function AppRouting(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />}></Route>
                    
                </Route>


               
            </Routes>
        </BrowserRouter>
    )
}