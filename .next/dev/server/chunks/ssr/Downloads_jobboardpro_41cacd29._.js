module.exports = [
"[project]/Downloads/jobboardpro/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Downloads/jobboardpro/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/jobboardpro/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/jobboardpro/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/jobboardpro/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/jobboardpro/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/jobboardpro/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/jobboardpro/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/jobboardpro/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/jobboardpro/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/jobboardpro/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/jobboardpro/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/jobboardpro/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Downloads/jobboardpro/components/job-search-filters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobSearchFilters",
    ()=>JobSearchFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// Sample data
const LOCATIONS = [
    {
        id: '1',
        name: 'San Francisco',
        country: 'USA'
    },
    {
        id: '2',
        name: 'New York',
        country: 'USA'
    },
    {
        id: '3',
        name: 'London',
        country: 'UK'
    },
    {
        id: '4',
        name: 'Toronto',
        country: 'Canada'
    },
    {
        id: '5',
        name: 'Berlin',
        country: 'Germany'
    },
    {
        id: '6',
        name: 'Singapore',
        country: 'Singapore'
    },
    {
        id: '7',
        name: 'Sydney',
        country: 'Australia'
    },
    {
        id: '8',
        name: 'Amsterdam',
        country: 'Netherlands'
    }
];
const TECH_STACK_OPTIONS = [
    {
        id: 'react',
        name: 'React',
        category: 'frontend'
    },
    {
        id: 'vue',
        name: 'Vue',
        category: 'frontend'
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        category: 'frontend'
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        category: 'backend'
    },
    {
        id: 'python',
        name: 'Python',
        category: 'backend'
    },
    {
        id: 'golang',
        name: 'Go',
        category: 'backend'
    },
    {
        id: 'rust',
        name: 'Rust',
        category: 'backend'
    },
    {
        id: 'swift',
        name: 'Swift',
        category: 'mobile'
    },
    {
        id: 'kotlin',
        name: 'Kotlin',
        category: 'mobile'
    },
    {
        id: 'docker',
        name: 'Docker',
        category: 'devops'
    },
    {
        id: 'kubernetes',
        name: 'Kubernetes',
        category: 'devops'
    },
    {
        id: 'postgres',
        name: 'PostgreSQL',
        category: 'database'
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        category: 'database'
    }
];
const REMOTE_OPTIONS = [
    {
        value: 'remote',
        label: 'Remote'
    },
    {
        value: 'hybrid',
        label: 'Hybrid'
    },
    {
        value: 'onsite',
        label: 'On-site'
    }
];
const JOB_TYPES = [
    {
        value: 'full-time',
        label: 'Full-time'
    },
    {
        value: 'part-time',
        label: 'Part-time'
    },
    {
        value: 'contract',
        label: 'Contract'
    }
];
// Debounce hook
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>clearTimeout(handler);
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}
function JobSearchFilters({ onFilterChange, onSearch }) {
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        searchQuery: '',
        locations: [],
        remoteOptions: [],
        jobTypes: [],
        salaryRange: {
            min: 0,
            max: 250000
        },
        techStack: []
    });
    const [locationInput, setLocationInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showLocationDropdown, setShowLocationDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTechDropdown, setShowTechDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Debounced search query
    const debouncedSearchQuery = useDebounce(filters.searchQuery, 300);
    // Filter locations based on input
    const filteredLocations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return LOCATIONS.filter((loc)=>!filters.locations.includes(loc.id) && (loc.name.toLowerCase().includes(locationInput.toLowerCase()) || loc.country.toLowerCase().includes(locationInput.toLowerCase())));
    }, [
        locationInput,
        filters.locations
    ]);
    // Get selected location objects
    const selectedLocations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return LOCATIONS.filter((loc)=>filters.locations.includes(loc.id));
    }, [
        filters.locations
    ]);
    // Get selected tech stack
    const selectedTechStack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return TECH_STACK_OPTIONS.filter((tech)=>filters.techStack.includes(tech.id));
    }, [
        filters.techStack
    ]);
    // Handle search input change
    const handleSearchChange = (e)=>{
        setFilters((prev)=>({
                ...prev,
                searchQuery: e.target.value
            }));
    };
    // Handle location toggle
    const handleLocationToggle = (locationId)=>{
        setFilters((prev)=>({
                ...prev,
                locations: prev.locations.includes(locationId) ? prev.locations.filter((id)=>id !== locationId) : [
                    ...prev.locations,
                    locationId
                ]
            }));
        setLocationInput('');
    };
    // Handle location removal
    const handleLocationRemove = (locationId)=>{
        setFilters((prev)=>({
                ...prev,
                locations: prev.locations.filter((id)=>id !== locationId)
            }));
    };
    // Handle remote option toggle
    const handleRemoteToggle = (option)=>{
        setFilters((prev)=>({
                ...prev,
                remoteOptions: prev.remoteOptions.includes(option) ? prev.remoteOptions.filter((o)=>o !== option) : [
                    ...prev.remoteOptions,
                    option
                ]
            }));
    };
    // Handle job type toggle
    const handleJobTypeToggle = (type)=>{
        setFilters((prev)=>({
                ...prev,
                jobTypes: prev.jobTypes.includes(type) ? prev.jobTypes.filter((t)=>t !== type) : [
                    ...prev.jobTypes,
                    type
                ]
            }));
    };
    // Handle salary range change
    const handleSalaryChange = (value, newValue)=>{
        setFilters((prev)=>({
                ...prev,
                salaryRange: {
                    ...prev.salaryRange,
                    [value]: newValue
                }
            }));
    };
    // Handle tech stack toggle
    const handleTechStackToggle = (techId)=>{
        setFilters((prev)=>({
                ...prev,
                techStack: prev.techStack.includes(techId) ? prev.techStack.filter((id)=>id !== techId) : [
                    ...prev.techStack,
                    techId
                ]
            }));
    };
    // Handle tech stack removal
    const handleTechStackRemove = (techId)=>{
        setFilters((prev)=>({
                ...prev,
                techStack: prev.techStack.filter((id)=>id !== techId)
            }));
    };
    // Reset filters
    const handleReset = ()=>{
        setFilters({
            searchQuery: '',
            locations: [],
            remoteOptions: [],
            jobTypes: [],
            salaryRange: {
                min: 0,
                max: 250000
            },
            techStack: []
        });
        setLocationInput('');
        setShowLocationDropdown(false);
        setShowTechDropdown(false);
    };
    // Trigger filter change callback
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        onFilterChange?.(filters);
    }, [
        filters,
        onFilterChange
    ]);
    // Trigger search callback
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        onSearch?.(debouncedSearchQuery);
    }, [
        debouncedSearchQuery,
        onSearch
    ]);
    const hasActiveFilters = filters.searchQuery || filters.locations.length > 0 || filters.remoteOptions.length > 0 || filters.jobTypes.length > 0 || filters.techStack.length > 0 || filters.salaryRange.min > 0 || filters.salaryRange.max < 250000;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                            type: "text",
                            placeholder: "Search job titles, companies, or keywords...",
                            value: filters.searchQuery,
                            onChange: handleSearchChange,
                            className: "pl-10 pr-4 py-6 text-base"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 block text-sm font-semibold text-foreground",
                                children: "Location"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowLocationDropdown(!showLocationDropdown),
                                        className: "w-full flex items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground hover:border-input focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: selectedLocations.length > 0 ? `${selectedLocations.length} selected` : 'Select locations'
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    showLocationDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-full z-50 mt-1 w-full rounded-lg border border-input bg-background shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                    type: "text",
                                                    placeholder: "Search locations...",
                                                    value: locationInput,
                                                    onChange: (e)=>setLocationInput(e.target.value),
                                                    className: "mb-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-48 space-y-1 overflow-y-auto",
                                                    children: filteredLocations.length > 0 ? filteredLocations.map((location)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>handleLocationToggle(location.id),
                                                            className: "w-full text-left px-3 py-2 rounded hover:bg-muted text-sm",
                                                            children: [
                                                                location.name,
                                                                ", ",
                                                                location.country
                                                            ]
                                                        }, location.id, true, {
                                                            fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 25
                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "px-3 py-2 text-sm text-muted-foreground",
                                                        children: "No locations found"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                            lineNumber: 279,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            selectedLocations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex flex-wrap gap-2",
                                children: selectedLocations.map((location)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
                                        children: [
                                            location.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleLocationRemove(location.id),
                                                className: "hover:opacity-70",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, location.id, true, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 313,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 block text-sm font-semibold text-foreground",
                                children: "Work Environment"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: REMOTE_OPTIONS.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: filters.remoteOptions.includes(option.value),
                                                onChange: ()=>handleRemoteToggle(option.value),
                                                className: "h-4 w-4 rounded border-input"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 341,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: option.label
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, option.value, true, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 block text-sm font-semibold text-foreground",
                                children: "Employment Type"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: JOB_TYPES.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: filters.jobTypes.includes(type.value),
                                                onChange: ()=>handleJobTypeToggle(type.value),
                                                className: "h-4 w-4 rounded border-input"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: type.label
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, type.value, true, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 360,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2 lg:col-span-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 block text-sm font-semibold text-foreground",
                                children: "Annual Salary Range"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    "Min: $",
                                                    filters.salaryRange.min.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 383,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0",
                                                max: "250000",
                                                step: "10000",
                                                value: filters.salaryRange.min,
                                                onChange: (e)=>handleSalaryChange('min', parseInt(e.target.value)),
                                                className: "w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 386,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 382,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs text-muted-foreground",
                                                children: [
                                                    "Max: $",
                                                    filters.salaryRange.max.toLocaleString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 399,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: "0",
                                                max: "250000",
                                                step: "10000",
                                                value: filters.salaryRange.max,
                                                onChange: (e)=>handleSalaryChange('max', parseInt(e.target.value)),
                                                className: "w-full"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 402,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 398,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 381,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2 lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-2 block text-sm font-semibold text-foreground",
                                children: "Tech Stack"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 419,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowTechDropdown(!showTechDropdown),
                                        className: "w-full flex items-center justify-between rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground hover:border-input focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-muted-foreground",
                                                children: selectedTechStack.length > 0 ? `${selectedTechStack.length} selected` : 'Select technologies'
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 427,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 432,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 423,
                                        columnNumber: 13
                                    }, this),
                                    showTechDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-input bg-background shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-h-64 space-y-1 overflow-y-auto p-2",
                                            children: TECH_STACK_OPTIONS.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleTechStackToggle(tech.id),
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full text-left px-3 py-2 rounded text-sm transition-colors', filters.techStack.includes(tech.id) ? 'bg-primary/20 text-primary font-medium' : 'hover:bg-muted'),
                                                    children: [
                                                        tech.name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-xs text-muted-foreground",
                                                            children: [
                                                                "(",
                                                                tech.category,
                                                                ")"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                            lineNumber: 450,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, tech.id, true, {
                                                    fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                            lineNumber: 437,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 422,
                                columnNumber: 11
                            }, this),
                            selectedTechStack.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex flex-wrap gap-2",
                                children: selectedTechStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
                                        children: [
                                            tech.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleTechStackRemove(tech.id),
                                                className: "hover:opacity-70",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                                lineNumber: 469,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, tech.id, true, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 464,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "default",
                        className: "flex-1 md:flex-none",
                        onClick: ()=>{
                        /* Trigger search - parent component handles this */ },
                        children: "Search Jobs"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                        lineNumber: 484,
                        columnNumber: 9
                    }, this),
                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: handleReset,
                        children: "Clear Filters"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                        lineNumber: 494,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this),
            hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-muted/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-2 font-semibold text-foreground",
                            children: "Active Filters:"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                            lineNumber: 504,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: [
                                filters.searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full bg-primary/20 px-2 py-1 text-xs text-primary",
                                    children: [
                                        'Search: "',
                                        filters.searchQuery,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                    lineNumber: 507,
                                    columnNumber: 17
                                }, this),
                                selectedLocations.map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-primary/20 px-2 py-1 text-xs text-primary",
                                        children: loc.name
                                    }, loc.id, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 512,
                                        columnNumber: 17
                                    }, this)),
                                filters.remoteOptions.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-primary/20 px-2 py-1 text-xs text-primary",
                                        children: opt.charAt(0).toUpperCase() + opt.slice(1)
                                    }, opt, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 520,
                                        columnNumber: 17
                                    }, this)),
                                filters.jobTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-primary/20 px-2 py-1 text-xs text-primary",
                                        children: type.replace('-', ' ').split(' ').map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
                                    }, type, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 528,
                                        columnNumber: 17
                                    }, this)),
                                selectedTechStack.map((tech)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-primary/20 px-2 py-1 text-xs text-primary",
                                        children: tech.name
                                    }, tech.id, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                                        lineNumber: 536,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                            lineNumber: 505,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                    lineNumber: 503,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
                lineNumber: 502,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/jobboardpro/components/job-search-filters.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/jobboardpro/services/jobService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobService",
    ()=>JobService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/lib/supabase.ts [app-ssr] (ecmascript)");
