import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Notes Management App
                        </h2>
                        <p className="mt-6 text-gray-600">
                        A notes management app serves as a digital platform designed to streamline the organization, creation, and retrieval of notes, providing users with a centralized and efficient solution
                         for handling information. These applications typically offer features such as note creation, 
                         categorization, and storage, allowing users to organize their thoughts, ideas, and tasks
                          systematically. Advanced functionalities often include the ability to set reminders,
                           attach files, and collaborate with others in real-time
                        </p>
                        <p className="mt-4 text-gray-600">
                        Whether for personal use, academic purposes, or professional tasks,
                         these apps aim to simplify the note-taking process and contribute to a
                          more organized and efficient digital workflow.


                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}