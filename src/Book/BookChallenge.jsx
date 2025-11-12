import React, { useState, useEffect, useRef } from "react"
import "./BookChallenge.css"

export default function BookChallenge() {
    /**
     * 🧠 Challenge:
     * 
     * • Create state for:
     *   • books (array of book titles)
     *   • summary (string)
     *   • typedText (string for typing animation)
     * 
     * • Create a ref called summarySection using useRef().
     * 
     * • Use useEffect() to make a typing effect:
     *   • When summary changes, type out one character at a time.
     * 
     * • Use another useEffect() to scroll into view when the summary changes.
     */
    
    // 🧩 Your code here 👇
    

    function addBook(e) {
        e.preventDefault()
        if (newBook.trim() === "") return
        setBooks(prev => [...prev, newBook])
        setNewBook("")
    }

    function getSummary() {
        if (books.length === 0) {
            setSummary("You haven’t added any books yet! 📚")
        } else {
            setSummary(`Here is your AI summary: You’re reading ${books.join(", ")} — an inspiring list! 🤓`)
        }
    }

    return (
        <main className="main-container">
            <h1>📖 React Hooks Challenge</h1>
            <p className="subtitle">
                Using <strong>useState</strong>, <strong>useEffect</strong>, <strong>useRef</strong>, and <strong>scrollIntoView()</strong>
            </p>

            <form className="add-book-form" onSubmit={addBook}>
                <input
                    type="text"
                    name="book"
                    placeholder="Enter a new book..."
                    value={newBook}
                    onChange={(e) => setNewBook(e.target.value)}
                />
                <button type="submit">Add Book</button>
            </form>

            <section className="book-list">
                <h2>Your Reading List 📚</h2>
                <ul>
                    {books.length > 0 ? (
                        books.map((book, index) => <li key={index}>{book}</li>)
                    ) : (
                        <li>Example Book</li>
                    )}
                </ul>

                <button onClick={getSummary}>Get AI Summary</button>

                <section className="summary-card" ref={summarySection}>
                    <h2>📘 Summary Section</h2>
                    <p>{typedText || 'Click "Get AI Summary" above 👆'}</p>
                </section>
            </section>
        </main>
    )
}
