import { useState } from "react";
import { Lock } from "lucide-react";

// This is a "functional component" — just a JS function that returns JSX
// (JSX = HTML-looking syntax you can write inside JavaScript).
// React renders whatever this function returns.
export default function LoginScreen({ onSignIn }) {
  // useState gives you a piece of memory ("state") that React tracks.
  // email/password = the current value. setEmail/setPassword = how you update it.
  // When you call setEmail(...), React automatically re-renders the component
  // with the new value. This is the core React pattern: state in, UI out.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // A plain function that runs when the form is submitted.
  // We'll wire this up to Supabase auth later — for now it just logs.
  function handleSignIn(e) {
    e.preventDefault(); // stops the page from doing a full reload on submit
    console.log("Signing in with:", email, password);
  }

  return (
    // Outer wrapper: full height, dark background, centers content
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-sm border-2 border-white">    
         {/* border here */}
        {/* Avatar + name block */}
        <div className="flex items-center gap-4 mb-10 border-2 border-white">
          <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center">
            <Lock className="w-6 h-6 text-white" strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl font-bold text-white leading-tight">
            name<br />here
          </h1>
          
        </div>

        {/* Heading + subtext */}
        <h2 className="text-4xl font-extrabold text-white mb-2">Sign in</h2>
        <p className="text-neutral-400 text-sm mb-8">
          Start tracking your fitness now and connect with others around you!
        </p>

        {/* The actual form. onSubmit fires handleSignIn when the button is pressed
            (or Enter is hit) */}
        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Controlled input: value={email} means React owns this field's value.
              onChange fires on every keystroke and updates state via setEmail. */}
          <input
            type="text"
            placeholder="Email or mobile phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-neutral-800 text-white placeholder-neutral-400 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-neutral-800 text-white placeholder-neutral-400 rounded-xl px-4 py-4 outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="text-right">
            <button type="button" className="text-neutral-400 text-sm hover:text-white">
              Forgot password?
            </button>
          </div>

          {/* type="submit" means clicking this triggers the form's onSubmit above */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold rounded-full py-4 mt-2"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-neutral-400 text-sm mt-5">
          Don't have an account?{" "}
          <button className="text-blue-400 hover:underline">Sign up</button>
        </p>

        {/* Divider row */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-neutral-700" />
          <span className="text-neutral-500 text-sm">or</span>
          <div className="flex-1 h-px bg-neutral-700" />
        </div>

        <div className="space-y-3">
          <button className="w-full border border-neutral-700 rounded-full py-3.5 text-white flex items-center justify-center gap-2 hover:bg-neutral-900">
            Continue with Google
          </button>
          <button className="w-full border border-neutral-700 rounded-full py-3.5 text-white flex items-center justify-center gap-2 hover:bg-neutral-900">
            Sign in with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