;
class JobService {
    // NEW: Logo URL validation and storage methods
    static isValidLogoUrl(url) {
        if (!url || url.trim() === '') return false;
        // Check if it's a real image URL or just an example
        const invalidDomains = [
            'placeholder.example.com',
            'example.com',
            'your-domain.com',
            'placeholder.com',
            'via.placeholder.com' // We'll use our own fallback instead
        ];
        return !invalidDomains.some((domain)=>url.includes(domain));
    }
    static getFallbackLogoUrl(companyName) {
        const initial = companyName.charAt(0).toUpperCase();
        const colors = [
            '3B82F6',
            'EF4444',
            '10B981',
            'F59E0B',
            '8B5CF6',
            'EC4899',
            '06B6D4',
            '84CC16',
            'F97316',
            '6366F1'
        ];
        const color = colors[companyName.charCodeAt(0) % colors.length];
        return `https://via.placeholder.com/100x100/${color}/FFFFFF?text=${initial}`;
    }
    // NEW: Get logo URL with Supabase Storage fallback
    static async getLogoUrl(companyName, currentLogoUrl) {
        // If current URL is valid, use it
        if (this.isValidLogoUrl(currentLogoUrl)) {
            return currentLogoUrl;
        }
        // Try to find in Supabase Storage
        const storageUrl = await this.findLogoInStorage(companyName);
        if (storageUrl) {
            return storageUrl;
        }
        // Fallback to placeholder
        return this.getFallbackLogoUrl(companyName);
    }
    // NEW: Check if logo exists in Supabase Storage
    static async findLogoInStorage(companyName) {
        try {
            const fileName = this.generateStorageFileName(companyName);
            // Check if file exists by trying to get its URL
            const { data: { publicUrl } } = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('logos').getPublicUrl(fileName);
            // Test if the URL is accessible (with timeout)
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 3000);
            try {
                const response = await fetch(publicUrl, {
                    method: 'HEAD',
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                if (response.ok) {
                    return publicUrl;
                }
            } catch  {
                // If fetch fails, the logo doesn't exist
                clearTimeout(timeoutId);
            }
            return null;
        } catch (error) {
            console.error('Error checking storage for logo:', error);
            return null;
        }
    }
    // NEW: Generate consistent file name for storage lookup
    static generateStorageFileName(companyName) {
        return companyName.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') + '.png';
    }
    // UPDATED: getJobs with async logo URL resolution
    static async getJobs(filters) {
        let query = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('jobs').select(`
        *,
        companies (
          name,
          logo_url,
          headquarters_location
        )
      `).eq('status', 'active');
        // Apply filters if provided
        if (filters?.searchQuery) {
            query = query.textSearch('title', filters.searchQuery);
        }
        if (filters?.remoteOptions?.length) {
            query = query.in('remote_level', filters.remoteOptions);
        }
        if (filters?.jobTypes?.length) {
            query = query.in('job_type', filters.jobTypes);
        }
        if (filters?.techStack?.length) {
            query = query.overlaps('required_tech_stack', filters.techStack);
        }
        // LOCATION FILTER
        if (filters?.locations?.length) {
            const locationConditions = filters.locations.map((location)=>`location.ilike.%${location}%,companies.headquarters_location.ilike.%${location}%`).join(',');
            query = query.or(locationConditions);
        }
        const { data, error } = await query;
        if (error) {
            console.error('Error fetching jobs:', error);
            return [];
        }
        // Use Promise.all to handle async logo URL resolution
        const jobsWithLogos = await Promise.all((data || []).map(async (job)=>{
            const finalLogoUrl = await this.getLogoUrl(job.companies?.name || 'Company', job.companies?.logo_url);
            console.log('🔍 Job logo debug:', {
                company: job.companies?.name,
                originalLogo: job.companies?.logo_url,
                finalLogo: finalLogoUrl
            });
            return {
                ...job,
                companies: {
                    ...job.companies,
                    logo_url: finalLogoUrl
                }
            };
        }));
        return jobsWithLogos;
    }
    // UPDATED: SEARCH JOBS METHOD with async logo URLs
    static async searchJobs(searchQuery) {
        if (!searchQuery.trim()) {
            return this.getJobs();
        }
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('jobs').select(`
        *,
        companies (
          name,
          logo_url,
          headquarters_location
        )
      `).eq('status', 'active').or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,companies.name.ilike.%${searchQuery}%`);
        if (error) {
            console.error('Error searching jobs:', error);
            return [];
        }
        // Use Promise.all to handle async logo URL resolution
        const jobsWithLogos = await Promise.all((data || []).map(async (job)=>{
            const finalLogoUrl = await this.getLogoUrl(job.companies?.name || 'Company', job.companies?.logo_url);
            return {
                ...job,
                companies: {
                    ...job.companies,
                    logo_url: finalLogoUrl
                }
            };
        }));
        return jobsWithLogos;
    }
    // SAVE JOB FUNCTIONALITY (unchanged)
    static async saveJob(userId, jobId, notes = '') {
        console.log('💾 Saving job:', {
            userId,
            jobId,
            notes
        });
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_saved_jobs').insert([
                {
                    user_id: userId,
                    job_id: jobId,
                    notes
                }
            ]);
            if (error) {
                console.error('❌ Error saving job:', error);
                return false;
            }
            console.log('✅ Job saved successfully');
            return true;
        } catch (error) {
            console.error('❌ Unexpected error saving job:', error);
            return false;
        }
    }
    static async unsaveJob(userId, jobId) {
        console.log('🗑️ Unsaving job:', {
            userId,
            jobId
        });
        try {
            const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_saved_jobs').delete().eq('user_id', userId).eq('job_id', jobId);
            if (error) {
                console.error('❌ Error unsaving job:', error);
                return false;
            }
            console.log('✅ Job unsaved successfully');
            return true;
        } catch (error) {
            console.error('❌ Unexpected error unsaving job:', error);
            return false;
        }
    }
    // UPDATED: GET SAVED JOBS with async logo URLs
    static async getSavedJobs(userId) {
        try {
            console.log('🔄 Fetching saved jobs for user:', userId);
            // First, get the saved job IDs
            const { data: savedData, error: savedError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_saved_jobs').select('*').eq('user_id', userId).order('saved_at', {
                ascending: false
            });
            if (savedError) {
                console.error('❌ Error fetching saved job records:', savedError);
                return [];
            }
            console.log('📋 Saved job records:', savedData);
            if (!savedData || savedData.length === 0) {
                console.log('ℹ️ No saved jobs found for user');
                return [];
            }
            // Then, get the actual job details for each saved job
            const jobIds = savedData.map((item)=>item.job_id);
            const { data: jobsData, error: jobsError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('jobs').select(`
          *,
          companies (
            name,
            logo_url,
            headquarters_location
          )
        `).in('id', jobIds);
            if (jobsError) {
                console.error('❌ Error fetching job details:', jobsError);
                return [];
            }
            console.log('💼 Job details found:', jobsData?.length || 0);
            // Combine the data with proper logo handling
            const combinedData = await Promise.all(savedData.map(async (savedItem)=>{
                const job = jobsData?.find((j)=>j.id === savedItem.job_id);
                if (!job) return null;
                const finalLogoUrl = await this.getLogoUrl(job.companies?.name || 'Company', job.companies?.logo_url);
                return {
                    ...savedItem,
                    jobs: {
                        ...job,
                        companies: {
                            ...job.companies,
                            logo_url: finalLogoUrl
                        }
                    }
                };
            }));
            const filteredData = combinedData.filter((item)=>item !== null);
            console.log('🎯 Combined saved jobs:', filteredData);
            return filteredData;
        } catch (error) {
            console.error('❌ Unexpected error in getSavedJobs:', error);
            return [];
        }
    }
    // UPDATED: APPLICATION TRACKING WITH COMPREHENSIVE DEBUGGING
    static async applyToJob(userId, jobId, coverLetter = '', notes = '') {
        console.log('🔍 DEBUG applyToJob - Starting:', {
            userId,
            jobId,
            coverLetter,
            notes
        });
        try {
            // Validate inputs
            if (!userId || !jobId) {
                console.error('❌ Missing required fields:', {
                    userId,
                    jobId
                });
                return false;
            }
            // Check if application already exists
            console.log('🔍 Checking for existing application...');
            const { data: existingApp, error: checkError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').select('id').eq('user_id', userId).eq('job_id', jobId).maybeSingle(); // Use maybeSingle instead of single
            if (checkError) {
                console.error('❌ Error checking existing application:', checkError);
            // Continue anyway, as this might not be critical
            }
            if (existingApp) {
                console.log('ℹ️ Application already exists:', existingApp.id);
                // Return true since the application already exists
                return true;
            }
            // Insert new application
            console.log('📝 Inserting new application...');
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').insert([
                {
                    user_id: userId,
                    job_id: jobId,
                    cover_letter: coverLetter,
                    notes: notes,
                    status: 'applied'
                }
            ]).select().single();
            if (error) {
                console.error('❌ Supabase error:', {
                    code: error.code,
                    message: error.message,
                    details: error.details,
                    hint: error.hint
                });
                // Handle specific error cases
                if (error.code === '23503') {
                    console.error('❌ Foreign key violation - user or job does not exist');
                    return false;
                }
                if (error.code === '23505') {
                    console.error('❌ Unique violation - application already exists');
                    return true; // Application already exists
                }
                return false;
            }
            console.log('✅ Application created successfully:', data);
            return true;
        } catch (error) {
            console.error('❌ Unexpected error:', {
                message: error.message,
                stack: error.stack,
                name: error.name
            });
            return false;
        }
    }
    // TEMPORARY DEBUG FUNCTION - Use this for testing
    static async testApplication(userId, jobId) {
        console.log('🧪 TEST: Starting application test');
        console.log('👤 User ID:', userId);
        console.log('💼 Job ID:', jobId);
        const success = await this.applyToJob(userId, jobId);
        console.log('🧪 TEST Result:', success);
        return success;
    }
    static async updateApplicationStatus(applicationId, status, notes) {
        console.log('🔄 Updating application status:', {
            applicationId,
            status,
            notes
        });
        const updates = {
            status
        };
        if (notes) updates.notes = notes;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').update(updates).eq('id', applicationId);
        if (error) {
            console.error('❌ Error updating application:', error);
            return false;
        }
        console.log('✅ Application status updated successfully');
        return true;
    }
    // UPDATED: GET APPLICATIONS with async logo URLs
    static async getApplications(userId) {
        console.log('🔄 Fetching applications for user:', userId);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').select(`
        *,
        jobs (
          *,
          companies (
            name,
            logo_url,
            headquarters_location
          )
        )
      `).eq('user_id', userId).order('applied_at', {
            ascending: false
        });
        if (error) {
            console.error('❌ Error fetching applications:', error);
            return [];
        }
        // Use Promise.all to handle async logo URL resolution
        const applicationsWithLogos = await Promise.all((data || []).map(async (application)=>{
            if (!application.jobs) return application;
            const finalLogoUrl = await this.getLogoUrl(application.jobs.companies?.name || 'Company', application.jobs.companies?.logo_url);
            return {
                ...application,
                jobs: {
                    ...application.jobs,
                    companies: {
                        ...application.jobs.companies,
                        logo_url: finalLogoUrl
                    }
                }
            };
        }));
        console.log('✅ Applications fetched:', applicationsWithLogos?.length || 0);
        return applicationsWithLogos;
    }
    static async getApplicationStats(userId) {
        console.log('📊 Fetching application stats for user:', userId);
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').select('status').eq('user_id', userId);
        if (error) {
            console.error('❌ Error fetching stats:', error);
            return null;
        }
        const stats = {
            total: data.length,
            applied: data.filter((app)=>app.status === 'applied').length,
            interviewing: data.filter((app)=>app.status === 'interviewing').length,
            rejected: data.filter((app)=>app.status === 'rejected').length,
            offered: data.filter((app)=>app.status === 'offered').length,
            accepted: data.filter((app)=>app.status === 'accepted').length
        };
        console.log('📊 Application stats:', stats);
        return stats;
    }
    // NEW: Batch update all companies with storage logos
    static async migrateToSupabaseStorage() {
        try {
            console.log('🔄 Migrating company logos to Supabase Storage...');
            const { data: companies, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('companies').select('id, name, logo_url');
            if (error) throw error;
            let updated = 0;
            let failed = 0;
            for (const company of companies){
                try {
                    const newLogoUrl = await this.getLogoUrl(company.name, company.logo_url);
                    // Only update if the URL changed
                    if (newLogoUrl !== company.logo_url) {
                        const { error: updateError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('companies').update({
                            logo_url: newLogoUrl
                        }).eq('id', company.id);
                        if (updateError) {
                            console.error(`❌ Failed to update ${company.name}:`, updateError);
                            failed++;
                        } else {
                            console.log(`✅ Updated ${company.name}: ${newLogoUrl}`);
                            updated++;
                        }
                    }
                } catch (companyError) {
                    console.error(`❌ Error with ${company.name}:`, companyError);
                    failed++;
                }
            }
            console.log(`🎉 Migration complete: ${updated} updated, ${failed} failed`);
            return {
                updated,
                failed
            };
        } catch (error) {
            console.error('❌ Migration failed:', error);
            return {
                updated: 0,
                failed: 0
            };
        }
    }
    // NEW: Get logo status report
    static async getLogoStatus() {
        try {
            const { data: companies, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('companies').select('logo_url');
            if (error) {
                console.error('❌ Error fetching logo status:', error);
                return {
                    withLogos: 0,
                    withoutLogos: 0,
                    total: 0
                };
            }
            const withLogos = companies.filter((company)=>this.isValidLogoUrl(company.logo_url)).length;
            const withoutLogos = companies.length - withLogos;
            console.log(`📊 Logo status: ${withLogos} with logos, ${withoutLogos} without logos`);
            return {
                withLogos,
                withoutLogos,
                total: companies.length
            };
        } catch (error) {
            console.error('❌ Unexpected error in getLogoStatus:', error);
            return {
                withLogos: 0,
                withoutLogos: 0,
                total: 0
            };
        }
    }
    // NEW: Check storage bucket status
    static async getStorageStatus() {
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].storage.from('logos').list();
            if (error) {
                console.error('❌ Storage bucket error:', error);
                return {
                    exists: false
                };
            }
            return {
                exists: true,
                fileCount: data.length
            };
        } catch (error) {
            console.error('❌ Storage check failed:', error);
            return {
                exists: false
            };
        }
    }
}
}),
"[project]/Downloads/jobboardpro/components/job-listing-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobListingCard",
    ()=>JobListingCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$contexts$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/contexts/UserContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/services/jobService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-ssr] (ecmascript) <export default as Bookmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookmarkCheck$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/bookmark-check.js [app-ssr] (ecmascript) <export default as BookmarkCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
"use client";
;
;
;
;
;
function JobListingCard({ id, companyName, companyLogo, jobTitle, jobType, remoteLevel, location, salaryMin, salaryMax, salaryPeriod, techStack, postedDate, source, sourceUrl, isSaved = false, isApplied = false, onSave, onApply }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$contexts$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isSaved);
    const [applied, setApplied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isApplied);
    const [applying, setApplying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saving, setSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Update local state when props change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSaved(isSaved);
    }, [
        isSaved
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setApplied(isApplied);
    }, [
        isApplied
    ]);
    const formatSalary = ()=>{
        const format = (amount)=>{
            if (salaryPeriod === "year") return `$${(amount / 1000).toFixed(0)}k`;
            if (salaryPeriod === "month") return `$${amount}/mo`;
            return `$${amount}/hr`;
        };
        if (salaryMin && salaryMax) {
            return `${format(salaryMin)} - ${format(salaryMax)}`;
        } else if (salaryMin) {
            return `From ${format(salaryMin)}`;
        } else if (salaryMax) {
            return `Up to ${format(salaryMax)}`;
        }
        return "Salary not specified";
    };
    const handleSave = async ()=>{
        console.log("🔄 Save button clicked for job:", id);
        console.log("👤 User:", user);
        if (!user) {
            console.log("❌ No user - showing alert");
            alert("Please sign in to save jobs");
            return;
        }
        setSaving(true);
        console.log("💾 Starting save process...");
        try {
            if (saved) {
                console.log("🗑️ Unsaving job:", id);
                const success = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobService"].unsaveJob(user.id, id);
                console.log("✅ Unsave result:", success);
                if (success) {
                    setSaved(false);
                    onSave?.(id, false);
                    console.log("✅ Job unsaved successfully");
                } else {
                    console.log("❌ Failed to unsave job");
                    alert("Failed to unsave job. Please try again.");
                }
            } else {
                console.log("💾 Saving job:", id);
                const success = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobService"].saveJob(user.id, id);
                console.log("✅ Save result:", success);
                if (success) {
                    setSaved(true);
                    onSave?.(id, true);
                    console.log("✅ Job saved successfully");
                } else {
                    console.log("❌ Failed to save job");
                    alert("Failed to save job. Please try again.");
                }
            }
        } catch (error) {
            console.error("❌ Error in handleSave:", error);
            alert("An error occurred. Please try again.");
        } finally{
            setSaving(false);
            console.log("🏁 Save process completed");
        }
    };
    const handleApply = async ()=>{
        console.log("🚀 Apply button clicked for job:", id);
        console.log("👤 User:", user);
        if (!user) {
            console.log("❌ No user - showing alert");
            alert("Please sign in to apply for jobs");
            return;
        }
        if (applied) {
            console.log("ℹ️ Already applied to this job");
            alert("You have already applied to this job!");
            return;
        }
        setApplying(true);
        console.log("📝 Starting apply process...");
        try {
            const success = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobService"].applyToJob(user.id, id);
            console.log("✅ Apply result:", success);
            if (success) {
                console.log("🎉 Application recorded successfully");
                setApplied(true);
                // Open the actual job application page if available
                if (sourceUrl && sourceUrl !== "#") {
                    console.log("🌐 Opening application URL:", sourceUrl);
                    window.open(sourceUrl, "_blank", "noopener,noreferrer");
                }
                // Notify parent component
                onApply?.(id);
                // Show success message
                alert("🎉 Application recorded successfully! Good luck! 🚀");
                console.log("✅ Apply process completed successfully");
            } else {
                console.log("❌ Failed to record application");
                alert("❌ Failed to record your application. Please try again.");
            }
        } catch (error) {
            console.error("❌ Error applying to job:", error);
            alert(`❌ Error: ${error.message || "Failed to apply. Please try again."}`);
        } finally{
            setApplying(false);
            console.log("🏁 Apply process finished");
        }
    };
    const getRemoteBadgeColor = (level)=>{
        switch(level){
            case "remote":
                return "bg-green-100 text-green-800";
            case "hybrid":
                return "bg-blue-100 text-blue-800";
            case "onsite":
                return "bg-gray-100 text-gray-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    const getJobTypeColor = (type)=>{
        switch(type){
            case "full-time":
                return "bg-purple-100 text-purple-800";
            case "part-time":
                return "bg-orange-100 text-orange-800";
            case "contract":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center",
                                children: companyLogo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: companyLogo,
                                    alt: companyName,
                                    className: "w-10 h-10 object-contain rounded"
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                    lineNumber: 225,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-bold text-gray-400",
                                    children: companyName.charAt(0).toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-lg text-gray-900",
                                        children: jobTitle
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: companyName
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        disabled: saving,
                        className: "p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50",
                        title: saved ? "Remove from saved" : "Save job",
                        children: saved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookmarkCheck$3e$__["BookmarkCheck"], {
                            className: "w-5 h-5 text-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                            className: "w-5 h-5 text-gray-400 hover:text-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2 text-sm text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: location
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 260,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2 text-sm text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: jobType
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2 text-sm text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatSalary()
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-1 rounded-full text-xs font-medium ${getRemoteBadgeColor(remoteLevel)}`,
                                        children: remoteLevel
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-1 rounded-full text-xs font-medium ${getJobTypeColor(jobType)}`,
                                        children: jobType
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    applied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",
                                        children: "Applied ✓"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2 text-sm text-gray-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Posted ",
                                            postedDate.toLocaleDateString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            techStack.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: [
                        techStack.slice(0, 4).map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs",
                                children: tech
                            }, index, false, {
                                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                                lineNumber: 305,
                                columnNumber: 15
                            }, this)),
                        techStack.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "px-2 py-1 bg-gray-100 text-gray-500 rounded-md text-xs",
                            children: [
                                "+",
                                techStack.length - 4,
                                " more"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                            lineNumber: 313,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                    lineNumber: 303,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                lineNumber: 302,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleApply,
                    disabled: applying || applied,
                    className: `px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${applied ? "bg-green-600 text-white cursor-default" : applying ? "bg-blue-400 text-white cursor-wait" : "bg-blue-600 text-white hover:bg-blue-700"} disabled:opacity-50`,
                    children: [
                        applied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                            lineNumber: 335,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                            lineNumber: 337,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: applied ? "Applied ✓" : applying ? "Applying..." : "Apply Now"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/jobboardpro/components/job-listing-card.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/jobboardpro/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$job$2d$search$2d$filters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/components/job-search-filters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$job$2d$listing$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/components/job-listing-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$contexts$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/contexts/UserContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/services/jobService.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Home() {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$contexts$2f$UserContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [savedJobs, setSavedJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [appliedJobs, setAppliedJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [jobs, setJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userDataLoading, setUserDataLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load jobs from Supabase on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadJobs();
    }, []);
    // Load user's saved and applied jobs when user changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (user) {
            loadUserData();
        } else {
            // Reset user data when logged out
            setSavedJobs(new Set());
            setAppliedJobs(new Set());
        }
    }, [
        user
    ]);
    const loadJobs = async ()=>{
        setLoading(true);
        try {
            console.log("🔄 Loading jobs from database...");
            const jobsData = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobService"].getJobs();
            console.log("✅ Jobs loaded:", jobsData.length);
            setJobs(jobsData);
        } catch (error) {
            console.error("❌ Failed to load jobs:", error);
        } finally{
            setLoading(false);
        }
    };
    const loadUserData = async ()=>{
        if (!user) {
            console.log("❌ No user - skipping user data load");
            return;
        }
        setUserDataLoading(true);
        try {
            console.log("🔄 Loading user data (saved jobs and applications)...");
            // Load saved jobs
            const saved = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobService"].getSavedJobs(user.id);
            setSavedJobs(new Set(saved.map((job)=>job.job_id)));
            console.log("✅ Saved jobs loaded:", saved.length);
            // Load applied jobs
            const applications = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobService"].getApplications(user.id);
            setAppliedJobs(new Set(applications.map((app)=>app.job_id)));
            console.log("✅ Applications loaded:", applications.length);
        } catch (error) {
            console.error("❌ Error loading user data:", error);
        } finally{
            setUserDataLoading(false);
        }
    };
    // Search jobs when search query changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (searchQuery.trim()) {
            searchJobs(searchQuery);
        } else {
            loadJobs();
        }
    }, [
        searchQuery
    ]);
    const searchJobs = async (query)=>{
        setLoading(true);
        try {
            console.log("🔍 Searching jobs for:", query);
            const jobsData = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobService"].searchJobs(query);
            console.log("✅ Search results:", jobsData.length);
            setJobs(jobsData);
        } catch (error) {
            console.error("❌ Failed to search jobs:", error);
        } finally{
            setLoading(false);
        }
    };
    const handleSave = async (id, saved)=>{
        console.log("💾 Main page: Save action for job:", id, "saved:", saved);
        if (!user) {
            console.log("❌ No user in handleSave");
            return;
        }
        // Update local state immediately for better UX
        setSavedJobs((prev)=>{
            const newSet = new Set(prev);
            if (saved) {
                newSet.add(id);
            } else {
                newSet.delete(id);
            }
            return newSet;
        });
        // Reload user data to ensure it's fresh
        await loadUserData();
        console.log("✅ Main page: Save state updated");
    };
    const handleApply = async (id)=>{
        console.log("📝 Main page: Application recorded for job:", id);
        if (!user) {
            console.log("❌ No user in handleApply");
            return;
        }
        try {
            // Update local state immediately for better UX
            setAppliedJobs((prev)=>new Set(prev.add(id)));
            // Reload user data to ensure it's fresh
            await loadUserData();
            console.log("✅ Main page: Application state updated");
        } catch (error) {
            console.error("❌ Main page: Error updating application state:", error);
        }
    };
    // Transform Supabase data to match your component props
    const transformJobData = (job)=>({
            id: job.id,
            companyName: job.companies?.name || "Unknown Company",
            companyLogo: job.companies?.logo_url || "",
            jobTitle: job.title,
            jobType: job.job_type,
            remoteLevel: job.remote_level,
            location: job.location || job.companies?.headquarters_location || "Location not specified",
            salaryMin: job.salary_min || 0,
            salaryMax: job.salary_max || 0,
            salaryPeriod: "year",
            techStack: job.required_tech_stack || [],
            postedDate: new Date(job.posting_date || job.created_at),
            source: "Database",
            sourceUrl: job.application_url || "#",
            isSaved: savedJobs.has(job.id),
            isApplied: appliedJobs.has(job.id)
        });
    const filteredJobs = jobs.map(transformJobData).filter((job)=>{
        if (!filters) return true;
        // Location filter with null checking
        if (filters.locations && filters.locations.length > 0) {
            // Check if job has a location and it's not empty
            if (!job.location || job.location.trim() === "") {
                return false; // Exclude jobs without locations when location filter is active
            }
            const hasLocationMatch = filters.locations.some((filterLocation)=>{
                const jobLocation = job.location.toLowerCase().trim();
                const searchLocation = filterLocation.toLowerCase().trim();
                return jobLocation.includes(searchLocation);
            });
            if (!hasLocationMatch) {
                return false;
            }
        }
        // Remote options filter
        if (filters.remoteOptions && filters.remoteOptions.length > 0) {
            if (!filters.remoteOptions.includes(job.remoteLevel)) {
                return false;
            }
        }
        // Job types filter
        if (filters.jobTypes && filters.jobTypes.length > 0) {
            if (!filters.jobTypes.includes(job.jobType)) {
                return false;
            }
        }
        // Salary range filter
        if (filters.salaryRange) {
            const jobSalaryMin = job.salaryPeriod === "year" ? job.salaryMin : (job.salaryMin || 0) * 2000;
            if (jobSalaryMin < filters.salaryRange.min || jobSalaryMin > filters.salaryRange.max) {
                return false;
            }
        }
        // Tech stack filter
        if (filters.techStack && filters.techStack.length > 0) {
            const hasMatchingTech = filters.techStack.some((tech)=>job.techStack.some((t)=>t.toLowerCase() === tech.toLowerCase()));
            if (!hasMatchingTech) {
                return false;
            }
        }
        return true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-bold text-foreground md:text-5xl",
                            children: "Find Your Dream Job"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-lg text-muted-foreground",
                            children: "Advanced filtering to help you discover the perfect opportunity"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center space-x-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-blue-100 text-blue-800 px-2 py-1 rounded-full",
                                            children: [
                                                savedJobs.size,
                                                " saved"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-green-100 text-green-800 px-2 py-1 rounded-full",
                                            children: [
                                                appliedJobs.size,
                                                " applied"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this),
                                (savedJobs.size > 0 || appliedJobs.size > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-2",
                                    children: [
                                        savedJobs.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/saved",
                                            className: "text-blue-600 hover:text-blue-800 hover:underline",
                                            children: "View saved →"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 21
                                        }, this),
                                        appliedJobs.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/applications",
                                            className: "text-green-600 hover:text-green-800 hover:underline",
                                            children: "View applications →"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 17
                                }, this),
                                userDataLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500 text-xs",
                                    children: "Updating..."
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                    lineNumber: 282,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$job$2d$search$2d$filters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobSearchFilters"], {
                    onFilterChange: setFilters,
                    onSearch: setSearchQuery
                }, void 0, false, {
                    fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                    lineNumber: 289,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                lineNumber: 298,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-muted-foreground",
                                children: "Loading jobs..."
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                lineNumber: 299,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                        lineNumber: 297,
                        columnNumber: 13
                    }, this) : filteredJobs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-foreground",
                                        children: [
                                            filteredJobs.length,
                                            " ",
                                            filteredJobs.length === 1 ? "Job" : "Jobs",
                                            " Found"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 17
                                    }, this),
                                    user && (savedJobs.size > 0 || appliedJobs.size > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: [
                                            savedJobs.size,
                                            " saved • ",
                                            appliedJobs.size,
                                            " applied"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                        lineNumber: 309,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                lineNumber: 303,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4",
                                children: filteredJobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$components$2f$job$2d$listing$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JobListingCard"], {
                                        ...job,
                                        onSave: handleSave,
                                        onApply: handleApply
                                    }, job.id, false, {
                                        fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                lineNumber: 314,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                        lineNumber: 302,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg border border-input bg-card p-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-muted-foreground",
                                children: "No jobs found matching your criteria"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                lineNumber: 327,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-muted-foreground",
                                children: "Try adjusting your filters to see more results"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                lineNumber: 330,
                                columnNumber: 15
                            }, this),
                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSearchQuery(""),
                                className: "mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700",
                                children: "Clear Search"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                                lineNumber: 334,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                        lineNumber: 326,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
            lineNumber: 241,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/jobboardpro/app/page.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_jobboardpro_41cacd29._.js.map