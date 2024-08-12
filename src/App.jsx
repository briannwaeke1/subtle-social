import { Routes, Route } from "react-router-dom";
import Home from "@/pages/HomePage/HomePage";
import AuthPage from "@/pages/AuthPage/AuthPage";
import PageLayout from "@/Layouts/PageLayout/PageLayout";
function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
