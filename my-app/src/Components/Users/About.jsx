import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  ">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-800">
          About the Department Lecture Repository System
        </h1>
      </header>
      <section className="mb-8">
        <p className="text-lg text-gray-500">
          The Department Lecture Repository System is designed to streamline
          access to lecture materials for students and faculty at Lagos State
          University. It offers a convenient platform for lecturers to upload
          materials, and for students to download them with ease.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-500 space-y-2">
          <li>Secure Login and Registration for students and lecturers.</li>
          <li>
            Upload and download lecture materials in various formats (PDF,
            PowerPoint, video, etc.).
          </li>
          <li>Organized by department, course, level, and lecturer.</li>
          <li>
            Search and filter functionality to easily find course materials.
          </li>
          <li>Notifications for students when new materials are uploaded.</li>
          <li>Role-based access to materials based on department or course.</li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-800 mb-4">
          User Roles
        </h2>
        <p className="text-gray-600 mb-2">
          The system provides three main user roles:
        </p>
        <ul className="list-disc list-inside text-gray-500 space-y-2">
          <li>
            <strong className="text-purple-800">Admin:</strong> Manages users,
            approves uploaded lectures, and organizes department/course
            categories.
          </li>
          <li>
            <strong className="text-purple-800">Lecturers:</strong> Upload,
            edit, and manage their lecture materials, and communicate with
            students.
          </li>
          <li>
            <strong className="text-purple-800">Students:</strong> Browse,
            search, and download lecture materials for the courses they are
            enrolled in.
          </li>
        </ul>
      </section>
      <section className="text-center mt-10">
        <p className="text-lg text-gray-600 mb-4">
          Enhance your learning experience with easy access to all your course
          materials!
        </p>
        <p className="text-lg">
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
          or
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
          now to get started!
        </p>
      </section>
    </div>
  );
};

export default About;
