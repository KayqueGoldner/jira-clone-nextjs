import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";
import { getWorkspace } from "@/features/workspaces/actions";

interface WorkspaceIdSeetingsPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdSeetingsPage = async ({
  params
}: WorkspaceIdSeetingsPageProps) => {
  const user = await getCurrent();

  if(!user) redirect("/sign-in");

  const initialValues = await getWorkspace({ workspaceId: params.workspaceId });

  if(!initialValues) redirect(`/workspaces/${params.workspaceId}`);

  return (
    <div className="w-full lg:max-w-lg">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  )
}

export default WorkspaceIdSeetingsPage;