import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";

export default function MBreadcrumb({items}) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {items.map((item, index) => (
                    <>
                        <BreadcrumbItem className="hidden md:block">
                            { item.url ?
                                <BreadcrumbLink href={item.url}>
                                    {item.title}
                                </BreadcrumbLink> :
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                </BreadcrumbItem>
                            }
                        </BreadcrumbItem>
                        { (index < items.length - 1) && <BreadcrumbSeparator className="hidden md:block" />}
                    </>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
};
