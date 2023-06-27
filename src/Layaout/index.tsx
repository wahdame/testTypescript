import SideBar from "../conponent/sideBar";
import Header from "../conponent/header";
import "./index.css";

export default function Layaout({ children }: any) {
  return (
    <>
      <Header />

      <SideBar />

      <main className="ml-60 pt-16 max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">{children}</div>
          </div>
        </div>
      </main>
    </>
  );
}
