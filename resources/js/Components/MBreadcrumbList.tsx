import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";

export default function MBreadcrumb({ items }) {
   const a = 1234;

   return (
      <Breadcrumb>
         {a}
         <BreadcrumbList>
            {items.map((item, key) => (
               <Fragment key={key}>
                  <BreadcrumbItem key={key} className="hidden md:block">
                     { item.url ?
                        <BreadcrumbLink key={key} href={item.url}>
                           {item.title}
                        </BreadcrumbLink> :
                        <BreadcrumbLink key={key}>
                           {item.title}
                        </BreadcrumbLink>
                     }
                  </BreadcrumbItem>
                  { (key < items.length - 1) && <BreadcrumbSeparator className="hidden md:block" />}
               </Fragment>
            ))}
         </BreadcrumbList>
      </Breadcrumb>
   );
};
