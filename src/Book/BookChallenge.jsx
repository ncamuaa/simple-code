import React from "react"
import "./BookChallenge.css"

export default function BookChallenge() {
    /**
     * 🧠 Challenge:
     * 
     * 1️⃣ Create state for:
     *     - `books` (array of book titles)
     *     - `summary` (string)
     *     - `typedText` (string for typing animation)
     * 
     * 2️⃣ Create a ref called `summarySection` using useRef().
     * 
     * 3️⃣ Use useEffect() to make a typing effect:
     *     - When `summary` changes, type out one character at a time.
     * 
     * 4️⃣ Use another useEffect() to scroll into view when the summary changes.
     */

    // 🧩 Your code here 👇


    return (
        <main className="main-container">
            <h1>📖 React Hooks Challenge</h1>
            <p className="subtitle">
                Using <strong>useState</strong>, <strong>useEffect</strong>, <strong>useRef</strong>, and <strong>scrollIntoView()</strong>
            </p>

            <form className="add-book-form">
                <input
                    type="text"
                    name="book"
                    placeholder="Enter a new book..."
                />
                <button type="submit">Add Book</button>
            </form>

            <section className="book-list">
                <h2>Your Reading List 📚</h2>
                <ul>
                    <li>Example Book</li>
                </ul>

                <button>Get AI Summary</button>

                <section className="summary-card">
                    <h2>📘 Summary Section</h2>
                    <p>Click "Get AI Summary" above 👆</p>
                </section>
            </section>
        </main>
    )
}
