"use client"

import { useState } from "react"
import { Mail, Eye, EyeOff, X } from "lucide-react"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-8 shadow-lg relative">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <h2 className="text-3xl font-bold text-center mb-2">Log in</h2>
        <p className="text-center text-gray-500 text-sm mb-6">Enter your details to continue</p>

        {/* Email Input */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter your email</label>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@email.com"
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
            />
            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-2">Enter your password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••••••••••"
              className="w-full px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-colors"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Remember & Recover */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded accent-primary"
            />
            <span className="text-sm text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
            Recover password
          </a>
        </div>

        {/* Log In Button */}
        <button className="w-full bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition-colors mb-6">
          Log in
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Social Login */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <button className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </button>
          <button className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.08-7-7-3.5" />
            </svg>
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600">
          I don't have an account{" "}
          <a href="#" className="font-semibold text-gray-900 hover:text-primary transition-colors">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
