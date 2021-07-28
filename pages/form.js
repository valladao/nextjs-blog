/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
import { Router } from "next/dist/client/router"
import Head from "next/head"
import Link from "next/link"
import { useState } from "react"

export default function () {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [blogurl, setBlogurl] = useState("")
  const [feedurl, setFeedurl] = useState("")
  const [notes, setNotes] = useState("")
  const [response, setResponse] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify({ name, email, blogurl, feedurl, notes }),
        headers: { "Content-Type": "application/json" },
      })

      const json = await res.json()

      if (json.success) {
        alert("Thank you for submitting your blog!")
        Router.push("/")
      } else {
        setResponse(json.message)
      }
    } catch (error) {
      setResponse("An error occured while submitting the form")
    }
  }

  return (
    <div>
      <Head>
        <title>Add new blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tailwindcss/ui@latest/dist/tailwind-ui.min.css"
        />
      </Head>
      <div>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Add new blog
              </h1>
              <p>
                <Link href="/">
                  <p className="underline cursor-pointer mt-2">
                    <a>Back</a>
                  </p>
                </Link>
              </p>
            </div>
          </div>
        </header>

        <main>
          <p className="text-center pb-5">{response}</p>

          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div>
              <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                <form
                  className="mt-5 md:mt-0 md:col-span-2"
                  action=""
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <label className="block text-sm font-medium leading-5 text-gray-700">
                        Blog name / owner name
                      </label>
                      <input
                        required
                        className="mb-5 mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                      <label className="block text-sm font-medium leading-5 text-gray-700">
                        Email address
                      </label>
                      <input
                        required
                        type="email"
                        className="mb-5 mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <label className="block text-sm font-medium leading-5 text-gray-700">
                        Blog URL
                      </label>
                      <input
                        type="url"
                        required
                        className="mb-5 mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        placeholder="https://www.example.com"
                        value={blogurl}
                        onChange={(event) => setBlogurl(event.target.value)}
                      />
                      <label className="block text-sm font-medium leading-5 text-gray-700">
                        RSS Feed URL
                      </label>
                      <input
                        type="url"
                        required
                        className="mb-5 mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        placeholder="https://www.example.com/feed"
                        value={feedurl}
                        onChange={(event) => setFeedurl(event.target.value)}
                      />

                      <label
                        htmlFor="about"
                        className="block text-sm leading-5 font-medium text-gray-700"
                      >
                        Notes
                      </label>
                      <div className="rounded-md shadow-sm">
                        <textarea
                          rows="3"
                          className="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          placeholder="Anything you want to tell us!"
                          value={notes}
                          onChange={(event) => setNotes(event.target.value)}
                        ></textarea>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Your submission will be approved before appearing on the
                        site
                      </p>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <span className="inline-flex rounded-md shadow-sm">
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                        >
                          Save
                        </button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
