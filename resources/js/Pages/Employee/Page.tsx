import MBreadcrumb from "@/Components/MBreadcrumbList";
import AppLayout from "@/Layouts/AppLayout";
import { PageProps } from "@/types";
import { Head } from '@inertiajs/react';

export default function EmployeePage({rows}: PageProps) {

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
            <div>
                {rows.map((item, index) => (
                    <div key={index}>
                        <h1>{item.fname}</h1>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
};
