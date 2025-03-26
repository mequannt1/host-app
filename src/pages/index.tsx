import dynamic from "next/dynamic";
//@ts-ignore
const AuditingHome = dynamic(() => import("auditing-remote/Home"), { ssr: false });
//@ts-ignore
const HrHome = dynamic(() => import("hr-remote/Home"), { ssr: false });
//@ts-ignore
const RecruitmentHome = dynamic(() => import("recruitment-remote/RecruitmentHome"), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Host Application</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        <div className="bg-white p-4 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Auditing Module</h2>
          <AuditingHome />
        </div>

        <div className="bg-white p-4 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold mb-2">HR Module</h2>
          <HrHome />
        </div>

        <div className="bg-white p-4 shadow-md rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Recruitment Module</h2>
          <RecruitmentHome />
        </div>
      </div>
    </div>
  );
}
