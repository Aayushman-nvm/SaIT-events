"use client";

import { motion } from "framer-motion";
import { useAdminLogin } from "../../components/admin/hooks/useAdminLogin";
import BackgroundDecorations from "../../components/admin/BackgroundDecorations";
import LoginHeader from "../../components/admin/LoginHeader";
import LoginForm from "../../components/admin/LoginForm";
import LoginButton from "../../components/admin/LoginButton";
import LoginFooter from "../../components/admin/LoginFooter";

function Page() {
  const {
    userData,
    isSubmitting,
    showPassword,
    error,
    isFormValid,
    handleSubmit,
    updateField,
    togglePasswordVisibility,
  } = useAdminLogin();

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden flex items-center justify-center">
      <BackgroundDecorations />

      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm shadow-2xl"
        >
          <LoginHeader />

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <LoginForm
              userData={userData}
              showPassword={showPassword}
              updateField={updateField}
              togglePasswordVisibility={togglePasswordVisibility}
            />

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-lg p-3"
              >
                {error}
              </motion.div>
            )}

            <LoginButton isFormValid={isFormValid} isSubmitting={isSubmitting} />
          </form>

          <LoginFooter />
        </motion.div>
      </div>
    </div>
  );
}

export default Page;
