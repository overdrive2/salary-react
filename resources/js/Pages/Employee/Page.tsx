import MBreadcrumb from "@/Components/MBreadcrumbList";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from '@inertiajs/react';

export default function EmployeePage() {
    const items = [
        {
          title: "Dashboard",
          url: "dashboard",
        },
        {
          title: "Inbox",
          url: "",
        },
    ];
    return (
        <AppLayout
            header={
                <MBreadcrumb items={items} />
            }
        >
            <Head title="Employee" />

            <div>Employee Page!</div>
        </AppLayout>
    );
};
