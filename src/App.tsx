// App.tsx
import React from "react";
import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      {/* Main Content Area: Gradient background from the screenshot */}
      <div
        className="grow p-8 overflow-y-auto 
                      bg-linear-to-br from-white to-blue-50"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet
          sapiente magnam doloremque nam cum fugit repellat quia iusto odit
          iure, libero quas provident magni odio tempora harum necessitatibus
          voluptatem dignissimos, aut facere. Sapiente laboriosam quam culpa
          aliquid cumque veniam illum dolor ipsam aspernatur blanditiis dolorum,
          unde nobis officia, dolorem quidem alias neque fugit architecto, quos
          dolores inventore laudantium corporis? Facilis, fuga pariatur, non ea
          accusamus nisi sint laborum eligendi quod repudiandae, facere harum
          autem. Dicta nobis voluptate iusto. Laborum assumenda commodi iste
          molestias. Iste officia ducimus voluptatibus nulla? Saepe porro magni
          illo, quidem odit possimus corporis fuga commodi omnis.
        </p>
        {/* Content Placeholder */}
      </div>
    </div>
  );
};

export default App;
