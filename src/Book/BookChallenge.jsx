import React from "react"
import "./BookChallenge.css"

export default function BookChallenge() {
    /**
     * 🧠 Challenge Instructions:
     *
     * 1️⃣ Create a state variable called `summary` (string, default empty "")
     * 2️⃣ Create a ref called `summarySection` using `useRef()`
     * 3️⃣ Use `useEffect()` so that whenever `summary` changes,
     *     it automatically scrolls the summary section into view.
     *     👉 Tip: use `summarySection.current.scrollIntoView({ behavior: "smooth" })`
     */

    // 🧩 Your code here 👇


    return (
        <main className="main-container">
            <h1>📖 React Hooks Challenge</h1>
            <p className="subtitle">
                Focus: <strong>useState</strong>, <strong>useEffect</strong>, <strong>useRef</strong>, and <strong>scrollIntoView()</strong>
            </p>

           
            <button>Generate Summary</button>

           
            <section className="summary-card">
                <h2>📘 Summary Section</h2>
                <p>Click "Generate Summary" above 👆</p>
            </section>
        </main>
    )
}
