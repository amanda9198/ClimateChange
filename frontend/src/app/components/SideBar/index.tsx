// import React from 'react';

// interface SidebarLinkProps {
//     href: string,
//     icon: LucideIcon,
//     label: string,
//     isCollapsed: boolean
// }

// const SidebarLink ({
//     href,
//     icon: Icon,
//     label,
//     isCollapsed
// }: SidebarLinkProps) => {
//     const pathname = usePathname();
//     const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

//     return (
//         <Link href={href}>
//             <div className={`cursor-pointer flex items-center ${
//                 isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"}
//                 hover:text-blue-500 hover-bg-blue-100 gap-3 transition-colors ${
//                     isActive ? "bg-blue-200 text-white" : ""
//                 }
//             }`}
//         >
//             <Icon className="w-"
//     )
// }