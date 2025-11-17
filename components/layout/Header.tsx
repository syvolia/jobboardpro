"use client";

import { useUser } from "@/contexts/UserContext";
import { useState } from "react";
import { AuthModal } from "@/components/auth/AuthModal";
import { User, LogOut, Bookmark, Briefcase } from "lucide-react";

export function Header() {
  const { user, profile, signOut } = useUser();
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
      <header className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-blue-600">DevJobs Pro</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="/" className="text-gray-700 hover:text-blue-600">
                  Jobs
                </a>
                <a
                  href="/companies"
                  className="text-gray-700 hover:text-blue-600"
                >
                  Companies
                </a>
                {user && (
                  <>
                    <a
                      href="/saved"
                      className="text-gray-700 hover:text-blue-600"
                    >
                      Saved Jobs
                    </a>
                    <a
                      href="/applications"
                      className="text-gray-700 hover:text-blue-600"
                    >
                      Applications
                    </a>
                    <a
                      href="/admin"
                      className="text-gray-700 hover:text-blue-600"
                    >
                      Admin
                    </a>
                  </>
                )}
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-700">
                    Hi, {profile?.full_name || user.email?.split("@")[0]}
                  </span>
                  <div className="relative group">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <User className="w-5 h-5" />
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border hidden group-hover:block">
                      <div className="p-2">
                        <a
                          href="/profile"
                          className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded"
                        >
                          <User className="w-4 h-4" />
                          <span>Profile</span>
                        </a>
                        <a
                          href="/saved"
                          className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded"
                        >
                          <Bookmark className="w-4 h-4" />
                          <span>Saved Jobs</span>
                        </a>
                        <a
                          href="/applications"
                          className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded"
                        >
                          <Briefcase className="w-4 h-4" />
                          <span>Applications</span>
                        </a>
                        <button
                          onClick={signOut}
                          className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded w-full text-left"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setAuthModalOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />
    </>
  );
}
