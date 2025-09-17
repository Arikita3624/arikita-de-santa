import React from "react";
import Home from "./pages/Home";
import StarField from "./component/Starfield";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Nền sao toàn trang */}
      <div className="fixed inset-0 -z-10">
        <StarField />
      </div>

      {/* Nội dung */}
      <Home />
    </div>
  );
};

export default App;
