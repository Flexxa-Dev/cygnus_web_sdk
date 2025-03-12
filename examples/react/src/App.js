"use client";
import { useEffect, useState } from "react";
import { MerchantSDK } from "cygnus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CompletionPage from "./components/CompletionPage";
import PaymentPage from "./components/PaymentPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/complete" element={<CompletionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
