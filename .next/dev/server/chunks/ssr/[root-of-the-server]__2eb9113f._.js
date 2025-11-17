module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Downloads/jobboardpro/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/jobboardpro/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Downloads/jobboardpro/lib/supabase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://qlnswervcmeftxrhipzn.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsbnN3ZXJ2Y21lZnR4cmhpcHpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyNTg1MjIsImV4cCI6MjA3ODgzNDUyMn0.qQiH5j9QevelsVk8PmClS5O6d7uQSipmoBYXFgKWfmc");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/Downloads/jobboardpro/services/jobService.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobService",
    ()=>JobService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/lib/supabase.ts [app-rsc] (ecmascript)");
;
class JobService {
    // ... existing getJobs and searchJobs methods ...
    // SAVE JOB FUNCTIONALITY
    static async saveJob(userId, jobId, notes = '', priority = 1) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('user_saved_jobs').insert([
            {
                user_id: userId,
                job_id: jobId,
                notes,
                priority
            }
        ]).select();
        if (error) {
            console.error('Error saving job:', error);
            return false;
        }
        return true;
    }
    static async unsaveJob(userId, jobId) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('user_saved_jobs').delete().eq('user_id', userId).eq('job_id', jobId);
        if (error) {
            console.error('Error unsaving job:', error);
            return false;
        }
        return true;
    }
    static async getSavedJobs(userId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('user_saved_jobs').select(`
        *,
        jobs (
          *,
          companies (
            name,
            logo_url,
            headquarters_location
          )
        )
      `).eq('user_id', userId).order('saved_at', {
            ascending: false
        });
        if (error) {
            console.error('Error fetching saved jobs:', error);
            return [];
        }
        return data || [];
    }
    // APPLICATION TRACKING
    static async applyToJob(userId, jobId, coverLetter = '', notes = '') {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').insert([
            {
                user_id: userId,
                job_id: jobId,
                cover_letter: coverLetter,
                notes,
                status: 'applied'
            }
        ]);
        if (error) {
            console.error('Error applying to job:', error);
            return false;
        }
        return true;
    }
    static async updateApplicationStatus(applicationId, status, notes) {
        const updates = {
            status
        };
        if (notes) updates.notes = notes;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').update(updates).eq('id', applicationId);
        if (error) {
            console.error('Error updating application:', error);
            return false;
        }
        return true;
    }
    static async getApplications(userId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').select(`
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
            console.error('Error fetching applications:', error);
            return [];
        }
        return data || [];
    }
    static async getApplicationStats(userId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$lib$2f$supabase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].from('user_applications').select('status').eq('user_id', userId);
        if (error) {
            console.error('Error fetching stats:', error);
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
        return stats;
    }
}
}),
"[project]/Downloads/jobboardpro/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Add these imports
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$contexts$2f$UserContext$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/contexts/UserContext.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/jobboardpro/services/jobService.ts [app-rsc] (ecmascript)");
;
;
// Add to your component
const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$contexts$2f$UserContext$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useUser"])();
const [savedJobs, setSavedJobs] = useState(new Set());
const [appliedJobs, setAppliedJobs] = useState(new Set());
// Load user's saved and applied jobs
useEffect(()=>{
    if (user) {
        loadUserData();
    }
}, [
    user
]);
const loadUserData = async ()=>{
    if (!user) return;
    try {
        // Load saved jobs
        const saved = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobService"].getSavedJobs(user.id);
        setSavedJobs(new Set(saved.map((job)=>job.job_id)));
        // Load applied jobs
        const applications = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$jobboardpro$2f$services$2f$jobService$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobService"].getApplications(user.id);
        setAppliedJobs(new Set(applications.map((app)=>app.job_id)));
    } catch (error) {
        console.error("Error loading user data:", error);
    }
};
// Update the handleSave and handleApply functions to use the service
const handleSave = async (id, saved)=>{
    setSavedJobs((prev)=>{
        const newSet = new Set(prev);
        if (saved) {
            newSet.add(id);
        } else {
            newSet.delete(id);
        }
        return newSet;
    });
};
const handleApply = async (id)=>{
    setAppliedJobs((prev)=>new Set(prev.add(id)));
};
}),
"[project]/Downloads/jobboardpro/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/jobboardpro/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2eb9113f._.js.map