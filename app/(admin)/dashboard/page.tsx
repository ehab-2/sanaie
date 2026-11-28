import { redirect } from "next/navigation";

function Dashboard() {
  redirect("/dashboard/applications");
}

export default Dashboard;