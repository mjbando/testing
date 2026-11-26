(()=>{"use strict";module.exports = [
"[project]/src/components/AchievementToast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AchievementToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pixel-emblems.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterPortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CharacterPortrait.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/playable-characters.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function AchievementToast({ unlocked, onDone }) {
    const current = unlocked[0];
    const doneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onDone);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        doneRef.current = onDone;
    }, [
        onDone
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!current?.id) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playAchievement"])();
        const id = setTimeout(()=>doneRef.current(), 4500);
        return ()=>clearTimeout(id);
    }, [
        current?.id
    ]);
    if (!current) return null;
    const recruit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterById"])(current.rewardCharacter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "achievement-toast",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative shrink-0 border border-amber-300/25 bg-amber-300/5 p-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterPortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        characterId: recruit.id,
                        size: 52
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementToast.tsx",
                        lineNumber: 24,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        kind: current.emblem,
                        size: 18,
                        className: "absolute -bottom-1 -right-1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementToast.tsx",
                        lineNumber: 25,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AchievementToast.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs tracking-[.2em] text-amber-300",
                        children: "CHARACTER UNLOCKED"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementToast.tsx",
                        lineNumber: 27,
                        columnNumber: 37
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-pixel-display text-base leading-snug text-amber-100",
                        children: recruit.shortName
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementToast.tsx",
                        lineNumber: 27,
                        columnNumber: 113
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-300",
                        children: [
                            current.title,
                            " · ",
                            recruit.grade
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementToast.tsx",
                        lineNumber: 28,
                        columnNumber: 7
                    }, this),
                    unlocked.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-400",
                        children: [
                            "+",
                            unlocked.length - 1,
                            " more recruits"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementToast.tsx",
                        lineNumber: 29,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AchievementToast.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Dismiss achievement notification",
                onClick: ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                    doneRef.current();
                },
                className: "self-start px-1 text-lg text-slate-400 hover:text-white",
                children: "×"
            }, void 0, false, {
                fileName: "[project]/src/components/AchievementToast.tsx",
                lineNumber: 31,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AchievementToast.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/AchievementsPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AchievementsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pixel-emblems.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterPortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CharacterPortrait.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/achievements.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/playable-characters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/voyage-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const dateLabel = (iso)=>new Date(iso).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
function AchievementsPanel({ captain, refreshKey, onUnlock, equippedCharacter, onEquip }) {
    const [report, setReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [retry, setRetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("badges");
    const [equipping, setEquipping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showRequirement, setShowRequirement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const section = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const live = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const selectionVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        live.current = true;
        return ()=>{
            live.current = false;
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setError("");
        const version = selectionVersion.current;
        const ctrl = new AbortController();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])("/api/account/achievements", "GET", undefined, ctrl.signal).then((d)=>{
            if (ctrl.signal.aborted) return;
            setReport(d);
            onUnlock(d.newlyUnlocked);
            if (version === selectionVersion.current) onEquip(d.equippedCharacter, captain.id);
        }).catch((e)=>{
            if (!ctrl.signal.aborted) setError(e instanceof Error ? e.message : "Couldn't load achievements.");
        });
        return ()=>ctrl.abort();
    }, [
        captain.id,
        retry,
        refreshKey,
        onUnlock,
        onEquip
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (view !== "badges" || !showRequirement) return;
        const el = section.current?.querySelector(`[data-achievement="${showRequirement}"]`);
        if (el) {
            el.open = true;
            el.scrollIntoView({
                block: "nearest"
            });
            el.querySelector("summary")?.focus();
        }
        setShowRequirement(null);
    }, [
        view,
        showRequirement
    ]);
    async function equip(id) {
        if (equipping || id === equippedCharacter) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
        setEquipping(id);
        setError("");
        setNotice("");
        selectionVersion.current++;
        try {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])("/api/account/character", "PUT", {
                accountId: captain.id,
                characterId: id
            });
            if (!live.current) return;
            selectionVersion.current++;
            onEquip(data.equippedCharacter, data.accountId);
            onUnlock(data.newlyUnlocked);
            setNotice(`Now sailing as ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterById"])(data.equippedCharacter).shortName}. Saved to your account.`);
        } catch (e) {
            if (live.current) setError(e instanceof Error ? e.message : "Couldn't equip this character. Try again.");
        } finally{
            if (live.current) setEquipping(null);
        }
    }
    const earnedIds = new Set(report?.achievements.filter((a)=>a.unlocked).map((a)=>a.id) ?? []);
    const earned = earnedIds.size;
    const total = report?.achievements.length ?? 15;
    const badges = report?.achievements.filter((a)=>filter === "all" || (filter === "earned" ? a.unlocked : !a.unlocked)) ?? [];
    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterById"])(equippedCharacter);
    const recruitCount = 1 + earned;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: section,
        className: "p-4",
        "aria-labelledby": "achievement-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid h-14 w-14 shrink-0 place-items-center border border-amber-300/25 bg-amber-300/[.06]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            kind: "seal",
                            size: 40
                        }, void 0, false, {
                            fileName: "[project]/src/components/AchievementsPanel.tsx",
                            lineNumber: 78,
                            columnNumber: 113
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 78,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs tracking-[.25em] text-amber-300",
                                children: "CAPTAIN'S COLLECTION"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                lineNumber: 79,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "achievement-title",
                                className: "font-pixel-display text-xl text-white",
                                children: "Achievements"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                lineNumber: 79,
                                columnNumber: 115
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-slate-400",
                                children: "Earn emblems. Recruit legends."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                lineNumber: 79,
                                columnNumber: 209
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 79,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl text-amber-200",
                        "aria-label": `${earned} of ${total} achievements earned`,
                        children: [
                            earned,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                className: "text-base text-slate-500",
                                children: [
                                    "/",
                                    total
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                lineNumber: 80,
                                columnNumber: 114
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 80,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AchievementsPanel.tsx",
                lineNumber: 77,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "my-3 h-1 bg-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-amber-300 transition-[width]",
                    style: {
                        width: `${earned / total * 100}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                    lineNumber: 82,
                    columnNumber: 43
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AchievementsPanel.tsx",
                lineNumber: 82,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crew-equipped flex items-center gap-3 border border-white/15 p-2.5",
                style: {
                    borderLeftColor: current.color
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterPortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        characterId: current.id,
                        size: 64,
                        className: "shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 85,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs tracking-[.2em] text-slate-400",
                                children: "SAILING AS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                lineNumber: 86,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-pixel-display text-base text-white",
                                children: current.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                lineNumber: 86,
                                columnNumber: 107
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                style: {
                                    color: current.color
                                },
                                children: current.epithet
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                lineNumber: 86,
                                columnNumber: 180
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 86,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "self-start text-sm text-emerald-300",
                        children: "✓ Equipped"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 87,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AchievementsPanel.tsx",
                lineNumber: 84,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 mt-3 grid grid-cols-2 border border-[#34445e] bg-[#0b1628] p-1",
                "aria-label": "Collection view",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": view === "badges",
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                            setView("badges");
                        },
                        className: `h-9 text-lg ${view === "badges" ? "bg-[#24364e] text-amber-200" : "text-slate-400 hover:text-white"}`,
                        children: [
                            "Badges · ",
                            earned,
                            "/",
                            total
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 90,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": view === "crew",
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                            setView("crew");
                        },
                        className: `h-9 text-lg ${view === "crew" ? "bg-[#24364e] text-amber-200" : "text-slate-400 hover:text-white"}`,
                        children: [
                            "Characters · ",
                            recruitCount,
                            "/16"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 91,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AchievementsPanel.tsx",
                lineNumber: 89,
                columnNumber: 5
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "mb-3 border-l-2 border-rose-400 px-2 py-1 text-base text-rose-200",
                children: [
                    error,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                            setRetry((n)=>n + 1);
                        },
                        className: "underline",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 93,
                        columnNumber: 117
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AchievementsPanel.tsx",
                lineNumber: 93,
                columnNumber: 15
            }, this),
            notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                className: "mb-3 border-l-2 border-emerald-400 px-2 py-1 text-base text-emerald-200",
                children: notice
            }, void 0, false, {
                fileName: "[project]/src/components/AchievementsPanel.tsx",
                lineNumber: 94,
                columnNumber: 16
            }, this),
            !report && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                className: "py-6 text-center text-cyan-200",
                children: "Reading your achievements and crew…"
            }, void 0, false, {
                fileName: "[project]/src/components/AchievementsPanel.tsx",
                lineNumber: 95,
                columnNumber: 27
            }, this),
            view === "crew" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-3 text-base leading-tight text-slate-400",
                        children: "One unique recruit per achievement. The toughest challenges unlock Emperors, the Pirate King, and Gear 5."
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 98,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        "aria-label": "Unlockable characters",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLAYABLE_CHARACTERS"].map((character)=>{
                            const available = !character.achievementId || earnedIds.has(character.achievementId);
                            const selected = character.id === equippedCharacter;
                            const requirement = report?.achievements.find((a)=>a.id === character.achievementId) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACHIEVEMENTS"].find((a)=>a.id === character.achievementId);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                "data-crew": character.id,
                                "data-unlocked": available,
                                "data-equipped": selected,
                                className: `crew-card flex flex-col border ${selected ? "border-amber-300/70" : "border-[#2d3d55]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `crew-stage relative grid h-24 place-items-center ${available ? "" : "grayscale"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterPortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                characterId: character.id,
                                                size: 88,
                                                dim: !available
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-2 top-1 text-xs tracking-wider",
                                                style: {
                                                    color: available ? character.color : "#8390a4"
                                                },
                                                children: character.grade.toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this),
                                            selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute right-2 top-1 text-amber-300",
                                                children: "✓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                lineNumber: 109,
                                                columnNumber: 28
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 flex-col p-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-pixel-display text-sm text-slate-100",
                                                children: character.shortName
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-2 text-sm leading-tight text-slate-400",
                                                children: character.epithet
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                lineNumber: 113,
                                                columnNumber: 15
                                            }, this),
                                            available ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: selected || !!equipping,
                                                onClick: ()=>equip(character.id),
                                                "aria-label": selected ? `${character.shortName} equipped` : `Equip ${character.shortName}`,
                                                className: `px-btn mt-auto h-8 w-full text-base ${selected ? "bg-amber-300/15 text-amber-200" : "bg-[#25415a] text-cyan-100 hover:bg-[#31566e] disabled:opacity-50"}`,
                                                children: selected ? "✓ Equipped" : equipping === character.id ? "Equipping…" : "Equip ▸"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                lineNumber: 114,
                                                columnNumber: 28
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                                                    setFilter("all");
                                                    setView("badges");
                                                    setShowRequirement(character.achievementId);
                                                },
                                                className: "mt-auto min-h-8 text-left text-sm leading-tight text-slate-400 underline-offset-2 hover:text-amber-200 hover:underline",
                                                "aria-label": `View ${requirement?.title} requirement`,
                                                children: [
                                                    "◇ Earn ",
                                                    requirement?.title
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                lineNumber: 117,
                                                columnNumber: 27
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, character.id, true, {
                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                lineNumber: 104,
                                columnNumber: 18
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 99,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AchievementsPanel.tsx",
                lineNumber: 97,
                columnNumber: 24
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex gap-1.5",
                        "aria-label": "Filter achievements",
                        children: [
                            [
                                [
                                    'all',
                                    'All'
                                ],
                                [
                                    'earned',
                                    'Earned'
                                ],
                                [
                                    'locked',
                                    'Locked'
                                ]
                            ].map(([id, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    "aria-pressed": filter === id,
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                                        setFilter(id);
                                    },
                                    className: `border px-3 py-1 text-base ${filter === id ? "border-cyan-300/70 bg-cyan-300/10 text-cyan-100" : "border-white/10 text-slate-400 hover:text-white"}`,
                                    children: label
                                }, id, false, {
                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                    lineNumber: 127,
                                    columnNumber: 103
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Refresh achievements",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                                    setRetry((n)=>n + 1);
                                },
                                className: "ml-auto px-2 text-xl text-slate-400 hover:text-cyan-200",
                                children: "↻"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                lineNumber: 129,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 126,
                        columnNumber: 7
                    }, this),
                    report && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            badges.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "border border-dashed border-white/20 p-5 text-center text-slate-400",
                                children: filter === "earned" ? "Your first recruit is waiting. Set sail!" : "Every emblem earned. The entire crew is yours."
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementsPanel.tsx",
                                lineNumber: 132,
                                columnNumber: 33
                            }, this),
                            badges.map((a)=>{
                                const reward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterById"])(a.rewardCharacter), selected = reward.id === equippedCharacter;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: `group achievement-card ${a.unlocked ? "achievement-earned" : ""}`,
                                    "data-achievement": a.id,
                                    "data-earned": a.unlocked,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"],
                                            className: "flex cursor-pointer list-none gap-3 p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `grid h-12 w-12 shrink-0 place-items-center border border-white/10 bg-[#081326] ${a.unlocked ? "" : "grayscale"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        kind: a.emblem,
                                                        size: 40,
                                                        dim: !a.unlocked
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 146
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: `font-pixel-display text-base leading-snug ${a.unlocked ? "text-amber-100" : "text-slate-200"}`,
                                                                    children: a.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 74
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `shrink-0 text-sm ${a.unlocked ? "text-amber-300" : "text-slate-500"}`,
                                                                    children: a.unlocked ? "✓" : "◇"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 200
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-base leading-tight text-slate-400",
                                                            children: a.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-base leading-tight",
                                                            style: {
                                                                color: reward.color
                                                            },
                                                            children: [
                                                                a.unlocked ? "Recruited" : "Unlocks",
                                                                ": ",
                                                                reward.shortName,
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: [
                                                                        "· ",
                                                                        reward.grade
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 152
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 17
                                                        }, this),
                                                        a.unlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-sm text-emerald-300",
                                                            children: [
                                                                "Earned",
                                                                a.unlockedAt ? ` · ${dateLabel(a.unlockedAt)}` : ""
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-sm leading-tight text-cyan-200/70",
                                                                    children: a.progressLabel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 19
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    role: "progressbar",
                                                                    "aria-label": `${a.title} progress`,
                                                                    "aria-valuemin": 0,
                                                                    "aria-valuemax": a.target,
                                                                    "aria-valuenow": a.progress,
                                                                    className: "mt-1 h-1 bg-[#24334a]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "h-full bg-cyan-400/80 transition-[width]",
                                                                        style: {
                                                                            width: `${Math.min(100, a.progress / a.target * 100)}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 19
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 142
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AchievementsPanel.tsx",
                                            lineNumber: 136,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-white/10 px-3 py-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base leading-snug text-slate-300",
                                                    children: a.detail
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 flex items-center gap-3 border border-white/10 bg-[#0a1628] p-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CharacterPortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            characterId: reward.id,
                                                            size: 64,
                                                            dim: !a.unlocked,
                                                            className: a.unlocked ? "shrink-0" : "shrink-0 grayscale"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-pixel-display text-sm text-white",
                                                                    children: reward.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm leading-tight text-slate-400",
                                                                    children: reward.detail
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 119
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 15
                                                }, this),
                                                a.unlocked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>equip(reward.id),
                                                    disabled: selected || !!equipping,
                                                    "aria-label": selected ? `${reward.shortName} equipped` : `Equip ${reward.shortName}`,
                                                    className: "px-btn mt-2 h-9 w-full bg-amber-400 text-base tracking-wider text-amber-950 hover:bg-amber-300 disabled:bg-amber-300/15 disabled:text-amber-200",
                                                    children: selected ? `✓ ${reward.shortName} equipped` : equipping === reward.id ? "Equipping…" : `EQUIP ${reward.shortName.toUpperCase()} ▸`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AchievementsPanel.tsx",
                                            lineNumber: 150,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, a.id, true, {
                                    fileName: "[project]/src/components/AchievementsPanel.tsx",
                                    lineNumber: 135,
                                    columnNumber: 18
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementsPanel.tsx",
                        lineNumber: 131,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AchievementsPanel.tsx",
                lineNumber: 125,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-sm leading-snug text-slate-400",
                children: "Characters are cosmetic: same timer, score and travel distance. All recruits and your selected character are saved to your account. Niche means Rare or better. Leaderboard medals settle after the Eastern daily reset."
            }, void 0, false, {
                fileName: "[project]/src/components/AchievementsPanel.tsx",
                lineNumber: 165,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AchievementsPanel.tsx",
        lineNumber: 76,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ArchivePanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArchivePanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/voyage-client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const dateLabel = (day)=>new Date(`${day}T12:00:00Z`).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC"
    });
function fromCaptain(history) {
    return history.voyages.map((v)=>({
            day: v.day,
            score: v.score,
            solved: v.solved,
            niche: v.niche ?? (v.legs ? v.legs.filter((l)=>l.tier === "rare" || l.tier === "epic" || l.tier === "luffillion").length : 0),
            beat: v.beat ?? null,
            rank: v.rank ?? null,
            luffillion: Array.isArray(v.legs) ? v.legs.some((l)=>l.tier === "luffillion") : false,
            laughtale: v.score >= 500
        }));
}
function fromLocal(list) {
    return list.map((v)=>({
            day: v.day,
            score: v.score,
            solved: v.solved,
            niche: v.niche,
            beat: null,
            rank: null,
            luffillion: v.luffillion,
            laughtale: v.laughtale
        }));
}
function ArchivePanel({ captain, refreshKey }) {
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [retry, setRetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let live = true;
        setLoading(true);
        setError("");
        setRows([]);
        if (!captain) {
            const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localArchive"])();
            const local = fromLocal(list);
            setRows(local);
            setLoading(false);
            return ()=>{
                live = false;
            };
        }
        const fetchAll = async ()=>{
            const captainId = captain.id;
            const accumulated = [];
            let before = null;
            for(let page = 0; page < 20; page++){
                const query = before ? `?before=${encodeURIComponent(before)}` : "";
                const d = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])(`/api/account/history${query}`);
                accumulated.push(...d.voyages);
                if (!d.nextBefore) break;
                before = d.nextBefore;
            }
            return accumulated;
        };
        fetchAll().then((voyages)=>{
            if (!live) return;
            const local = fromLocal([]); // placeholder kept for potential hybrid path
            setRows([
                ...fromCaptain({
                    voyages,
                    nextBefore: null,
                    summary: {
                        count: voyages.length,
                        best: Math.max(0, ...voyages.map((v)=>v.score)),
                        average: voyages.length ? Math.round(voyages.reduce((n, v)=>n + v.score, 0) / voyages.length) : 0
                    }
                }),
                ...local
            ]);
        }).catch((e)=>{
            if (live) setError(e instanceof Error ? e.message : "Couldn't load your archive.");
        }).finally(()=>{
            if (live) setLoading(false);
        });
        return ()=>{
            live = false;
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        captain?.id,
        refreshKey,
        retry
    ]);
    const total = rows.length;
    const best = total ? Math.max(...rows.map((r)=>r.score)) : 0;
    const average = total ? Math.round(rows.reduce((n, r)=>n + r.score, 0) / total) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-3 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base leading-tight tracking-[0.25em] text-cyan-200",
                        children: "ARCHIVE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArchivePanel.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-400",
                        children: captain ? `Every voyage by ${captain.username}. Each new day adds a row.` : "Every voyage played on this device. Each new day adds a row."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArchivePanel.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArchivePanel.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 grid grid-cols-3 gap-1.5 text-center",
                children: [
                    [
                        "VOYAGES",
                        total
                    ],
                    [
                        "BEST",
                        best
                    ],
                    [
                        "AVERAGE",
                        average
                    ]
                ].map(([l, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-white/10 bg-white/5 py-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs tracking-widest text-slate-400",
                                children: l
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArchivePanel.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-white",
                                children: v
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArchivePanel.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, l, true, {
                        fileName: "[project]/src/components/ArchivePanel.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ArchivePanel.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "border-l-2 border-rose-400 bg-rose-400/5 px-2 py-1 text-sm text-rose-200",
                children: [
                    error,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setRetry((n)=>n + 1),
                        className: "underline",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ArchivePanel.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ArchivePanel.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this) : loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "animate-pulse py-6 text-center text-base text-cyan-200",
                children: "Opening your archive…"
            }, void 0, false, {
                fileName: "[project]/src/components/ArchivePanel.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this) : !rows.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "border border-dashed border-slate-600 px-3 py-4 text-center text-base text-slate-400",
                children: "No voyages yet. Finish today's daily challenge and your archive starts."
            }, void 0, false, {
                fileName: "[project]/src/components/ArchivePanel.tsx",
                lineNumber: 119,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "divide-y divide-white/5",
                children: rows.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-center justify-between gap-2 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block truncate text-base text-white",
                                        children: dateLabel(r.day)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ArchivePanel.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-xs text-slate-500",
                                        children: [
                                            r.solved,
                                            "/7 answered",
                                            r.niche > 0 ? ` · ${r.niche} niche` : "",
                                            r.rank ? ` · rank #${r.rank}` : "",
                                            r.beat !== null ? ` · beat ${r.beat}%` : "",
                                            r.laughtale ? " · Laugh Tale" : "",
                                            r.luffillion ? " · Luffillion" : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ArchivePanel.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ArchivePanel.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "shrink-0 text-xl text-cyan-300",
                                children: r.score
                            }, void 0, false, {
                                fileName: "[project]/src/components/ArchivePanel.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this)
                        ]
                    }, r.day, true, {
                        fileName: "[project]/src/components/ArchivePanel.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ArchivePanel.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ArchivePanel.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/BountiesPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BountiesPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pixel-emblems.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/voyage-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function BountiesPanel({ captain, onSignIn }) {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [retry, setRetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let live = true;
        setError("");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])("/api/bounties").then((d)=>{
            if (live) setData(d);
        }).catch((e)=>{
            if (live) setError(e instanceof Error ? e.message : "Couldn't load the bounty board.");
        });
        return ()=>{
            live = false;
        };
    }, [
        captain?.id,
        retry
    ]);
    const you = data?.you ?? null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-3 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mb-3 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid h-14 w-14 shrink-0 place-items-center border border-amber-300/25 bg-amber-300/[.06]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            kind: "treasure",
                            size: 36
                        }, void 0, false, {
                            fileName: "[project]/src/components/BountiesPanel.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BountiesPanel.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs tracking-[.25em] text-amber-300",
                                children: "DEEP-SEA BOUNTIES"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-pixel-display text-xl font-bold text-white",
                                children: "Top 50 bounties"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-slate-400",
                                children: "Highest bounties after the daily voyage. Ranked by total."
                            }, void 0, false, {
                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BountiesPanel.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BountiesPanel.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "mb-3 border-l-2 border-rose-400 px-2 py-1 text-base text-rose-200",
                children: [
                    error,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                            setRetry((n)=>n + 1);
                        },
                        className: "underline",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BountiesPanel.tsx",
                        lineNumber: 47,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BountiesPanel.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            !data && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "py-6 text-center text-cyan-200",
                children: "Consulting the bounty board…"
            }, void 0, false, {
                fileName: "[project]/src/components/BountiesPanel.tsx",
                lineNumber: 50,
                columnNumber: 27
            }, this),
            data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    captain ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-cyan-300/25 bg-cyan-300/[.05] p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs tracking-[.2em] text-cyan-200",
                                children: "YOUR BOUNTY"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-pixel-display text-4xl text-white",
                                children: [
                                    you?.total ?? 0,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1 text-base text-slate-400",
                                        children: "berries"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BountiesPanel.tsx",
                                        lineNumber: 59,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 grid grid-cols-3 gap-1.5 text-center",
                                children: [
                                    [
                                        "RANK",
                                        you ? `#${you.rank}` : "—"
                                    ],
                                    [
                                        "TODAY +",
                                        you && you.today ? `+${you.today}` : "—"
                                    ],
                                    [
                                        "CREW",
                                        `#${you?.count ?? 0}`
                                    ]
                                ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/5 py-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs tracking-widest text-slate-500",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg text-white",
                                                children: value
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                                lineNumber: 65,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/src/components/BountiesPanel.tsx",
                                        lineNumber: 63,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BountiesPanel.tsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-amber-300/30 bg-amber-300/[.07] p-3 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base leading-tight text-slate-200",
                                children: "Bounties are earned by signed-in captains only."
                            }, void 0, false, {
                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-slate-400",
                                children: "Create a free account to start a streak and stack berries."
                            }, void 0, false, {
                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                                    onSignIn();
                                },
                                className: "px-btn mt-2 h-9 bg-amber-400 px-5 text-base text-amber-950 hover:bg-amber-300",
                                children: "SIGN IN / CREATE ACCOUNT ▸"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BountiesPanel.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        className: "max-h-72 space-y-1 overflow-y-auto pr-1",
                        children: data.top.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `flex items-center gap-2 border px-2 py-1.5 ${row.isYou ? "border-amber-300/60 bg-amber-300/10 text-amber-100" : "border-white/5 bg-white/[.03] text-slate-300"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-8 text-right font-pixel-display text-base ${row.isYou ? "text-amber-300" : row.rank <= 3 ? "text-amber-200" : "text-slate-500"}`,
                                        children: row.rank <= 3 ? `#${row.rank}` : `${row.rank}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BountiesPanel.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "min-w-0 flex-1 truncate text-base",
                                        children: [
                                            row.username,
                                            row.isYou && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1.5 text-xs tracking-widest text-amber-300",
                                                children: "YOU"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                                lineNumber: 89,
                                                columnNumber: 97
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/BountiesPanel.tsx",
                                        lineNumber: 89,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "shrink-0 text-lg tabular-nums text-amber-200",
                                        children: row.total
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BountiesPanel.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, row.rank, true, {
                                fileName: "[project]/src/components/BountiesPanel.tsx",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/BountiesPanel.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    data.top.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "border border-dashed border-white/15 px-3 py-4 text-center text-base text-slate-400",
                        children: "No captains on the board yet. Be the first to lay a bounty."
                    }, void 0, false, {
                        fileName: "[project]/src/components/BountiesPanel.tsx",
                        lineNumber: 95,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs leading-snug text-slate-500",
                        children: "Correct answers earn 50 berries. Bonus berries are added for every point traveled, so rarer and higher-distance runs pay best. Board refreshes each daily voyage."
                    }, void 0, false, {
                        fileName: "[project]/src/components/BountiesPanel.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BountiesPanel.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BountiesPanel.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/CaptainLog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogIcon",
    ()=>LogIcon,
    "default",
    ()=>CaptainLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/arcs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adventure$2f$AdventureLog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/adventure/AdventureLog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/voyage-client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const field = "mt-1 h-11 w-full border border-[#344665] bg-[#091326] px-3 font-sans text-sm text-slate-100 outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300";
const dateLabel = (day)=>new Date(`${day}T12:00:00Z`).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC"
    });
function LogIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        fill: "none",
        shapeRendering: "crispEdges",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 2h10v12H3z",
                stroke: "currentColor",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/CaptainLog.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 2v12M7 5h4M7 8h4",
                stroke: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/CaptainLog.tsx",
                lineNumber: 26,
                columnNumber: 70
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CaptainLog.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
function CaptainLog({ captain, progress, clockRunning, historyRevision, saveMessage, onSessionChange, onClose }) {
    const dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("login");
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [confirmation, setConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [includeGuest, setIncludeGuest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [notice, setNotice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [historyError, setHistoryError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [olderBusy, setOlderBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [retry, setRetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const captainId = captain?.id;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = dialog.current;
        el?.showModal();
        return ()=>el?.close();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setHistory(null);
        setHistoryError("");
        if (!captainId) return;
        const ctrl = new AbortController();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])("/api/account/history", "GET", undefined, ctrl.signal).then((d)=>{
            if (!ctrl.signal.aborted) setHistory(d);
        }).catch((e)=>{
            if (!ctrl.signal.aborted) setHistoryError(e.message || "Couldn't load the voyage log.");
        });
        return ()=>ctrl.abort();
    }, [
        captainId,
        historyRevision,
        retry
    ]);
    function close() {
        if (!busy) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
            onClose();
        }
    }
    function choose(next) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
        setMode(next);
        setError("");
        setNotice("");
        setPassword("");
        setConfirmation("");
    }
    async function submit(e) {
        e.preventDefault();
        if (busy) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
        setError("");
        setNotice("");
        if (mode === "register" && confirmation !== password) {
            setError("The passwords don't match.");
            return;
        }
        setBusy(true);
        try {
            const d = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])("/api/account", "POST", {
                action: mode,
                username,
                password,
                includeGuest,
                ...includeGuest && progress ? {
                    progress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkpointBody"])(progress)
                } : {}
            });
            setPassword("");
            setConfirmation("");
            await onSessionChange(d.captain, d.linkedGuest);
            setNotice(`${mode === "register" ? "Welcome aboard" : "Welcome back"}, ${d.captain.username}!${d.imported ? ` ${d.imported} guest voyage${d.imported === 1 ? "" : "s"} added to your log.` : ""}`);
        } catch (e) {
            setError(e instanceof Error ? e.message : "Couldn't sign in. Please try again.");
        } finally{
            setBusy(false);
        }
    }
    async function logout() {
        if (busy) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
        setBusy(true);
        setError("");
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])("/api/account", "POST", {
                action: "logout",
                accountId: captain?.id,
                ...progress ? {
                    progress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkpointBody"])(progress)
                } : {}
            });
            await onSessionChange(null, false);
            onClose();
        } catch (e) {
            setError(e instanceof Error ? e.message : "Couldn't sign out.");
        } finally{
            setBusy(false);
        }
    }
    async function older() {
        if (olderBusy || !history?.nextBefore) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
        setOlderBusy(true);
        setHistoryError("");
        try {
            const d = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])(`/api/account/history?before=${encodeURIComponent(history.nextBefore)}`);
            setHistory((old)=>old ? {
                    ...d,
                    voyages: [
                        ...old.voyages,
                        ...d.voyages
                    ]
                } : d);
        } catch (e) {
            setHistoryError(e instanceof Error ? e.message : "Couldn't load older voyages.");
        } finally{
            setOlderBusy(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: dialog,
        "aria-labelledby": "captain-log-title",
        className: "captain-dialog",
        onCancel: (e)=>{
            e.preventDefault();
            close();
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) close();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-[#374966] border-t-[3px] border-t-amber-300 bg-[#0d182b] text-slate-100",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "px-scan flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "flex items-center gap-2 text-sm tracking-[.24em] text-amber-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogIcon, {}, void 0, false, {
                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                            lineNumber: 109,
                                            columnNumber: 90
                                        }, this),
                                        " GRAND LINE ARCHIVES"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 109,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "captain-log-title",
                                    className: "mt-1 font-pixel-display text-3xl font-bold",
                                    children: "Captain's Log"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 110,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base text-slate-400",
                                    children: captain ? `Private log of ${captain.username}` : "One captain. Every voyage."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 111,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CaptainLog.tsx",
                            lineNumber: 108,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: busy,
                            onClick: close,
                            "aria-label": "Close Captain's Log",
                            className: "h-9 w-9 shrink-0 border border-slate-600 text-xl text-slate-300 hover:border-amber-200 hover:text-white",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/components/CaptainLog.tsx",
                            lineNumber: 113,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CaptainLog.tsx",
                    lineNumber: 107,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-5 py-4 sm:px-6",
                    children: [
                        clockRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "status",
                            className: "mb-3 text-base text-amber-200",
                            children: "Your question timer is still running."
                        }, void 0, false, {
                            fileName: "[project]/src/components/CaptainLog.tsx",
                            lineNumber: 116,
                            columnNumber: 26
                        }, this),
                        notice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "status",
                            className: "mb-3 border-l-2 border-cyan-300 bg-cyan-300/5 px-3 py-1 text-cyan-200",
                            children: notice
                        }, void 0, false, {
                            fileName: "[project]/src/components/CaptainLog.tsx",
                            lineNumber: 117,
                            columnNumber: 20
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "alert",
                            className: "mb-3 border-l-2 border-rose-400 px-3 text-rose-200",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/CaptainLog.tsx",
                            lineNumber: 118,
                            columnNumber: 19
                        }, this),
                        !captain ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 grid grid-cols-2 border border-[#344665] bg-[#091326] p-1",
                                    "aria-label": "Account options",
                                    children: [
                                        [
                                            'login',
                                            'Sign in'
                                        ],
                                        [
                                            'register',
                                            'Create account'
                                        ]
                                    ].map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: busy,
                                            onClick: ()=>choose(value),
                                            "aria-pressed": mode === value,
                                            className: `h-9 text-lg ${mode === value ? "bg-[#24364e] text-amber-200" : "text-slate-400 hover:text-white"}`,
                                            children: label
                                        }, value, false, {
                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 120,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-3 text-lg leading-tight text-slate-300",
                                    children: mode === "login" ? "Sign in to resume today's voyage and revisit your past scores." : "Choose a captain name to save your progress across devices. No email required."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 125,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: submit,
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                            disabled: busy,
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm tracking-widest text-slate-300",
                                                    htmlFor: "captain-name",
                                                    children: [
                                                        "USERNAME",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "captain-name",
                                                            name: "username",
                                                            className: field,
                                                            value: username,
                                                            onChange: (e)=>setUsername(e.target.value),
                                                            placeholder: "Your captain name",
                                                            required: true,
                                                            minLength: 3,
                                                            maxLength: 24,
                                                            pattern: "[a-zA-Z0-9][a-zA-Z0-9_\\-]{2,23}",
                                                            title: "3–24 letters, numbers, underscores or dashes",
                                                            autoComplete: "username",
                                                            autoCapitalize: "none",
                                                            autoCorrect: "off",
                                                            spellCheck: false
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm tracking-widest text-slate-300",
                                                    htmlFor: "captain-password",
                                                    children: [
                                                        "PASSWORD",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "captain-password",
                                                            name: "password",
                                                            type: "password",
                                                            className: field,
                                                            value: password,
                                                            onChange: (e)=>setPassword(e.target.value),
                                                            placeholder: mode === "register" ? "At least 12 characters" : "Enter your password",
                                                            required: true,
                                                            minLength: mode === "register" ? 12 : 1,
                                                            maxLength: 128,
                                                            autoComplete: mode === "register" ? "new-password" : "current-password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 15
                                                }, this),
                                                mode === "register" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm tracking-widest text-slate-300",
                                                    htmlFor: "captain-confirm",
                                                    children: [
                                                        "CONFIRM PASSWORD",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            id: "captain-confirm",
                                                            name: "confirmation",
                                                            type: "password",
                                                            className: field,
                                                            value: confirmation,
                                                            onChange: (e)=>setConfirmation(e.target.value),
                                                            required: true,
                                                            maxLength: 128,
                                                            placeholder: "Re-enter your password",
                                                            autoComplete: "new-password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 39
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex cursor-pointer items-start gap-2.5 border-y border-white/10 py-2.5 text-base leading-tight text-slate-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: includeGuest,
                                                            onChange: (e)=>setIncludeGuest(e.target.checked),
                                                            className: "mt-0.5 h-4 w-4 shrink-0 accent-amber-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Save this browser's guest voyages to my log.",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    className: "mt-1 block text-sm text-slate-400",
                                                                    children: "Existing account results and in-progress voyages take priority."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                                    lineNumber: 144,
                                                                    columnNumber: 72
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 17
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                            lineNumber: 127,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: busy,
                                            className: "px-btn h-11 w-full bg-amber-400 text-lg tracking-[.15em] text-amber-950 hover:bg-amber-300 disabled:opacity-50",
                                            children: busy ? "OPENING LOG…" : mode === "register" ? "CREATE MY ACCOUNT ▸" : "SIGN IN ▸"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                            lineNumber: 147,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 126,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: busy,
                                    onClick: close,
                                    className: "mt-3 w-full py-1 text-base text-slate-400 underline-offset-4 hover:text-white hover:underline",
                                    children: "Keep playing as a guest"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 151,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CaptainLog.tsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                saveMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    role: "status",
                                    className: "mb-2 text-sm text-cyan-200",
                                    children: saveMessage
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 153,
                                    columnNumber: 27
                                }, this),
                                historyError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    role: "alert",
                                    className: "mb-3 text-rose-200",
                                    children: [
                                        historyError,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "underline",
                                            onClick: ()=>{
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                                                setRetry((n)=>n + 1);
                                            },
                                            children: "Retry"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                            lineNumber: 154,
                                            columnNumber: 90
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 154,
                                    columnNumber: 28
                                }, this),
                                !history && !historyError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    role: "status",
                                    className: "py-5 text-cyan-200",
                                    children: "Fetching your voyages…"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 155,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$adventure$2f$AdventureLog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    accountId: captain.id,
                                    revision: historyRevision
                                }, captain.id, false, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 156,
                                    columnNumber: 11
                                }, this),
                                history && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2 text-center",
                                            children: [
                                                [
                                                    "VOYAGES",
                                                    history.summary.count
                                                ],
                                                [
                                                    "BEST / 700",
                                                    history.summary.best
                                                ],
                                                [
                                                    "AVERAGE",
                                                    history.summary.average
                                                ]
                                            ].map(([label, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border border-white/10 bg-white/[.035] py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs tracking-widest text-slate-400",
                                                            children: label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 90
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-pixel-display text-xl text-cyan-200",
                                                            children: value
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 155
                                                        }, this)
                                                    ]
                                                }, label, true, {
                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                    lineNumber: 160,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                            lineNumber: 158,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-2 mt-5 text-sm tracking-[.24em] text-amber-200",
                                            children: "DAILY VOYAGE HISTORY"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                            lineNumber: 162,
                                            columnNumber: 13
                                        }, this),
                                        !history.voyages.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-dashed border-slate-600 px-3 py-4 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl text-white",
                                                    children: "Your first entry awaits."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base text-slate-400",
                                                    children: "Finish the seven daily questions to add a voyage here."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 77
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                            lineNumber: 163,
                                            columnNumber: 40
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                history.voyages.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                                        className: "group border border-[#30415a] bg-[#101e33]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                                onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"],
                                                                className: "flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-2 hover:bg-white/5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "block text-lg text-white",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "mr-1 inline-block text-amber-300 group-open:rotate-90",
                                                                                        children: "▸"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/CaptainLog.tsx",
                                                                                        lineNumber: 168,
                                                                                        columnNumber: 68
                                                                                    }, this),
                                                                                    dateLabel(v.day)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CaptainLog.tsx",
                                                                                lineNumber: 168,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "ml-4 block text-sm text-slate-400",
                                                                                children: [
                                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sagaAt"])(v.score).name,
                                                                                    " · ",
                                                                                    v.solved,
                                                                                    "/",
                                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"],
                                                                                    " answered"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/CaptainLog.tsx",
                                                                                lineNumber: 169,
                                                                                columnNumber: 19
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CaptainLog.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "shrink-0 text-xl text-cyan-300",
                                                                        children: [
                                                                            v.score,
                                                                            " ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                className: "text-sm",
                                                                                children: "PTS"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/CaptainLog.tsx",
                                                                                lineNumber: 170,
                                                                                columnNumber: 78
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/CaptainLog.tsx",
                                                                        lineNumber: 170,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/CaptainLog.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-t border-white/10 px-3 pb-2",
                                                                children: v.legs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                                    className: "divide-y divide-white/5",
                                                                    children: v.legs.map((leg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "py-1.5",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-slate-400",
                                                                                    children: [
                                                                                        "Q",
                                                                                        i + 1,
                                                                                        " · ",
                                                                                        leg.prompt
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                                                    lineNumber: 174,
                                                                                    columnNumber: 21
                                                                                }, this),
                                                                                leg.tier ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "flex justify-between gap-2 text-base",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][leg.tier].text,
                                                                                            children: [
                                                                                                leg.answer,
                                                                                                " · ",
                                                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][leg.tier].label
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                                                                            lineNumber: 175,
                                                                                            columnNumber: 85
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "shrink-0 text-white",
                                                                                            children: [
                                                                                                "+",
                                                                                                leg.points
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                                                                            lineNumber: 175,
                                                                                            columnNumber: 181
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                                                    lineNumber: 175,
                                                                                    columnNumber: 33
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-base text-rose-300",
                                                                                    children: "Time expired · 0 pts"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                                                    lineNumber: 176,
                                                                                    columnNumber: 23
                                                                                }, this)
                                                                            ]
                                                                        }, i, true, {
                                                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                                                            lineNumber: 173,
                                                                            columnNumber: 93
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "py-2 text-base text-slate-400",
                                                                    children: "This older voyage was saved before question recaps were recorded."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 34
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CaptainLog.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, v.day, true, {
                                                        fileName: "[project]/src/components/CaptainLog.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 41
                                                    }, this)),
                                                history.nextBefore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    disabled: olderBusy,
                                                    onClick: older,
                                                    className: "w-full border border-slate-600 py-1.5 text-cyan-200 hover:bg-white/5",
                                                    children: olderBusy ? "Loading…" : "Load older voyages ↓"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 38
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                            lineNumber: 165,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 157,
                                    columnNumber: 23
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: logout,
                                            disabled: busy,
                                            className: "px-1 py-2 text-base text-slate-400 underline-offset-4 hover:text-white hover:underline",
                                            children: busy ? "Signing out…" : "Sign out"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                            lineNumber: 184,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: close,
                                            disabled: busy,
                                            className: "px-btn h-10 bg-amber-400 px-4 text-lg text-amber-950 hover:bg-amber-300",
                                            children: "BACK TO VOYAGE ▸"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CaptainLog.tsx",
                                            lineNumber: 185,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/CaptainLog.tsx",
                                    lineNumber: 183,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/CaptainLog.tsx",
                            lineNumber: 152,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/CaptainLog.tsx",
                    lineNumber: 115,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/CaptainLog.tsx",
            lineNumber: 106,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CaptainLog.tsx",
        lineNumber: 104,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/CharacterPortrait.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$runners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pixel/runners.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function CharacterPortrait({ characterId, size = 64, dim = false, className = "" }) {
    const sprite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$runners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runnerSprite"])(characterId);
    const left = Math.floor((32 - sprite.width) / 2), top = 31 - sprite.height;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 32 32",
        width: size,
        height: size,
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        className: className,
        "data-portrait": characterId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            opacity: dim ? 0.5 : 1,
            children: sprite.rows.flatMap((row, y)=>[
                    ...row
                ].map((pixel, x)=>sprite.palette[pixel] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: left + x,
                        y: top + y,
                        width: 1,
                        height: 1,
                        fill: sprite.palette[pixel]
                    }, `${x}:${y}`, false, {
                        fileName: "[project]/src/components/CharacterPortrait.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this) : null))
        }, void 0, false, {
            fileName: "[project]/src/components/CharacterPortrait.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CharacterPortrait.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
const __TURBOPACK__default__export__ = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(CharacterPortrait);
}),
"[project]/src/components/Effects.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Effects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Effects({ tier }) {
    const fx = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][tier].fx;
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const particles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Array.from({
            length: fx.particles
        }, (_, i)=>{
            const angle = Math.random() * Math.PI * 2;
            const dist = fx.spread * (0.45 + Math.random() * 0.55);
            return {
                id: i,
                x: Math.cos(angle) * dist,
                y: Math.sin(angle) * dist,
                color: fx.colors[i % fx.colors.length],
                size: 5 + Math.random() * fx.size,
                delay: Math.random() * 0.25,
                dur: fx.particleDur * (0.7 + Math.random() * 0.6),
                rot: Math.random() * 720 - 360,
                star: tier === "uncommon" || tier === "epic" || tier === "luffillion" ? i % 3 === 0 : false
            };
        });
    }, [
        fx,
        tier
    ]);
    const confetti = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Array.from({
            length: fx.confetti
        }, (_, i)=>({
                id: i,
                left: Math.random() * 100,
                sway: Math.random() * 160 - 80,
                color: fx.colors[i % fx.colors.length],
                delay: Math.random() * 0.8,
                dur: 2.2 + Math.random() * 1.6
            }));
    }, [
        fx,
        tier
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = setTimeout(()=>setVisible(false), fx.duration);
        return ()=>clearTimeout(t);
    }, [
        fx.duration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!fx.shake) return;
        const el = document.getElementById("game-root");
        el?.classList.add("fx-shake");
        const t = setTimeout(()=>el?.classList.remove("fx-shake"), fx.shakeMs);
        return ()=>{
            clearTimeout(t);
            el?.classList.remove("fx-shake");
        };
    }, [
        fx.shake,
        fx.shakeMs
    ]);
    if (!visible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fx-root",
        "aria-hidden": "true",
        children: [
            fx.flash && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fx-flash fx-flash-${tier}`
            }, void 0, false, {
                fileName: "[project]/src/components/Effects.tsx",
                lineNumber: 82,
                columnNumber: 20
            }, this),
            fx.sunburst && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fx-sunburst"
            }, void 0, false, {
                fileName: "[project]/src/components/Effects.tsx",
                lineNumber: 83,
                columnNumber: 23
            }, this),
            Array.from({
                length: fx.rings
            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fx-ring",
                    style: {
                        animationDelay: `${i * 0.18}s`,
                        borderColor: fx.colors[i % fx.colors.length]
                    }
                }, `ring-${i}`, false, {
                    fileName: "[project]/src/components/Effects.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)),
            particles.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `fx-particle ${p.star ? "fx-star" : ""}`,
                    style: {
                        width: p.size,
                        height: p.size,
                        background: p.color,
                        color: p.color,
                        "--x": `${p.x}px`,
                        "--y": `${p.y}px`,
                        "--rot": `${p.rot}deg`,
                        "--dur": `${p.dur}s`,
                        "--delay": `${p.delay}s`
                    }
                }, p.id, false, {
                    fileName: "[project]/src/components/Effects.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)),
            confetti.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "fx-confetti",
                    style: {
                        left: `${c.left}%`,
                        background: c.color,
                        "--sway": `${c.sway}px`,
                        "--dur": `${c.dur}s`,
                        "--delay": `${c.delay}s`
                    }
                }, `c-${c.id}`, false, {
                    fileName: "[project]/src/components/Effects.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)),
            fx.banner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fx-banner",
                style: {
                    color: fx.bannerColor
                },
                children: fx.banner
            }, void 0, false, {
                fileName: "[project]/src/components/Effects.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Effects.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Game.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Game
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/arcs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/playable-characters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelWorld$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PixelWorld.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Effects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Effects.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CaptainLog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CaptainLog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BountiesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BountiesPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MenuPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AchievementsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AchievementsPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArchivePanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ArchivePanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AchievementToast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AchievementToast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LockedAchievements$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LockedAchievements.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/achievements.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/voyage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/voyage-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const EMPTY_Q = {
    attempts: 0,
    wrong: []
};
const LIMIT_MS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_SECONDS"] * 1000;
function Game() {
    const [daily, setDaily] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loadError, setLoadError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewIndex, setViewIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reveals, setReveals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [guess, setGuess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [suggestion, setSuggestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fx, setFx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [runSignal, setRunSignal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [initialPos, setInitialPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [sagaBanner, setSagaBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const lastSaga = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [nopeOn, setNopeOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [world, setWorld] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        pct: 0,
        arc: "East Blue",
        saga: 0,
        running: false
    });
    const [menuTab, setMenuTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lockedAchievementsOpen, setLockedAchievementsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unlockedToast, setUnlockedToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [achievementRevision, setAchievementRevision] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [equippedCharacter, setEquippedCharacter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_CHARACTER"]);
    const announcedAwards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const awardOwner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const returnToMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [nextRunAt, setNextRunAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showCountdown, setShowCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [muted, setMutedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [accountOpen, setAccountOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [saveMessage, setSaveMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const scopeVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const revealLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const nopeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMutedState((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isMuted"])());
    }, []);
    function toggleMute() {
        const next = !muted;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setMuted"])(next);
        setMutedState(next);
        if (!next) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
    }
    const queueUnlocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((ids)=>{
        const fresh = [
            ...new Set(ids)
        ].filter((id)=>!announcedAwards.current.has(id));
        const badges = fresh.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ACHIEVEMENTS"].find((a)=>a.id === id)).filter((a)=>!!a);
        if (!badges.length) return;
        badges.forEach((badge)=>announcedAwards.current.add(badge.id));
        setUnlockedToast((previous)=>[
                ...previous,
                ...badges
            ]);
    }, []);
    const dismissUnlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setUnlockedToast((previous)=>previous.slice(1)), []);
    const handleEquip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id, accountId)=>{
        if (awardOwner.current !== accountId || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCharacterId"])(id)) return;
        setEquippedCharacter(id);
    }, []);
    // Hydrate the session and its save together, before enabling any timer or write.
    const loadRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (expectedCaptain)=>{
        const version = ++scopeVersion.current;
        const d = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])("/api/daily");
        if (version !== scopeVersion.current) return;
        if (expectedCaptain !== undefined && (d.captain?.id ?? null) !== expectedCaptain) {
            throw new Error("The session cookie wasn't available. Allow site cookies and try again.");
        }
        const ids = d.questions.map((q)=>q.id);
        const local = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readLocalRun"])(d.day, ids, d.captain?.id);
        let p = local ?? {
            day: d.day,
            ids,
            q: {},
            runs: []
        };
        if (d.checkpoint) p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeProgress"])(d.checkpoint, p);
        if (d.finished) p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromRecap"])(d.finished) ?? p;
        const complete = !!d.finished || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstOpen"])(p) >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"];
        revealLoading.current.clear();
        setReveals({});
        setGuess("");
        setMessage(null);
        setSuggestion(null);
        setBusy(false);
        setMenuTab(null);
        setUnlockedToast([]);
        setLockedAchievementsOpen(false);
        if (awardOwner.current !== (d.captain?.id ?? null)) {
            announcedAwards.current.clear();
            awardOwner.current = d.captain?.id ?? null;
        }
        setRunSignal(null);
        setFx(null);
        setSagaBanner(null);
        setCopied(false);
        lastSaga.current = null;
        finishedLive.current = complete;
        setSaveMessage("");
        setStats(null);
        setLoadError(null);
        setNextRunAt(Date.now() + d.nextRunInMs);
        setShowCountdown(complete);
        setDaily(d);
        setProgress(p);
        setViewIndex(complete ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstOpen"])(p));
        setEquippedCharacter(d.captain && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCharacterId"])(d.equippedCharacter) ? d.equippedCharacter : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_CHARACTER"]);
        setInitialPos(d.finished?.score ?? p.runs.reduce((sum, r)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["travelFor"])(r.points), 0));
        setNow(Date.now());
        if (d.captain) queueUnlocks(d.newlyUnlocked ?? []);
        setAchievementRevision((n)=>n + 1);
    }, [
        queueUnlocks
    ]);
    function openAccount() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
        setMenuTab(null);
        setAccountOpen(true);
    }
    function openAccountForMenu(tab) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
        returnToMenu.current = tab;
        setMenuTab(null);
        setAccountOpen(true);
    }
    async function sessionChanged(captain, linkedGuest) {
        const previous = daily?.captain?.id;
        await loadRun(captain?.id ?? null);
        if (captain && returnToMenu.current) {
            const target = returnToMenu.current;
            returnToMenu.current = null;
            setAccountOpen(false);
            setMenuTab(target);
        }
        if (previous && previous !== captain?.id) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCaptainCache"])(previous);
        if (linkedGuest && daily) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearLinkedGuest"])(daily.day);
        try {
            localStorage.setItem("luffillion:session-changed", String(Date.now()));
        } catch  {}
    }
    const activeCaptainId = daily?.captain?.id;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const refreshSession = (event)=>{
            if (event.key !== "luffillion:session-changed") return;
            if (activeCaptainId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCaptainCache"])(activeCaptainId);
            setAccountOpen(false);
            setDaily(null);
            setProgress(null);
            setStats(null);
            loadRun().catch(()=>setLoadError("Your session changed. Refresh to reopen the game."));
        };
        window.addEventListener("storage", refreshSession);
        return ()=>window.removeEventListener("storage", refreshSession);
    }, [
        activeCaptainId,
        loadRun
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadRun().catch(()=>setLoadError("Could not load today's run. Please refresh."));
    }, [
        loadRun
    ]);
    // Finishing live: let the finale run + effects play, then show the countdown.
    const finishedLive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!progress || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstOpen"])(progress) < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] || showCountdown || finishedLive.current) return;
        finishedLive.current = true;
        const id = setTimeout(()=>setShowCountdown(true), 5000);
        return ()=>clearTimeout(id);
    }, [
        progress,
        showCountdown
    ]);
    // When the countdown reaches zero, the next day's run loads automatically.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (nextRunAt && now >= nextRunAt) {
            setNextRunAt(0);
            loadRun().catch(()=>setMessage("Could not load the new run. Please refresh."));
        }
    }, [
        now,
        nextRunAt,
        loadRun
    ]);
    const runDone = !!daily?.finished || !!progress && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstOpen"])(progress) >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"];
    // First completion is immutable on the server. A restored run only fetches stats.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!runDone || !progress || !daily) return;
        let live = true;
        let retry;
        const version = scopeVersion.current;
        const current = ()=>live && scopeVersion.current === version;
        const save = async ()=>{
            try {
                const accountId = daily.captain?.id ?? null;
                const answers = daily.questions.map((_, i)=>progress.q[i]?.answer ?? "");
                const mistakes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$achievements$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countMistakes"])(progress);
                // Backfill old guest score-only recaps if the browser still has the answers.
                const backfill = daily.finished && !daily.finished.legs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstOpen"])(progress) === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"];
                const data = !daily.finished || backfill ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])("/api/run", "POST", {
                    accountId,
                    day: progress.day,
                    answers,
                    mistakes
                }) : await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])(`/api/run?day=${progress.day}`);
                if (!current()) return;
                if (!data.you) throw new Error("Your session changed. Reload the game to reconnect.");
                if (data.finished?.legs?.some((leg, i)=>(leg.answer ?? "") !== answers[i])) {
                    await loadRun(accountId); // Another device finished first.
                    return;
                }
                setStats(data);
                setSaveMessage(daily.captain ? "✓ Voyage saved to your Captain's Log." : "");
                if (daily.captain) queueUnlocks(data.newlyUnlocked ?? []);
                setAchievementRevision((n)=>n + 1);
            } catch (e) {
                if (!current()) return;
                setSaveMessage(e instanceof Error ? e.message : "Couldn't save your score. Retrying…");
                retry = setTimeout(save, 8000);
            }
        };
        void save();
        return ()=>{
            live = false;
            clearTimeout(retry);
        };
    }, [
        runDone,
        progress,
        daily,
        loadRun,
        queueUnlocks
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!runDone || !showCountdown || !daily) return;
        let live = true;
        const refresh = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])(`/api/run?day=${daily.day}`).then((d)=>{
                if (live && d.you) setStats(d);
            }).catch(()=>undefined);
        const id = setInterval(refresh, 30000);
        return ()=>{
            live = false;
            clearInterval(id);
        };
    }, [
        runDone,
        showCountdown,
        daily
    ]);
    // Guest saves remain on this device. Captain saves are also checkpointed to Postgres.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!progress || !daily) return;
        const accountId = daily.captain?.id;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cacheRun"])(progress, accountId);
        if (!accountId || runDone || !Object.keys(progress.q).length) return;
        let live = true;
        let retry;
        const version = scopeVersion.current;
        const current = ()=>live && version === scopeVersion.current;
        const sync = async ()=>{
            try {
                setSaveMessage("Saving checkpoint…");
                const saved = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])("/api/account/progress", "PUT", {
                    accountId,
                    progress: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["checkpointBody"])(progress)
                });
                if (!current()) return;
                if (saved.complete) {
                    await loadRun(accountId);
                    return;
                }
                if (saved.progress && Object.entries(saved.progress.q).some(([i, v])=>{
                    const local = progress.q[Number(i)];
                    return !local || v.started !== local.started || v.status !== local.status || v.answer !== local.answer || v.attempts !== local.attempts;
                })) {
                    setProgress(saved.progress);
                    setViewIndex((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstOpen"])(saved.progress));
                }
                setSaveMessage("✓ Checkpoint saved. Your timer follows you across devices.");
                queueUnlocks(saved.newlyUnlocked ?? []);
                setAchievementRevision((n)=>n + 1);
            } catch (e) {
                if (!current()) return;
                setSaveMessage(e instanceof Error ? e.message : "Checkpoint not synced. Retrying…");
                retry = setTimeout(sync, 6000);
            }
        };
        void sync();
        return ()=>{
            live = false;
            clearTimeout(retry);
        };
    }, [
        daily,
        progress,
        runDone,
        loadRun,
        queueUnlocks
    ]);
    // Clock tick for the countdown.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>setNow(Date.now()), 100);
        return ()=>clearInterval(id);
    }, []);
    const activeIndex = runDone ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] : progress ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstOpen"])(progress) : 0;
    const allDone = progress ? activeIndex >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] : false;
    // Time out the active question.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!progress || activeIndex >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]) return;
        const st = progress.q[activeIndex];
        if (st?.started && !st.status && now - st.started >= LIMIT_MS) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playTimeout"])();
            setProgress((p)=>p ? {
                    ...p,
                    q: {
                        ...p.q,
                        [activeIndex]: {
                            ...p.q[activeIndex] ?? EMPTY_Q,
                            status: "expired",
                            points: 0
                        }
                    }
                } : p);
            // Last question timed out: still give Luffy his closing victory run.
            if (activeIndex === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] - 1) {
                const pos = progress.runs.reduce((sum, r)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["travelFor"])(r.points), 0);
                setRunSignal({
                    id: Date.now(),
                    to: pos,
                    ms: 2600,
                    tier: null,
                    final: true
                });
            }
        }
    }, [
        now,
        progress,
        activeIndex
    ]);
    // Answer lists stay hidden until all 7 questions are over, then load for the recap.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!progress || !daily) return;
        if (!runDone) return;
        const version = scopeVersion.current;
        for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]; i++){
            if (!reveals[i] && !revealLoading.current.has(i)) {
                revealLoading.current.add(i);
                fetch(`/api/reveal?q=${encodeURIComponent(daily.questions[i].id)}`).then((r)=>r.json()).then((data)=>{
                    if (version === scopeVersion.current && !data.error) setReveals((prev)=>({
                            ...prev,
                            [i]: data
                        }));
                }).catch(()=>undefined).finally(()=>{
                    if (version === scopeVersion.current) revealLoading.current.delete(i);
                });
            }
        }
    }, [
        progress,
        daily,
        reveals,
        runDone
    ]);
    const question = daily?.questions[viewIndex];
    const qs = progress?.q[viewIndex] ?? EMPTY_Q;
    const isActive = viewIndex === activeIndex && !allDone;
    const waitingToStart = isActive && !qs.started;
    const timerRunning = isActive && Boolean(qs.started) && !qs.status;
    const remainingMs = qs.started && !qs.status ? Math.max(0, LIMIT_MS - (now - qs.started)) : LIMIT_MS;
    const remainingSec = Math.ceil(remainingMs / 1000);
    const totalScore = daily?.finished?.score ?? (progress ? Object.values(progress.q).reduce((sum, q)=>sum + (q?.status === "solved" ? q.points ?? 0 : 0), 0) : 0);
    const journeyPos = daily?.finished?.score ?? (progress ? progress.runs.reduce((sum, r)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["travelFor"])(r.points), 0) : 0);
    const activeCharacter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterById"])(equippedCharacter);
    const hasGoldHat = Boolean(daily?.finished?.legs?.some((leg)=>leg.tier === "luffillion") || progress && (Object.values(progress.q).some((st)=>st?.status === "solved" && st.tier === "luffillion") || progress.runs.some((r)=>r.tier === "luffillion")));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (timerRunning) inputRef.current?.focus();
    }, [
        timerRunning,
        viewIndex
    ]);
    // Subtle countdown ticks in the final 5 seconds of a question.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!timerRunning || remainingSec > 5 || remainingSec < 1) return;
        const key = `${viewIndex}:${remainingSec}`;
        if (lastTickRef.current === key) return;
        lastTickRef.current = key;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playTick"])(remainingSec <= 3);
    }, [
        timerRunning,
        remainingSec,
        viewIndex
    ]);
    function handleWorld(status) {
        setWorld(status);
        if (lastSaga.current === null) {
            lastSaga.current = status.saga;
            return;
        }
        if (status.saga !== lastSaga.current) {
            lastSaga.current = status.saga;
            if (status.saga > 0) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playSaga"])();
                setSagaBanner({
                    id: Date.now(),
                    saga: status.saga
                });
            }
        }
    }
    function triggerNope() {
        setNopeOn(true);
        if (nopeTimer.current) clearTimeout(nopeTimer.current);
        nopeTimer.current = setTimeout(()=>setNopeOn(false), 450);
    }
    function submitGuess(e) {
        e.preventDefault();
        if (!guess.trim()) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
        void sendGuess(guess.trim());
    }
    function acceptSuggestion() {
        if (!suggestion || suggestion.q !== viewIndex) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playSuggest"])();
        void sendGuess(suggestion.name);
    }
    async function sendGuess(text) {
        if (!daily || !progress || busy || !isActive) return;
        if (!text || !qs.started || qs.status) return;
        if (Date.now() - qs.started >= LIMIT_MS) return;
        const version = scopeVersion.current;
        setBusy(true);
        setMessage(null);
        setSuggestion(null);
        try {
            const res = await fetch("/api/guess", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    questionId: daily.questions[viewIndex].id,
                    guess: text
                })
            });
            const data = await res.json();
            if (version !== scopeVersion.current) return;
            if (!res.ok) {
                setMessage(data.error ?? "Something went wrong.");
                return;
            }
            if (data.correct) {
                const tier = data.tier;
                const points = data.points;
                const newTotal = journeyPos + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["travelFor"])(points);
                const arc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sagaAt"])(newTotal).name;
                const stamp = Date.now();
                setProgress((p)=>p ? {
                        ...p,
                        q: {
                            ...p.q,
                            [viewIndex]: {
                                ...qs,
                                attempts: qs.attempts + 1,
                                status: "solved",
                                tier,
                                points,
                                answer: data.name
                            }
                        },
                        runs: [
                            ...p.runs,
                            {
                                questionIndex: viewIndex,
                                tier,
                                points,
                                arc
                            }
                        ]
                    } : p);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playPull"])(tier);
                setRunSignal({
                    id: stamp,
                    to: newTotal,
                    ms: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][tier].runMs,
                    tier,
                    final: viewIndex === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] - 1
                });
                setFx({
                    id: stamp,
                    tier
                });
                setGuess("");
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playWrong"])();
                const wrong = qs.wrong.some((w)=>w.toLowerCase() === text.toLowerCase()) ? qs.wrong : [
                    text,
                    ...qs.wrong
                ];
                setProgress((p)=>p ? {
                        ...p,
                        q: {
                            ...p.q,
                            [viewIndex]: {
                                ...qs,
                                attempts: qs.attempts + 1,
                                wrong
                            }
                        }
                    } : p);
                triggerNope();
                setGuess("");
                if (typeof data.suggestion === "string" && data.suggestion) {
                    setSuggestion({
                        q: viewIndex,
                        name: data.suggestion,
                        typed: text
                    });
                }
            }
        } catch  {
            if (version === scopeVersion.current) setMessage("Network hiccup. Try again.");
        } finally{
            if (version === scopeVersion.current) setBusy(false);
        }
    }
    function startActiveQuestion() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playSetSail"])();
        const stamp = Date.now();
        setNow(stamp);
        setSuggestion(null);
        setMessage(null);
        setGuess("");
        setViewIndex(activeIndex);
        setProgress((p)=>{
            if (!p || activeIndex >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] || p.q[activeIndex]?.started) return p;
            return {
                ...p,
                q: {
                    ...p.q,
                    [activeIndex]: {
                        ...p.q[activeIndex] ?? EMPTY_Q,
                        started: stamp
                    }
                }
            };
        });
    }
    function nextQuestion() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playNext"])();
        const target = viewIndex + 1 < activeIndex ? activeIndex : viewIndex + 1;
        const stamp = Date.now();
        setNow(stamp);
        setSuggestion(null);
        setMessage(null);
        setGuess("");
        setViewIndex(target);
        if (target === activeIndex && target < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]) {
            setProgress((p)=>{
                if (!p || p.q[target]?.started) return p;
                return {
                    ...p,
                    q: {
                        ...p.q,
                        [target]: {
                            ...p.q[target] ?? EMPTY_Q,
                            started: stamp
                        }
                    }
                };
            });
        }
    }
    function shareResults() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
        if (!progress || !daily) return;
        const grid = daily.questions.map((_, i)=>{
            const st = progress.q[i];
            return st?.status === "solved" && st.tier ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][st.tier].emoji : "⬛";
        }).join("");
        const beat = stats?.you && stats.total > 1 ? `\nBeat ${stats.you.beat}% of players` : "";
        const result = daily.finished && !daily.finished.legs && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["firstOpen"])(progress) < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] ? `${daily.finished.solved}/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]} answered` : grid;
        const text = `Luffillion ${daily.day}: ${totalScore}/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_POINTS"]}${beat}\n${result}`;
        navigator.clipboard?.writeText(text).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false), 1800);
        });
    }
    if (loadError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid min-h-screen place-items-center text-rose-300",
            children: loadError
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 578,
            columnNumber: 12
        }, this);
    }
    if (!daily || !progress) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid min-h-screen place-items-center bg-[#05070f]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse text-amber-200",
                children: "Setting sail…"
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 584,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 583,
            columnNumber: 7
        }, this);
    }
    const lowTime = remainingSec <= 8;
    const shownQuestion = !allDone ? viewIndex + 1 : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "game-root",
        className: "fixed inset-0 overflow-hidden bg-[#05070f]",
        children: [
            accountOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CaptainLog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                captain: daily.captain,
                progress: progress,
                clockRunning: Boolean(progress.q[activeIndex]?.started && !progress.q[activeIndex]?.status),
                historyRevision: `${daily.day}:${stats?.you?.score ?? "pending"}`,
                saveMessage: saveMessage,
                onSessionChange: sessionChanged,
                onClose: ()=>setAccountOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 594,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PixelWorld$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                storageKey: daily.captain ? undefined : `luffillion-pos:${daily.day}`,
                signal: runSignal,
                initialPos: Math.max(initialPos, journeyPos),
                goldHat: hasGoldHat,
                characterId: equippedCharacter,
                onStatus: handleWorld
            }, `${daily.day}:${daily.captain?.id ?? "guest"}`, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 597,
                columnNumber: 7
            }, this),
            sagaBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "saga-banner pointer-events-none fixed inset-x-0 bottom-[118px] z-30 flex justify-center px-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-box px-scan border-t-2 border-amber-300 px-6 py-2 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm tracking-[0.4em] text-amber-300",
                            children: [
                                "SAGA ",
                                sagaBanner.saga + 1,
                                " / ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"].length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 604,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-pixel-display text-2xl font-bold text-white",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"][sagaBanner.saga].name
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 607,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-slate-400",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"][sagaBanner.saga].subtitle
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 608,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 603,
                    columnNumber: 11
                }, this)
            }, sagaBanner.id, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 599,
                columnNumber: 9
            }, this),
            fx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Effects$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                tier: fx.tier
            }, fx.id, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 612,
                columnNumber: 14
            }, this),
            allDone && showCountdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CountdownScreen, {
                msLeft: nextRunAt - now,
                score: totalScore,
                saga: world.arc,
                travelerName: activeCharacter.shortName,
                solved: daily.finished?.solved ?? daily.questions.filter((_, i)=>progress.q[i]?.status === "solved").length,
                onAccount: openAccount,
                signedIn: !!daily.captain,
                saveMessage: saveMessage,
                copied: copied,
                stats: stats,
                onShare: shareResults,
                onClose: ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                    setShowCountdown(false);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 614,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-x-0 top-3 z-20 mx-auto flex max-w-3xl items-start justify-between gap-3 px-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-box px-scan pointer-events-auto w-32 px-4 py-2 sm:w-44",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm tracking-[0.3em] text-slate-400",
                                children: "JOURNEY"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 636,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl leading-none tabular-nums text-cyan-300",
                                children: [
                                    world.pct,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 637,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "truncate text-sm leading-tight text-slate-400",
                                children: [
                                    world.saga + 1,
                                    "/",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"].length,
                                    " · ",
                                    world.arc
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 638,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 635,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-auto flex flex-col items-center pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: daily.questions.map((_, i)=>{
                                    const st = progress.q[i];
                                    const solved = st?.status === "solved" && st.tier;
                                    const expired = st?.status === "expired";
                                    const current = i === viewIndex && !allDone;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            if (i <= activeIndex) {
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                                                setViewIndex(i);
                                            }
                                        },
                                        disabled: i > activeIndex,
                                        "aria-label": `Question ${i + 1}`,
                                        className: `h-4 w-4 border-2 transition sm:h-5 sm:w-5 ${current ? waitingToStart ? "border-amber-300 bg-[#0b1426]" : "border-white bg-[#ff4f7b]" : solved ? "border-amber-200 bg-amber-300" : expired ? "border-rose-900 bg-rose-700/80" : "border-[#1c2a4a] bg-[#0b1426]"} disabled:cursor-default`
                                    }, i, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 651,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 644,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm tracking-[0.3em] text-slate-200 [text-shadow:0_1px_0_#000]",
                                children: waitingToStart && activeIndex === 0 ? "READY TO SET SAIL" : `QUESTION ${shownQuestion} OF ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 677,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-pixel-display text-[11px] tracking-[0.25em] text-amber-200 [text-shadow:0_1px_0_#000]",
                                children: [
                                    "LUFFILLION · DAILY · ",
                                    daily.day
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 682,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openAccount,
                                "aria-haspopup": "dialog",
                                "aria-expanded": accountOpen,
                                className: "captain-entry px-btn mt-1 inline-flex h-7 max-w-48 items-center gap-1.5 border border-[#415674] bg-[#122039] px-2 text-sm text-cyan-100 hover:border-cyan-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CaptainLog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogIcon"], {}, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 687,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: daily.captain ? `Log · ${daily.captain.username}` : "Sign in / Create account"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 687,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 685,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 643,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-box px-scan pointer-events-auto w-32 px-4 py-2 text-right sm:w-44",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm tracking-[0.3em] text-slate-400",
                                children: "SCORE"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 692,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl leading-none tabular-nums text-[#ff4f7b]",
                                children: totalScore
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 693,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-tight text-slate-500",
                                children: [
                                    "of ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_POINTS"]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 694,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 691,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 634,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                    setMenuTab((t)=>t ? null : "log");
                },
                "aria-label": menuTab ? "Close game menu" : "Open game menu",
                "aria-expanded": menuTab !== null,
                "aria-controls": "game-menu",
                className: "px-btn fixed left-3 top-[104px] z-[60] grid h-9 w-10 place-items-center border-2 border-[#2a3a5c] bg-[#1a2540]/95 text-slate-200 hover:bg-[#24335a]",
                children: menuTab ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 17,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 710,
                    columnNumber: 20
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                    size: 17,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 710,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 699,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: toggleMute,
                "aria-label": muted ? "Unmute sound effects" : "Mute sound effects",
                title: muted ? "Unmute sound effects" : "Mute sound effects",
                className: "px-btn fixed right-3 top-[104px] z-30 grid h-9 w-10 place-items-center border-2 border-[#2a3a5c] bg-[#1a2540]/95 text-lg text-slate-200 hover:bg-[#24335a]",
                children: muted ? "🔇" : "🔊"
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 713,
                columnNumber: 7
            }, this),
            menuTab && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                tab: menuTab,
                captain: daily.captain,
                onSwitch: (next)=>{
                    if (next === "achievements" && !daily.captain) {
                        setMenuTab(null);
                        setLockedAchievementsOpen(true);
                        return;
                    }
                    setMenuTab(next);
                },
                onClose: ()=>setMenuTab(null),
                children: [
                    menuTab === "log" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-2 text-sm tracking-[0.3em] text-[#ff4f7b]",
                                children: "RUN LOG"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 735,
                                columnNumber: 15
                            }, this),
                            progress.runs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-slate-400",
                                children: "No runs yet. Land a correct answer to get your character moving."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 737,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1.5",
                                children: [
                                    ...progress.runs
                                ].reverse().map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-between gap-2 bg-white/5 px-2 py-1 text-base",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "min-w-0 truncate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][r.tier].text,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_LABELS"][r.tier]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Game.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: [
                                                            " · Q",
                                                            r.questionIndex + 1,
                                                            " · ",
                                                            r.arc
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Game.tsx",
                                                        lineNumber: 744,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 742,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "shrink-0 tabular-nums text-white",
                                                children: [
                                                    "+",
                                                    r.points
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 746,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, `${r.questionIndex}-${idx}`, true, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 741,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 739,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 border-t border-white/10 pt-2 text-sm leading-snug text-slate-400",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_ORDER"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][t].text,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_LABELS"][t]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Game.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][t].points,
                                                        " pts"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Game.tsx",
                                                    lineNumber: 755,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, t, true, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 753,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-slate-500",
                                        children: "Rarer answers send Luffy farther and faster. Reach 500 points to find Laugh Tale."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 758,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 751,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 734,
                        columnNumber: 13
                    }, this),
                    menuTab === "achievements" && daily.captain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AchievementsPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        captain: daily.captain,
                        refreshKey: `${daily.day}:${achievementRevision}`,
                        onUnlock: queueUnlocks,
                        equippedCharacter: equippedCharacter,
                        onEquip: handleEquip
                    }, daily.captain.id, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 762,
                        columnNumber: 59
                    }, this),
                    menuTab === "archive" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ArchivePanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        captain: daily.captain,
                        refreshKey: `${daily.day}:${stats?.you?.score ?? "pending"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 763,
                        columnNumber: 37
                    }, this),
                    menuTab === "bounties" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BountiesPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        captain: daily.captain,
                        onSignIn: ()=>openAccountForMenu("bounties")
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 764,
                        columnNumber: 38
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 720,
                columnNumber: 9
            }, this),
            lockedAchievementsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LockedAchievements$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onSignIn: ()=>{
                    returnToMenu.current = "achievements";
                    setLockedAchievementsOpen(false);
                    setAccountOpen(true);
                },
                onClose: ()=>setLockedAchievementsOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 769,
                columnNumber: 9
            }, this),
            daily.captain && unlockedToast.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AchievementToast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                unlocked: unlockedToast,
                onDone: dismissUnlock
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 778,
                columnNumber: 53
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none fixed inset-x-0 top-[112px] z-10 flex justify-center px-3 sm:top-[120px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-box px-scan pointer-events-auto max-h-[calc(100vh-260px)] w-full max-w-xl overflow-y-auto px-6 py-5 ${nopeOn ? "nope" : ""}`,
                    children: waitingToStart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base tracking-[0.35em] text-[#ff4f7b]",
                                children: activeIndex === 0 ? `DAILY VOYAGE · ${daily.day}` : `QUESTION ${activeIndex + 1} OF ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]} · READY`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 789,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-1 font-pixel-display text-2xl font-bold leading-tight text-white sm:text-3xl",
                                children: activeIndex === 0 ? "Ready to Set Sail?" : `Ready for Question ${activeIndex + 1}?`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 794,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-base leading-snug text-slate-300",
                                children: activeIndex === 0 ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]} One Piece questions · ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_SECONDS"]} seconds each · infinite attempts, 1 correct answer. Rarer pulls score more points and send ${activeCharacter.shortName} farther toward Laugh Tale.` : `The question stays hidden until you begin. Hit Set Sail to start the ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_SECONDS"]}-second timer.`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 797,
                                columnNumber: 15
                            }, this),
                            activeIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap justify-center gap-1.5 text-sm",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_ORDER"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-0.5 ring-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][t].badge}`,
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_LABELS"][t],
                                            " · ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][t].points
                                        ]
                                    }, t, true, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 805,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 803,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-slate-400",
                                children: [
                                    "Sailing as ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: activeCharacter.color
                                        },
                                        children: activeCharacter.shortName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 811,
                                        columnNumber: 69
                                    }, this),
                                    " · ",
                                    activeCharacter.epithet
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 811,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    autoFocus: true,
                                    onClick: startActiveQuestion,
                                    className: "px-btn h-12 bg-amber-400 px-7 font-pixel-display text-2xl font-bold tracking-[0.22em] text-amber-950 transition hover:bg-amber-300",
                                    children: "⚓ SET SAIL ▸"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 813,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 812,
                                columnNumber: 15
                            }, this),
                            activeIndex === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/adventure",
                                        onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"],
                                        className: "daily-adventure-entry",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "daily-adventure-mark",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 824,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "ADVENTURE MODE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Game.tsx",
                                                        lineNumber: 824,
                                                        columnNumber: 72
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "100 levels · 10 sagas · unlimited retries"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Game.tsx",
                                                        lineNumber: 824,
                                                        columnNumber: 103
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 824,
                                                columnNumber: 66
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "▸"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 824,
                                                columnNumber: 166
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 823,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/ranked",
                                        onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"],
                                        className: "daily-adventure-entry",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "daily-adventure-mark",
                                                children: "⚔"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 827,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "RANKED BATTLE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Game.tsx",
                                                        lineNumber: 827,
                                                        columnNumber: 72
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "Online niche knowledge showdown · Bronze → Legend"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Game.tsx",
                                                        lineNumber: 827,
                                                        columnNumber: 102
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 827,
                                                columnNumber: 66
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: "▸"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 827,
                                                columnNumber: 173
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 826,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 822,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 788,
                        columnNumber: 13
                    }, this) : !allDone && question ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base tracking-[0.35em] text-[#ff4f7b]",
                                children: [
                                    "QUESTION ",
                                    viewIndex + 1,
                                    " OF ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 833,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-1 font-pixel-display text-2xl font-bold leading-tight text-white sm:text-3xl",
                                children: question.prompt
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 836,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-base leading-snug text-slate-400",
                                children: question.hint
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 839,
                                columnNumber: 15
                            }, this),
                            !qs.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-base tracking-[0.18em] text-slate-300",
                                children: [
                                    "▼ ",
                                    Object.values(question.counts).reduce((a, b)=>a + b, 0),
                                    " valid answers · rarer runs farther ▼"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 841,
                                columnNumber: 17
                            }, this),
                            qs.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultPanel, {
                                qs: qs
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 845,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 832,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Summary, {
                        daily: daily,
                        progress: progress,
                        reveals: reveals,
                        totalScore: totalScore
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 848,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 782,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 781,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#040812] via-[#040812]/90 to-transparent pb-5 pt-12",
                children: [
                    !qs.status && !waitingToStart && !allDone && qs.wrong.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mb-2 flex max-w-2xl flex-wrap justify-center gap-1 px-3",
                        children: qs.wrong.slice(0, 8).map((w)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-rose-950/80 px-2 text-base text-rose-200 line-through decoration-rose-400/70",
                                children: w
                            }, w, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 858,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 856,
                        columnNumber: 11
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-center text-base text-rose-300",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 864,
                        columnNumber: 21
                    }, this),
                    suggestion && suggestion.q === viewIndex && timerRunning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto mb-2 flex max-w-2xl justify-center px-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: acceptSuggestion,
                            disabled: busy,
                            className: "suggest-pop px-btn flex items-center gap-2 border-2 border-amber-300/80 bg-[#1a2540]/95 px-3 py-1 text-lg text-slate-200 hover:bg-[#24335a]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-400",
                                    children: [
                                        "“",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "line-through decoration-rose-400/70",
                                            children: suggestion.typed
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 874,
                                            columnNumber: 24
                                        }, this),
                                        "” → did you mean"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 873,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-amber-200",
                                    children: suggestion.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 876,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-400",
                                    children: "?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 877,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-1 bg-amber-300 px-1.5 text-base text-amber-950",
                                    children: "YES · TAB"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 878,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 867,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 866,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto flex max-w-2xl items-center gap-3 px-3",
                        children: waitingToStart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimerRing, {
                                    remainingMs: LIMIT_MS,
                                    seconds: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUESTION_SECONDS"],
                                    low: false
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 886,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base tracking-[0.2em] text-slate-400",
                                    children: [
                                        "Press ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-300",
                                            children: "⚓ SET SAIL ▸"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 888,
                                            columnNumber: 23
                                        }, this),
                                        " above to begin"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 887,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 885,
                            columnNumber: 13
                        }, this) : timerRunning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TimerRing, {
                                    remainingMs: remainingMs,
                                    seconds: remainingSec,
                                    low: lowTime
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 893,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: submitGuess,
                                    className: "flex flex-1 items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: inputRef,
                                                    autoFocus: true,
                                                    value: guess,
                                                    onChange: (e)=>setGuess(e.target.value),
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Tab" && suggestion && suggestion.q === viewIndex && !guess.trim()) {
                                                            e.preventDefault();
                                                            acceptSuggestion();
                                                        }
                                                    },
                                                    maxLength: 80,
                                                    placeholder: "type one answer…",
                                                    "aria-label": "Your answer",
                                                    className: "h-11 w-full border-2 border-cyan-400/70 bg-[#0a1428] px-3 text-xl tracking-wider text-white placeholder:text-slate-500 outline-none focus:border-cyan-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Game.tsx",
                                                    lineNumber: 896,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 h-1 bg-white/10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-full transition-[width] duration-100 ${lowTime ? "bg-rose-400" : "bg-cyan-400"}`,
                                                        style: {
                                                            width: `${remainingMs / LIMIT_MS * 100}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Game.tsx",
                                                        lineNumber: 913,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Game.tsx",
                                                    lineNumber: 912,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 895,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: busy || !guess.trim(),
                                            className: "px-btn -mt-2 h-11 bg-[#c2345f] px-5 text-xl tracking-[0.3em] text-white transition hover:bg-[#d8406d] disabled:opacity-50",
                                            children: busy ? "…" : "RUN"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 919,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 894,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 892,
                            columnNumber: 13
                        }, this) : allDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                                        setShowCountdown(true);
                                    },
                                    className: "px-btn h-11 bg-amber-400 px-5 text-xl tracking-[0.2em] text-amber-950 hover:bg-amber-300",
                                    children: [
                                        "⏳ NEXT RUN ",
                                        formatCountdown(nextRunAt - now)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 930,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: shareResults,
                                    className: "px-btn h-11 bg-[#c2345f] px-5 text-xl tracking-[0.25em] text-white hover:bg-[#d8406d]",
                                    children: copied ? "COPIED!" : "SHARE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 940,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 929,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: nextQuestion,
                            className: "px-btn mx-auto h-11 bg-[#c2345f] px-6 text-xl tracking-[0.3em] text-white hover:bg-[#d8406d]",
                            children: viewIndex === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] - 1 ? "SEE RESULTS ▸" : viewIndex + 1 < activeIndex ? `BACK TO Q${activeIndex + 1} ▸` : "NEXT ▸"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 949,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 883,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 854,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 593,
        columnNumber: 5
    }, this);
}
function TimerRing({ remainingMs, seconds, low }) {
    const r = 22;
    const circ = 2 * Math.PI * r;
    const frac = remainingMs / LIMIT_MS;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#0a1428] ring-2 ring-[#1c2a4a]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 56 56",
                className: "absolute inset-0 -rotate-90",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "28",
                        cy: "28",
                        r: r,
                        fill: "none",
                        stroke: "rgba(255,255,255,0.08)",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 974,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "28",
                        cy: "28",
                        r: r,
                        fill: "none",
                        stroke: low ? "#fb7185" : "#22d3ee",
                        strokeWidth: "4",
                        strokeDasharray: circ,
                        strokeDashoffset: circ * (1 - frac)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 975,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 973,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `relative text-2xl tabular-nums ${low ? "timer-low text-rose-400" : "text-cyan-300"}`,
                children: seconds
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 986,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 972,
        columnNumber: 5
    }, this);
}
function ResultPanel({ qs }) {
    const solved = qs.status === "solved" && qs.tier;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-l-4 border-[#ff4f7b] bg-white/5 px-4 py-3",
                children: solved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `px-2 py-0.5 text-base tracking-wider ring-1 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][qs.tier].badge}`,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_LABELS"][qs.tier].toUpperCase()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 999,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl text-white",
                                    children: [
                                        "+",
                                        qs.points,
                                        " pts"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 1002,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 998,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xl text-slate-200",
                            children: [
                                "✓ ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white",
                                    children: qs.answer
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 1005,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1004,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-slate-400",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][qs.tier].blurb
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1007,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 997,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl text-rose-300",
                            children: "TIME'S UP"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1011,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base text-slate-400",
                            children: "No points this time. Here's every answer."
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1012,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1010,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 995,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "border border-dashed border-white/15 px-3 py-2 text-base text-slate-400",
                children: [
                    "🔒 Every possible answer unlocks after question ",
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"],
                    ". You'll get a recap where you can explore each question's full list."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 1016,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 994,
        columnNumber: 5
    }, this);
}
function AnswerList({ reveal, mine }) {
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const q = filter.trim().toLowerCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex flex-wrap items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-base tracking-[0.25em] text-slate-300",
                                children: "ALL ANSWERS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 1032,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-slate-500",
                                children: [
                                    reveal.total,
                                    " total · ",
                                    reveal.totalFound,
                                    " solves today"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 1033,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 1031,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        value: filter,
                        onChange: (e)=>setFilter(e.target.value),
                        placeholder: `search ${reveal.total} answers…`,
                        "aria-label": "Filter revealed answers",
                        className: "h-8 w-44 border border-white/15 bg-[#0a1428] px-2.5 text-base text-slate-200 placeholder:text-slate-500 outline-none focus:border-cyan-400/70"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 1037,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 1030,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_ORDER"]
                ].reverse().map((t)=>{
                    const allItems = reveal.tiers[t] ?? [];
                    const items = q ? allItems.filter((item)=>item.name.toLowerCase().includes(q)) : allItems;
                    if (items.length === 0) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: `mb-1 text-base tracking-wider ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][t].text}`,
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_LABELS"][t].toUpperCase(),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm tracking-normal text-slate-500",
                                        children: [
                                            "· ",
                                            q ? `${items.length}/${allItems.length}` : allItems.length,
                                            " · ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][t].points,
                                            " pts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 1055,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 1053,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "grid grid-cols-1 gap-1 sm:grid-cols-2",
                                children: items.map((item)=>{
                                    const isMine = mine === item.name;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: `flex items-center justify-between gap-2 px-2 py-0.5 text-base ${isMine ? "bg-amber-300/15 text-amber-100 ring-1 ring-amber-300/60" : "bg-white/5 text-slate-300"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: [
                                                    isMine && "✓ ",
                                                    item.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 1069,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "shrink-0 text-sm text-slate-500",
                                                children: item.found > 0 ? `×${item.found}` : "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 1073,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item.name, true, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 1063,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 1059,
                                columnNumber: 15
                            }, this)
                        ]
                    }, t, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 1052,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 1046,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 1029,
        columnNumber: 5
    }, this);
}
function Summary({ daily, progress, reveals, totalScore }) {
    const solvedCount = daily.finished?.solved ?? daily.questions.filter((_, i)=>progress.q[i]?.status === "solved").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base tracking-[0.35em] text-[#ff4f7b]",
                children: "VOYAGE COMPLETE"
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 1100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-1 font-pixel-display text-3xl font-bold text-white",
                children: [
                    totalScore,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg text-slate-400",
                        children: [
                            "/ ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_POINTS"],
                            " pts"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 1102,
                        columnNumber: 22
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 1101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-base text-slate-400",
                children: [
                    solvedCount,
                    " of ",
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"],
                    " answered. A brand-new run unlocks tomorrow."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 1104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-base tracking-[0.2em] text-amber-200",
                children: "▼ ALL ANSWERS UNLOCKED · TAP A QUESTION ▼"
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 1107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-2",
                children: daily.questions.map((q, i)=>{
                    const st = progress.q[i];
                    const reveal = reveals[i];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "group bg-white/5 px-3 py-2 open:bg-white/[0.08] hover:bg-white/[0.08]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])(),
                                className: "flex cursor-pointer list-none items-center justify-between gap-3 text-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block truncate",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block text-amber-300 transition-transform group-open:rotate-90",
                                                        children: "▸"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Game.tsx",
                                                        lineNumber: 1121,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-500",
                                                        children: [
                                                            "Q",
                                                            i + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Game.tsx",
                                                        lineNumber: 1122,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white",
                                                        children: q.prompt
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Game.tsx",
                                                        lineNumber: 1122,
                                                        columnNumber: 70
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 1120,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block pl-4 text-sm tracking-wider text-cyan-300/80 group-open:hidden",
                                                children: [
                                                    "Tap to discover all ",
                                                    Object.values(q.counts).reduce((x, y)=>x + y, 0),
                                                    " answers"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Game.tsx",
                                                lineNumber: 1124,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 1119,
                                        columnNumber: 17
                                    }, this),
                                    st?.status === "solved" && st.tier ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `shrink-0 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIER_CONFIG"][st.tier].text}`,
                                        children: [
                                            st.answer,
                                            " · +",
                                            st.points
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 1129,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "shrink-0 text-rose-300",
                                        children: daily.finished && !daily.finished.legs && !st?.status ? "archived" : "missed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Game.tsx",
                                        lineNumber: 1133,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 1115,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2",
                                children: reveal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AnswerList, {
                                    reveal: reveal,
                                    mine: st?.status === "solved" ? st.answer : undefined
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 1138,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base text-slate-500",
                                    children: "Loading answers…"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 1140,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 1136,
                                columnNumber: 15
                            }, this)
                        ]
                    }, q.id, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 1114,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 1109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 1099,
        columnNumber: 5
    }, this);
}
function formatCountdown(ms) {
    const t = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(t / 3600);
    const m = Math.floor(t % 3600 / 60);
    const sec = t % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}
function percentMessage(stats) {
    const you = stats.you;
    if (!you) return "";
    if (stats.total <= 1) return "You're the first player to finish today!";
    if (you.beat >= 100) return "You did better than every other player today!";
    if (you.rank === 1) return "You're tied for #1 today!";
    if (you.beat <= 0) return "You beat 0% of players today. A new voyage awaits tomorrow!";
    return `You did better than ${you.beat}% of players today!`;
}
function ScoreGraph({ stats }) {
    const max = Math.max(1, ...stats.bins.map((b)=>b.count));
    const yourBin = stats.you ? Math.min(stats.bins.length - 1, Math.floor(stats.you.score / stats.binSize)) : -1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-28 items-end gap-[3px] border-b-2 border-slate-600 px-1",
                children: stats.bins.map((b, i)=>{
                    const mine = i === yourBin;
                    const h = b.count === 0 ? 2 : Math.max(6, Math.round(b.count / max * 100));
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "group relative flex h-full flex-1 flex-col items-center justify-end",
                        children: [
                            mine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "graph-you mb-0.5 text-sm leading-none text-amber-300",
                                children: "YOU"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 1180,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `graph-bar w-full ${mine ? "bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.7)]" : b.count ? "bg-cyan-500/80" : "bg-slate-700"}`,
                                style: {
                                    height: `${h}%`,
                                    animationDelay: `${i * 35}ms`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 1181,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pointer-events-none absolute bottom-full z-10 mb-5 hidden whitespace-nowrap bg-black/90 px-1.5 text-sm text-slate-200 group-hover:block",
                                children: [
                                    b.from,
                                    "–",
                                    b.to,
                                    ": ",
                                    b.count,
                                    " ",
                                    b.count === 1 ? "player" : "players"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Game.tsx",
                                lineNumber: 1185,
                                columnNumber: 15
                            }, this)
                        ]
                    }, b.from, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 1179,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 1174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between px-1 text-sm text-slate-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 1193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_POINTS"] / 2)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 1194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_POINTS"],
                            " pts"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Game.tsx",
                        lineNumber: 1195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Game.tsx",
                lineNumber: 1192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 1173,
        columnNumber: 5
    }, this);
}
function CountdownScreen({ onAccount, signedIn, saveMessage, msLeft, score, saga, travelerName, solved, copied, stats, onShare, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-40 grid place-items-center overflow-y-auto bg-[#05070f]/80 px-4 py-6 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-box px-scan countdown-pop w-full max-w-md px-7 py-6 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base tracking-[0.4em] text-[#ff4f7b]",
                    children: "TODAY'S VOYAGE IS OVER"
                }, void 0, false, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1229,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 font-pixel-display text-3xl font-bold text-white",
                    children: [
                        score,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg text-slate-400",
                            children: [
                                "/ ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_POINTS"],
                                " pts"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1231,
                            columnNumber: 19
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1230,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base text-slate-400",
                    children: [
                        solved,
                        " of ",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"],
                        " answered · ",
                        travelerName,
                        " reached ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-amber-200",
                            children: saga
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1234,
                            columnNumber: 80
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1233,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 border-t border-white/10 pt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm tracking-[0.35em] text-slate-400",
                            children: "HOW EVERYONE DID TODAY"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1238,
                            columnNumber: 11
                        }, this),
                        stats && stats.you ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 font-pixel-display text-xl font-bold text-amber-200",
                                    children: percentMessage(stats)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 1241,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScoreGraph, {
                                    stats: stats
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 1242,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 grid grid-cols-3 gap-2 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/5 py-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm tracking-widest text-slate-500",
                                                    children: "RANK"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Game.tsx",
                                                    lineNumber: 1245,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl text-white",
                                                    children: [
                                                        "#",
                                                        stats.you.rank,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-slate-500",
                                                            children: [
                                                                " / ",
                                                                stats.total
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/Game.tsx",
                                                            lineNumber: 1248,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Game.tsx",
                                                    lineNumber: 1246,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 1244,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/5 py-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm tracking-widest text-slate-500",
                                                    children: "AVERAGE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Game.tsx",
                                                    lineNumber: 1252,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl text-cyan-300",
                                                    children: stats.average
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Game.tsx",
                                                    lineNumber: 1253,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 1251,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white/5 py-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm tracking-widest text-slate-500",
                                                    children: "TOP SCORE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Game.tsx",
                                                    lineNumber: 1256,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl text-[#ff4f7b]",
                                                    children: stats.top
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Game.tsx",
                                                    lineNumber: 1257,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Game.tsx",
                                            lineNumber: 1255,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 1243,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1240,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 animate-pulse text-base text-slate-500",
                            children: "Comparing your run with everyone else…"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1262,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-4 text-sm tracking-[0.35em] text-slate-400",
                    children: "NEXT RUN IN"
                }, void 0, false, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1266,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-pixel-display text-5xl font-bold tabular-nums text-cyan-300 [text-shadow:0_3px_0_#0b1426]",
                    children: formatCountdown(msLeft)
                }, void 0, false, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1267,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500",
                    children: "New questions for everyone at 12:00 AM EST every day."
                }, void 0, false, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1270,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 flex justify-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            className: "px-btn h-11 bg-amber-400 px-5 text-xl tracking-[0.2em] text-amber-950 hover:bg-amber-300",
                            children: "VIEW ANSWERS"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1273,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onShare,
                            className: "px-btn h-11 bg-[#c2345f] px-5 text-xl tracking-[0.25em] text-white hover:bg-[#d8406d]",
                            children: copied ? "COPIED!" : "SHARE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1280,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1272,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/adventure",
                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"],
                    className: "daily-adventure-entry",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "daily-adventure-mark",
                            children: "↗"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1288,
                            columnNumber: 87
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "KEEP SAILING IN ADVENTURE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 1288,
                                    columnNumber: 140
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "A separate 100-level journey awaits"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 1288,
                                    columnNumber: 182
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1288,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "▸"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1288,
                            columnNumber: 239
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1288,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/ranked",
                    onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"],
                    className: "daily-adventure-entry",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "daily-adventure-mark",
                            children: "⚔"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1289,
                            columnNumber: 84
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "RANKED BATTLE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 1289,
                                    columnNumber: 137
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "Take on captains online and climb the ladder"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Game.tsx",
                                    lineNumber: 1289,
                                    columnNumber: 167
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1289,
                            columnNumber: 131
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "▸"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1289,
                            columnNumber: 233
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1289,
                    columnNumber: 9
                }, this),
                saveMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    role: "status",
                    className: "mt-3 text-sm text-slate-300",
                    children: saveMessage
                }, void 0, false, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1290,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-haspopup": "dialog",
                    onClick: onAccount,
                    className: "mt-2 inline-flex items-center justify-center gap-2 py-1.5 text-base text-cyan-200 underline-offset-4 hover:underline",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CaptainLog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogIcon"], {}, void 0, false, {
                            fileName: "[project]/src/components/Game.tsx",
                            lineNumber: 1292,
                            columnNumber: 11
                        }, this),
                        signedIn ? "Open my Captain's Log" : "Sign in or create an account to keep this voyage",
                        " ▸"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Game.tsx",
                    lineNumber: 1291,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Game.tsx",
            lineNumber: 1228,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Game.tsx",
        lineNumber: 1227,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/LockedAchievements.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LockedAchievements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pixel-emblems.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LockedAchievements({ onSignIn, onClose }) {
    const dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = dialog.current;
        el?.showModal();
        return ()=>el?.close();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: dialog,
        "aria-labelledby": "locked-title",
        onCancel: (e)=>{
            e.preventDefault();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
            onClose();
        },
        onClick: (e)=>{
            if (e.target === e.currentTarget) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                onClose();
            }
        },
        className: "locked-dialog",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-scan border border-[#3a2f14] border-t-[3px] border-t-amber-300 bg-[#0d182b] text-center text-slate-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        kind: "seal",
                        size: 44,
                        className: "mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LockedAchievements.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-xl tracking-[0.3em] text-amber-300",
                        children: "LOCKED"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LockedAchievements.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "locked-title",
                        className: "mt-1 font-pixel-display text-2xl font-bold text-white",
                        children: "A captain needs an account"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LockedAchievements.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "locked-description",
                        className: "mt-2 text-lg leading-tight text-slate-300",
                        children: "Sign in or create a free account to unlock and save all 15 achievements. Your earned pixel emblems will follow you across devices."
                    }, void 0, false, {
                        fileName: "[project]/src/components/LockedAchievements.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                                    onSignIn();
                                },
                                className: "px-btn h-11 bg-amber-400 text-lg tracking-[0.2em] text-amber-950 hover:bg-amber-300",
                                children: "SIGN IN / CREATE ACCOUNT ▸"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LockedAchievements.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                                    onClose();
                                },
                                className: "py-1 text-base text-slate-400 underline-offset-4 hover:text-white hover:underline",
                                children: "Keep playing as a guest"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LockedAchievements.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LockedAchievements.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LockedAchievements.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/LockedAchievements.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LockedAchievements.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/MenuPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.mjs [app-ssr] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scroll-text.mjs [app-ssr] (ecmascript) <export default as ScrollText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pixel-emblems.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const options = [
    {
        id: "log",
        title: "Run Log"
    },
    {
        id: "achievements",
        title: "Achievements"
    },
    {
        id: "archive",
        title: "Archive"
    },
    {
        id: "bounties",
        title: "Bounties"
    }
];
function MenuPanel({ tab, captain, onSwitch, onClose, children }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        closeRef.current = onClose;
    }, [
        onClose
    ]);
    // The game clock updates ten times a second. Never steal focus on those renders.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const previous = document.activeElement;
        ref.current?.querySelector('[role="tab"][aria-selected="true"]')?.focus();
        const close = (e)=>{
            if (e.key === "Escape") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                closeRef.current();
            }
        };
        window.addEventListener("keydown", close);
        return ()=>{
            window.removeEventListener("keydown", close);
            if (previous instanceof HTMLElement && previous.isConnected) previous.focus();
        };
    }, []);
    function navigate(e, index) {
        const next = e.key === "ArrowRight" ? (index + 1) % 4 : e.key === "ArrowLeft" ? (index + 3) % 4 : e.key === "Home" ? 0 : e.key === "End" ? 3 : -1;
        if (next < 0) return;
        e.preventDefault();
        ref.current?.querySelectorAll('[role="tab"]')[next]?.focus();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        id: "game-menu",
        role: "dialog",
        "aria-label": "Game menu",
        className: "voyage-menu px-box px-scan",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 items-stretch border-b border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "tablist",
                        "aria-label": "Game menu sections",
                        className: "grid min-w-0 flex-1 grid-cols-4",
                        children: options.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                id: `menu-tab-${item.id}`,
                                role: "tab",
                                "aria-selected": tab === item.id,
                                "aria-controls": `menu-panel-${item.id}`,
                                onKeyDown: (e)=>navigate(e, index),
                                onClick: ()=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                                    onSwitch(item.id);
                                },
                                className: `flex h-14 flex-col items-center justify-center gap-0.5 border-b-2 text-base transition-colors ${tab === item.id ? "border-amber-300 bg-[#21314a] text-amber-200" : "border-transparent text-slate-300 hover:bg-white/5 hover:text-white"}`,
                                children: [
                                    item.id === "achievements" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        kind: "seal",
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MenuPanel.tsx",
                                        lineNumber: 53,
                                        columnNumber: 41
                                    }, this) : item.id === "archive" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                        size: 16,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MenuPanel.tsx",
                                        lineNumber: 53,
                                        columnNumber: 105
                                    }, this) : item.id === "bounties" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                        size: 16,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MenuPanel.tsx",
                                        lineNumber: 53,
                                        columnNumber: 172
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scroll$2d$text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ScrollText$3e$__["ScrollText"], {
                                        size: 16,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MenuPanel.tsx",
                                        lineNumber: 53,
                                        columnNumber: 213
                                    }, this),
                                    item.title
                                ]
                            }, item.id, true, {
                                fileName: "[project]/src/components/MenuPanel.tsx",
                                lineNumber: 49,
                                columnNumber: 39
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuPanel.tsx",
                        lineNumber: 48,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Close menu",
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                            onClose();
                        },
                        className: "w-9 shrink-0 border-l border-white/10 text-slate-300 hover:bg-white/5 hover:text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 16,
                            className: "mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MenuPanel.tsx",
                            lineNumber: 57,
                            columnNumber: 196
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuPanel.tsx",
                        lineNumber: 57,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MenuPanel.tsx",
                lineNumber: 47,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tabpanel",
                id: `menu-panel-${tab}`,
                "aria-labelledby": `menu-tab-${tab}`,
                className: "min-h-0 flex-1 overflow-y-auto overscroll-contain",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/MenuPanel.tsx",
                lineNumber: 59,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-t border-white/10 px-4 py-1.5 text-sm text-slate-400",
                children: captain ? `Captain ${captain.username} · saved across devices` : "Guest voyage · saved on this device"
            }, void 0, false, {
                fileName: "[project]/src/components/MenuPanel.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MenuPanel.tsx",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/PixelWorld.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PixelWorld
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/arcs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pixel/art.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$runners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pixel/runners.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/playable-characters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$sagas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pixel/sagas.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const PX = 4; // CSS pixels per art pixel
const PPP = 12; // art pixels per journey point
const MARGIN = 60;
const worldX = (p)=>MARGIN + p * PPP;
const WORLD_END = worldX(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOURNEY_MAX"]) + 400;
const smooth = (x)=>{
    const v = Math.max(0, Math.min(1, x));
    return v * v * (3 - 2 * v);
};
function PixelWorld({ signal, initialPos, goldHat = false, characterId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_CHARACTER"], onStatus, storageKey }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const runRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        from: initialPos,
        to: initialPos,
        start: 0,
        dur: 1,
        running: false,
        pos: initialPos
    });
    const statusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onStatus);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        statusRef.current = onStatus;
    }, [
        onStatus
    ]);
    const characterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(characterId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        characterRef.current = characterId;
    }, [
        characterId
    ]);
    const goldHatRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(goldHat);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        goldHatRef.current = goldHat;
    }, [
        goldHat
    ]);
    // Luffy's resting spot always follows the saved score and only ever moves forward.
    const floorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(initialPos);
    const restRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(initialPos); // last place Luffy stood still
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!storageKey) return;
        const saved = Number(localStorage.getItem(storageKey) ?? "0");
        if (Number.isFinite(saved) && saved > 0) {
            floorRef.current = Math.max(floorRef.current, saved);
            restRef.current = Math.max(restRef.current, saved);
        }
    }, [
        storageKey
    ]);
    const finalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        pending: false,
        since: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        floorRef.current = Math.max(floorRef.current, initialPos);
    }, [
        initialPos
    ]);
    // A correct answer: run forward from where Luffy stands to the new total.
    // Footsteps run at a pace set by rarity and stop with the travel animation.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!signal) return;
        const r = runRef.current;
        // Start from wherever Luffy actually got to — never from the beginning.
        const from = Math.max(r.pos, restRef.current);
        const to = Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOURNEY_MAX"], Math.max(from, signal.to));
        floorRef.current = Math.max(floorRef.current, to);
        // Always animate: even with no distance left Luffy jogs, and the finale lasts longer.
        const dur = signal.final ? Math.max(2600, signal.ms * 1.4) : signal.ms;
        runRef.current = {
            from,
            to,
            start: performance.now(),
            dur,
            running: true,
            pos: from
        };
        finalRef.current = {
            pending: !!signal.final,
            since: 0
        };
        const stopRunSound = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startRunSound"])(signal.tier);
        const stopTimer = window.setTimeout(stopRunSound, dur + 100);
        return ()=>{
            window.clearTimeout(stopTimer);
            stopRunSound();
        };
    }, [
        signal
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        let raf = 0;
        let cam = -1;
        let last = "";
        const dust = [];
        const resize = ()=>{
            canvas.width = Math.ceil(window.innerWidth / PX);
            canvas.height = Math.ceil(window.innerHeight / PX);
            ctx.imageSmoothingEnabled = false;
            cam = -1;
        };
        resize();
        window.addEventListener("resize", resize);
        const frame = (t)=>{
            const r = runRef.current;
            if (r.running) {
                const p = Math.min(1, (t - r.start) / r.dur);
                const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
                r.pos = r.from + (r.to - r.from) * eased;
                if (p >= 1) {
                    r.running = false;
                    if (finalRef.current.pending) finalRef.current = {
                        pending: false,
                        since: t
                    };
                }
            }
            // Never fall behind the saved position (e.g. between questions or after a reload).
            if (!r.running && r.pos < floorRef.current) {
                r.pos = floorRef.current;
                r.from = r.to = r.pos;
            }
            if (!r.running && r.pos > restRef.current + 0.01) {
                restRef.current = r.pos;
                if (storageKey) localStorage.setItem(storageKey, String(r.pos));
            }
            const c = ctx;
            const W = canvas.width;
            const H = canvas.height;
            const gy = Math.round(H * 0.74);
            const lx = worldX(r.pos);
            const target = Math.max(0, Math.min(lx - W * 0.3, WORLD_END - W));
            cam = cam < 0 ? target : cam + (target - cam) * 0.12;
            const env = {
                c,
                W,
                H,
                gy,
                cam,
                t
            };
            // --- Each saga is drawn entirely inside its own stretch of the world:
            //     sky, backdrop, ground and details are all clipped to the segment, so
            //     sagas never blend into each other.
            for(let k = 0; k < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"].length; k++){
                const x0 = k === 0 ? -WORLD_END : worldX(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"][k].at);
                const x1 = k === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"].length - 1 ? WORLD_END * 2 : worldX(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"][k].at + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGA_LENGTH"]);
                const sx0 = Math.max(0, Math.round(x0 - cam));
                const sx1 = Math.min(W, Math.round(x1 - cam));
                if (sx1 <= 0 || sx0 >= W) continue;
                c.save();
                c.beginPath();
                c.rect(sx0, 0, sx1 - sx0, H);
                c.clip();
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$sagas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGA_SCENES"][k].sky(env);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$sagas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGA_SCENES"][k].far(env);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$sagas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGA_SCENES"][k].near(env, Math.max(x0, 0), x1);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$sagas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGA_DETAILS"][k](env, Math.max(x0, 0), x1);
                c.restore();
            }
            // --- Saga signposts at each border.
            for(let k = 1; k < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"].length; k++){
                const sx = Math.round(worldX(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"][k].at) - cam);
                if (sx < -20 || sx > W + 20) continue;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$sagas$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawSignpost"])(c, sx, gy, k + 1, r.pos >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"][k].at, t);
            }
            // The equipped character changes live; its appearance never restarts the run.
            const sprite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$runners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runnerSprite"])(characterRef.current, r.running, t);
            const sx = Math.round(lx - cam - sprite.width / 2);
            const celebrating = !r.running && finalRef.current.since > 0;
            const hop = celebrating ? -Math.round(Math.abs(Math.sin((t - finalRef.current.since) / 180)) * 8) : 0;
            const bob = r.running || celebrating ? 0 : Math.sin(t / 500) > 0.5 ? -1 : 0;
            const sy = gy - sprite.height + bob + hop;
            if (celebrating) {
                // victory sparkles + a little shadow under the hop
                c.fillStyle = "rgba(0,0,0,0.25)";
                c.fillRect(sx + 3, gy - 1, 10 + hop / 2, 1);
                for(let k = 0; k < 10; k++){
                    const a = (t / 400 + k * 0.63) % (Math.PI * 2);
                    const rr = 14 + Math.sin(t / 250 + k) * 4;
                    c.fillStyle = [
                        "#ffd43b",
                        "#ffffff",
                        "#ff6b6b",
                        "#74c0fc"
                    ][k % 4];
                    c.fillRect(Math.round(sx + 8 + Math.cos(a) * rr), Math.round(sy + 6 + Math.sin(a) * rr * 0.7), 2, 2);
                }
            }
            if (r.running) {
                const speed = (r.to - r.from) / Math.max(1, r.dur);
                const lines = speed > 0.035 ? 6 : speed > 0.02 ? 4 : 3;
                for(let k = 0; k < lines; k++){
                    const off = (t / 25 + k * 7) % 18 + 6;
                    c.fillStyle = "rgba(255,255,255,0.75)";
                    c.fillRect(Math.round(sx - off), sy + 3 + k * 2, 6, 1);
                }
                if (Math.random() < 0.7) {
                    dust.push({
                        x: sx + 5,
                        y: gy - 2,
                        vx: -0.4 - Math.random() * 0.8,
                        vy: -Math.random() * 0.5,
                        life: 24
                    });
                }
            }
            for(let i = dust.length - 1; i >= 0; i--){
                const d = dust[i];
                d.x += d.vx;
                d.y += d.vy;
                d.life -= 1;
                if (d.life <= 0) dust.splice(i, 1);
                else (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawDust"])(c, d);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawSprite"])(c, sprite.rows, sx, sy, sprite.palette);
            if (goldHatRef.current) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["drawGoldHat"])(c, sx + sprite.goldHat.x, sy + sprite.goldHat.y, t);
            // --- Throttled HUD updates.
            const idx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sagaIndexAt"])(r.pos);
            const pct = Math.round(r.pos / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JOURNEY_MAX"] * 100);
            const key = `${pct}|${idx}|${r.running}`;
            if (key !== last) {
                last = key;
                statusRef.current?.({
                    pct,
                    arc: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAGAS"][idx].name,
                    saga: idx,
                    running: r.running
                });
            }
            raf = requestAnimationFrame(frame);
        };
        raf = requestAnimationFrame(frame);
        return ()=>{
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 z-0 h-screen w-screen",
        style: {
            imageRendering: "pixelated"
        },
        "aria-label": `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["characterById"])(characterId).name}'s journey through the sagas of One Piece`,
        "data-character": characterId,
        "data-gold-hat": goldHat
    }, void 0, false, {
        fileName: "[project]/src/components/PixelWorld.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/adventure/AdventureLog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdventureLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pixel-emblems.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$adventure$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/adventure/levels.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/voyage-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sound.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AdventureLog({ accountId, revision }) {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [retry, setRetry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const ctrl = new AbortController();
        setError('');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$voyage$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["voyageRequest"])('/api/adventure', 'GET', undefined, ctrl.signal).then((d)=>{
            if (!ctrl.signal.aborted && d.captain?.id === accountId) setData(d);
        }).catch((e)=>{
            if (!ctrl.signal.aborted) setError(e instanceof Error ? e.message : 'Could not read your Adventure log.');
        });
        return ()=>ctrl.abort();
    }, [
        accountId,
        revision,
        retry
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "adventure-log",
        "aria-labelledby": "adventure-log-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        id: "adventure-log-title",
                        className: "text-sm tracking-[.22em] text-amber-200",
                        children: "GRAND LINE ADVENTURE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                        lineNumber: 22,
                        columnNumber: 62
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/adventure",
                        onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"],
                        className: "text-sm text-cyan-200 hover:underline",
                        children: "Open map ▸"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                        lineNumber: 22,
                        columnNumber: 168
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "text-base text-rose-200",
                children: [
                    error,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"])();
                            setRetry((n)=>n + 1);
                        },
                        className: "underline",
                        children: "Retry"
                    }, void 0, false, {
                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                        lineNumber: 23,
                        columnNumber: 72
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                lineNumber: 23,
                columnNumber: 12
            }, this) : !data ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "py-3 text-slate-400",
                children: "Reading your sea chart…"
            }, void 0, false, {
                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                lineNumber: 23,
                columnNumber: 187
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-pixel-display text-xl text-white",
                                        children: data.profile.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                        lineNumber: 24,
                                        columnNumber: 74
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-400",
                                        children: [
                                            data.profile.completed,
                                            "/100 levels cleared · ",
                                            data.profile.badges.filter((b)=>b.earned).length,
                                            "/10 saga badges"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                        lineNumber: 24,
                                        columnNumber: 151
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                lineNumber: 24,
                                columnNumber: 69
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                kind: data.profile.ultimate.earned ? 'pirate-king' : 'first-voyage',
                                size: 40
                            }, void 0, false, {
                                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                lineNumber: 24,
                                columnNumber: 308
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                        lineNumber: 24,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-3 h-1 bg-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-amber-300",
                            style: {
                                width: `${data.profile.completed}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                            lineNumber: 25,
                            columnNumber: 45
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                        lineNumber: 25,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 gap-1.5",
                        "aria-label": "Adventure saga badges",
                        children: data.profile.badges.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                title: `${b.name} — ${b.earned ? 'Earned' : `Clear level ${b.atLevel}`}`,
                                "aria-label": `${b.name}: ${b.earned ? 'Earned' : 'Locked'}`,
                                className: `grid place-items-center border p-1 ${b.earned ? 'border-amber-300/40 bg-amber-300/5' : 'border-white/10 grayscale'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        kind: b.emblem,
                                        size: 32,
                                        dim: !b.earned
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                        lineNumber: 26,
                                        columnNumber: 382
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-xs ${b.earned ? 'text-amber-200' : 'text-slate-500'}`,
                                        children: [
                                            "SAGA ",
                                            b.saga
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                        lineNumber: 26,
                                        columnNumber: 438
                                    }, this)
                                ]
                            }, b.saga, true, {
                                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                lineNumber: 26,
                                columnNumber: 112
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                        lineNumber: 26,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                onClick: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sound$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playClick"],
                                className: "cursor-pointer text-base text-cyan-200",
                                children: [
                                    "Adventure titles (",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$adventure$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADVENTURE_TITLES"].filter((t)=>t.level <= data.profile.completed).length,
                                    "/",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$adventure$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADVENTURE_TITLES"].length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                lineNumber: 27,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-2 space-y-1",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$adventure$2f$levels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ADVENTURE_TITLES"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: `flex justify-between gap-2 text-base ${data.profile.completed >= t.level ? 'text-amber-100' : 'text-slate-500'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    data.profile.completed >= t.level ? '✓' : '◇',
                                                    " ",
                                                    t.title
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                                lineNumber: 27,
                                                columnNumber: 430
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Level ",
                                                    t.level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                                lineNumber: 27,
                                                columnNumber: 494
                                            }, this)
                                        ]
                                    }, t.level, true, {
                                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                        lineNumber: 27,
                                        columnNumber: 292
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                lineNumber: 27,
                                columnNumber: 236
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                        lineNumber: 27,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mt-3 flex items-center gap-2 border p-2 ${data.profile.ultimate.earned ? 'border-amber-300/50 bg-amber-300/10' : 'border-white/10'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2d$emblems$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                kind: "pirate-king",
                                size: 32,
                                dim: !data.profile.ultimate.earned
                            }, void 0, false, {
                                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                lineNumber: 29,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-pixel-display text-sm text-amber-100",
                                        children: "Pirate King · Ultimate Adventure"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                        lineNumber: 29,
                                        columnNumber: 93
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-400",
                                        children: data.profile.ultimate.earned ? 'Earned — all 100 levels conquered.' : 'Clear all 100 levels to earn this achievement and title.'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                        lineNumber: 29,
                                        columnNumber: 186
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                                lineNumber: 29,
                                columnNumber: 88
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                        lineNumber: 28,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/adventure/AdventureLog.tsx",
                lineNumber: 23,
                columnNumber: 250
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/adventure/AdventureLog.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/pixel-emblems.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PixelEmblem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$achievement$2d$emblems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/achievement-emblems.ts [app-ssr] (ecmascript)");
;
;
function PixelEmblem({ kind, size = 40, className = "", dim = false }) {
    const sprite = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$achievement$2d$emblems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EMBLEM_SPRITES"][kind];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        width: size,
        height: size,
        shapeRendering: "crispEdges",
        "aria-hidden": "true",
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            opacity: dim ? 0.45 : 1,
            children: sprite.rows.flatMap((row, y)=>[
                    ...row
                ].map((pixel, x)=>sprite.palette[pixel] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: x,
                        y: y,
                        width: 1,
                        height: 1,
                        fill: sprite.palette[pixel]
                    }, `${x}:${y}`, false, {
                        fileName: "[project]/src/components/pixel-emblems.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this) : null))
        }, void 0, false, {
            fileName: "[project]/src/components/pixel-emblems.tsx",
            lineNumber: 12,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pixel-emblems.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/pixel/art.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Pixel-art drawing helpers for Luffy's journey world.
// Everything is drawn in "art pixels": the canvas is sized so one art pixel is a few CSS pixels.
__turbopack_context__.s([
    "BUILDING_KINDS",
    ()=>BUILDING_KINDS,
    "BUILDING_WIDTH",
    ()=>BUILDING_WIDTH,
    "LUFFY_PAL",
    ()=>LUFFY_PAL,
    "SCENES",
    ()=>SCENES,
    "drawBuilding",
    ()=>drawBuilding,
    "drawClouds",
    ()=>drawClouds,
    "drawDust",
    ()=>drawDust,
    "drawGoldHat",
    ()=>drawGoldHat,
    "drawGround",
    ()=>drawGround,
    "drawPassed",
    ()=>drawPassed,
    "drawRidge",
    ()=>drawRidge,
    "drawSky",
    ()=>drawSky,
    "drawSprite",
    ()=>drawSprite,
    "luffyFrame",
    ()=>luffyFrame
]);
const BUILDING_KINDS = [
    "shack",
    "town",
    "windmill",
    "ship",
    "arlong",
    "tower",
    "mountain",
    "peak",
    "castle",
    "pyramid",
    "sky",
    "canal",
    "justice",
    "gothic",
    "stands",
    "dome",
    "arena",
    "cake",
    "pagoda",
    "lab"
];
const BUILDING_WIDTH = 44;
const SCENES = [
    {
        sky: [
            "#7fd4ff",
            "#a8e4ff",
            "#d8f5ff",
            "#fff3d6"
        ],
        far: "#6fa6c9",
        near: "#4e9a6a",
        ground: "#e7c27d",
        grass: "#5bbf5b"
    },
    {
        sky: [
            "#ffb27a",
            "#ffc997",
            "#ffe2b8",
            "#fff1d6"
        ],
        far: "#c97b62",
        near: "#a35f4f",
        ground: "#d8a86a",
        grass: "#7dba4a"
    },
    {
        sky: [
            "#8ec5ff",
            "#b6dbff",
            "#e3f1ff",
            "#fff7e0"
        ],
        far: "#8fa7b8",
        near: "#6e9e57",
        ground: "#c7a46a",
        grass: "#5ea14a"
    },
    {
        sky: [
            "#4aa3e0",
            "#7cc2ef",
            "#b9e2f8",
            "#fff6e0"
        ],
        far: "#4a7fb0",
        near: "#2f6f9a",
        ground: "#2f6f9a",
        grass: "#4aa3e0"
    },
    {
        sky: [
            "#2a3a6b",
            "#3c5a8a",
            "#7aa1c9",
            "#f7c59f"
        ],
        far: "#2a4a5a",
        near: "#1f3b3b",
        ground: "#3d5a6b",
        grass: "#2a8a7a"
    },
    {
        sky: [
            "#f09a6a",
            "#f7b98a",
            "#ffd9a8",
            "#fff0cc"
        ],
        far: "#7d5a6b",
        near: "#5d4252",
        ground: "#a8875a",
        grass: "#8a9a4a"
    },
    {
        sky: [
            "#6aa9e8",
            "#94c8f2",
            "#c6e6fb",
            "#eef9ff"
        ],
        far: "#5a6e8c",
        near: "#3d5070",
        ground: "#6b5a4a",
        grass: "#4a8a4a"
    },
    {
        sky: [
            "#f2b25a",
            "#f7cb7f",
            "#fde1a8",
            "#fff4d6"
        ],
        far: "#8a6a4a",
        near: "#6a4c34",
        ground: "#7b5a3a",
        grass: "#8a7a3a"
    },
    {
        sky: [
            "#a6c8e6",
            "#c8dff0",
            "#e9f3fb",
            "#ffffff"
        ],
        far: "#9db4cc",
        near: "#dbe8f5",
        ground: "#f2f7fb",
        grass: "#e4eef7"
    },
    {
        sky: [
            "#ff9a4a",
            "#ffb76b",
            "#ffd595",
            "#fff0c4"
        ],
        far: "#c97a3a",
        near: "#b0642f",
        ground: "#e0b06a",
        grass: "#c8a050"
    },
    {
        sky: [
            "#7ec8ff",
            "#a9dcff",
            "#d6efff",
            "#fffbe6"
        ],
        far: "#e8f4ff",
        near: "#ffffff",
        ground: "#fff7d1",
        grass: "#f6e27a"
    },
    {
        sky: [
            "#5fb0ea",
            "#8ccbf2",
            "#c5e6fa",
            "#fff2d8"
        ],
        far: "#7d8fa8",
        near: "#56708a",
        ground: "#a77a52",
        grass: "#6fae5a"
    },
    {
        sky: [
            "#5a6bb0",
            "#7d8ac4",
            "#b3bce0",
            "#eef0fa"
        ],
        far: "#7b7f99",
        near: "#4f5570",
        ground: "#8d8a80",
        grass: "#7a7a7a"
    },
    {
        sky: [
            "#1e1433",
            "#2d1f47",
            "#4a3368",
            "#7a5a92"
        ],
        far: "#2e2448",
        near: "#1c152f",
        ground: "#2a2238",
        grass: "#3a4a2a"
    },
    {
        sky: [
            "#e76f51",
            "#f4a261",
            "#f9c98f",
            "#fde7c7"
        ],
        far: "#b05a40",
        near: "#8a4330",
        ground: "#c9a27a",
        grass: "#a0884a"
    },
    {
        sky: [
            "#0b4f6c",
            "#156a8a",
            "#1f8aa8",
            "#56b8c9"
        ],
        far: "#0e5870",
        near: "#0a4a60",
        ground: "#d9c48a",
        grass: "#2a9d8f"
    },
    {
        sky: [
            "#ff8fb1",
            "#ffb3c7",
            "#ffd6e0",
            "#fff2c4"
        ],
        far: "#d27aa0",
        near: "#b35f86",
        ground: "#e8c48a",
        grass: "#7dc36a"
    },
    {
        sky: [
            "#ffb6d9",
            "#ffc9e6",
            "#ffe0f0",
            "#fff5fb"
        ],
        far: "#f08ac0",
        near: "#e06aa8",
        ground: "#ffd1e6",
        grass: "#b8f08a"
    },
    {
        sky: [
            "#ff6b4a",
            "#ff8f5c",
            "#ffb07a",
            "#ffe0b0"
        ],
        far: "#7a2e2e",
        near: "#5a2222",
        ground: "#6b4a3a",
        grass: "#4a6a3a"
    },
    {
        sky: [
            "#0d1b2a",
            "#1b2f4a",
            "#2f5d7a",
            "#6fb4d6"
        ],
        far: "#24486a",
        near: "#1b3650",
        ground: "#3a4a5a",
        grass: "#3fd1c4"
    }
];
const LUFFY_PAL = {
    k: "#1b1b2f",
    y: "#f1cf7a",
    Y: "#caa045",
    w: "#f5d2a8",
    r: "#e0303a",
    R: "#2f5fd6"
};
const LUFFY_IDLE = [
    "......kkkk......",
    ".....kyyyyk.....",
    "..kkYYrrrrYYkk..",
    ".kYYYYYYYYYYYYk.",
    "..kkkkkkkkkkkk..",
    "....kwwwwwwk....",
    "....kwkwwkwk....",
    "....kwwwwwwk....",
    "...krrrrrrrrk...",
    "..krrrrrrrrrrk..",
    "..kwrrrrrrrrwk..",
    "..kwrrrrrrrrwk..",
    "...kRRRRRRRRk...",
    "...kRRRRRRRRk...",
    "....kwk..kwk....",
    "....kkk..kkk...."
];
const LUFFY_RUN_A = [
    ...LUFFY_IDLE.slice(0, 14),
    "...kwk....kwk...",
    "..kkk.....kkk..."
];
const LUFFY_RUN_B = [
    ...LUFFY_IDLE.slice(0, 14),
    "..kwk.....kwk...",
    "..kkk.....kkk..."
];
function luffyFrame(running, t) {
    if (!running) return LUFFY_IDLE;
    return Math.floor(t / 110) % 2 === 0 ? LUFFY_RUN_A : LUFFY_RUN_B;
}
function rect(c, x, y, w, h, col) {
    c.fillStyle = col;
    c.fillRect(Math.round(x), Math.round(y), Math.max(1, Math.round(w)), Math.max(1, Math.round(h)));
}
// Triangle roof: apex at `top`, widening down to `halfW` over `h` rows.
function tri(c, cx, top, halfW, h, col) {
    for(let i = 0; i < h; i++){
        const hw = Math.max(1, Math.round(halfW * (i + 1) / h));
        rect(c, cx - hw, top + i, hw * 2, 1, col);
    }
}
// Hemisphere: apex at `top`, flat base at top + r.
function dome(c, cx, top, r, col) {
    for(let y = 0; y <= r; y++){
        const half = Math.round(Math.sqrt(Math.max(0, r * r - (r - y) * (r - y))));
        rect(c, cx - half, top + y, half * 2, 1, col);
    }
}
function drawSprite(c, rows, x, y, pal) {
    for(let r = 0; r < rows.length; r++){
        const row = rows[r];
        for(let col = 0; col < row.length; col++){
            const color = pal[row[col]];
            if (color) rect(c, x + col, y + r, 1, 1, color);
        }
    }
}
const GOLD_HAT_PAL = {
    o: "#4a2500",
    h: "#fffbe6",
    g: "#ffd700",
    G: "#f59e0b",
    b: "#b45309"
};
const GOLD_HAT_ROWS = [
    ".....oooooo.....",
    "....ohggggGo....",
    "....ogggggGo....",
    ".ooogbbbbbbGooo.",
    "ohggggggggggggGo",
    ".oooooooooooooo."
];
function drawGoldHat(c, x, y, t) {
    drawSprite(c, GOLD_HAT_ROWS, x, y - 1, GOLD_HAT_PAL);
    // Diagonal specular glint sweeping across the gold crown & brim.
    const phase = t % 1800;
    if (phase < 480) {
        const sweep = Math.floor(phase / 480 * 18);
        for(let r = 0; r < GOLD_HAT_ROWS.length; r++){
            const row = GOLD_HAT_ROWS[r];
            for(let col = 0; col < row.length; col++){
                const ch = row[col];
                if ((ch === "g" || ch === "G" || ch === "h") && col + r === sweep) {
                    rect(c, x + col, y - 1 + r, 1, 1, "#ffffff");
                }
            }
        }
    }
    // Subtle twinkling sparkles around the hat.
    const sparks = [
        [
            x + 2,
            y - 2,
            0
        ],
        [
            x + 13,
            y - 2,
            1.9
        ],
        [
            x + 16,
            y + 2,
            3.6
        ]
    ];
    for (const [sx, sy, off] of sparks){
        const pulse = Math.sin(t / 220 + off);
        if (pulse > 0.72) {
            rect(c, sx - 1, sy, 3, 1, "#fffbe6");
            rect(c, sx, sy - 1, 1, 3, "#fffbe6");
            rect(c, sx, sy, 1, 1, "#ffffff");
        } else if (pulse > 0.25) {
            rect(c, sx, sy, 1, 1, "#ffd700");
        }
    }
}
function drawBuilding(kind, c, bx, gy, t) {
    rect(c, bx, gy, BUILDING_WIDTH, 1, "rgba(0,0,0,0.25)");
    const cx = bx + 22;
    switch(kind){
        case "shack":
            {
                rect(c, bx + 8, gy - 14, 28, 14, "#c58b4a");
                for(let i = 0; i < 4; i++)rect(c, bx + 8, gy - 12 + i * 4, 28, 1, "#8a5a2b");
                tri(c, cx, gy - 24, 18, 10, "#8b2e2e");
                rect(c, bx + 18, gy - 8, 8, 8, "#3b2412");
                rect(c, bx + 11, gy - 11, 5, 5, "#9fe3ff");
                rect(c, bx + 2, gy - 34, 2, 34, "#3b2412");
                rect(c, bx + 4, gy - 34, 8, 5, "#e0303a");
                break;
            }
        case "town":
            {
                const houses = [
                    [
                        2,
                        12,
                        14,
                        "#f4e3c1",
                        "#d9542b"
                    ],
                    [
                        14,
                        16,
                        22,
                        "#ffd6a5",
                        "#b23a1f"
                    ],
                    [
                        30,
                        12,
                        12,
                        "#f4e3c1",
                        "#d9542b"
                    ]
                ];
                for (const [dx, w, h, wall, roof] of houses){
                    rect(c, bx + dx, gy - h, w, h, wall);
                    tri(c, bx + dx + w / 2, gy - h - 6, w / 2 + 1, 6, roof);
                    rect(c, bx + dx + 2, gy - h + 3, 3, 3, "#ffe9a8");
                    if (w > 12) rect(c, bx + dx + w - 5, gy - h + 3, 3, 3, "#ffe9a8");
                    rect(c, bx + dx + w / 2 - 1, gy - 6, 3, 6, "#3b2412");
                }
                break;
            }
        case "windmill":
            {
                for(let i = 0; i < 22; i++){
                    const hw = 3 + Math.round(i / 22 * 4);
                    rect(c, cx - hw, gy - 22 + i, hw * 2, 1, "#f1e3c4");
                }
                tri(c, cx, gy - 30, 5, 8, "#8b2e2e");
                rect(c, cx - 2, gy - 6, 4, 6, "#3b2412");
                const hx = cx;
                const hy = gy - 24;
                for(let k = 0; k < 4; k++){
                    const a = t * 0.0025 + k * Math.PI / 2;
                    for(let d = 2; d <= 14; d++)rect(c, hx + Math.cos(a) * d, hy + Math.sin(a) * d, 1, 1, "#5a3418");
                    for(let d = 4; d <= 11; d += 3){
                        const px = hx + Math.cos(a + 0.5) * d;
                        const py = hy + Math.sin(a + 0.5) * d;
                        rect(c, px, py, 2, 2, "#fff3d0");
                    }
                }
                rect(c, hx - 1, hy - 1, 3, 3, "#3b2412");
                break;
            }
        case "ship":
            {
                rect(c, bx, gy - 8, 44, 6, "#8b5a2b");
                rect(c, bx + 3, gy - 2, 38, 2, "#5a3418");
                rect(c, bx + 6, gy - 14, 32, 6, "#c58b4a");
                for(let i = 0; i < 5; i++)rect(c, bx + 9 + i * 6, gy - 12, 3, 3, "#ffe9a8");
                for(let i = 0; i < 11; i++)rect(c, bx + 6 + i * 3, gy - 16, 3, 2, i % 2 ? "#e0303a" : "#ffffff");
                rect(c, bx + 14, gy - 34, 2, 20, "#5a3418");
                rect(c, bx + 16, gy - 34, 6, 4, "#2f5fd6");
                rect(c, bx + 32, gy - 26, 4, 12, "#8b2e2e");
                const sm = t / 40 % 14;
                rect(c, bx + 33 + Math.sin(sm) * 2, gy - 28 - sm, 3, 3, "rgba(230,230,230,0.8)");
                break;
            }
        case "arlong":
            {
                rect(c, bx + 10, gy - 40, 22, 40, "#4b4f6b");
                tri(c, cx - 1, gy - 54, 12, 14, "#2d2f45");
                for(let y = gy - 34; y < gy - 8; y += 7){
                    rect(c, bx + 16, y, 3, 4, "#ff6b6b");
                    rect(c, bx + 24, y, 3, 4, "#ff6b6b");
                }
                rect(c, bx + 19, gy - 6, 5, 6, "#111111");
                rect(c, bx + 32, gy - 38, 10, 6, "#2a9d8f");
                rect(c, bx + 32, gy - 38, 2, 6, "#1b1b2f");
                break;
            }
        case "tower":
            {
                rect(c, bx + 15, gy - 40, 14, 40, "#c9b79c");
                tri(c, cx, gy - 54, 9, 14, "#7c4a2a");
                rect(c, bx + 18, gy - 32, 8, 8, "#ffffff");
                rect(c, bx + 21, gy - 31, 1, 4, "#111111");
                rect(c, bx + 21, gy - 28, 3, 1, "#111111");
                rect(c, bx, gy - 10, 44, 10, "#a07a50");
                rect(c, bx + 2, gy - 30, 2, 22, "#5a3418");
                rect(c, bx + 2, gy - 30, 10, 2, "#5a3418");
                rect(c, bx + 10, gy - 28, 1, 6, "#c9b79c");
                break;
            }
        case "mountain":
            {
                tri(c, cx, gy - 46, 24, 46, "#6b7a8f");
                tri(c, cx, gy - 46, 8, 9, "#ffffff");
                rect(c, bx + 28, gy - 36, 2, 28, "#9fe3ff");
                rect(c, bx + 12, gy - 6, 20, 6, "#4b5563");
                break;
            }
        case "peak":
            {
                tri(c, cx, gy - 44, 20, 44, "#8a6a4a");
                tri(c, cx, gy - 44, 5, 6, "#e8f5e9");
                rect(c, cx - 2, gy - 48, 4, 4, "#3fa34d");
                rect(c, cx - 1, gy - 50, 2, 2, "#3fa34d");
                rect(c, bx + 4, gy - 4, 36, 4, "#5a4330");
                break;
            }
        case "castle":
            {
                rect(c, bx + 8, gy - 22, 28, 22, "#e8f1ff");
                rect(c, bx + 2, gy - 30, 8, 30, "#dfe9f7");
                rect(c, bx + 34, gy - 30, 8, 30, "#dfe9f7");
                tri(c, bx + 6, gy - 38, 5, 8, "#3b5b92");
                tri(c, bx + 38, gy - 38, 5, 8, "#3b5b92");
                tri(c, cx, gy - 36, 10, 14, "#3b5b92");
                rect(c, cx - 3, gy - 8, 6, 8, "#3b2412");
                rect(c, bx - 2, gy - 2, 48, 2, "#ffffff");
                break;
            }
        case "pyramid":
            {
                tri(c, cx, gy - 40, 22, 40, "#e0b56b");
                for(let i = 0; i < 40; i++)rect(c, cx, gy - 40 + i, (i + 1) * 22 / 40, 1, "#c79a50");
                rect(c, cx - 2, gy - 6, 4, 6, "#5a3418");
                rect(c, bx + 2, gy - 14, 2, 14, "#7a4a22");
                tri(c, bx + 3, gy - 18, 4, 4, "#3fa34d");
                break;
            }
        case "sky":
            {
                rect(c, bx, gy - 10, 44, 6, "#ffffff");
                rect(c, bx + 4, gy - 14, 10, 5, "#ffffff");
                rect(c, bx + 26, gy - 14, 12, 5, "#ffffff");
                rect(c, bx + 8, gy - 26, 8, 16, "#ffe9a8");
                dome(c, bx + 12, gy - 30, 4, "#f7c948");
                rect(c, bx + 28, gy - 22, 8, 12, "#ffe9a8");
                dome(c, bx + 32, gy - 26, 4, "#f7c948");
                rect(c, bx + 20, gy - 34 + (Math.sin(t / 200) > 0 ? 0 : 1), 2, 2, "#fff3a0");
                break;
            }
        case "canal":
            {
                rect(c, bx - 4, gy - 4, 52, 4, "#2f7fb8");
                rect(c, bx, gy - 18, 12, 18, "#c9803c");
                tri(c, bx + 6, gy - 24, 7, 6, "#8b3a2a");
                rect(c, bx + 14, gy - 24, 12, 24, "#e0a060");
                tri(c, bx + 20, gy - 30, 7, 6, "#7a3a2a");
                rect(c, bx + 28, gy - 16, 12, 16, "#c9803c");
                tri(c, bx + 34, gy - 22, 7, 6, "#8b3a2a");
                rect(c, bx + 3, gy - 12, 3, 3, "#ffe9a8");
                rect(c, bx + 17, gy - 18, 3, 3, "#ffe9a8");
                rect(c, bx + 31, gy - 10, 3, 3, "#ffe9a8");
                rect(c, bx + 42, gy - 14, 2, 14, "#5a3418");
                for(let k = 0; k < 6; k++){
                    const a = t * 0.002 + k * Math.PI / 3;
                    rect(c, bx + 43 + Math.cos(a) * 4, gy - 8 + Math.sin(a) * 4, 1, 1, "#8b5a2b");
                }
                break;
            }
        case "justice":
            {
                rect(c, bx + 12, gy - 44, 20, 44, "#d8d2c4");
                tri(c, bx + 14, gy - 54, 4, 10, "#c9b79c");
                tri(c, bx + 30, gy - 54, 4, 10, "#c9b79c");
                tri(c, cx, gy - 64, 6, 20, "#c9b79c");
                for(let y = gy - 38; y < gy - 12; y += 8)rect(c, cx - 1, y, 3, 4, "#333333");
                rect(c, bx, gy - 8, 44, 8, "#9a9080");
                rect(c, cx - 1, gy - 72, 1, 8, "#3b2412");
                rect(c, cx, gy - 72, 6, 3, "#2b5fd6");
                break;
            }
        case "gothic":
            {
                rect(c, bx + 4, gy - 26, 36, 26, "#2b2440");
                tri(c, cx, gy - 40, 20, 14, "#1a1530");
                rect(c, bx + 8, gy - 44, 3, 18, "#1a1530");
                tri(c, bx + 9, gy - 48, 3, 4, "#1a1530");
                rect(c, bx + 33, gy - 44, 3, 18, "#1a1530");
                tri(c, bx + 34, gy - 48, 3, 4, "#1a1530");
                rect(c, bx + 10, gy - 20, 4, 7, "#ffd34d");
                rect(c, bx + 20, gy - 20, 4, 7, "#ffd34d");
                rect(c, bx + 30, gy - 20, 4, 7, "#ffd34d");
                rect(c, bx + 36, gy - 58, 5, 5, "#fff3b0");
                for(let k = 0; k < 3; k++){
                    const bxk = bx + 44 - (t / 40 + k * 13) % 50;
                    rect(c, bxk, gy - 56 - k * 4 + (Math.sin(t / 150 + k) > 0 ? 0 : 1), 3, 1, "#0a0a14");
                }
                break;
            }
        case "stands":
            {
                for(let i = 0; i < 4; i++){
                    const x = bx + 2 + i * 3;
                    const w = 40 - i * 6;
                    const y = gy - 4 - i * 3;
                    rect(c, x, y, w, 3, "#b9a88a");
                    for(let k = 2; k < w; k += 4)rect(c, x + k, y, 1, 3, "#8f7d5e");
                }
                rect(c, bx + 8, gy - 26, 1, 22, "#5a3418");
                rect(c, bx + 9, gy - 26, 6, 4, "#c0392b");
                rect(c, bx + 35, gy - 26, 1, 22, "#5a3418");
                rect(c, bx + 36, gy - 26, 6, 4, "#2b5fd6");
                rect(c, bx + 14, gy - 20, 16, 4, "#d9c9a0");
                break;
            }
        case "dome":
            {
                dome(c, cx, gy - 18, 18, "#7fe3e0");
                rect(c, bx, gy - 2, 44, 2, "#1f6f7a");
                for(let k = 0; k < 5; k++){
                    const y = gy - 6 - (t / 25 + k * 9) % 22;
                    rect(c, bx + 8 + k * 8, y, 2, 2, "rgba(255,255,255,0.8)");
                }
                break;
            }
        case "arena":
            {
                rect(c, bx, gy - 18, 44, 18, "#d9b38c");
                rect(c, bx - 2, gy - 20, 48, 3, "#f0d9b5");
                for(let i = 0; i < 5; i++)rect(c, bx + 4 + i * 8, gy - 12, 4, 8, "#5a3418");
                rect(c, bx + 10, gy - 32, 1, 14, "#5a3418");
                rect(c, bx + 33, gy - 32, 1, 14, "#5a3418");
                rect(c, bx + 11, gy - 32, 22, 4, "#ff7aa2");
                rect(c, cx, gy - 27, 2, 2, "#e11d48");
                break;
            }
        case "cake":
            {
                rect(c, bx + 6, gy - 8, 32, 8, "#ffd1e0");
                rect(c, bx + 10, gy - 16, 24, 8, "#ffffff");
                rect(c, bx + 14, gy - 22, 16, 6, "#ffd1e0");
                rect(c, bx + 8, gy - 8, 3, 2, "#ff7ea6");
                rect(c, bx + 18, gy - 16, 3, 2, "#ff7ea6");
                rect(c, bx + 28, gy - 22, 3, 2, "#ff7ea6");
                rect(c, cx - 1, gy - 30, 2, 8, "#ff4f6e");
                rect(c, cx - 1, gy - 32 + Math.floor(t / 250) % 2, 2, 2, "#ffd33d");
                break;
            }
        case "pagoda":
            {
                rect(c, bx + 4, gy - 4, 36, 4, "#8b5a2b");
                for(let i = 0; i < 3; i++){
                    const w = 34 - i * 8;
                    const y = gy - 10 - i * 10;
                    rect(c, cx - w / 2 + 4, y, w - 8, 8, "#c94a2a");
                    rect(c, cx - w / 2, y - 2, w, 2, "#2b1a10");
                }
                rect(c, cx - 1, gy - 42, 2, 4, "#ffd33d");
                rect(c, cx - 2, gy - 4 - 4, 4, 4, "#2b1a10");
                break;
            }
        case "lab":
            {
                dome(c, cx, gy - 22, 16, "rgba(120,220,255,0.55)");
                rect(c, bx + 4, gy - 6, 36, 6, "#c9d4e0");
                for(let i = 0; i <= 10; i++){
                    const half = Math.round(4 * Math.sin(Math.PI * i / 10));
                    rect(c, cx - half, gy - 18 + i, half * 2, 1, "#fff7dc");
                }
                rect(c, cx, gy - 44, 1, 4, "#c9d4e0");
                rect(c, cx - 1, gy - 45, 3, 2, t % 800 < 400 ? "#ff4f6e" : "#4f6eff");
                break;
            }
        case "gate":
            {
                rect(c, bx, gy - 40, 6, 40, "#f0c040");
                rect(c, bx + 38, gy - 40, 6, 40, "#f0c040");
                rect(c, bx - 2, gy - 42, 48, 5, "#f0c040");
                rect(c, bx + 12, gy - 36, 20, 12, "#d22e3c");
                rect(c, bx + 14, gy - 33, 16, 2, "#ffffff");
                for(let k = 0; k < 9; k++)rect(c, bx - 2 + k * 6, gy - 2, 6, 2, k % 2 ? "#ffffff" : "#111111");
                break;
            }
    }
}
function drawPassed(c, bx, gy, t) {
    const bob = Math.round(Math.sin(t / 300));
    const x = bx + 20;
    const y = gy - 60 + bob;
    rect(c, x + 1, y - 1, 2, 4, "#ffd33d");
    rect(c, x - 1, y, 6, 2, "#ffd33d");
    rect(c, x, y + 2, 4, 1, "#fff3a0");
}
function drawClouds(c, W, cam, groundY) {
    const span = W + 200;
    for(let i = 0; i < 6; i++){
        const raw = i * 211 - cam * 0.2;
        const x = ((raw + 100) % span + span) % span - 100;
        const y = 8 + i * 37 % Math.max(10, Math.round(groundY * 0.4));
        const col = "rgba(255,255,255,0.85)";
        rect(c, x, y, 22, 4, col);
        rect(c, x + 4, y - 3, 10, 3, col);
        rect(c, x + 14, y - 2, 8, 2, col);
    }
}
function drawRidge(c, W, groundY, offset, color, amp, freq, seed) {
    for(let x = 0; x < W; x++){
        const wx = x + offset;
        const h = amp * (0.55 + 0.45 * Math.sin(wx * freq + seed)) + amp * 0.25 * Math.sin(wx * freq * 3.1 + seed * 1.7);
        const top = Math.round(groundY - amp - h);
        rect(c, x, top, 1, groundY - top, color);
    }
}
function shade(hex, f) {
    const n = parseInt(hex.slice(1), 16);
    const r = Math.round((n >> 16 & 255) * f);
    const g = Math.round((n >> 8 & 255) * f);
    const b = Math.round((n & 255) * f);
    return `rgb(${r},${g},${b})`;
}
function drawSky(c, W, groundY, scene) {
    const n = scene.sky.length;
    const bandH = Math.ceil(groundY / n);
    for(let i = 0; i < n; i++)rect(c, 0, i * bandH, W, bandH + 1, scene.sky[i]);
}
function drawGround(c, W, H, groundY, cam, scene) {
    rect(c, 0, groundY, W, H - groundY, scene.ground);
    rect(c, 0, groundY, W, 2, scene.grass);
    const dark = shade(scene.ground, 0.82);
    const off = Math.floor(cam) % 12;
    for(let x = -off; x < W; x += 12){
        rect(c, x + 2, groundY + 5, 3, 1, dark);
        rect(c, x + 7, groundY + 9, 2, 1, dark);
    }
    rect(c, 0, groundY + 14, W, 2, shade(scene.ground, 0.7));
}
function drawDust(c, p) {
    rect(c, p.x, p.y, 2, 2, `rgba(240,230,210,${Math.max(0, p.life / 24)})`);
}
}),
"[project]/src/components/pixel/runners.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runnerSprite",
    ()=>runnerSprite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/playable-characters.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pixel/art.ts [app-ssr] (ecmascript)");
;
;
// All art is assembled on an integer pixel grid, then cached into three frames.
// Each recruit has its own silhouette/accessories; the canvas and collection share the same sprite.
class Pixels {
    width;
    height;
    cells;
    palette;
    keys;
    constructor(width = 20, height = 24){
        this.width = width;
        this.height = height;
        this.palette = {};
        this.keys = new Map();
        this.cells = Array.from({
            length: height
        }, ()=>Array(width).fill("."));
    }
    r(x, y, w, h, color) {
        let key = this.keys.get(color);
        if (!key) {
            key = String.fromCharCode(65 + this.keys.size);
            this.keys.set(color, key);
            this.palette[key] = color;
        }
        for(let j = y; j < y + h; j++)for(let i = x; i < x + w; i++)if (j >= 0 && j < this.height && i >= 0 && i < this.width) this.cells[j][i] = key;
        return this;
    }
    finish(hatX = 2, hatY = 1) {
        return {
            width: this.width,
            height: this.height,
            rows: this.cells.map((row)=>row.join("")),
            palette: this.palette,
            goldHat: {
                x: hatX,
                y: hatY
            }
        };
    }
}
const ink = "#182035", skin = "#f4c69c", skinShade = "#cb8e69", cream = "#fff4dc", white = "#f7f8fb", silver = "#bfcddd", gold = "#edc05e";
function feet(p, pose, x, y, trousers, shoes, gap = 5, height = 5) {
    const move = pose === -1 ? 0 : pose === 0 ? -1 : 1;
    p.r(x + move, y, 4, height, ink).r(x + move + 1, y, 2, height - 1, trousers).r(x + move - 1, y + height - 1, 5, 2, shoes);
    p.r(x + gap - move, y, 4, height, ink).r(x + gap - move + 1, y, 2, height - 1, trousers).r(x + gap - move, y + height - 1, 5, 2, shoes);
}
function human(pose, hair, shirt, trousers, shoes = ink, face = skin) {
    const p = new Pixels();
    const swing = pose === -1 ? 0 : pose === 0 ? -1 : 1;
    feet(p, pose, 6, 18, trousers, shoes);
    p.r(4, 11 + swing, 3, 6, ink).r(5, 12 + swing, 2, 3, shirt).r(4, 16 + swing, 3, 2, face);
    p.r(13, 11 - swing, 3, 6, ink).r(13, 12 - swing, 2, 3, shirt).r(13, 16 - swing, 3, 2, face);
    p.r(6, 10, 8, 9, ink).r(7, 11, 6, 7, shirt);
    p.r(8, 9, 4, 2, face);
    p.r(5, 3, 10, 7, ink).r(6, 4, 8, 6, face).r(7, 10, 6, 1, skinShade);
    p.r(4, 6, 2, 3, face).r(14, 6, 2, 3, face);
    p.r(7, 7, 1, 1, ink).r(12, 7, 1, 1, ink).r(9, 9, 2, 1, skinShade);
    p.r(5, 2, 10, 3, hair).r(4, 4, 2, 2, hair).r(14, 4, 2, 2, hair);
    return p;
}
function katana(p, x, y, grip, long = 12) {
    p.r(x, y, 2, long, ink).r(x, y + 1, 1, long - 5, silver).r(x - 2, y + long - 4, 5, 1, gold).r(x, y + long - 3, 2, 4, grip);
}
function drawRecruit(id, pose) {
    let p;
    switch(id){
        case "chopper":
            {
                p = new Pixels(20, 20);
                // Branched antlers, blue cap and white cross.
                p.r(2, 0, 2, 8, "#8f603a").r(0, 2, 4, 2, "#8f603a").r(1, 1, 1, 3, "#ba8b53");
                p.r(16, 0, 2, 8, "#8f603a").r(16, 2, 4, 2, "#8f603a").r(18, 0, 1, 4, "#ba8b53");
                const step = pose === -1 ? 0 : pose === 0 ? -1 : 1;
                p.r(6 + step, 17, 3, 3, ink).r(11 - step, 17, 3, 3, ink).r(6, 14, 8, 4, "#e496bc");
                p.r(4, 13, 3, 4, "#b67a4d").r(13, 13, 3, 4, "#b67a4d");
                p.r(4, 6, 12, 8, ink).r(5, 6, 10, 7, "#bd8658").r(3, 7, 2, 3, "#bd8658").r(15, 7, 2, 3, "#bd8658");
                p.r(7, 9, 1, 2, ink).r(12, 9, 1, 2, ink).r(7, 11, 6, 2, "#efd4ae").r(9, 10, 2, 1, "#2c8dce");
                p.r(5, 1, 10, 5, ink).r(6, 1, 8, 4, "#4eafe0").r(3, 5, 14, 2, "#df709f");
                p.r(9, 2, 2, 3, white).r(8, 3, 4, 1, white);
                return p.finish(2, 2);
            }
        case "zoro":
            {
                p = human(pose, "#5fac4a", "#477e4b", "#304c38");
                p.r(5, 1, 3, 2, "#75c15b").r(9, 1, 3, 2, "#5fac4a").r(13, 2, 2, 2, "#428b39");
                p.r(9, 11, 2, 5, skin).r(7, 16, 6, 2, "#bf3349").r(12, 6, 1, 3, skinShade);
                p.r(4, 8, 1, 3, gold);
                // Three sheathed/held swords, two by the waist and one upright.
                katana(p, 17, 7, "#eceae4", 16);
                p.r(1, 14, 2, 8, ink).r(2, 14, 1, 7, "#af7ac6").r(0, 16, 5, 1, gold);
                p.r(3, 15, 2, 8, "#e5e8ef").r(2, 17, 5, 1, gold);
                return p.finish();
            }
        case "sanji":
            {
                p = human(pose, "#f2cb58", "#28344b", "#1e2b40", "#0c1221");
                p.r(11, 3, 4, 5, "#e2b747").r(12, 3, 2, 4, "#ffdf78");
                p.r(6, 6, 3, 1, skinShade).r(6, 5, 1, 1, skinShade);
                p.r(8, 11, 4, 2, "#a8c9df").r(9, 12, 2, 3, "#e8bc57");
                p.r(8, 15, 1, 1, gold).r(11, 15, 1, 1, gold).r(8, 17, 1, 1, gold).r(11, 17, 1, 1, gold);
                p.r(13, 9, 4, 1, white).r(17, 9, 1, 1, "#ee965a");
                return p.finish();
            }
        case "nami":
            {
                p = human(pose, "#f29a3e", "#43b9ad", "#2e73ba", "#a5563f");
                p.r(4, 4, 2, 10, "#e87e32").r(14, 4, 2, 10, "#de7534").r(5, 2, 3, 3, "#ffb550");
                p.r(7, 12, 6, 1, cream).r(7, 14, 6, 3, skin).r(7, 17, 6, 2, "#2771ad");
                p.r(18, 6, 1, 18, "#2ea5e5").r(17, 6, 3, 2, "#a5ecfa");
                p.r(4, 12, 1, 2, "#2771ad");
                return p.finish();
            }
        case "usopp":
            {
                p = human(pose, "#38302c", "#bd9355", "#9d6e3b", "#765334", "#d5a174");
                p.r(4, 2, 12, 3, "#c5b077").r(5, 5, 2, 1, "#65482e");
                p.r(6, 3, 3, 2, gold).r(11, 3, 3, 2, gold).r(7, 3, 1, 1, "#4b7087").r(12, 3, 1, 1, "#4b7087");
                p.r(13, 8, 5, 2, "#d5a174").r(9, 10, 2, 1, "#38302c");
                p.r(7, 11, 6, 5, "#d5a174").r(7, 11, 1, 7, "#c8ac66").r(12, 11, 1, 7, "#c8ac66");
                p.r(0, 12, 2, 4, "#586a39").r(4, 12, 2, 4, "#586a39").r(2, 16, 2, 8, "#586a39").r(1, 11, 4, 1, cream);
                return p.finish();
            }
        case "robin":
            {
                p = human(pose, "#20263b", "#3769b1", "#ba71aa", "#46344d");
                p.r(3, 5, 2, 11, "#20263b").r(15, 5, 2, 11, "#20263b").r(4, 3, 2, 3, "#20263b");
                p.r(6, 3, 3, 2, "#779bbc").r(11, 3, 3, 2, "#779bbc").r(7, 3, 1, 1, white).r(12, 3, 1, 1, white);
                p.r(9, 11, 2, 4, skin).r(9, 14, 2, 1, gold).r(6, 17, 8, 4, "#c87db5");
                p.r(16, 13, 4, 7, "#6d5060").r(17, 14, 3, 5, cream).r(17, 15, 2, 1, "#ab9068").r(17, 17, 2, 1, "#ab9068");
                return p.finish();
            }
        case "law":
            {
                p = human(pose, "#202431", "#e3bf44", "#3c506c");
                p.r(5, 0, 10, 6, ink).r(6, 0, 8, 5, "#f2eeda").r(4, 5, 12, 1, "#e1dcc4");
                p.r(7, 1, 2, 1, "#41404b").r(11, 0, 1, 2, "#41404b").r(10, 3, 2, 1, "#41404b").r(13, 3, 1, 1, "#41404b");
                p.r(5, 11, 2, 5, "#252a39").r(13, 11, 2, 5, "#252a39").r(8, 13, 4, 3, ink).r(9, 13, 2, 1, gold);
                p.r(9, 10, 2, 1, "#504138").r(4, 16, 1, 1, ink);
                katana(p, 18, 2, "#b5464b", 21);
                p.r(17, 6, 3, 1, cream).r(17, 10, 3, 1, cream);
                return p.finish(2, 1);
            }
        case "ace":
            {
                p = human(pose, "#272b36", skin, "#36404b", "#604739");
                p.r(5, 0, 10, 5, ink).r(6, 0, 8, 4, "#ee983d").r(5, 3, 10, 1, "#9c5538").r(2, 4, 16, 2, "#dc8235");
                p.r(7, 2, 2, 1, "#58a0b8").r(11, 2, 2, 1, cream);
                [
                    7,
                    9,
                    11,
                    13
                ].forEach((x)=>p.r(x, 11 + (x === 9 || x === 11 ? 1 : 0), 1, 1, "#cf3b43"));
                p.r(9, 15, 2, 1, skinShade).r(7, 17, 6, 2, "#dd8b39").r(9, 17, 2, 1, gold);
                // A contained Fire Fist at his hand, not a world/weather effect.
                p.r(0, 13, 4, 5, "#d96031").r(1, 10 + (pose === 1 ? 1 : 0), 2, 5, "#f2943b").r(1, 14, 2, 3, "#ffe080");
                p.r(17, 17, 2, 6, "#5d8995").r(16, 17, 3, 1, silver);
                return p.finish(2, 1);
            }
        case "rayleigh":
            {
                p = human(pose, "#e4e7da", "#d9aa94", "#676477", "#564c41");
                p.r(3, 5, 2, 7, "#e4e7da").r(15, 5, 2, 7, "#d2d8d0").r(6, 1, 2, 2, white).r(11, 1, 3, 2, white);
                p.r(6, 6, 3, 3, silver).r(11, 6, 3, 3, silver).r(9, 7, 2, 1, silver).r(7, 7, 1, 1, ink).r(12, 7, 1, 1, ink);
                p.r(7, 10, 6, 2, "#e4e7da").r(8, 12, 4, 1, "#e4e7da");
                p.r(2, 11, 4, 10, "#649b86").r(3, 12, 1, 8, "#a5d2b8").r(14, 11, 4, 10, "#649b86");
                p.r(9, 15, 2, 1, "#614849");
                katana(p, 18, 10, "#847246", 13);
                return p.finish();
            }
        case "shanks":
            {
                p = human(pose, "#a93649", "#efe7db", "#776779", "#63483b");
                p.r(4, 1, 3, 4, "#d25258").r(8, 1, 4, 2, "#bb3c50").r(13, 2, 3, 3, "#902f44");
                p.r(6, 5, 1, 5, "#9e5a4d").r(8, 5, 1, 3, "#9e5a4d").r(7, 8, 1, 2, "#9e5a4d");
                p.r(2, 11, 5, 11, "#242a3d").r(3, 12, 1, 9, "#3b4054").r(14, 11, 4, 11, "#242a3d");
                p.r(9, 11, 2, 5, skin).r(7, 17, 6, 2, "#a8374e");
                katana(p, 18, 12, "#526570", 11);
                return p.finish();
            }
        case "roger":
            {
                p = human(pose, "#272c36", "#e7dac3", "#434458", "#262c3c");
                p.r(5, 0, 10, 4, "#b2374b").r(4, 2, 12, 2, "#cc4d56").r(2, 4, 16, 2, gold).r(4, 4, 12, 1, "#a72c42");
                p.r(8, 1, 4, 2, cream).r(9, 1, 1, 1, ink).r(11, 1, 1, 1, ink);
                p.r(5, 9, 3, 2, ink).r(8, 10, 4, 1, ink).r(12, 9, 3, 2, ink);
                p.r(3, 11, 4, 11, "#b9324c").r(13, 11, 4, 11, "#b9324c").r(6, 12, 1, 9, gold).r(13, 12, 1, 9, gold);
                p.r(2, 11, 5, 2, gold).r(13, 11, 5, 2, gold).r(7, 17, 6, 2, "#9b648e");
                katana(p, 0, 8, "#a13c4d", 14);
                return p.finish(2, 1);
            }
        case "gear-5":
            {
                p = human(pose, white, white, white, "#d1a06f");
                // Cloud hair, moon-white scarf and a wide grin.
                p.r(3, 2, 3, 4, silver).r(4, 1, 4, 5, white).r(7, 0, 5, 5, white).r(12, 1, 4, 5, white).r(15, 3, 2, 3, white);
                p.r(7, 1, 2, 1, "#dce2eb").r(12, 2, 2, 1, "#dce2eb").r(9, 9, 3, 1, white).r(7, 7, 1, 1, "#b2527d").r(12, 7, 1, 1, "#b2527d");
                p.r(0, 6, 3, 6, white).r(1, 11, 3, 3, white).r(2, 12, 3, 2, "#dfe4ec");
                p.r(17, 6, 3, 8, white).r(15, 13, 4, 2, white).r(16, 5, 3, 2, "#e0e5ed");
                p.r(9, 11, 2, 5, skin).r(7, 17, 6, 2, "#a779c2").r(13, 18, 3, 2, "#a779c2").r(15, 19, 2, 2, "#c79bdd");
                return p.finish(2, 1);
            }
        case "jinbe":
            {
                p = new Pixels(24, 27);
                feet(p, pose, 7, 22, "#37434f", "#645147", 6, 4);
                p.r(4, 13, 16, 11, ink).r(5, 14, 14, 9, "#dd9743");
                p.r(2, 14, 4, 6, "#d89a4b").r(18, 14, 4, 6, "#d89a4b").r(2, 19, 3, 3, "#69b1d2").r(19, 19, 3, 3, "#69b1d2");
                p.r(7, 3, 10, 4, "#24415b").r(10, 0, 4, 4, "#24415b").r(5, 7, 14, 7, ink).r(6, 7, 12, 7, "#70b9d4");
                p.r(4, 8, 2, 3, "#70b9d4").r(18, 8, 2, 3, "#70b9d4").r(8, 9, 2, 1, ink).r(14, 9, 2, 1, ink);
                p.r(7, 12, 2, 4, cream).r(15, 12, 2, 4, cream).r(9, 13, 6, 1, "#436477");
                p.r(11, 15, 2, 3, "#70b9d4").r(6, 20, 12, 2, "#a14d45");
                [
                    [
                        7,
                        16
                    ],
                    [
                        16,
                        17
                    ],
                    [
                        9,
                        22
                    ]
                ].forEach(([x, y])=>p.r(x, y, 2, 2, cream).r(x - 1, y + 1, 4, 1, cream));
                return p.finish(4, 3);
            }
        case "whitebeard":
            {
                p = new Pixels(26, 30);
                feet(p, pose, 8, 24, "#74717b", "#3b3543", 7, 5);
                p.r(3, 12, 19, 13, ink).r(8, 13, 10, 11, skin).r(3, 12, 5, 13, white).r(18, 12, 4, 13, white);
                p.r(3, 13, 1, 11, silver).r(21, 13, 1, 11, silver).r(2, 12, 6, 3, gold).r(18, 12, 5, 3, gold);
                p.r(8, 4, 10, 8, ink).r(9, 5, 8, 7, skin).r(10, 7, 1, 1, ink).r(15, 7, 1, 1, ink);
                p.r(7, 2, 12, 4, white).r(8, 2, 1, 2, silver).r(7, 5, 12, 1, silver);
                // Huge upward-curved crescent moustache.
                p.r(6, 9, 2, 2, white).r(18, 9, 2, 2, white).r(7, 11, 12, 2, white).r(9, 12, 8, 2, white);
                p.r(11, 15, 1, 5, skinShade).r(9, 18, 7, 1, skinShade).r(8, 23, 10, 2, "#85454e");
                // Murakumogiri bisento.
                p.r(24, 7, 1, 23, "#b48546").r(22, 1, 3, 7, silver).r(21, 2, 2, 4, white).r(23, 0, 2, 2, white).r(23, 8, 3, 1, gold);
                return p.finish(5, 2);
            }
        case "kaido":
            {
                p = new Pixels(26, 30);
                feet(p, pose, 8, 24, "#384b68", "#203043", 7, 5);
                p.r(4, 11, 19, 14, "#293141").r(7, 12, 14, 12, "#b78068");
                p.r(5, 5, 17, 8, "#263142").r(9, 6, 10, 8, "#bf886e").r(10, 8, 2, 1, ink).r(16, 8, 2, 1, ink);
                p.r(4, 3, 5, 3, cream).r(3, 1, 3, 3, cream).r(3, 0, 1, 2, "#b7a28c");
                p.r(20, 3, 4, 3, cream).r(23, 1, 3, 3, cream).r(25, 0, 1, 2, "#b7a28c");
                p.r(8, 12, 4, 2, ink).r(16, 12, 4, 2, ink).r(12, 13, 4, 4, ink);
                p.r(4, 13, 3, 8, "#343d4f").r(21, 13, 3, 7, "#6697b2");
                p.r(11, 18, 1, 3, skinShade).r(8, 23, 13, 2, "#a76ac4").r(9, 21, 12, 2, "#8d5eb3");
                p.r(0, 12, 4, 14, ink).r(1, 13, 2, 10, "#495166").r(1, 26, 2, 4, "#8c6549");
                [
                    13,
                    17,
                    21
                ].forEach((y)=>p.r(0, y, 1, 2, silver).r(4, y + 1, 1, 2, silver));
                return p.finish(6, 3);
            }
    }
}
const cached = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$playable$2d$characters$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLAYABLE_CHARACTERS"].filter((c)=>c.id !== "luffy").map((c)=>[
        c.id,
        {
            idle: drawRecruit(c.id, -1),
            left: drawRecruit(c.id, 0),
            right: drawRecruit(c.id, 1)
        }
    ]));
function runnerSprite(characterId, running = false, time = 0) {
    if (characterId === "luffy") return {
        width: 16,
        height: 16,
        rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["luffyFrame"])(running, time),
        palette: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pixel$2f$art$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LUFFY_PAL"],
        goldHat: {
            x: 0,
            y: 0
        }
    };
    const sprites = cached[characterId];
    return running ? Math.floor(time / 110) % 2 === 0 ? sprites.left : sprites.right : sprites.idle;
}
}),
"[project]/src/components/pixel/sagas.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Procedural pixel-art scenes for each of the 12 sagas, modelled on iconic One Piece landmarks.
// Each scene has: sky (full screen), far (parallax backdrop) and near (ground + props
// drawn in world space, clipped to the saga's segment so you physically cross borders).
__turbopack_context__.s([
    "SAGA_DETAILS",
    ()=>SAGA_DETAILS,
    "SAGA_SCENES",
    ()=>SAGA_SCENES,
    "drawSignpost",
    ()=>drawSignpost
]);
// =====================================================================
// helpers
// =====================================================================
const R = (c, x, y, w, h, col)=>{
    c.fillStyle = col;
    c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
};
const rnd = (n)=>{
    const s = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return s - Math.floor(s);
};
function grad(c, W, y0, y1, stops) {
    const g = c.createLinearGradient(0, y0, 0, y1);
    stops.forEach((col, i)=>g.addColorStop(i / Math.max(1, stops.length - 1), col));
    c.fillStyle = g;
    c.fillRect(0, y0, W, y1 - y0);
}
function poly(c, pts, col) {
    c.fillStyle = col;
    c.beginPath();
    c.moveTo(Math.round(pts[0]), Math.round(pts[1]));
    for(let i = 2; i < pts.length; i += 2)c.lineTo(Math.round(pts[i]), Math.round(pts[i + 1]));
    c.closePath();
    c.fill();
}
const tri = (c, x1, y1, x2, y2, x3, y3, col)=>poly(c, [
        x1,
        y1,
        x2,
        y2,
        x3,
        y3
    ], col);
function circle(c, x, y, r, col) {
    c.fillStyle = col;
    c.beginPath();
    c.arc(Math.round(x), Math.round(y), Math.max(0.5, r), 0, Math.PI * 2);
    c.fill();
}
function half(c, x, y, r, col) {
    c.fillStyle = col;
    c.beginPath();
    c.arc(Math.round(x), Math.round(y), r, Math.PI, 0);
    c.closePath();
    c.fill();
}
function line(c, x1, y1, x2, y2, col, w = 1) {
    c.strokeStyle = col;
    c.lineWidth = w;
    c.beginPath();
    c.moveTo(Math.round(x1) + 0.5, Math.round(y1) + 0.5);
    c.lineTo(Math.round(x2) + 0.5, Math.round(y2) + 0.5);
    c.stroke();
}
function tiles(off, sp, W, f) {
    const start = Math.floor(off / sp) - 2;
    const end = start + Math.ceil(W / sp) + 4;
    for(let i = start; i <= end; i++)f(Math.round(i * sp - off), i);
}
function props(e, x0, x1, sp, f) {
    const a = Math.max(x0, e.cam - 160);
    const b = Math.min(x1, e.cam + e.W + 160);
    for(let i = Math.ceil(a / sp); i * sp <= b; i++)f(Math.round(i * sp - e.cam), i);
}
function ridge(e, par, base, amp, freq, seed, col) {
    const { c, W } = e;
    const off = e.cam * par;
    c.fillStyle = col;
    for(let x = 0; x < W; x += 2){
        const wx = x + off;
        const h = Math.sin(wx * freq + seed) * amp * 0.6 + Math.sin(wx * freq * 2.3 + seed * 2) * amp * 0.4 + amp;
        c.fillRect(x, Math.round(base - h), 2, Math.ceil(h) + 1);
    }
}
function sun(c, x, y, r, col, glow) {
    circle(c, x, y, r + 6, glow);
    circle(c, x, y, r + 3, glow);
    circle(c, x, y, r, col);
}
// One Piece-style puffy cumulus with a shaded underside.
function puff(c, x, y, s, col = "#ffffff", shade = "#d7e9fb") {
    circle(c, x + 6 * s, y + 2 * s, 5 * s, shade);
    circle(c, x + 14 * s, y + 2 * s, 6 * s, shade);
    circle(c, x + 4 * s, y, 4 * s, col);
    circle(c, x + 10 * s, y - 3 * s, 6 * s, col);
    circle(c, x + 17 * s, y, 4.5 * s, col);
    R(c, x + 2 * s, y, 18 * s, 3 * s, col);
}
function driftClouds(e, col = "#ffffff", shade = "#d7e9fb", yFrac = 0.16) {
    tiles(e.cam * 0.06, 110, e.W, (sx, i)=>{
        puff(e.c, sx, e.gy * yFrac + rnd(i) * e.gy * 0.22, 0.7 + rnd(i + 9) * 0.6, col, shade);
    });
}
function gulls(e, col = "#ffffff") {
    const { c, t } = e;
    tiles(e.cam * 0.15 + t * 0.02, 140, e.W, (sx, i)=>{
        const y = e.gy * 0.3 + rnd(i) * 30 + Math.sin(t / 300 + i) * 3;
        const f = Math.sin(t / 120 + i) > 0 ? 1 : 0;
        R(c, sx, y, 1, 1, col);
        R(c, sx - 2, y - f, 2, 1, col);
        R(c, sx + 1, y - f, 2, 1, col);
        R(c, sx - 3, y - 1 + f, 1, 1, col);
        R(c, sx + 3, y - 1 + f, 1, 1, col);
    });
}
function sea(e, y, h, base, light, crest = "#ffffff") {
    const { c, W, t } = e;
    R(c, 0, y, W, h, base);
    R(c, 0, y, W, 1, light);
    tiles(e.cam * 0.25 + t * 0.012, 21, W, (sx, i)=>{
        const yy = y + 2 + i * 7 % Math.max(2, h - 3);
        R(c, sx, yy, 4 + i % 3 * 2, 1, (i + Math.floor(t / 400)) % 5 === 0 ? crest : light);
    });
}
// The classic "skull and crossbones" with a straw hat.
function jollyRoger(c, x, y, w, h, wave) {
    R(c, x, y + wave, w, h, "#111111");
    const cx = x + w / 2;
    const cy = y + h / 2 + wave;
    line(c, cx - 3, cy - 2, cx + 3, cy + 3, "#ffffff");
    line(c, cx + 3, cy - 2, cx - 3, cy + 3, "#ffffff");
    circle(c, cx, cy - 1, 2, "#ffffff");
    R(c, cx - 4, cy - 3, 8, 1, "#f2c94c"); // brim
    R(c, cx - 2, cy - 4, 4, 1, "#c0392b"); // red band
    R(c, cx - 2, cy - 5, 4, 1, "#f2c94c"); // crown
}
// A sailing ship with a lion/sheep figurehead and jolly roger.
function sailShip(c, x, wl, s, o) {
    const bob = Math.round(Math.sin(o.t / 500 + x) * 1);
    const y = wl + bob;
    poly(c, [
        x,
        y - 6 * s,
        x + 34 * s,
        y - 6 * s,
        x + 30 * s,
        y,
        x + 5 * s,
        y
    ], o.hull);
    R(c, x + 2 * s, y - 7 * s, 30 * s, 1.5 * s, o.trim);
    R(c, x + 6 * s, y - 4 * s, 22 * s, 1, o.trim);
    // mast + sail
    R(c, x + 16 * s, y - 30 * s, 1.5 * s, 24 * s, "#5c3d1e");
    R(c, x + 8 * s, y - 27 * s, 18 * s, 14 * s, o.sail);
    R(c, x + 8 * s, y - 27 * s, 18 * s, 1, "#5c3d1e");
    if (o.sailMark) {
        circle(c, x + 17 * s, y - 21 * s, 3 * s, o.sailMark);
        R(c, x + 13 * s, y - 18 * s, 8 * s, 1.2 * s, o.sailMark);
    }
    jollyRoger(c, x + 17.5 * s, y - 35 * s, 7 * s, 5 * s, 0);
    // figurehead
    if (o.head === "sheep") {
        circle(c, x + 35 * s, y - 9 * s, 3.5 * s, "#fdf6e3");
        circle(c, x + 33 * s, y - 11 * s, 1.6 * s, "#e9dcc3");
        circle(c, x + 37 * s, y - 11 * s, 1.6 * s, "#e9dcc3");
        R(c, x + 34 * s, y - 9 * s, 1, 1, "#000");
    } else if (o.head === "lion") {
        circle(c, x + 35 * s, y - 9 * s, 4.5 * s, "#f08c00");
        circle(c, x + 35 * s, y - 9 * s, 2.8 * s, "#ffd43b");
        R(c, x + 34 * s, y - 10 * s, 1, 1, "#000");
    } else if (o.head === "whale") {
        circle(c, x + 34 * s, y - 8 * s, 5 * s, "#f8f9fa");
        R(c, x + 34 * s, y - 9 * s, 1, 1, "#000");
    }
}
function groundBand(e, x0, x1, top, body, edge = 2) {
    const a = Math.round(x0 - e.cam);
    const w = Math.round(x1 - x0);
    R(e.c, a, e.gy, w, e.H - e.gy, body);
    R(e.c, a, e.gy, w, edge, top);
}
function palm(c, x, gy, h, t, leaf = "#2f9e44", leaf2 = "#51cf66") {
    for(let k = 0; k < h; k++)R(c, x + Math.round(Math.sin(k / 6) * 1.5), gy - k, 2, 1, k % 3 ? "#8b5a2b" : "#6f4520");
    const tx = x + Math.round(Math.sin(h / 6) * 1.5);
    const ty = gy - h;
    const sw = 0; // no wind
    poly(c, [
        tx,
        ty,
        tx - 12 + sw,
        ty + 3,
        tx - 9 + sw,
        ty + 5
    ], leaf);
    poly(c, [
        tx,
        ty,
        tx + 13 + sw,
        ty + 3,
        tx + 10 + sw,
        ty + 5
    ], leaf);
    poly(c, [
        tx,
        ty,
        tx - 8 + sw,
        ty - 4,
        tx - 3 + sw,
        ty - 1
    ], leaf2);
    poly(c, [
        tx,
        ty,
        tx + 9 + sw,
        ty - 4,
        tx + 4 + sw,
        ty - 1
    ], leaf2);
    poly(c, [
        tx,
        ty,
        tx - 2,
        ty + 8,
        tx + 2,
        ty + 8
    ], leaf);
    circle(c, tx, ty + 2, 1.5, "#7a4a1f");
}
// =====================================================================
// 1. EAST BLUE — Foosha Village, Going Merry, Baratie
// =====================================================================
const eastBlue = {
    sky: (e)=>{
        grad(e.c, e.W, 0, e.gy, [
            "#2f8fff",
            "#7cc4ff",
            "#d8f1ff"
        ]);
        sun(e.c, e.W * 0.84, e.gy * 0.2, 7, "#fffbe0", "rgba(255,246,176,0.25)");
        driftClouds(e);
        gulls(e);
    },
    far: (e)=>{
        const { c, gy, t } = e;
        sea(e, gy - 40, 22, "#2b7bd3", "#6fb6ff");
        // Baratie: the fish-shaped floating restaurant
        tiles(e.cam * 0.18, 520, e.W, (sx)=>{
            const y = gy - 26 + Math.round(Math.sin(t / 700) * 1);
            poly(c, [
                sx,
                y,
                sx + 46,
                y,
                sx + 54,
                y - 6,
                sx + 46,
                y - 12,
                sx,
                y - 10,
                sx - 8,
                y - 16,
                sx - 6,
                y - 4
            ], "#f1f3f5");
            R(c, sx + 4, y - 18, 34, 8, "#e9ecef");
            R(c, sx + 2, y - 20, 38, 2, "#2b8a3e");
            for(let k = 0; k < 6; k++)R(c, sx + 6 + k * 5, y - 15, 2, 2, "#1864ab");
            circle(c, sx + 48, y - 7, 1.5, "#212529");
            R(c, sx + 20, y - 28, 1, 8, "#495057");
            R(c, sx + 21, y - 28, 6, 4, "#2b8a3e");
        });
        // Going Merry at sea
        tiles(e.cam * 0.22, 340, e.W, (sx)=>{
            sailShip(c, sx + 140, gy - 24, 0.8, {
                hull: "#a0522d",
                trim: "#f2c94c",
                sail: "#ffffff",
                head: "sheep",
                t
            });
        });
        // Mt. Colubo + hills
        ridge(e, 0.3, gy - 8, 22, 0.012, 1, "#4b8f3f");
        ridge(e, 0.5, gy, 9, 0.03, 3, "#5cab4a");
    },
    near: (e, x0, x1)=>{
        groundBand(e, x0, x1, "#82d36c", "#8b5a2b", 3);
        const { c, gy, t } = e;
        props(e, x0, x1, 7, (sx, i)=>{
            if (rnd(i) > 0.5) R(c, sx, gy + 1, 1, 2, "#5cab4a");
            if (rnd(i + 2) > 0.85) R(c, sx, gy - 1, 1, 1, rnd(i) > 0.5 ? "#ffd43b" : "#ff8787");
        });
        props(e, x0 + 30, x1 - 30, 78, (sx, i)=>{
            const kind = i % 4;
            if (kind === 0) {
                // Foosha windmill
                R(c, sx + 3, gy - 34, 12, 34, "#ede0c8");
                for(let k = 0; k < 4; k++)R(c, sx + 3, gy - 30 + k * 8, 12, 1, "#cdbb98");
                poly(c, [
                    sx + 1,
                    gy - 34,
                    sx + 17,
                    gy - 34,
                    sx + 9,
                    gy - 44
                ], "#a63d2a");
                R(c, sx + 7, gy - 9, 5, 9, "#6b3d1f");
                R(c, sx + 7, gy - 22, 4, 4, "#74c0fc");
                const a = 0.4; // still blades: no wind
                for(let k = 0; k < 4; k++){
                    const ang = a + k * Math.PI / 2;
                    const ex = sx + 9 + Math.cos(ang) * 16;
                    const ey = gy - 34 + Math.sin(ang) * 16;
                    line(c, sx + 9, gy - 34, ex, ey, "#7a4a1f", 1);
                    poly(c, [
                        sx + 9 + Math.cos(ang) * 5,
                        gy - 34 + Math.sin(ang) * 5,
                        ex,
                        ey,
                        ex + Math.cos(ang + 1.6) * 4,
                        ey + Math.sin(ang + 1.6) * 4,
                        sx + 9 + Math.cos(ang + 0.5) * 5,
                        gy - 34 + Math.sin(ang + 0.5) * 5
                    ], "#f8f1e3");
                }
                circle(c, sx + 9, gy - 34, 1.5, "#5c3d1e");
            } else if (kind === 1) {
                // Partys Bar (Makino's bar)
                R(c, sx, gy - 18, 30, 18, "#f8eed8");
                R(c, sx, gy - 18, 30, 1, "#d9c8a0");
                poly(c, [
                    sx - 3,
                    gy - 18,
                    sx + 33,
                    gy - 18,
                    sx + 27,
                    gy - 28,
                    sx + 3,
                    gy - 28
                ], "#c0392b");
                R(c, sx + 5, gy - 16, 20, 4, "#6b3d1f");
                R(c, sx + 7, gy - 15, 16, 2, "#f2c94c");
                R(c, sx + 12, gy - 10, 6, 10, "#7a4a1f");
                R(c, sx + 3, gy - 10, 5, 5, "#74c0fc");
                R(c, sx + 22, gy - 10, 5, 5, "#74c0fc");
                R(c, sx + 24, gy - 34, 3, 7, "#868e96");
                const smoke = t / 60 % 12;
                circle(c, sx + 26, gy - 36 - smoke, 1.5 + smoke / 6, "rgba(230,230,230,0.6)");
                // barrels
                circle(c, sx + 35, gy - 3, 3, "#8b5a2b");
                R(c, sx + 32, gy - 4, 6, 1, "#495057");
            } else if (kind === 2) {
                // cottage with laundry line
                R(c, sx, gy - 15, 22, 15, "#fff8e8");
                poly(c, [
                    sx - 3,
                    gy - 15,
                    sx + 25,
                    gy - 15,
                    sx + 11,
                    gy - 27
                ], "#d9480f");
                R(c, sx + 9, gy - 9, 5, 9, "#7a4a1f");
                R(c, sx + 2, gy - 12, 4, 4, "#74c0fc");
                R(c, sx + 16, gy - 12, 4, 4, "#74c0fc");
                line(c, sx + 22, gy - 14, sx + 40, gy - 14, "#adb5bd");
                R(c, sx + 40, gy - 15, 1, 15, "#7a4a1f");
                const sw = 0;
                R(c, sx + 25 + sw, gy - 13, 4, 5, "#e03131");
                R(c, sx + 32 + sw, gy - 13, 4, 4, "#1c7ed6");
            } else {
                // tree + Luffy's straw hat sign
                R(c, sx + 6, gy - 12, 3, 12, "#7a4a1f");
                circle(c, sx + 7, gy - 18, 8, "#3f9e3c");
                circle(c, sx + 3, gy - 14, 5, "#4fb34a");
                circle(c, sx + 12, gy - 15, 5, "#358f33");
                R(c, sx + 22, gy - 12, 1, 12, "#7a4a1f");
                R(c, sx + 17, gy - 14, 12, 5, "#e9dcc3");
                R(c, sx + 19, gy - 12, 8, 1, "#f2c94c");
                R(c, sx + 20, gy - 13, 6, 1, "#c0392b");
            }
            // fence
            for(let k = 0; k < 3; k++)R(c, sx + 44 + k * 5, gy - 5, 1, 5, "#c9a26b");
            R(c, sx + 43, gy - 4, 14, 1, "#c9a26b");
        });
    }
};
// =====================================================================
// 2. ALABASTA — Alubarna palace, Rain Dinners, Nanohana, Karoo
// =====================================================================
const alabasta = {
    sky: (e)=>{
        grad(e.c, e.W, 0, e.gy, [
            "#f76707",
            "#ffa94d",
            "#ffe8b0"
        ]);
        sun(e.c, e.W * 0.72, e.gy * 0.24, 11, "#fff3bf", "rgba(255,230,150,0.3)");
    },
    far: (e)=>{
        const { c, gy } = e;
        ridge(e, 0.15, gy - 14, 18, 0.01, 2, "#dd9a4f");
        // Alubarna palace on its cliff
        tiles(e.cam * 0.22, 480, e.W, (sx)=>{
            poly(c, [
                sx - 30,
                gy - 10,
                sx + 120,
                gy - 10,
                sx + 100,
                gy - 40,
                sx - 10,
                gy - 40
            ], "#c98443");
            R(c, sx, gy - 70, 90, 30, "#efc68c");
            R(c, sx, gy - 70, 90, 2, "#fff0d0");
            half(c, sx + 45, gy - 70, 16, "#e8b56b");
            R(c, sx + 44, gy - 92, 2, 6, "#c98443");
            for(let k = 0; k < 4; k++){
                R(c, sx + 6 + k * 24, gy - 86, 6, 20, "#efc68c");
                half(c, sx + 9 + k * 24, gy - 86, 4, "#e8b56b");
            }
            for(let k = 0; k < 8; k++)R(c, sx + 5 + k * 11, gy - 60, 3, 6, "#8a5226");
            // clock tower
            R(c, sx + 104, gy - 84, 12, 44, "#efc68c");
            half(c, sx + 110, gy - 84, 6, "#e8b56b");
            circle(c, sx + 110, gy - 74, 3, "#fff3bf");
            R(c, sx + 110, gy - 76, 1, 2, "#5c3317");
        });
        ridge(e, 0.45, gy, 10, 0.022, 5, "#eebb6e");
    },
    near: (e, x0, x1)=>{
        groundBand(e, x0, x1, "#f7d491", "#e6b866", 2);
        const { c, gy, t } = e;
        props(e, x0, x1, 9, (sx, i)=>{
            if (rnd(i) > 0.55) R(c, sx, gy + 4 + Math.floor(rnd(i + 3) * 12), 6, 1, "#d9a24f");
        });
        props(e, x0 + 30, x1 - 40, 84, (sx, i)=>{
            const k = i % 4;
            if (k === 0) {
                // Rain Dinners casino with the crocodile on the roof
                R(c, sx, gy - 30, 44, 30, "#f0c27a");
                half(c, sx + 22, gy - 30, 14, "#e2a957");
                poly(c, [
                    sx - 2,
                    gy - 34,
                    sx + 22,
                    gy - 48,
                    sx + 50,
                    gy - 40,
                    sx + 56,
                    gy - 36,
                    sx + 46,
                    gy - 34
                ], "#2f9e44");
                poly(c, [
                    sx + 46,
                    gy - 38,
                    sx + 56,
                    gy - 36,
                    sx + 46,
                    gy - 34
                ], "#2b8a3e");
                for(let k2 = 0; k2 < 5; k2++)tri(c, sx + 50 - k2 * 3, gy - 36, sx + 51 - k2 * 3, gy - 34, sx + 49 - k2 * 3, gy - 34, "#ffffff");
                R(c, sx + 40, gy - 41, 2, 2, "#ffd43b");
                R(c, sx + 18, gy - 12, 8, 12, "#5c3317");
                R(c, sx + 12, gy - 24, 20, 4, "#e03131");
                R(c, sx + 14, gy - 23, 16, 2, Math.sin(t / 200) > 0 ? "#ffd43b" : "#fab005");
            } else if (k === 1 || k === 3) {
                // Nanohana-style domed houses + market awning
                const h = 18 + i % 3 * 4;
                R(c, sx, gy - h, 24, h, "#e3b071");
                R(c, sx, gy - h, 24, 2, "#f2c98f");
                half(c, sx + 12, gy - h, 8, "#cf9450");
                R(c, sx + 9, gy - 10, 6, 10, "#5c3317");
                half(c, sx + 12, gy - 10, 3, "#5c3317");
                R(c, sx + 3, gy - h + 6, 3, 4, "#5c3317");
                R(c, sx + 18, gy - h + 6, 3, 4, "#5c3317");
                for(let s = 0; s < 3; s++)R(c, sx + 26 + s * 4, gy - 12, 4, 3, s % 2 ? "#ffffff" : i % 2 ? "#e03131" : "#1c7ed6");
                R(c, sx + 26, gy - 9, 1, 9, "#7a4a1f");
                R(c, sx + 37, gy - 9, 1, 9, "#7a4a1f");
                R(c, sx + 28, gy - 3, 7, 3, "#fab005");
                palm(c, sx + 50, gy, 24, t);
            } else {
                // Karoo the super spot-billed duck + a Kung-Fu Dugong
                const hop = Math.round(Math.abs(Math.sin(t / 220 + i)) * 2);
                const y = gy - hop;
                R(c, sx + 2, y - 10, 10, 8, "#fff3bf");
                R(c, sx + 10, y - 16, 5, 8, "#fff3bf");
                R(c, sx + 13, y - 14, 5, 2, "#f59f00");
                R(c, sx + 12, y - 15, 1, 1, "#000");
                R(c, sx + 9, y - 17, 3, 2, "#3b5bdb");
                R(c, sx + 4, y - 2, 1, 2, "#f59f00");
                R(c, sx + 9, y - 2, 1, 2, "#f59f00");
                // dugong
                circle(c, sx + 30, gy - 5, 5, "#a5d8ff");
                R(c, sx + 27, gy - 12, 6, 4, "#a5d8ff");
                R(c, sx + 27, gy - 11, 6, 1, "#495057");
                R(c, sx + 25, gy - 6, 2, 2, "#a5d8ff");
                R(c, sx + 34, gy - 8, 3, 2, "#a5d8ff");
                R(c, sx + 26, gy - 13, 8, 1, "#fd7e14");
            }
        });
    }
};
// =====================================================================
// 3. SKYPIEA — Angel Island, Golden Bell, Giant Jack, White-White Sea
// =====================================================================
const skyIsland = {
    sky: (e)=>{
        grad(e.c, e.W, 0, e.H, [
            "#1b6fd8",
            "#5aaef5",
            "#e7f6ff"
        ]);
        sun(e.c, e.W * 0.18, e.gy * 0.18, 8, "#ffffff", "rgba(255,255,255,0.3)");
        tiles(e.cam * 0.05, 130, e.W, (sx, i)=>puff(e.c, sx, e.gy * 0.12 + rnd(i) * 30, 0.9, "#ffffff", "#e6f0ff"));
    },
    far: (e)=>{
        const { c, gy, t } = e;
        // Giant Jack beanstalk with Shandora ruins and the Golden Bell
        tiles(e.cam * 0.18, 460, e.W, (sx)=>{
            for(let y = 0; y < gy; y += 2)R(c, sx + 12 + Math.round(Math.sin(y / 14) * 6), y, 10, 2, y % 8 ? "#5c940d" : "#74b816");
            puff(c, sx - 20, gy - 70, 1.6, "#ffffff", "#dbe8f5");
            // ruins
            R(c, sx - 10, gy - 92, 50, 14, "#b0a48a");
            for(let k = 0; k < 5; k++)R(c, sx - 8 + k * 10, gy - 104, 5, 12, "#c2b59b");
            R(c, sx - 12, gy - 106, 54, 3, "#9c8f75");
            // Golden Bell
            const sw = 0;
            R(c, sx + 16 + sw, gy - 124, 2, 6, "#5c3d1e");
            poly(c, [
                sx + 8 + sw,
                gy - 106,
                sx + 26 + sw,
                gy - 106,
                sx + 23 + sw,
                gy - 118,
                sx + 11 + sw,
                gy - 118
            ], "#fcc419");
            R(c, sx + 7 + sw, gy - 107, 20, 2, "#e67700");
            R(c, sx + 12 + sw, gy - 116, 2, 8, "#fff3bf");
        });
        // sea cloud surface + wavers
        tiles(e.cam * 0.3, 46, e.W, (sx, i)=>circle(c, sx, gy - 8 - rnd(i) * 6, 11 + rnd(i + 1) * 6, "#f4fbff"));
        tiles(e.cam * 0.35 + t * 0.04, 260, e.W, (sx)=>{
            const y = gy - 20 + Math.round(Math.sin(t / 300 + sx) * 1);
            poly(c, [
                sx,
                y,
                sx + 14,
                y,
                sx + 12,
                y + 3,
                sx + 2,
                y + 3
            ], "#ffffff");
            R(c, sx + 4, y - 6, 3, 6, "#f4a3a3");
            circle(c, sx + 5, y - 8, 2, "#ffd8a8");
            R(c, sx + 1, y - 6, 3, 2, "#ffffff");
            R(c, sx + 7, y - 6, 3, 2, "#ffffff");
            for(let k = 1; k < 5; k++)R(c, sx - k * 4, y + 2, 3, 1, "rgba(255,255,255,0.8)");
        });
    },
    near: (e, x0, x1)=>{
        const { c, gy, t } = e;
        const a = Math.round(x0 - e.cam);
        R(c, a, gy, x1 - x0, e.H - gy, "#ffffff");
        R(c, a, gy + 10, x1 - x0, e.H - gy, "#e3eefa");
        props(e, x0, x1, 10, (sx, i)=>circle(c, sx, gy + 1, 5 + rnd(i) * 3, "#ffffff"));
        props(e, x0, x1, 13, (sx, i)=>circle(c, sx, gy + 12, 4 + rnd(i + 5) * 3, "#f0f6fd"));
        props(e, x0 + 30, x1 - 40, 74, (sx, i)=>{
            const k = i % 3;
            if (k === 0) {
                // Angel Island cloud house with a spiral shell roof
                circle(c, sx + 14, gy - 10, 13, "#f3f8ff");
                R(c, sx + 1, gy - 10, 26, 10, "#f3f8ff");
                circle(c, sx + 14, gy - 22, 6, "#ffe8cc");
                circle(c, sx + 14, gy - 22, 3, "#ffd8a8");
                circle(c, sx + 14, gy - 22, 1, "#f59f00");
                R(c, sx + 11, gy - 10, 6, 10, "#4dabf7");
                half(c, sx + 14, gy - 10, 3, "#4dabf7");
                circle(c, sx + 5, gy - 13, 2, "#ffd43b");
                circle(c, sx + 23, gy - 13, 2, "#ffd43b");
            } else if (k === 1) {
                // Skypiean with little wings (Conis-style) + Pierre the pegasus
                const fl = Math.round(Math.sin(t / 150) * 1);
                R(c, sx + 4, gy - 10, 5, 7, "#f8f9fa");
                circle(c, sx + 6.5, gy - 13, 2.5, "#ffd8a8");
                R(c, sx + 4, gy - 16, 5, 2, "#ffe066");
                R(c, sx + 1, gy - 12 + fl, 3, 2, "#ffffff");
                R(c, sx + 9, gy - 12 + fl, 3, 2, "#ffffff");
                R(c, sx + 5, gy - 3, 1, 3, "#ffd8a8");
                R(c, sx + 7, gy - 3, 1, 3, "#ffd8a8");
                const py = gy - 34 + Math.round(Math.sin(t / 400) * 3);
                R(c, sx + 22, py, 10, 5, "#ffd43b");
                R(c, sx + 31, py - 4, 3, 5, "#ffd43b");
                R(c, sx + 18, py - 3 + fl, 6, 2, "#ffffff");
                R(c, sx + 25, py - 4 - fl, 6, 2, "#ffffff");
                R(c, sx + 23, py + 5, 1, 3, "#fab005");
                R(c, sx + 29, py + 5, 1, 3, "#fab005");
            } else {
                // spiral sky palm + Dial shells
                palm(c, sx + 6, gy, 24, t, "#20c997", "#63e6be");
                circle(c, sx + 18, gy - 2, 2.5, "#ffc9c9");
                circle(c, sx + 18, gy - 2, 1, "#ff8787");
                circle(c, sx + 24, gy - 2, 2.5, "#d0bfff");
                circle(c, sx + 24, gy - 2, 1, "#9775fa");
            }
        });
    }
};
// =====================================================================
// 4. ENIES LOBBY — Tower of Justice, Gates of Justice, Puffing Tom
// =====================================================================
const eniesLobby = {
    sky: (e)=>{
        // Eternal daytime island
        grad(e.c, e.W, 0, e.gy, [
            "#2f80d8",
            "#7ab8f0",
            "#d2ebff"
        ]);
        driftClouds(e, "#f6fbff", "#d9e9f8", 0.1);
    },
    far: (e)=>{
        const { c, gy, W, t } = e;
        sea(e, gy - 36, 36, "#1864ab", "#4dabf7");
        // Gates of Justice
        tiles(e.cam * 0.12, 700, W, (sx)=>{
            R(c, sx, gy - 110, 34, 76, "#5c6b7a");
            R(c, sx + 36, gy - 110, 34, 76, "#5c6b7a");
            R(c, sx - 4, gy - 116, 78, 8, "#495663");
            R(c, sx + 33, gy - 110, 4, 76, "#2b333b");
            for(let k = 0; k < 6; k++){
                R(c, sx + 4, gy - 104 + k * 12, 26, 1, "#748595");
                R(c, sx + 40, gy - 104 + k * 12, 26, 1, "#748595");
            }
            circle(c, sx + 17, gy - 80, 6, "#3b4752");
            circle(c, sx + 53, gy - 80, 6, "#3b4752");
        });
        // Tower of Justice on a stone foundation rising straight out of the sea
        tiles(e.cam * 0.22, 420, W, (sx)=>{
            R(c, sx + 36, gy - 44, 48, 10, "#8d99a6");
            R(c, sx + 36, gy - 44, 48, 1, "#ced4da");
            for(let k = 0; k < 6; k++)R(c, sx + 38 + k * 8, gy - 40, 1, 6, "#6c757d");
            R(c, sx + 34, gy - 36, 52, 2, "rgba(255,255,255,0.6)");
            R(c, sx + 50, gy - 100, 20, 60, "#f1f3f5");
            R(c, sx + 46, gy - 104, 28, 5, "#ced4da");
            poly(c, [
                sx + 48,
                gy - 104,
                sx + 72,
                gy - 104,
                sx + 60,
                gy - 116
            ], "#adb5bd");
            for(let k = 0; k < 6; k++)R(c, sx + 54, gy - 94 + k * 9, 4, 5, "#343a40");
            for(let k = 0; k < 6; k++)R(c, sx + 62, gy - 94 + k * 9, 4, 5, "#343a40");
            // the World Government flag... on fire (Sogeking!)
            R(c, sx + 72, gy - 124, 1, 20, "#495057");
            R(c, sx + 73, gy - 124, 12, 8, "#1971c2");
            circle(c, sx + 79, gy - 120, 2, "#ffffff");
            const fl = Math.sin(t / 90);
            tri(c, sx + 76, gy - 124, sx + 86, gy - 124, sx + 81 + fl * 2, gy - 132, "#ff922b");
            tri(c, sx + 78, gy - 124, sx + 84, gy - 124, sx + 81 - fl, gy - 129, "#ffd43b");
        });
    },
    near: (e, x0, x1)=>{
        const { c, gy, t } = e;
        const a = Math.round(x0 - e.cam);
        R(c, a, gy + 6, x1 - x0, e.H - gy, "#1864ab");
        props(e, x0, x1, 14, (sx, i)=>R(c, sx + Math.round(Math.sin(t / 400 + i) * 2), gy + 12 + i % 3 * 5, 6, 1, "#4dabf7"));
        // Sea-train rails (Puffing Tom line)
        R(c, a, gy, x1 - x0, 6, "#8d99a6");
        R(c, a, gy, x1 - x0, 1, "#dee2e6");
        R(c, a, gy - 2, x1 - x0, 1, "#495057");
        props(e, x0, x1, 6, (sx)=>R(c, sx, gy - 1, 3, 1, "#7a4a1f"));
        props(e, x0, x1, 40, (sx)=>R(c, sx + 4, gy + 6, 6, 18, "#6c757d"));
        // Puffing Tom steaming past
        const trainX = t * 0.05 % (x1 - x0 + 400) + x0 - 200;
        const tx = Math.round(trainX - e.cam);
        if (tx > -120 && tx < e.W + 40) {
            R(c, tx, gy - 18, 36, 16, "#2b8a3e");
            R(c, tx + 30, gy - 26, 6, 8, "#212529");
            circle(c, tx + 36, gy - 10, 6, "#495057");
            circle(c, tx + 36, gy - 10, 3, "#ffd43b");
            R(c, tx + 4, gy - 14, 6, 5, "#ffe066");
            R(c, tx + 14, gy - 14, 6, 5, "#ffe066");
            for(let k = 0; k < 3; k++)circle(c, tx + 33 - k * 6, gy - 30 - k * 4 - t / 40 % 4, 2 + k, "rgba(240,240,240,0.7)");
            for(let k = 1; k <= 2; k++){
                R(c, tx - k * 40, gy - 14, 36, 12, "#e9ecef");
                for(let w = 0; w < 4; w++)R(c, tx - k * 40 + 4 + w * 8, gy - 12, 5, 4, "#4dabf7");
            }
        }
        props(e, x0 + 40, x1 - 30, 90, (sx, i)=>{
            if (i % 2 === 0) {
                // Judicial building gatehouse
                R(c, sx, gy - 30, 30, 28, "#e9ecef");
                for(let k = 0; k < 5; k++)R(c, sx + 1 + k * 6, gy - 34, 4, 4, "#ced4da");
                R(c, sx + 10, gy - 16, 10, 14, "#495057");
                half(c, sx + 15, gy - 16, 5, "#495057");
                R(c, sx + 2, gy - 26, 4, 6, "#343a40");
                R(c, sx + 24, gy - 26, 4, 6, "#343a40");
                R(c, sx + 14, gy - 46, 1, 12, "#495057");
                const w = 0;
                R(c, sx + 15, gy - 46 + w, 9, 6, "#1971c2");
                circle(c, sx + 19, gy - 43 + w, 1.5, "#ffffff");
            } else {
                // CP9 silhouette
                R(c, sx + 6, gy - 16, 6, 10, "#212529");
                circle(c, sx + 9, gy - 18, 3, "#f1c27d");
                R(c, sx + 6, gy - 22, 6, 2, "#000000");
                R(c, sx + 6, gy - 6, 2, 4, "#212529");
                R(c, sx + 10, gy - 6, 2, 4, "#212529");
                R(c, sx + 12, gy - 18, 3, 3, "#ffffff");
            }
        });
    }
};
// =====================================================================
// 5. THRILLER BARK — ship-island, Moria's mansion, Perona's ghosts
// =====================================================================
const thrillerBark = {
    sky: (e)=>{
        const { c, W, gy, t } = e;
        grad(c, W, 0, gy, [
            "#0b0618",
            "#2a1450",
            "#4f2a73"
        ]);
        tiles(e.cam * 0.02, 17, W, (sx, i)=>{
            if (rnd(i) > 0.55) R(c, sx, rnd(i + 5) * gy * 0.6, 1, 1, rnd(i + Math.floor(t / 900)) > 0.3 ? "#ffffff" : "#b197fc");
        });
        circle(c, W * 0.8, gy * 0.22, 15, "rgba(255,243,191,0.2)");
        circle(c, W * 0.8, gy * 0.22, 11, "#fff3bf");
        circle(c, W * 0.8 - 3, gy * 0.22 - 2, 2, "#e8d98a");
        circle(c, W * 0.8 + 3, gy * 0.22 + 3, 1.5, "#e8d98a");
    },
    far: (e)=>{
        const { c, gy, t } = e;
        // the island is a giant ship: masts and tattered sails rising from the horizon
        tiles(e.cam * 0.1, 600, e.W, (sx)=>{
            R(c, sx, gy - 130, 4, 130, "#140a22");
            R(c, sx - 24, gy - 120, 52, 2, "#140a22");
            poly(c, [
                sx - 22,
                gy - 118,
                sx + 26,
                gy - 118,
                sx + 22,
                gy - 90,
                sx + 4,
                gy - 96,
                sx - 18,
                gy - 88
            ], "#21123a");
            R(c, sx + 160, gy - 100, 3, 100, "#140a22");
            poly(c, [
                sx + 145,
                gy - 92,
                sx + 178,
                gy - 92,
                sx + 172,
                gy - 70,
                sx + 150,
                gy - 72
            ], "#21123a");
        });
        // Gecko Moria's mansion
        tiles(e.cam * 0.2, 360, e.W, (sx)=>{
            R(c, sx, gy - 62, 80, 62, "#1c0f2e");
            poly(c, [
                sx - 6,
                gy - 62,
                sx + 86,
                gy - 62,
                sx + 40,
                gy - 88
            ], "#1c0f2e");
            R(c, sx + 8, gy - 82, 8, 24, "#1c0f2e");
            poly(c, [
                sx + 6,
                gy - 82,
                sx + 18,
                gy - 82,
                sx + 12,
                gy - 92
            ], "#1c0f2e");
            R(c, sx + 64, gy - 80, 8, 22, "#1c0f2e");
            poly(c, [
                sx + 62,
                gy - 80,
                sx + 74,
                gy - 80,
                sx + 68,
                gy - 90
            ], "#1c0f2e");
            for(let k = 0; k < 7; k++)R(c, sx + 6 + k * 11, gy - 50, 4, 6, (k + Math.floor(t / 700)) % 3 ? "#2b1a40" : "#ffd43b");
            for(let k = 0; k < 7; k++)R(c, sx + 6 + k * 11, gy - 34, 4, 6, k % 2 ? "#ffd43b" : "#2b1a40");
            R(c, sx + 34, gy - 16, 12, 16, "#0b0614");
        });
        ridge(e, 0.45, gy, 10, 0.03, 7, "#24163a");
        // bats + Negative Hollows (Perona's ghosts)
        tiles(e.cam * 0.3 + t * 0.02, 120, e.W, (sx, i)=>{
            const y = gy * 0.35 + rnd(i) * 30 + Math.sin(t / 200 + i) * 3;
            const wing = Math.sin(t / 80 + i) > 0 ? -1 : 1;
            R(c, sx, y, 2, 2, "#0b0614");
            R(c, sx - 3, y + wing, 3, 1, "#0b0614");
            R(c, sx + 2, y + wing, 3, 1, "#0b0614");
        });
        tiles(e.cam * 0.35 + t * 0.01, 170, e.W, (sx, i)=>{
            const y = gy * 0.5 + rnd(i + 2) * 20 + Math.sin(t / 400 + i) * 5;
            circle(c, sx, y, 5, "rgba(255,255,255,0.85)");
            R(c, sx - 5, y, 10, 4, "rgba(255,255,255,0.85)");
            for(let k = 0; k < 3; k++)R(c, sx - 4 + k * 3, y + 4, 2, 2 + k % 2, "rgba(255,255,255,0.85)");
            R(c, sx - 3, y - 1, 2, 2, "#000");
            R(c, sx + 1, y - 1, 2, 2, "#000");
            R(c, sx - 2, y + 2, 4, 1, "#e64980");
            R(c, sx - 3, y - 7, 6, 2, "#e64980");
        });
    },
    near: (e, x0, x1)=>{
        groundBand(e, x0, x1, "#3a5a40", "#2b2236", 2);
        const { c, gy, t } = e;
        props(e, x0 + 20, x1 - 10, 28, (sx, i)=>{
            const k = i % 8;
            if (k === 0) {
                // twisted dead tree
                R(c, sx + 4, gy - 28, 3, 28, "#1a1222");
                R(c, sx - 3, gy - 22, 8, 2, "#1a1222");
                R(c, sx + 6, gy - 17, 8, 2, "#1a1222");
                R(c, sx - 3, gy - 27, 2, 6, "#1a1222");
                R(c, sx + 13, gy - 22, 2, 6, "#1a1222");
                R(c, sx + 2, gy - 32, 2, 5, "#1a1222");
                circle(c, sx + 5, gy - 20, 1, "#ffd43b");
            } else if (k === 2 || k === 5) {
                R(c, sx, gy - 11, 9, 11, "#868e96");
                half(c, sx + 4.5, gy - 11, 4.5, "#868e96");
                R(c, sx + 1, gy - 11, 1, 11, "#adb5bd");
                R(c, sx + 2, gy - 8, 5, 1, "#495057");
                R(c, sx + 4, gy - 11, 1, 5, "#495057");
            } else if (k === 3) {
                R(c, sx + 3, gy - 15, 2, 15, "#adb5bd");
                R(c, sx, gy - 12, 8, 2, "#adb5bd");
            } else if (k === 4) {
                // zombie hand rising from a grave
                const up = Math.round((Math.sin(t / 700 + i) + 1) * 2);
                R(c, sx + 2, gy - 3 - up, 3, 3 + up, "#8ce99a");
                R(c, sx + 1, gy - 5 - up, 1, 3, "#8ce99a");
                R(c, sx + 3, gy - 6 - up, 1, 3, "#8ce99a");
                R(c, sx + 5, gy - 5 - up, 1, 3, "#8ce99a");
                R(c, sx, gy - 1, 8, 1, "#4a3b2a");
            } else if (k === 6) {
                circle(c, sx + 4, gy - 3, 3.5, "#f76707");
                R(c, sx + 3, gy - 8, 2, 2, "#2b8a3e");
                const on = Math.sin(t / 150 + i) > 0;
                R(c, sx + 2, gy - 4, 1, 1, on ? "#ffd43b" : "#7a2e00");
                R(c, sx + 5, gy - 4, 1, 1, on ? "#ffd43b" : "#7a2e00");
                R(c, sx + 2, gy - 2, 4, 1, on ? "#ffd43b" : "#7a2e00");
            } else if (k === 7 && i % 16 === 7) {
                // General Zombie / Oars silhouette lumbering
                const step = Math.round(Math.sin(t / 300 + i) * 1);
                R(c, sx, gy - 44, 20, 26, "#3d2b4f");
                circle(c, sx + 10, gy - 48, 6, "#3d2b4f");
                R(c, sx + 2, gy - 18, 6, 18 + step, "#3d2b4f");
                R(c, sx + 12, gy - 18, 6, 18 - step, "#3d2b4f");
                R(c, sx - 6, gy - 42, 6, 20, "#3d2b4f");
                R(c, sx + 20, gy - 42, 6, 20, "#3d2b4f");
                R(c, sx + 6, gy - 50, 2, 2, "#ff6b6b");
                R(c, sx + 12, gy - 50, 2, 2, "#ff6b6b");
                R(c, sx + 4, gy - 36, 12, 1, "#2b1d38");
            }
        });
    }
};
// =====================================================================
// 6. MARINEFORD — Marine HQ, execution platform, frozen bay, Moby Dick
// =====================================================================
const marineford = {
    sky: (e)=>{
        grad(e.c, e.W, 0, e.gy, [
            "#2b7bd3",
            "#76b6f0",
            "#d6ecff"
        ]);
        driftClouds(e, "#ffffff", "#d2e3f5", 0.1);
        gulls(e);
    },
    far: (e)=>{
        const { c, gy, W, t } = e;
        // crescent bay — frozen solid by Aokiji
        R(c, 0, gy - 30, W, 30, "#2b74c2");
        R(c, 0, gy - 18, W, 18, "#c5e6ff");
        tiles(e.cam * 0.25, 24, W, (sx, i)=>{
            R(c, sx, gy - 18, 1, 18, "#9fd3f5");
            if (i % 3 === 0) poly(c, [
                sx,
                gy - 18,
                sx + 6,
                gy - 18,
                sx + 3,
                gy - 24
            ], "#e7f5ff");
        });
        // Marine Headquarters
        tiles(e.cam * 0.16, 560, W, (sx)=>{
            R(c, sx - 20, gy - 60, 180, 34, "#e9ecef");
            for(let k = 0; k < 14; k++)R(c, sx - 14 + k * 13, gy - 54, 5, 8, "#5c6b7a");
            R(c, sx + 20, gy - 100, 100, 40, "#f8f9fa");
            for(let k = 0; k < 8; k++)R(c, sx + 26 + k * 12, gy - 92, 5, 7, "#5c6b7a");
            R(c, sx + 45, gy - 130, 50, 30, "#f1f3f5");
            poly(c, [
                sx + 40,
                gy - 130,
                sx + 100,
                gy - 130,
                sx + 92,
                gy - 140,
                sx + 48,
                gy - 140
            ], "#adb5bd");
            half(c, sx + 70, gy - 140, 12, "#ced4da");
            // the 正義 / MARINE banner
            R(c, sx + 52, gy - 124, 36, 14, "#1c7ed6");
            R(c, sx + 56, gy - 121, 3, 8, "#ffffff");
            R(c, sx + 55, gy - 121, 5, 1, "#ffffff");
            R(c, sx + 55, gy - 117, 5, 1, "#ffffff");
            R(c, sx + 55, gy - 114, 5, 1, "#ffffff");
            R(c, sx + 64, gy - 121, 6, 1, "#ffffff");
            R(c, sx + 66, gy - 121, 1, 8, "#ffffff");
            R(c, sx + 64, gy - 117, 6, 1, "#ffffff");
            R(c, sx + 73, gy - 121, 1, 8, "#ffffff");
            R(c, sx + 73, gy - 121, 4, 1, "#ffffff");
            R(c, sx + 76, gy - 121, 1, 4, "#ffffff");
            R(c, sx + 80, gy - 121, 5, 8, "#ffffff");
            R(c, sx + 81, gy - 120, 3, 6, "#1c7ed6");
            // execution platform with a prisoner
            R(c, sx + 200, gy - 80, 6, 50, "#adb5bd");
            R(c, sx + 188, gy - 84, 30, 5, "#868e96");
            R(c, sx + 201, gy - 92, 4, 8, "#212529");
            circle(c, sx + 203, gy - 94, 2, "#f1c27d");
            R(c, sx + 201, gy - 97, 4, 2, "#e67700");
            // Moby Dick bursting from the bay
            const b = Math.round(Math.sin(t / 600) * 1);
            poly(c, [
                sx + 260,
                gy - 20 + b,
                sx + 320,
                gy - 20 + b,
                sx + 330,
                gy - 34 + b,
                sx + 300,
                gy - 44 + b,
                sx + 262,
                gy - 34 + b
            ], "#f8f9fa");
            R(c, sx + 318, gy - 34 + b, 2, 2, "#000");
            R(c, sx + 290, gy - 72 + b, 2, 30, "#5c3d1e");
            R(c, sx + 280, gy - 68 + b, 22, 14, "#ffffff");
            R(c, sx + 287, gy - 64 + b, 8, 6, "#212529");
            R(c, sx + 288, gy - 63 + b, 6, 1, "#ffffff");
        });
    },
    near: (e, x0, x1)=>{
        groundBand(e, x0, x1, "#ece7da", "#c9c2b2", 2);
        const { c, gy, t } = e;
        props(e, x0, x1, 10, (sx)=>R(c, sx, gy + 2, 1, e.H, "#b1a993"));
        props(e, x0, x1, 20, (sx, i)=>R(c, sx + i % 2 * 10, gy + 8, 1, e.H, "#b8b09a"));
        props(e, x0 + 20, x1 - 30, 70, (sx, i)=>{
            const k = i % 3;
            if (k === 0) {
                // Marine flag
                R(c, sx + 2, gy - 38, 1, 38, "#495057");
                const w = 0;
                R(c, sx + 3, gy - 38 + w, 16, 10, "#ffffff");
                R(c, sx + 8, gy - 36 + w, 5, 4, "#1c7ed6");
                R(c, sx + 5, gy - 33 + w, 11, 1, "#1c7ed6");
                R(c, sx + 9, gy - 31 + w, 3, 2, "#1c7ed6");
            } else if (k === 1) {
                // fortified wall with cannons (the Encircling Wall)
                R(c, sx, gy - 18, 40, 18, "#dee2e6");
                for(let s = 0; s < 6; s++)R(c, sx + s * 7, gy - 22, 4, 4, "#dee2e6");
                R(c, sx, gy - 18, 40, 1, "#f8f9fa");
                R(c, sx + 8, gy - 13, 12, 3, "#212529");
                R(c, sx + 22, gy - 13, 12, 3, "#212529");
                R(c, sx + 2, gy - 8, 36, 1, "#adb5bd");
            } else {
                // Marine soldiers in "Justice" coats
                for(let s = 0; s < 3; s++){
                    const x = sx + s * 8;
                    R(c, x, gy - 12, 5, 8, "#f8f9fa");
                    R(c, x + 1, gy - 12, 3, 8, "#1c7ed6");
                    circle(c, x + 2.5, gy - 14, 2, "#f1c27d");
                    R(c, x, gy - 17, 5, 2, "#ffffff");
                    R(c, x + 1, gy - 4, 1, 4, "#1c3d5a");
                    R(c, x + 3, gy - 4, 1, 4, "#1c3d5a");
                    R(c, x + 5, gy - 18, 1, 12, "#868e96");
                }
            }
        });
    }
};
// =====================================================================
// 7. FISH-MAN ISLAND — bubble, Ryugu Palace, Sun Tree Eve, mermaids
// =====================================================================
const fishManIsland = {
    sky: (e)=>{
        const { c, W, H, t } = e;
        grad(c, W, 0, H, [
            "#2ec4e6",
            "#0b6fa3",
            "#03203d"
        ]);
        c.fillStyle = "rgba(255,255,230,0.07)";
        for(let k = 0; k < 6; k++){
            const x = (k * 97 + t * 0.01 - e.cam * 0.05) % (W + 80) - 40;
            c.beginPath();
            c.moveTo(x, 0);
            c.lineTo(x + 18, 0);
            c.lineTo(x - 20, e.gy);
            c.lineTo(x - 38, e.gy);
            c.closePath();
            c.fill();
        }
    },
    far: (e)=>{
        const { c, gy, t } = e;
        // Sea King drifting in the deep
        tiles(e.cam * 0.08 + t * 0.006, 700, e.W, (sx)=>{
            const y = gy * 0.3;
            for(let k = 0; k < 20; k++)circle(c, sx + k * 6, y + Math.sin(t / 600 + k / 3) * 6, 6 - k * 0.2, "rgba(20,60,90,0.6)");
            circle(c, sx - 4, y + Math.sin(t / 600) * 6, 8, "rgba(20,60,90,0.6)");
        });
        // Fish-Man Island: the giant bubble with Ryugu Palace on coral
        tiles(e.cam * 0.18, 460, e.W, (sx)=>{
            c.fillStyle = "rgba(190,240,255,0.08)";
            c.beginPath();
            c.arc(sx + 70, gy + 10, 80, Math.PI, 0);
            c.fill();
            c.strokeStyle = "rgba(220,250,255,0.5)";
            c.lineWidth = 2;
            c.stroke();
            circle(c, sx + 30, gy - 50, 6, "rgba(255,255,255,0.2)");
            // coral spires
            R(c, sx + 50, gy - 40, 40, 40, "#f783ac");
            R(c, sx + 40, gy - 24, 60, 24, "#f06595");
            // palace
            R(c, sx + 54, gy - 70, 32, 30, "#fff0f6");
            half(c, sx + 70, gy - 70, 14, "#ffd43b");
            R(c, sx + 69, gy - 90, 2, 8, "#ffd43b");
            R(c, sx + 46, gy - 60, 8, 20, "#fcc2d7");
            half(c, sx + 50, gy - 60, 5, "#ffd43b");
            R(c, sx + 86, gy - 60, 8, 20, "#fcc2d7");
            half(c, sx + 90, gy - 60, 5, "#ffd43b");
            for(let k = 0; k < 4; k++)R(c, sx + 58 + k * 7, gy - 60, 3, 5, "#5f3dc4");
            // Sun Tree Eve light
            for(let k = 0; k < 3; k++)line(c, sx + 70, gy - 160, sx + 40 + k * 30, gy - 40, "rgba(255,255,200,0.12)", 3);
        });
        // schools of fish
        tiles(e.cam * 0.35 + t * 0.015, 70, e.W, (sx, i)=>{
            const y = gy * 0.25 + rnd(i) * gy * 0.45 + Math.sin(t / 500 + i) * 2;
            const col = [
                "#ffa94d",
                "#ffe066",
                "#63e6be",
                "#ff8787"
            ][i % 4];
            R(c, sx, y, 6, 3, col);
            tri(c, sx, y + 1.5, sx - 3, y - 1, sx - 3, y + 4, col);
            R(c, sx + 4, y, 1, 1, "#000000");
        });
        // mermaids swimming
        tiles(e.cam * 0.3 + t * 0.02, 260, e.W, (sx, i)=>{
            const y = gy * 0.45 + rnd(i) * 30 + Math.sin(t / 400 + i) * 4;
            const tail = Math.round(Math.sin(t / 200 + i) * 2);
            circle(c, sx + 12, y, 2.5, "#ffd8a8");
            R(c, sx + 9, y - 3, 6, 3, i % 2 ? "#ff8787" : "#ffd43b");
            R(c, sx + 5, y + 1, 7, 3, "#ffd8a8");
            R(c, sx - 4, y + 1 + tail, 10, 3, i % 2 ? "#38d9a9" : "#da77f2");
            tri(c, sx - 4, y + 2 + tail, sx - 9, y - 1 + tail, sx - 9, y + 6 + tail, i % 2 ? "#20c997" : "#be4bdb");
        });
    },
    near: (e, x0, x1)=>{
        groundBand(e, x0, x1, "#e3cf98", "#bfa46a", 2);
        const { c, gy, t } = e;
        props(e, x0 + 15, x1 - 15, 34, (sx, i)=>{
            const k = i % 5;
            if (k === 0) {
                const col = i % 10 === 0 ? "#ff6b6b" : "#ff922b";
                R(c, sx + 4, gy - 16, 2, 16, col);
                R(c, sx, gy - 12, 4, 2, col);
                R(c, sx, gy - 16, 2, 4, col);
                R(c, sx + 6, gy - 9, 4, 2, col);
                R(c, sx + 8, gy - 14, 2, 5, col);
                circle(c, sx + 1, gy - 17, 1.5, col);
                circle(c, sx + 9, gy - 15, 1.5, col);
            } else if (k === 1) {
                for(let y = 0; y < 20; y++)R(c, sx + Math.round(Math.sin(t / 400 + y / 3 + i) * 2), gy - y, 2, 1, y % 4 ? "#2f9e44" : "#40c057");
            } else if (k === 2) {
                // shell house (Mermaid Cafe style)
                circle(c, sx + 12, gy - 9, 11, "#fcc2d7");
                R(c, sx + 1, gy - 9, 22, 9, "#fcc2d7");
                for(let s = 0; s < 5; s++)R(c, sx + 3 + s * 4, gy - 18, 1, 16, "#f783ac");
                R(c, sx + 9, gy - 8, 6, 8, "#5f3dc4");
                half(c, sx + 12, gy - 8, 3, "#5f3dc4");
                circle(c, sx + 12, gy - 22, 2, "#ffd43b");
            } else if (k === 3) {
                // pearl clam
                poly(c, [
                    sx,
                    gy,
                    sx + 12,
                    gy,
                    sx + 10,
                    gy - 4,
                    sx + 2,
                    gy - 4
                ], "#e599f7");
                const open = Math.round((Math.sin(t / 800 + i) + 1) * 2);
                poly(c, [
                    sx,
                    gy - 4 - open,
                    sx + 12,
                    gy - 4 - open,
                    sx + 10,
                    gy - 9 - open,
                    sx + 2,
                    gy - 9 - open
                ], "#da77f2");
                circle(c, sx + 6, gy - 5, 2, "#ffffff");
            } else {
                // starfish
                R(c, sx + 2, gy - 2, 5, 1, "#ff922b");
                R(c, sx + 4, gy - 4, 1, 4, "#ff922b");
            }
            const by = gy - (t / 20 + i * 37) % (gy + 10);
            c.strokeStyle = "rgba(220,245,255,0.7)";
            c.lineWidth = 1;
            c.strokeRect(sx + 14, Math.round(by), 2, 2);
        });
    }
};
// =====================================================================
// 8. DRESSROSA — Corrida Colosseum, royal palace, toys, Birdcage
// =====================================================================
const dressrosa = {
    sky: (e)=>{
        grad(e.c, e.W, 0, e.gy, [
            "#ff922b",
            "#ffc078",
            "#fff0d6"
        ]);
        sun(e.c, e.W * 0.3, e.gy * 0.2, 9, "#fff9db", "rgba(255,240,180,0.3)");
        driftClouds(e, "#fff4e6", "#ffe0bd", 0.12);
        // Doflamingo's Birdcage strings
        const { c, W, gy } = e;
        c.strokeStyle = "rgba(255,255,255,0.18)";
        c.lineWidth = 1;
        for(let k = 0; k < 14; k++){
            const x = (k * 53 - e.cam * 0.1) % (W + 60) - 30;
            c.beginPath();
            c.moveTo(W * 0.5, -40);
            c.lineTo(x, gy);
            c.stroke();
        }
    },
    far: (e)=>{
        const { c, gy } = e;
        // Royal palace atop the King's Plateau
        tiles(e.cam * 0.14, 560, e.W, (sx)=>{
            poly(c, [
                sx - 40,
                gy - 20,
                sx + 140,
                gy - 20,
                sx + 110,
                gy - 70,
                sx - 10,
                gy - 70
            ], "#b08055");
            R(c, sx + 10, gy - 100, 80, 30, "#f8e6c8");
            for(let k = 0; k < 4; k++){
                R(c, sx + 12 + k * 22, gy - 116, 10, 18, "#f8e6c8");
                poly(c, [
                    sx + 10 + k * 22,
                    gy - 116,
                    sx + 24 + k * 22,
                    gy - 116,
                    sx + 17 + k * 22,
                    gy - 128
                ], "#e8590c");
            }
            for(let k = 0; k < 7; k++)R(c, sx + 15 + k * 11, gy - 92, 4, 6, "#7a5233");
            // pink flamingo-feather flag
            R(c, sx + 50, gy - 140, 1, 14, "#5c3d1e");
            R(c, sx + 51, gy - 140, 8, 5, "#f06595");
        });
        // hillside town with orange roofs + sunflowers
        ridge(e, 0.22, gy - 16, 14, 0.014, 4, "#d8a86b");
        tiles(e.cam * 0.28, 24, e.W, (sx, i)=>{
            const h = 8 + i % 3 * 3;
            R(c, sx, gy - 16 - h, 12, h, i % 4 === 0 ? "#ffe8cc" : "#f3e3c3");
            poly(c, [
                sx - 1,
                gy - 16 - h,
                sx + 13,
                gy - 16 - h,
                sx + 6,
                gy - 22 - h
            ], "#e8590c");
            R(c, sx + 4, gy - 12 - h, 3, 3, "#1c7ed6");
        });
    },
    near: (e, x0, x1)=>{
        groundBand(e, x0, x1, "#d4a373", "#b07d4f", 2);
        const { c, gy, t } = e;
        props(e, x0, x1, 8, (sx, i)=>R(c, sx, gy + 3 + i % 2 * 4, 7, 1, "#9c6b40"));
        // Corrida Colosseum: tiered arcades along the whole segment
        const a = Math.max(x0 + 20, e.cam - 10);
        const b = Math.min(x1 - 20, e.cam + e.W + 10);
        if (b > a) {
            R(c, a - e.cam, gy - 54, b - a, 54, "#e6c58f");
            R(c, a - e.cam, gy - 56, b - a, 2, "#c9a46a");
            R(c, a - e.cam, gy - 36, b - a, 2, "#c9a46a");
            R(c, a - e.cam, gy - 18, b - a, 2, "#c9a46a");
        }
        props(e, x0 + 24, x1 - 30, 14, (sx)=>{
            R(c, sx + 3, gy - 16, 8, 16, "#6f4e2c");
            half(c, sx + 7, gy - 16, 4, "#6f4e2c");
            R(c, sx + 4, gy - 32, 6, 12, "#7f5a33");
            half(c, sx + 7, gy - 32, 3, "#7f5a33");
            R(c, sx + 5, gy - 50, 4, 10, "#8d6a40");
            half(c, sx + 7, gy - 50, 2, "#8d6a40");
        });
        props(e, x0 + 40, x1 - 40, 64, (sx, i)=>{
            R(c, sx, gy - 72, 1, 16, "#5c3d1e");
            const w = 0;
            R(c, sx + 1, gy - 72 + w, 10, 6, i % 2 ? "#e03131" : "#fab005");
            R(c, sx + 1, gy - 70 + w, 10, 1, "#ffffff");
        });
        // living toys marching in front
        props(e, x0 + 30, x1 - 30, 96, (sx, i)=>{
            const step = Math.round(Math.sin(t / 160 + i) * 1);
            const x = sx + 20;
            // tin soldier (Kyros!) with one leg
            R(c, x, gy - 14, 6, 8, "#e03131");
            R(c, x, gy - 17, 6, 3, "#f1c27d");
            R(c, x, gy - 21, 6, 4, "#212529");
            R(c, x + 2, gy - 6, 2, 6 + step, "#f8f9fa");
            R(c, x + 6, gy - 14, 1, 10, "#ced4da");
            // plush bear toy
            circle(c, x + 18, gy - 6, 4, "#d9a066");
            circle(c, x + 18, gy - 12, 3, "#d9a066");
            circle(c, x + 16, gy - 15, 1.2, "#d9a066");
            circle(c, x + 20, gy - 15, 1.2, "#d9a066");
            R(c, x + 17, gy - 12, 1, 1, "#000");
            R(c, x + 19, gy - 12, 1, 1, "#000");
            R(c, x + 16, gy - 2, 2, 2 - step, "#b07d4f");
            R(c, x + 19, gy - 2, 2, 2 + step, "#b07d4f");
        });
    }
};
// =====================================================================
// 9. WHOLE CAKE ISLAND — Chateau, Homies, Prometheus, chocolate river
// =====================================================================
function homieFace(c, x, y, t, i) {
    const blink = Math.sin(t / 900 + i) > 0.95;
    R(c, x - 3, y, 2, blink ? 1 : 2, "#2b1a10");
    R(c, x + 2, y, 2, blink ? 1 : 2, "#2b1a10");
    R(c, x - 2, y + 4, 5, 1, "#2b1a10");
    R(c, x - 3, y + 3, 1, 1, "#2b1a10");
    R(c, x + 3, y + 3, 1, 1, "#2b1a10");
}
const wholeCake = {
    sky: (e)=>{
        const { c, W, gy, t } = e;
        grad(c, W, 0, gy, [
            "#f783c4",
            "#ffb3d9",
            "#fff0f8"
        ]);
        // Prometheus, the living sun
        const px = W * 0.78;
        const py = gy * 0.22;
        for(let k = 0; k < 10; k++){
            const a = t / 900 + k * Math.PI / 5;
            tri(c, px + Math.cos(a) * 9, py + Math.sin(a) * 9, px + Math.cos(a + 0.25) * 9, py + Math.sin(a + 0.25) * 9, px + Math.cos(a + 0.12) * 17, py + Math.sin(a + 0.12) * 17, "#ff922b");
        }
        circle(c, px, py, 10, "#ffd43b");
        homieFace(c, px, py - 3, t, 1);
        // Zeus, the thundercloud homie
        const zx = W * 0.3 + Math.sin(t / 1500) * 20;
        puff(c, zx, gy * 0.2, 1.1, "#f1f3f5", "#c5ccd6");
        homieFace(c, zx + 11, gy * 0.2 - 3, t, 2);
        tiles(e.cam * 0.06, 120, W, (sx, i)=>puff(c, sx, gy * 0.12 + rnd(i) * 26, 0.6, "#fff5fb", "#ffd6eb"));
    },
    far: (e)=>{
        const { c, gy } = e;
        // Whole Cake Chateau
        tiles(e.cam * 0.17, 420, e.W, (sx)=>{
            const layers = [
                "#f8c8dc",
                "#fff3bf",
                "#d0bfff",
                "#ffc9c9",
                "#ffe8cc"
            ];
            layers.forEach((col, k)=>{
                const w = 130 - k * 24;
                const lx = sx + (130 - w) / 2;
                const ly = gy - 26 - k * 22;
                R(c, lx, ly, w, 22, col);
                for(let d = 0; d < w; d += 6)R(c, lx + d, ly, 4, 3 + (d % 12 === 0 ? 4 : 1), "#ffffff");
                for(let d = 4; d < w - 4; d += 10)R(c, lx + d, ly + 10, 3, 5, "#7048e8");
                for(let d = 2; d < w; d += 12)circle(c, lx + d, ly, 1.5, "#e03131");
            });
            // candle towers
            R(c, sx + 60, gy - 150, 10, 20, "#ffffff");
            R(c, sx + 64, gy - 156, 2, 6, "#5c3d1e");
            circle(c, sx + 65, gy - 158, 2, "#ffd43b");
            circle(c, sx + 65, gy - 132, 6, "#e03131");
        });
        ridge(e, 0.42, gy, 9, 0.03, 2, "#f3a6c8");
    },
    near: (e, x0, x1)=>{
        const { c, gy, t } = e;
        groundBand(e, x0, x1, "#ffffff", "#6b3b2a", 3);
        // chocolate river ripples + sprinkles
        props(e, x0, x1, 7, (sx, i)=>{
            R(c, sx, gy + 3, 3, 2 + i % 3 * 2, "#ffffff");
            R(c, sx + 2, gy + 9 + i % 5 * 3, 2, 1, [
                "#ff6b6b",
                "#ffd43b",
                "#69db7c",
                "#74c0fc"
            ][i % 4]);
            if (i % 4 === 0) R(c, sx + Math.round(Math.sin(t / 500 + i) * 2), gy + 20, 5, 1, "#8a5240");
        });
        props(e, x0 + 20, x1 - 30, 52, (sx, i)=>{
            const k = i % 5;
            if (k === 0 || k === 3) {
                // layered cake house with icing drips
                R(c, sx, gy - 16, 28, 16, "#f8c8dc");
                R(c, sx + 3, gy - 28, 22, 12, "#fff3bf");
                R(c, sx + 6, gy - 36, 16, 8, "#d0bfff");
                for(let d = 0; d < 28; d += 5)R(c, sx + d, gy - 16, 3, 3 + (d % 10 === 0 ? 3 : 0), "#ffffff");
                for(let d = 3; d < 25; d += 5)R(c, sx + d, gy - 28, 3, 2 + d % 2, "#ff8cc6");
                circle(c, sx + 14, gy - 38, 3, "#e03131");
                R(c, sx + 14, gy - 43, 1, 4, "#2b8a3e");
                R(c, sx + 11, gy - 9, 6, 9, "#7a3e1d");
                half(c, sx + 14, gy - 9, 3, "#7a3e1d");
                R(c, sx + 3, gy - 13, 4, 4, "#74c0fc");
                R(c, sx + 21, gy - 13, 4, 4, "#74c0fc");
            } else if (k === 1) {
                for(let y = 0; y < 26; y++)R(c, sx + 4, gy - y, 3, 1, Math.floor(y / 3) % 2 ? "#ffffff" : "#e03131");
                R(c, sx + 4, gy - 28, 8, 3, "#e03131");
                R(c, sx + 10, gy - 28, 3, 7, "#ffffff");
                R(c, sx + 10, gy - 24, 3, 2, "#e03131");
            } else if (k === 2) {
                // Homie tree with a face
                const sw = 0;
                R(c, sx + 6, gy - 18, 6, 18, "#8b5a2b");
                circle(c, sx + 9 + sw, gy - 26, 11, "#40c057");
                circle(c, sx + 3 + sw, gy - 22, 6, "#51cf66");
                circle(c, sx + 15 + sw, gy - 23, 6, "#37b24d");
                homieFace(c, sx + 9, gy - 14, t, i);
            } else {
                R(c, sx + 5, gy - 22, 1, 22, "#ffffff");
                circle(c, sx + 5, gy - 24, 7, "#cc5de8");
                circle(c, sx + 5, gy - 24, 4, "#f3d9fa");
                circle(c, sx + 5, gy - 24, 1.5, "#cc5de8");
                circle(c, sx + 16, gy - 3, 3, "#51cf66");
                circle(c, sx + 22, gy - 3, 3, "#ffd43b");
                circle(c, sx + 19, gy - 7, 3, "#ff6b6b");
            }
        });
    }
};
// =====================================================================
// 10. WANO — Flower Capital, Onigashima, Kaido dragon, torii, sakura
// =====================================================================
const wano = {
    sky: (e)=>{
        const { c, W, gy, t } = e;
        grad(c, W, 0, gy, [
            "#d9480f",
            "#ff8a5c",
            "#ffd8a8"
        ]);
        sun(c, W * 0.7, gy * 0.32, 14, "#ff3b3b", "rgba(255,120,90,0.25)");
        // Kaido's dragon form coiling through the sky
        const dx = t * 0.02 % (W + 240) - 120;
        const dy = gy * 0.18;
        for(let k = 0; k < 26; k++){
            const x = dx - k * 4;
            const y = dy + Math.sin(t / 400 - k / 3) * 6;
            circle(c, x, y, 3.2 - k * 0.07, "#4c6ef5");
            if (k % 3 === 0) R(c, x - 1, y - 4, 2, 2, "#edf2ff");
        }
        circle(c, dx + 3, dy + Math.sin(t / 400) * 6, 4.5, "#4c6ef5");
        R(c, dx + 5, dy - 5 + Math.sin(t / 400) * 6, 1, 3, "#ffd43b");
        R(c, dx + 2, dy - 6 + Math.sin(t / 400) * 6, 1, 3, "#ffd43b");
    },
    far: (e)=>{
        const { c, gy, t } = e;
        // Mt. Fuji
        tiles(e.cam * 0.08, 560, e.W, (sx)=>{
            poly(c, [
                sx - 90,
                gy - 10,
                sx + 90,
                gy - 10,
                sx + 14,
                gy - 96,
                sx - 14,
                gy - 96
            ], "#7c6a9c");
            poly(c, [
                sx - 22,
                gy - 74,
                sx + 22,
                gy - 74,
                sx + 14,
                gy - 96,
                sx - 14,
                gy - 96
            ], "#ffffff");
            poly(c, [
                sx - 22,
                gy - 74,
                sx - 14,
                gy - 70,
                sx - 6,
                gy - 74,
                sx + 4,
                gy - 69,
                sx + 12,
                gy - 74,
                sx + 22,
                gy - 74
            ], "#ffffff");
        });
        // Onigashima — the skull island
        tiles(e.cam * 0.12, 640, e.W, (sx)=>{
            const ox = sx + 300;
            R(c, ox - 40, gy - 34, 90, 24, "#3b2f4a");
            circle(c, ox + 5, gy - 56, 30, "#4a3d5c");
            circle(c, ox - 6, gy - 60, 7, "#1a1424");
            circle(c, ox + 16, gy - 60, 7, "#1a1424");
            R(c, ox - 6, gy - 44, 22, 5, "#1a1424");
            tri(c, ox - 24, gy - 74, ox - 14, gy - 80, ox - 30, gy - 100, "#d9c8a0");
            tri(c, ox + 24, gy - 74, ox + 34, gy - 80, ox + 40, gy - 100, "#d9c8a0");
        });
        // Flower Capital castle (Orochi castle)
        tiles(e.cam * 0.22, 340, e.W, (sx)=>{
            R(c, sx, gy - 24, 50, 14, "#8d8d8d");
            for(let k = 0; k < 4; k++){
                const w = 44 - k * 9;
                const x = sx + (50 - w) / 2;
                const y = gy - 34 - k * 14;
                R(c, x + 2, y, w - 4, 10, "#f8f1e3");
                R(c, x - 4, y - 2, w + 8, 3, "#2b1b17");
                R(c, x - 6, y - 3, 3, 2, "#2b1b17");
                R(c, x + w + 3, y - 3, 3, 2, "#2b1b17");
                for(let w2 = 0; w2 < w - 8; w2 += 6)R(c, x + 4 + w2, y + 4, 2, 3, "#5a2d1a");
            }
            R(c, sx + 23, gy - 96, 4, 6, "#ffd43b");
        });
        ridge(e, 0.45, gy, 8, 0.03, 9, "#b86b4b");
    },
    near: (e, x0, x1)=>{
        groundBand(e, x0, x1, "#82a35a", "#a9794a", 2);
        const { c, gy, t } = e;
        props(e, x0, x1, 12, (sx, i)=>R(c, sx, gy + 4 + i % 3 * 3, 6, 1, "#8f6238"));
        props(e, x0 + 20, x1 - 30, 62, (sx, i)=>{
            const k = i % 5;
            if (k === 0) {
                // torii gate
                R(c, sx + 2, gy - 32, 3, 32, "#e03131");
                R(c, sx + 23, gy - 32, 3, 32, "#e03131");
                R(c, sx - 2, gy - 34, 32, 3, "#c92a2a");
                poly(c, [
                    sx - 5,
                    gy - 36,
                    sx + 33,
                    gy - 36,
                    sx + 31,
                    gy - 38,
                    sx - 3,
                    gy - 38
                ], "#212529");
                R(c, sx + 1, gy - 27, 26, 2, "#e03131");
                R(c, sx + 12, gy - 31, 4, 4, "#1a1a1a");
            } else if (k === 1 || k === 4) {
                // cherry blossom tree
                R(c, sx + 9, gy - 18, 3, 18, "#5c3d2e");
                R(c, sx + 4, gy - 16, 6, 1, "#5c3d2e");
                circle(c, sx + 10, gy - 24, 10, "#f9a8d4");
                circle(c, sx + 3, gy - 19, 6, "#fbcfe8");
                circle(c, sx + 17, gy - 19, 6, "#f472b6");
                circle(c, sx + 10, gy - 30, 5, "#fbcfe8");
            } else if (k === 2) {
                // samurai house with curved tile roof, shoji and lantern
                R(c, sx, gy - 18, 32, 18, "#d9b38c");
                R(c, sx + 2, gy - 16, 1, 16, "#6b4423");
                R(c, sx + 29, gy - 16, 1, 16, "#6b4423");
                R(c, sx + 8, gy - 14, 16, 14, "#f1e3c6");
                for(let s = 0; s < 4; s++)R(c, sx + 8 + s * 4, gy - 14, 1, 14, "#6b4423");
                R(c, sx + 8, gy - 8, 16, 1, "#6b4423");
                poly(c, [
                    sx - 6,
                    gy - 18,
                    sx + 38,
                    gy - 18,
                    sx + 32,
                    gy - 24,
                    sx,
                    gy - 24
                ], "#343a40");
                R(c, sx - 7, gy - 20, 3, 2, "#343a40");
                R(c, sx + 36, gy - 20, 3, 2, "#343a40");
                poly(c, [
                    sx + 4,
                    gy - 24,
                    sx + 28,
                    gy - 24,
                    sx + 23,
                    gy - 29,
                    sx + 9,
                    gy - 29
                ], "#495057");
                const glow = Math.sin(t / 300 + i) > -0.5;
                R(c, sx + 34, gy - 16, 1, 3, "#212529");
                R(c, sx + 32, gy - 13, 5, 7, glow ? "#ff6b6b" : "#c92a2a");
                R(c, sx + 32, gy - 10, 5, 1, "#212529");
            } else {
                // samurai with katana + Komachiyo-style dog
                const s2 = Math.round(Math.sin(t / 240 + i) * 1);
                R(c, sx + 4, gy - 14, 7, 9, "#364fc7");
                R(c, sx + 3, gy - 6, 9, 3, "#212529");
                circle(c, sx + 7.5, gy - 16, 2.5, "#f1c27d");
                R(c, sx + 6, gy - 20, 3, 2, "#212529");
                R(c, sx + 5, gy - 3, 2, 3 + s2, "#212529");
                R(c, sx + 9, gy - 3, 2, 3 - s2, "#212529");
                line(c, sx + 11, gy - 10, sx + 18, gy - 15, "#ced4da");
                R(c, sx + 22, gy - 8, 10, 5, "#f1e3c6");
                R(c, sx + 30, gy - 11, 4, 4, "#f1e3c6");
                R(c, sx + 23, gy - 3, 1, 3, "#f1e3c6");
                R(c, sx + 29, gy - 3, 1, 3, "#f1e3c6");
                R(c, sx + 32, gy - 10, 1, 1, "#000");
            }
        });
    }
};
// =====================================================================
// 11. ELBAPH — Treasure Tree Adam, giants, viking ships
// =====================================================================
const elbaph = {
    sky: (e)=>{
        grad(e.c, e.W, 0, e.gy, [
            "#4dabf7",
            "#a5d8ff",
            "#e7f5ff"
        ]);
        driftClouds(e, "#ffffff", "#d0e6f8", 0.06);
    },
    far: (e)=>{
        const { c, gy, W, t } = e;
        // Treasure Tree Adam: a trunk so big the canopy is the sky
        tiles(e.cam * 0.1, 700, W, (sx)=>{
            R(c, sx, 0, 110, gy, "#6b4b2a");
            for(let k = 0; k < 6; k++)R(c, sx + 8 + k * 18, 0, 4, gy, k % 2 ? "#5a3d21" : "#7d5a35");
            for(let k = -3; k < 6; k++)circle(c, sx + 55 + k * 50, 4, 46, k % 2 ? "#2b7a2e" : "#2f8a33");
            poly(c, [
                sx - 50,
                gy - 20,
                sx,
                gy - 50,
                sx,
                gy - 30
            ], "#6b4b2a");
            poly(c, [
                sx + 160,
                gy - 20,
                sx + 110,
                gy - 60,
                sx + 110,
                gy - 36
            ], "#6b4b2a");
            // giant town built on the branches
            for(let k = 0; k < 3; k++){
                R(c, sx + 120 + k * 30, gy - 120 - k * 6, 24, 16, "#a0704a");
                poly(c, [
                    sx + 118 + k * 30,
                    gy - 120 - k * 6,
                    sx + 146 + k * 30,
                    gy - 120 - k * 6,
                    sx + 132 + k * 30,
                    gy - 132 - k * 6
                ], "#5c3d2e");
            }
            R(c, sx + 110, gy - 104, 110, 4, "#6b4b2a");
        });
        ridge(e, 0.3, gy - 4, 24, 0.012, 3, "#4a8f45");
        // giants walking in the distance
        tiles(e.cam * 0.35 + t * 0.008, 300, W, (sx, i)=>{
            const step = Math.round(Math.sin(t / 500 + i) * 2);
            const col = "rgba(60,40,30,0.55)";
            R(c, sx, gy - 84, 22, 40, col);
            circle(c, sx + 11, gy - 92, 9, col);
            poly(c, [
                sx + 2,
                gy - 96,
                sx - 6,
                gy - 108,
                sx + 4,
                gy - 98
            ], col);
            poly(c, [
                sx + 20,
                gy - 96,
                sx + 28,
                gy - 108,
                sx + 18,
                gy - 98
            ], col);
            R(c, sx + 2, gy - 44, 7, 40 + step, col);
            R(c, sx + 13, gy - 44, 7, 40 - step, col);
            R(c, sx - 6, gy - 80, 6, 30, col);
            R(c, sx + 22, gy - 80, 6, 30, col);
            R(c, sx + 28, gy - 100, 3, 50, col);
        });
    },
    near: (e, x0, x1)=>{
        groundBand(e, x0, x1, "#6fcf63", "#6b4f2f", 4);
        const { c, gy } = e;
        props(e, x0, x1, 9, (sx, i)=>{
            if (rnd(i) > 0.4) R(c, sx, gy - 2, 1, 2, "#51b84a");
        });
        props(e, x0 + 30, x1 - 60, 130, (sx, i)=>{
            const k = i % 4;
            if (k === 0) {
                // giant viking longhouse — towers over Luffy
                R(c, sx, gy - 56, 90, 56, "#a0704a");
                for(let p = 0; p < 90; p += 8)R(c, sx + p, gy - 56, 1, 56, "#7a5233");
                poly(c, [
                    sx - 12,
                    gy - 56,
                    sx + 102,
                    gy - 56,
                    sx + 45,
                    gy - 98
                ], "#5c3d2e");
                R(c, sx + 44, gy - 104, 2, 8, "#5c3d2e");
                tri(c, sx + 40, gy - 104, sx + 50, gy - 104, sx + 52, gy - 112, "#5c3d2e");
                R(c, sx + 34, gy - 32, 22, 32, "#3d2817");
                circle(c, sx + 14, gy - 42, 9, "#c92a2a");
                circle(c, sx + 14, gy - 42, 3, "#ced4da");
                circle(c, sx + 76, gy - 42, 9, "#1971c2");
                circle(c, sx + 76, gy - 42, 3, "#ced4da");
            } else if (k === 1) {
                // half-buried giant helmet + giant axe
                half(c, sx + 30, gy, 28, "#adb5bd");
                R(c, sx + 2, gy - 4, 56, 4, "#868e96");
                tri(c, sx + 4, gy - 18, sx + 12, gy - 14, sx - 6, gy - 44, "#f1e3c6");
                tri(c, sx + 56, gy - 18, sx + 48, gy - 14, sx + 66, gy - 44, "#f1e3c6");
                R(c, sx + 86, gy - 76, 5, 76, "#7a5233");
                poly(c, [
                    sx + 91,
                    gy - 76,
                    sx + 91,
                    gy - 50,
                    sx + 116,
                    gy - 54,
                    sx + 116,
                    gy - 72
                ], "#ced4da");
                R(c, sx + 91, gy - 76, 25, 2, "#f1f3f5");
            } else if (k === 2) {
                // giant viking ship beached
                poly(c, [
                    sx - 10,
                    gy - 30,
                    sx + 110,
                    gy - 30,
                    sx + 96,
                    gy,
                    sx + 4,
                    gy
                ], "#8b5a2b");
                R(c, sx - 10, gy - 32, 120, 3, "#f2c94c");
                for(let s = 0; s < 6; s++)circle(c, sx + 8 + s * 18, gy - 20, 6, s % 2 ? "#c92a2a" : "#f1f3f5");
                poly(c, [
                    sx + 110,
                    gy - 30,
                    sx + 122,
                    gy - 54,
                    sx + 114,
                    gy - 58,
                    sx + 104,
                    gy - 32
                ], "#8b5a2b");
                circle(c, sx + 118, gy - 56, 4, "#8b5a2b");
                R(c, sx + 48, gy - 90, 3, 60, "#5c3d1e");
                R(c, sx + 26, gy - 86, 48, 34, "#f1f3f5");
                for(let s = 0; s < 4; s++)R(c, sx + 26, gy - 82 + s * 9, 48, 3, "#c92a2a");
            } else {
                // giant mushroom + boulders
                R(c, sx + 18, gy - 44, 12, 44, "#f1e3c6");
                half(c, sx + 24, gy - 40, 26, "#e8590c");
                circle(c, sx + 14, gy - 52, 3, "#ffffff");
                circle(c, sx + 30, gy - 56, 4, "#ffffff");
                circle(c, sx + 38, gy - 46, 2.5, "#ffffff");
                half(c, sx + 70, gy, 16, "#868e96");
                half(c, sx + 88, gy, 9, "#adb5bd");
            }
        });
    }
};
// =====================================================================
// 12. LAUGH TALE — Thousand Sunny, Roger's treasure, Road Poneglyphs
// =====================================================================
const laughTale = {
    sky: (e)=>{
        const { c, W, gy, t } = e;
        grad(c, W, 0, gy, [
            "#15aabf",
            "#66d9e8",
            "#fff1a8"
        ]);
        sun(c, W * 0.5, gy * 0.26, 13, "#fff9db", "rgba(255,236,153,0.35)");
        for(let k = 0; k < 12; k++){
            const a = k * Math.PI / 6 + t / 4000;
            line(c, W * 0.5, gy * 0.26, W * 0.5 + Math.cos(a) * 60, gy * 0.26 + Math.sin(a) * 60, "rgba(255,248,200,0.18)", 2);
        }
        tiles(0, 23, W, (sx, i)=>{
            if (Math.sin(t / 300 + i * 1.7) > 0.85) R(c, sx, rnd(i) * gy * 0.7, 1, 1, "#ffffff");
        });
        driftClouds(e, "#ffffff", "#e0f4f7", 0.1);
    },
    far: (e)=>{
        const { c, gy, W, t } = e;
        sea(e, gy - 26, 26, "#0fb3c4", "#7ee8f2");
        // the laughing skull rock that gives the island its name
        tiles(e.cam * 0.18, 460, W, (sx)=>{
            circle(c, sx + 34, gy - 46, 30, "#e9e3d0");
            R(c, sx + 12, gy - 26, 44, 18, "#e9e3d0");
            circle(c, sx + 24, gy - 50, 7, "#3b2f2f");
            circle(c, sx + 44, gy - 50, 7, "#3b2f2f");
            poly(c, [
                sx + 32,
                gy - 40,
                sx + 36,
                gy - 40,
                sx + 34,
                gy - 36
            ], "#3b2f2f");
            R(c, sx + 18, gy - 32, 32, 7, "#3b2f2f");
            for(let k = 0; k < 7; k++)R(c, sx + 19 + k * 4.5, gy - 32, 3, 2, "#e9e3d0");
            for(let k = 0; k < 7; k++)R(c, sx + 19 + k * 4.5, gy - 27, 3, 2, "#e9e3d0");
            R(c, sx + 2, gy - 72, 64, 4, "#f2c94c");
            R(c, sx + 12, gy - 78, 44, 6, "#f2c94c");
            R(c, sx + 2, gy - 70, 64, 2, "#c0392b");
        });
        // The Thousand Sunny at anchor
        tiles(e.cam * 0.24, 380, W, (sx)=>{
            sailShip(c, sx + 200, gy - 18, 1, {
                hull: "#f2c94c",
                trim: "#8b5a2b",
                sail: "#ffffff",
                sailMark: "#111111",
                head: "lion",
                t
            });
        });
    },
    near: (e, x0, x1)=>{
        groundBand(e, x0, x1, "#fff3bf", "#f2d48a", 3);
        const { c, gy, t } = e;
        props(e, x0, x1, 11, (sx, i)=>{
            if (Math.sin(t / 250 + i * 2.3) > 0.8) R(c, sx, gy + 4 + i % 4 * 4, 1, 1, "#ffffff");
            if (i % 9 === 0) R(c, sx, gy + 10, 3, 2, "#ff8787");
        });
        props(e, x0 + 20, x1 + 400, 50, (sx, i)=>{
            const k = i % 5;
            if (k === 0) {
                palm(c, sx + 6, gy, 30, t);
            } else if (k === 1) {
                // open treasure chest overflowing with gold
                R(c, sx, gy - 11, 22, 11, "#8b5a2b");
                R(c, sx, gy - 7, 22, 2, "#fcc419");
                R(c, sx + 9, gy - 9, 4, 4, "#fcc419");
                poly(c, [
                    sx - 1,
                    gy - 12,
                    sx + 23,
                    gy - 12,
                    sx + 21,
                    gy - 22,
                    sx + 1,
                    gy - 22
                ], "#7a4a1f");
                R(c, sx - 1, gy - 22, 24, 2, "#fcc419");
                R(c, sx + 2, gy - 14, 18, 4, "#ffd43b");
                circle(c, sx + 6, gy - 14, 3, "#fab005");
                circle(c, sx + 15, gy - 14, 3, "#fab005");
                R(c, sx + 10, gy - 16, 2, 2, "#e64980");
                R(c, sx + 4, gy - 16, 2, 2, "#4dabf7");
                const sp = Math.sin(t / 180 + i);
                if (sp > 0.3) {
                    R(c, sx + 5, gy - 26, 1, 3, "#ffffff");
                    R(c, sx + 4, gy - 25, 3, 1, "#ffffff");
                }
                if (sp < -0.4) {
                    R(c, sx + 17, gy - 25, 1, 3, "#ffffff");
                    R(c, sx + 16, gy - 24, 3, 1, "#ffffff");
                }
            } else if (k === 2) {
                circle(c, sx + 8, gy, 9, "#fcc419");
                circle(c, sx + 8, gy - 2, 6, "#ffe066");
                R(c, sx + 17, gy - 4, 3, 3, "#4dabf7");
                R(c, sx + 2, gy - 3, 3, 3, "#69db7c");
                R(c, sx + 9, gy - 7, 2, 2, "#e64980");
                // Roger's straw hat?! resting on the gold
                R(c, sx + 3, gy - 9, 10, 1, "#f2c94c");
                R(c, sx + 5, gy - 11, 6, 2, "#f2c94c");
                R(c, sx + 5, gy - 10, 6, 1, "#c0392b");
            } else if (k === 3) {
                // red Road Poneglyph
                R(c, sx, gy - 26, 20, 26, "#c92a2a");
                R(c, sx, gy - 26, 20, 2, "#e03131");
                R(c, sx + 18, gy - 26, 2, 26, "#a61e1e");
                for(let r = 0; r < 6; r++)R(c, sx + 3, gy - 22 + r * 4, 13, 1, "#8b1a1a");
                circle(c, sx + 10, gy - 30, 1.5 + Math.sin(t / 300) * 0.5, "rgba(255,240,180,0.9)");
            } else {
                // the Straw Hat jolly roger planted in the sand
                R(c, sx + 4, gy - 34, 1, 34, "#5c3d1e");
                jollyRoger(c, sx + 5, gy - 34, 14, 10, 0);
            }
        });
    }
};
const SAGA_SCENES = [
    eastBlue,
    alabasta,
    skyIsland,
    eniesLobby,
    thrillerBark,
    marineford,
    fishManIsland,
    dressrosa,
    wholeCake,
    wano,
    elbaph,
    laughTale
];
function drawSignpost(c, sx, gy, n, reached, t) {
    R(c, sx, gy - 22, 2, 22, "#5c3d1e");
    R(c, sx - 8, gy - 22, 18, 9, reached ? "#ffd43b" : "#e9dcc3");
    R(c, sx - 8, gy - 22, 18, 1, "#ffffff");
    const pips = Math.min(n, 12);
    for(let k = 0; k < pips; k++)R(c, sx - 6 + k % 6 * 3, gy - 20 + Math.floor(k / 6) * 3, 2, 2, "#5c3d1e");
    if (reached && Math.sin(t / 200) > 0) R(c, sx + 8, gy - 26, 2, 2, "#ffffff");
}
// =====================================================================
// DETAILS — small living touches per saga, drawn in world space on top of the scene
// =====================================================================
function flier(e, x0, x1, sp, yTop, yRange, speed, draw) {
    props(e, x0, x1, sp, (sx, i)=>{
        const drift = (e.t * speed + i * 97) % (sp * 2) - sp;
        draw(sx + drift, yTop + rnd(i) * yRange + Math.sin(e.t / 400 + i) * 3, i);
    });
}
const SAGA_DETAILS = [
    // 1. East Blue — butterflies, chickens pecking, a barrel of meat by the dock
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        flier(e, x0, x1, 110, gy - 30, 18, 0.01, (x, y, i)=>{
            const f = Math.sin(t / 90 + i) > 0;
            R(c, x, y, 1, 2, "#212529");
            R(c, x - (f ? 2 : 1), y - 1, f ? 2 : 1, 2, i % 2 ? "#ffd43b" : "#ffffff");
            R(c, x + 1, y - 1, f ? 2 : 1, 2, i % 2 ? "#ffd43b" : "#ffffff");
        });
        props(e, x0 + 50, x1 - 40, 150, (sx, i)=>{
            const peck = Math.sin(t / 250 + i) > 0.6 ? 1 : 0;
            R(c, sx, gy - 5, 5, 4, "#ffffff");
            R(c, sx + 4, gy - 7 + peck, 2, 3, "#ffffff");
            R(c, sx + 6, gy - 6 + peck, 1, 1, "#fab005");
            R(c, sx + 4, gy - 8 + peck, 1, 1, "#e03131");
            R(c, sx + 1, gy - 1, 1, 1, "#fab005");
            R(c, sx + 3, gy - 1, 1, 1, "#fab005");
            // bone-in meat on a crate
            R(c, sx + 18, gy - 5, 8, 5, "#a0703c");
            circle(c, sx + 22, gy - 8, 3, "#c2410c");
            R(c, sx + 25, gy - 9, 3, 1, "#fff8e1");
        });
    },
    // 2. Alabasta — tumbleweeds (ONLY here), circling vultures, cactus, camel
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        props(e, x0, x1, 170, (sx, i)=>{
            const roll = (t * 0.04 + i * 61) % 170 - 85;
            const x = sx - roll;
            const bounce = Math.round(Math.abs(Math.sin(t / 160 + i)) * 4);
            const a = -t / 120;
            circle(c, x, gy - 5 - bounce, 5, "rgba(150,100,50,0.9)");
            circle(c, x, gy - 5 - bounce, 3, "rgba(200,150,80,0.9)");
            for(let k = 0; k < 4; k++)line(c, x, gy - 5 - bounce, x + Math.cos(a + k) * 5, gy - 5 - bounce + Math.sin(a + k) * 5, "#7a4a1f");
            R(c, x - 2, gy, 5, 1, "rgba(0,0,0,0.12)");
        });
        flier(e, x0, x1, 200, gy - 80, 20, 0, (x, y, i)=>{
            const a = t / 1200 + i;
            const vx = x + Math.cos(a) * 18;
            const vy = y + Math.sin(a) * 6;
            R(c, vx - 3, vy, 7, 1, "#3b2a1a");
            R(c, vx - 4, vy - 1, 2, 1, "#3b2a1a");
            R(c, vx + 3, vy - 1, 2, 1, "#3b2a1a");
        });
        props(e, x0 + 70, x1 - 30, 140, (sx, i)=>{
            if (i % 2) {
                R(c, sx + 3, gy - 14, 3, 14, "#2f9e44");
                R(c, sx, gy - 10, 3, 2, "#2f9e44");
                R(c, sx, gy - 13, 2, 3, "#2f9e44");
                R(c, sx + 6, gy - 8, 3, 2, "#2f9e44");
                R(c, sx + 7, gy - 11, 2, 3, "#2f9e44");
            } else {
                const st = Math.round(Math.sin(t / 300 + i) * 1);
                R(c, sx, gy - 10, 14, 5, "#c99a5b");
                R(c, sx + 4, gy - 13, 5, 3, "#c99a5b");
                R(c, sx + 12, gy - 15, 3, 7, "#c99a5b");
                R(c, sx + 13, gy - 17, 4, 3, "#c99a5b");
                R(c, sx + 1, gy - 5, 1, 5 + st, "#a87b44");
                R(c, sx + 11, gy - 5, 1, 5 - st, "#a87b44");
            }
        });
    },
    // 3. Sky Island — South Birds gliding, dial shells, a cloud fox (Su)
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        flier(e, x0, x1, 150, gy - 60, 30, 0.02, (x, y, i)=>{
            const f = Math.sin(t / 140 + i) > 0 ? -1 : 1;
            R(c, x, y, 5, 2, "#495057");
            R(c, x - 3, y + f, 3, 1, "#495057");
            R(c, x + 5, y + f, 3, 1, "#495057");
            R(c, x + 4, y - 1, 2, 1, "#fab005");
        });
        props(e, x0 + 60, x1 - 30, 170, (sx, i)=>{
            const hop = Math.round(Math.abs(Math.sin(t / 260 + i)) * 2);
            circle(c, sx + 4, gy - 4 - hop, 4, "#f8f9fa");
            R(c, sx + 7, gy - 9 - hop, 3, 3, "#f8f9fa");
            R(c, sx + 7, gy - 11 - hop, 1, 2, "#f8f9fa");
            R(c, sx + 9, gy - 11 - hop, 1, 2, "#f8f9fa");
            R(c, sx + 8, gy - 8 - hop, 1, 1, "#000");
            circle(c, sx - 1, gy - 6 - hop, 2, "#f8f9fa");
        });
    },
    // 4. Enies Lobby — Den Den Mushi on a post, a Marine warship on the horizon, diving gulls
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        props(e, x0 + 40, x1 - 40, 160, (sx, i)=>{
            R(c, sx, gy - 8, 1, 8, "#495057");
            R(c, sx - 3, gy - 9, 7, 1, "#495057");
            circle(c, sx, gy - 12, 3, "#c9a26b");
            circle(c, sx, gy - 12, 1.5, "#e9dcc3");
            R(c, sx - 4, gy - 11, 3, 2, "#69db7c");
            R(c, sx - 4, gy - 14, 1, 3, "#69db7c");
            if (Math.sin(t / 300 + i) > 0.6) R(c, sx + 4, gy - 16, 2, 1, "#ffffff");
        });
        flier(e, x0, x1, 140, gy - 55, 20, 0.02, (x, y, i)=>{
            const dive = Math.max(0, Math.sin(t / 900 + i)) * 20;
            R(c, x, y + dive, 1, 1, "#ffffff");
            R(c, x - 2, y + dive - 1, 2, 1, "#ffffff");
            R(c, x + 1, y + dive - 1, 2, 1, "#ffffff");
        });
    },
    // 5. Thriller Bark — will-o'-wisps floating over graves and Kumashi the bear zombie
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        flier(e, x0, x1, 70, gy - 22, 14, 0.004, (x, y, i)=>{
            const glow = 0.5 + Math.sin(t / 200 + i) * 0.3;
            circle(c, x, y, 3, `rgba(130,255,200,${glow * 0.35})`);
            circle(c, x, y, 1.2, `rgba(200,255,230,${glow})`);
        });
        props(e, x0 + 80, x1 - 40, 220, (sx, i)=>{
            const sw = Math.round(Math.sin(t / 400 + i) * 1);
            R(c, sx, gy - 12, 8, 12, "#ffc9de");
            circle(c, sx + 4, gy - 15, 4, "#ffc9de");
            circle(c, sx + 1, gy - 19, 1.5, "#ffc9de");
            circle(c, sx + 7, gy - 19, 1.5, "#ffc9de");
            R(c, sx + 2, gy - 16, 1, 1, "#000");
            R(c, sx + 5, gy - 16, 1, 1, "#000");
            R(c, sx - 2 + sw, gy - 10, 2, 5, "#ffc9de");
            R(c, sx + 8 - sw, gy - 10, 2, 5, "#ffc9de");
            R(c, sx + 2, gy - 8, 4, 1, "#5c3d2e");
        });
    },
    // 6. Marineford — cannonballs arcing across with smoke puffs, scattered rubble
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        props(e, x0, x1, 180, (sx, i)=>{
            const p = (t / 1600 + rnd(i)) % 1;
            const x = sx - 60 + p * 120;
            const y = gy - 20 - Math.sin(p * Math.PI) * 50;
            circle(c, x, y, 2, "#212529");
            for(let k = 1; k <= 3; k++)circle(c, x - k * 4, y + k * 1.5, 1 + k * 0.4, `rgba(200,200,200,${0.4 - k * 0.1})`);
            if (p > 0.92) circle(c, sx + 60, gy - 6, 6 * (p - 0.9) * 20, "rgba(255,150,60,0.5)");
        });
        props(e, x0 + 30, x1, 46, (sx, i)=>{
            R(c, sx, gy - 3, 4 + i % 3, 3, "#adb5bd");
            R(c, sx + 5, gy - 2, 3, 2, "#868e96");
        });
    },
    // 7. Fish-Man Island — jellyfish drifting and a sea turtle swimming by
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        flier(e, x0, x1, 90, gy - 70, 40, 0.004, (x, y, i)=>{
            const pulse = Math.sin(t / 300 + i) > 0 ? 1 : 0;
            const col = i % 2 ? "rgba(255,150,220,0.75)" : "rgba(170,200,255,0.75)";
            half(c, x, y, 4 + pulse, col);
            for(let k = 0; k < 3; k++)R(c, x - 3 + k * 3, y + 1, 1, 4 + (t / 150 + k + i) % 3, col);
        });
        props(e, x0, x1, 260, (sx, i)=>{
            const x = sx + (t * 0.02 + i * 50) % 160 - 80;
            const y = gy - 40 + Math.sin(t / 700 + i) * 4;
            const f = Math.sin(t / 200 + i) > 0 ? 1 : -1;
            half(c, x, y, 6, "#2b8a3e");
            R(c, x - 6, y, 12, 2, "#69db7c");
            R(c, x + 6, y - 2, 3, 3, "#69db7c");
            R(c, x - 4, y + 1 + f, 3, 2, "#69db7c");
            R(c, x + 2, y + 1 - f, 3, 2, "#69db7c");
        });
    },
    // 8. Dressrosa — flocks of doves, sunflowers, a Tontatta dwarf darting between
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        flier(e, x0, x1, 120, gy - 80, 20, 0.025, (x, y, i)=>{
            const f = Math.sin(t / 110 + i) > 0 ? -1 : 1;
            R(c, x, y, 3, 2, "#f8f9fa");
            R(c, x - 2, y + f, 2, 1, "#f8f9fa");
            R(c, x + 3, y + f, 2, 1, "#f8f9fa");
        });
        props(e, x0 + 20, x1 - 20, 40, (sx, i)=>{
            if (i % 3) return;
            R(c, sx + 2, gy - 9, 1, 9, "#2f9e44");
            R(c, sx, gy - 5, 2, 1, "#2f9e44");
            circle(c, sx + 2.5, gy - 11, 2.5, "#fcc419");
            circle(c, sx + 2.5, gy - 11, 1, "#7a4a1f");
        });
        props(e, x0, x1, 210, (sx, i)=>{
            const x = sx + Math.sin(t / 220 + i) * 30;
            R(c, x, gy - 4, 2, 3, "#e8590c");
            R(c, x, gy - 6, 2, 2, "#f1c27d");
            R(c, x - 1, gy - 7, 4, 1, "#1c7ed6");
            R(c, x + 2, gy - 2, 2, 2, "#5c3d2e");
        });
    },
    // 9. Whole Cake Island — floating candy balloons and a walking Chess Peacekeeper
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        flier(e, x0, x1, 130, gy - 70, 30, 0.004, (x, y, i)=>{
            line(c, x, y + 4, x + Math.sin(t / 500 + i) * 2, y + 14, "rgba(255,255,255,0.7)");
            circle(c, x, y, 4, [
                "#ff6b6b",
                "#74c0fc",
                "#ffd43b",
                "#da77f2"
            ][i % 4]);
            R(c, x - 2, y - 2, 1, 1, "#ffffff");
        });
        props(e, x0 + 60, x1 - 40, 190, (sx, i)=>{
            const st = Math.round(Math.sin(t / 250 + i) * 1);
            R(c, sx, gy - 16, 8, 12, i % 2 ? "#212529" : "#f8f9fa");
            R(c, sx + 1, gy - 20, 6, 4, i % 2 ? "#212529" : "#f8f9fa");
            R(c, sx + 2, gy - 22, 4, 2, "#ffd43b");
            R(c, sx + 2, gy - 18, 1, 1, "#e03131");
            R(c, sx + 5, gy - 18, 1, 1, "#e03131");
            R(c, sx + 1, gy - 4, 2, 4 + st, "#868e96");
            R(c, sx + 5, gy - 4, 2, 4 - st, "#868e96");
            R(c, sx + 9, gy - 20, 1, 16, "#ced4da");
        });
    },
    // 10. Wano — fireflies and paper lanterns floating up, a koi pond
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        flier(e, x0, x1, 60, gy - 30, 24, 0.003, (x, y, i)=>{
            if (Math.sin(t / 250 + i * 2) > 0.2) circle(c, x, y, 1, "#fff3a0");
        });
        props(e, x0, x1, 230, (sx, i)=>{
            const rise = (t * 0.008 + i * 40) % (gy + 20);
            const x = sx + Math.sin(t / 900 + i) * 6;
            const y = gy - rise;
            R(c, x, y, 4, 5, "#ff922b");
            R(c, x, y + 1, 4, 1, "#e8590c");
            R(c, x + 1, y + 5, 2, 1, "rgba(255,240,150,0.9)");
        });
        props(e, x0 + 90, x1 - 60, 250, (sx)=>{
            R(c, sx, gy + 4, 26, 5, "#1c7ed6");
            R(c, sx, gy + 4, 26, 1, "#74c0fc");
            const kx = sx + 4 + t / 60 % 16;
            R(c, kx, gy + 6, 4, 2, "#ff922b");
            R(c, kx + 1, gy + 6, 1, 1, "#ffffff");
        });
    },
    // 11. Elbaph — giant eagles soaring, giant footprints in the snow, a campfire
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        flier(e, x0, x1, 260, gy - 110, 30, 0.012, (x, y, i)=>{
            const f = Math.sin(t / 300 + i) > 0 ? -3 : 3;
            R(c, x, y, 10, 3, "#5c3d2e");
            poly(c, [
                x,
                y + 1,
                x - 14,
                y + f,
                x - 12,
                y + f + 2
            ], "#5c3d2e");
            poly(c, [
                x + 10,
                y + 1,
                x + 24,
                y + f,
                x + 22,
                y + f + 2
            ], "#5c3d2e");
            R(c, x + 10, y, 3, 2, "#f8f9fa");
            R(c, x + 13, y + 1, 2, 1, "#fab005");
        });
        props(e, x0 + 20, x1 - 20, 54, (sx, i)=>{
            R(c, sx, gy + 3 + i % 2 * 4, 12, 3, "rgba(80,60,40,0.35)");
            R(c, sx + 12, gy + 2 + i % 2 * 4, 3, 2, "rgba(80,60,40,0.35)");
        });
        props(e, x0 + 100, x1 - 60, 280, (sx)=>{
            R(c, sx, gy - 2, 12, 2, "#5c3d2e");
            const f = Math.sin(t / 80);
            tri(c, sx + 1, gy - 2, sx + 11, gy - 2, sx + 6 + f, gy - 12, "#ff922b");
            tri(c, sx + 3, gy - 2, sx + 9, gy - 2, sx + 6 - f, gy - 8, "#ffd43b");
        });
    },
    // 12. Laugh Tale — crabs scuttling, seashells, gentle surf at the shoreline
    (e, x0, x1)=>{
        const { c, gy, t } = e;
        props(e, x0, x1 + 400, 120, (sx, i)=>{
            const x = sx + Math.sin(t / 500 + i) * 14;
            R(c, x, gy - 3, 6, 3, "#e8590c");
            R(c, x - 2, gy - 5, 2, 2, "#e8590c");
            R(c, x + 6, gy - 5, 2, 2, "#e8590c");
            R(c, x + 1, gy - 4, 1, 1, "#000");
            R(c, x + 4, gy - 4, 1, 1, "#000");
            R(c, x, gy, 1, 1, "#c2410c");
            R(c, x + 5, gy, 1, 1, "#c2410c");
            circle(c, sx + 40, gy - 1, 2, i % 2 ? "#ffc9c9" : "#fff0f6");
        });
        props(e, x0, x1 + 400, 30, (sx, i)=>{
            const w = Math.round((Math.sin(t / 900 + i * 0.3) + 1) * 2);
            R(c, sx, gy + 14 + w, 22, 1, "rgba(255,255,255,0.75)");
        });
    }
];
}),
"[project]/src/data/achievement-emblems.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Hand-drawn 16×16 pixel sprites. No fonts, emoji, or image downloads.
__turbopack_context__.s([
    "EMBLEM_SPRITES",
    ()=>EMBLEM_SPRITES
]);
function art(rows, main, shade, accent = "#f5c84b") {
    return {
        rows,
        palette: {
            m: main,
            s: shade,
            a: accent,
            h: "#fff4d6",
            o: "#18243b",
            b: "#49637b"
        }
    };
}
function glyphs(sprite, text, x, y, color = "o") {
    const glyph = {
        "0": [
            "111",
            "101",
            "101",
            "101",
            "111"
        ],
        "3": [
            "111",
            "001",
            "111",
            "001",
            "111"
        ],
        "7": [
            "111",
            "001",
            "010",
            "010",
            "010"
        ],
        "D": [
            "110",
            "101",
            "101",
            "101",
            "110"
        ]
    };
    const rows = Array.from({
        length: 16
    }, (_, r)=>(sprite.rows[r] ?? "").padEnd(16, ".").split(""));
    [
        ...text
    ].forEach((letter, l)=>glyph[letter].forEach((row, r)=>[
                ...row
            ].forEach((pixel, c)=>{
                if (pixel === "1") rows[y + r][x + l * 4 + c] = color;
            })));
    return {
        ...sprite,
        rows: rows.map((row)=>row.join(""))
    };
}
const calendar = art([
    "................",
    "....oo....oo....",
    "..oommoooommoo..",
    ".ommmmmmmmmmmmo.",
    ".osssssssssssso.",
    ".ohhhhhhhhhhhho.",
    ".ohhhhhhhhhhhho.",
    ".ohhhhhhhhhhhho.",
    ".ohhhhhhhhhhhho.",
    ".ohhhhhhhhhhhho.",
    ".ohhhhhhhhhhhho.",
    ".ohhhhhhhhhhhho.",
    ".ohhhhhhhhhhhho.",
    "..oooooooooooo..",
    "...bbbbbbbbbb...",
    "................"
], "#f17068", "#c14146");
const EMBLEM_SPRITES = {
    seal: art([
        "................",
        ".....oooooo.....",
        "...oommmmmmoo...",
        "..ommmmmmmmmmo..",
        "..ommhmmmhmmmo..",
        ".ommhhhhhmmmmmo.",
        ".ommmhhhmmmmmmo.",
        ".ommhhhhhmmmmmo.",
        "..ommhmhhmmmmo..",
        "..ommmmmmmmmmo..",
        "...oommmmmmoo...",
        ".....oooooo.....",
        "....sassass.....",
        "....sassass.....",
        "....ss..ss......",
        "................"
    ], "#eebc42", "#c64956", "#ed7084"),
    "first-voyage": art([
        ".......o........",
        ".......ommm.....",
        ".......ommm.....",
        "......ho........",
        ".....hhoh.......",
        "....hhhohh......",
        "...hhhhohhh.....",
        "..hhhhhohhhh....",
        "..sssssoaaaa....",
        ".......o........",
        ".oooooooooooooo.",
        "..ommmmmmmmmmo..",
        "...osssssssso...",
        "....oooooooo....",
        ".bb...bbbb...bb.",
        "...bbbb...bbbb.."
    ], "#bf824a", "#996235", "#e9b458"),
    perfect: glyphs(art([
        "................",
        "......mm........",
        ".....mmmm.......",
        "....mmmmmm......",
        ".mmmmmmmmmmmmm..",
        "..mmmmmmmmmmm...",
        "...mmmmmmmmm....",
        "....mmmmmmm.....",
        "...mmmmmmmmm....",
        "..mmmmmmmmmmm...",
        "..mmmm...mmmm...",
        "..mm.......mm...",
        "................",
        "...aa....aa.....",
        "...aaa..aaa.....",
        "................"
    ], "#ffd45b", "#c18b21", "#e36274"), "7", 6, 4),
    "no-mistakes": art([
        "................",
        "..oooooooooooo..",
        "..ommmmmmmmmmo..",
        "..omhmmmmmmhmo..",
        "..ommmmmmhhmmo..",
        "..ommmmmhhmmmo..",
        "..ommhmhhmmmmo..",
        "..ommhhhmmmmmo..",
        "...ommhmmmmmo...",
        "...ommmmmmmo....",
        "....ommmmmo.....",
        ".....ommmo......",
        "......omo.......",
        ".......o........",
        "................",
        "................"
    ], "#39c69a", "#158462"),
    dedicated: glyphs(calendar, "7", 6, 7),
    unstoppable: glyphs(art([
        ".......m........",
        "......mmm.......",
        "...m..mmmm......",
        "..mmmmmmmmm.....",
        ".mmmmmmmmmmm....",
        ".mmmmmmmmmmmm...",
        "mmmmmmmmmmmmmm..",
        "mmmaaaaaaaaamm..",
        "mmaaaaaaaaaaamm.",
        "mmaaaaaaaaaaamm.",
        ".mmaaaaaaaaamm..",
        ".mmaaaaaaaaamm..",
        "..mmaaaaaaamm...",
        "...mmmmmmmmm....",
        "....mmmmmmm.....",
        "................"
    ], "#f36a37", "#c1412d", "#ffce61"), "30", 4, 8),
    rookie: art([
        "..o.............",
        "..oooooooooooo..",
        "..oaaaaaaassso..",
        "..oaahhhaassso..",
        "..oahohohaasso..",
        "..oaahhhaassso..",
        "..oaaahaaaasso..",
        "..oaahhhaassso..",
        "..oaaaaaaassso..",
        "..oooooooooooo..",
        "..o.............",
        "..o.............",
        "..o.............",
        "..o.............",
        ".mmm............",
        "................"
    ], "#e7b64b", "#9d233f", "#d84b63"),
    rising: art([
        "...........mm...",
        ".........mm.....",
        "...a...mmm......",
        "......mmmm......",
        ".....mmmmmm.....",
        "..mmmmmmmmmmmm..",
        "...mmmhhhhmmm...",
        "....mmhhhhmm....",
        "....mmhhhhmm....",
        "...mmmmmmmmmm...",
        "...mmm....mmm...",
        "..mm........mm..",
        ".mm.............",
        "mm....a.........",
        ".............a..",
        "................"
    ], "#f4be42", "#a47421", "#a29afb"),
    yonko: art([
        "................",
        "..m.m.....m.m...",
        "..mmm.....mmm...",
        "..sss.....sss...",
        "................",
        "......aaaa......",
        ".....aahhaa.....",
        ".....ahhhha.....",
        ".....ahhhha.....",
        ".....aahhaa.....",
        "......aaaa......",
        "................",
        "..m.m.....m.m...",
        "..mmm.....mmm...",
        "..sss.....sss...",
        "................"
    ], "#ffcd59", "#c78521", "#aa7bf4"),
    "pirate-king": art([
        "...m...m...m....",
        "...mm.mmm.mm....",
        "...mmmmmmmmm....",
        "...samsamsas....",
        "...sssssssss....",
        "....hhhhhhh.....",
        "...hhhhhhhhh....",
        "...hhohhohhh....",
        "...hhohhohhh....",
        "....hhhohhh.....",
        ".....hhhhh......",
        ".....hohoh......",
        "..hh........hh..",
        "....hhh..hhh....",
        ".......hh.......",
        "....hhh..hhh...."
    ], "#ffd459", "#c68b26", "#e45467"),
    encyclopedia: art([
        "................",
        "..oooo..oooo....",
        ".ommmmoommmmo...",
        ".omhhmoomhhmo...",
        ".ommmmoommmmo...",
        ".omhhmoomhhmo...",
        ".ommmmoommmmo...",
        ".omhhmoomhhmo...",
        ".ommmmoommmmo...",
        ".omhhmoomhhmo...",
        ".ommmmoommmmo...",
        ".ossssoosssso...",
        "..ooooaaoooo....",
        "......aa........",
        "......a.........",
        "................"
    ], "#64c2a7", "#2e816f", "#ffd45b"),
    explorer: art([
        "......aaaa......",
        "....aaohhoaa....",
        "...aobohhbooa...",
        "..aobbohhbbboa..",
        "..obbbommbbbbo..",
        ".aobbbommbbbboa.",
        ".obbooommooobbo.",
        ".ohhmmmaammmhho.",
        ".ohhsssaassshho.",
        ".obbooossooobbo.",
        ".aobbbo ssbbboa.",
        "..obbbossbbbbo..",
        "..aobbohhbbboa..",
        "...aobohhbooa...",
        "....aaohhoaa....",
        "......aaaa......"
    ].map((row)=>row.replaceAll(" ", ".")), "#f36b68", "#45b3d9", "#e8c15b"),
    "deep-lore": art([
        "....oooooooo....",
        "...ommmmmmmo....",
        "..ommmmmmmmmo...",
        "..omssmhsssmo...",
        "..omshmhshsmo...",
        "..omssmhsssmo...",
        "..ommmmmmmmmo...",
        "..omshssmhomo...",
        "..omshhsmhomo...",
        "..omshssmhomo...",
        "..ommmmmmmmmo...",
        "..omssshsssmo...",
        "..omshshshsmo...",
        "..ossssssssso...",
        "...ooooooooo....",
        "................"
    ], "#418ea6", "#1a4a6b", "#39d5bf"),
    will: glyphs(art([
        "................",
        ".....mmmmmm.....",
        "...mmhhhhhmmm...",
        "..mmhhhhhhhsmm..",
        "..mhhhhhhhhhsm..",
        ".mhhhhhhhhhhssm.",
        ".mhhhhhhhhhhssm.",
        ".mhhhhhhhhhhssm.",
        ".mhhhhhhhhhhssm.",
        ".mhhhhhhhhhhssm.",
        "..mhhhhhhhhhsm..",
        "..mmhhhhhhhsmm..",
        "...mmhhhhhmmm...",
        ".....mmmmmm.....",
        "................",
        "................"
    ], "#edbf55", "#c08a29"), "D", 6, 5),
    "gold-hat": art([
        "................",
        ".............h..",
        "............hhh.",
        ".............h..",
        ".....oooooo.....",
        "....ohmmmms o...".replace(" ", ""),
        "....ommmmmso....",
        "....ossssss o...".replace(" ", ""),
        ".ooomaaaaaamooo.",
        "ohmmmmmmmmmmmms o".replace(" ", ""),
        ".ommmmmmmmmmms o.".replace(" ", ""),
        "..oooooooooooo..",
        "................",
        "...h............",
        "..hhh...........",
        "...h............"
    ], "#ffd700", "#e9a51c", "#ab650b"),
    treasure: art([
        ".........h......",
        "........hhh.....",
        ".........h......",
        "....oooooooo....",
        "...osssasssso...",
        "..ossssassssso..",
        "..oaaaaaaaaaao..",
        "...oooooooooo...",
        "..omhmhmhmhmmo..",
        "..oooooooooooo..",
        "..ossssassssso..",
        "..osssaaaassso..",
        "..osssaoaassso..",
        "..ossssassssso..",
        "..oaaaaaaaaaao..",
        "...oooooooooo..."
    ], "#ffd34a", "#a96c35", "#e9bd52")
};
}),
"[project]/src/data/adventure/levels.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADVENTURE_LEVELS",
    ()=>ADVENTURE_LEVELS,
    "ADVENTURE_MAX",
    ()=>ADVENTURE_MAX,
    "ADVENTURE_POINTS",
    ()=>ADVENTURE_POINTS,
    "ADVENTURE_QUESTIONS",
    ()=>ADVENTURE_QUESTIONS,
    "ADVENTURE_SAGAS",
    ()=>ADVENTURE_SAGAS,
    "ADVENTURE_SECONDS",
    ()=>ADVENTURE_SECONDS,
    "ADVENTURE_TITLES",
    ()=>ADVENTURE_TITLES,
    "ARC_NAMES",
    ()=>ARC_NAMES,
    "adventureDifficulty",
    ()=>adventureDifficulty,
    "adventureLevel",
    ()=>adventureLevel,
    "adventureTitle",
    ()=>adventureTitle,
    "nextAdventureTitle",
    ()=>nextAdventureTitle
]);
const ADVENTURE_QUESTIONS = 7;
const ADVENTURE_SECONDS = 25;
const ADVENTURE_POINTS = 100;
const ADVENTURE_MAX = 700;
const ARC_NAMES = {
    "romance-dawn": "Romance Dawn",
    "orange-town": "Orange Town",
    "syrup-village": "Syrup Village",
    baratie: "Baratie",
    "arlong-park": "Arlong Park",
    loguetown: "Loguetown",
    "reverse-mountain": "Reverse Mountain",
    "whisky-peak": "Whisky Peak",
    "little-garden": "Little Garden",
    "drum-island": "Drum Island",
    alabasta: "Alabasta",
    jaya: "Jaya",
    skypiea: "Skypiea",
    "long-ring": "Long Ring Long Land",
    "water-7": "Water 7",
    "enies-lobby": "Enies Lobby",
    "post-enies": "Post-Enies Lobby",
    "thriller-bark": "Thriller Bark",
    sabaody: "Sabaody Archipelago",
    "amazon-lily": "Amazon Lily",
    "impel-down": "Impel Down",
    marineford: "Marineford",
    "post-war": "Post-War",
    "return-sabaody": "Return to Sabaody",
    "fishman-island": "Fish-Man Island",
    "punk-hazard": "Punk Hazard",
    dressrosa: "Dressrosa",
    zou: "Zou",
    "whole-cake": "Whole Cake Island",
    reverie: "Levely / Reverie",
    wano: "Wano Country",
    egghead: "Egghead",
    elbaph: "Elbaph / Final Saga",
    "laugh-tale": "Laugh Tale"
};
const repeat = (id, count)=>Array(count).fill(id);
const ADVENTURE_SAGAS = [
    {
        number: 1,
        name: "East Blue",
        subtitle: "Where a promise becomes a voyage",
        color: "#8cdca0",
        theme: "romance-dawn",
        emblem: "first-voyage",
        arcs: [
            ...repeat("romance-dawn", 2),
            "orange-town",
            "syrup-village",
            ...repeat("baratie", 2),
            ...repeat("arlong-park", 2),
            "loguetown",
            "loguetown"
        ]
    },
    {
        number: 2,
        name: "Alabasta",
        subtitle: "Across the desert, beneath the crown",
        color: "#f2ca78",
        theme: "alabasta",
        emblem: "rookie",
        arcs: [
            "reverse-mountain",
            "whisky-peak",
            "little-garden",
            "drum-island",
            ...repeat("alabasta", 6)
        ]
    },
    {
        number: 3,
        name: "Sky Island",
        subtitle: "The city of gold above the clouds",
        color: "#b9e8fa",
        theme: "skypiea",
        emblem: "rising",
        arcs: [
            ...repeat("jaya", 2),
            ...repeat("skypiea", 8)
        ]
    },
    {
        number: 4,
        name: "Water 7",
        subtitle: "A promise worth declaring war for",
        color: "#79cce6",
        theme: "water-7",
        emblem: "encyclopedia",
        arcs: [
            "long-ring",
            ...repeat("water-7", 3),
            ...repeat("enies-lobby", 3),
            ...repeat("post-enies", 2),
            "enies-lobby"
        ]
    },
    {
        number: 5,
        name: "Thriller Bark",
        subtitle: "Follow the shadows into the mist",
        color: "#b19bdd",
        theme: "thriller-bark",
        emblem: "deep-lore",
        arcs: repeat("thriller-bark", 10)
    },
    {
        number: 6,
        name: "Summit War",
        subtitle: "A brother's promise. A world at war.",
        color: "#b6cfec",
        theme: "marineford",
        emblem: "no-mistakes",
        arcs: [
            ...repeat("sabaody", 2),
            "amazon-lily",
            ...repeat("impel-down", 3),
            ...repeat("marineford", 2),
            "post-war",
            "marineford"
        ]
    },
    {
        number: 7,
        name: "Fish-Man Island",
        subtitle: "Ten thousand meters beneath the sea",
        color: "#6de0d2",
        theme: "fishman-island",
        emblem: "explorer",
        arcs: [
            "return-sabaody",
            ...repeat("fishman-island", 9)
        ]
    },
    {
        number: 8,
        name: "Dressrosa",
        subtitle: "Break the strings. Remember the forgotten.",
        color: "#f7ab7c",
        theme: "dressrosa",
        emblem: "perfect",
        arcs: [
            ...repeat("punk-hazard", 3),
            ...repeat("dressrosa", 7)
        ]
    },
    {
        number: 9,
        name: "Whole Cake Island",
        subtitle: "A sweet kingdom with a bitter secret",
        color: "#f3a4cd",
        theme: "whole-cake",
        emblem: "dedicated",
        arcs: [
            ...repeat("zou", 2),
            ...repeat("whole-cake", 6),
            "reverie",
            "whole-cake"
        ]
    },
    {
        number: 10,
        name: "Wano & Final Saga",
        subtitle: "The final road to Laugh Tale",
        color: "#eec95e",
        theme: "wano",
        emblem: "pirate-king",
        arcs: [
            ...repeat("wano", 5),
            ...repeat("egghead", 3),
            "elbaph",
            "laugh-tale"
        ]
    }
];
const ADVENTURE_TITLES = [
    {
        level: 1,
        title: "Cabin Boy"
    },
    {
        level: 10,
        title: "Bounty Hunter"
    },
    {
        level: 20,
        title: "Rookie Pirate"
    },
    {
        level: 30,
        title: "Veteran Pirate"
    },
    {
        level: 40,
        title: "Notorious Pirate"
    },
    {
        level: 50,
        title: "Supernova"
    },
    {
        level: 60,
        title: "Commander"
    },
    {
        level: 70,
        title: "Legendary Pirate"
    },
    {
        level: 80,
        title: "Warlord"
    },
    {
        level: 90,
        title: "Emperor of the Sea"
    },
    {
        level: 100,
        title: "Pirate King"
    }
];
const adventureTitle = (completed)=>[
        ...ADVENTURE_TITLES
    ].reverse().find((t)=>completed >= t.level)?.title ?? "Aspiring Pirate";
const nextAdventureTitle = (completed)=>ADVENTURE_TITLES.find((t)=>t.level > completed) ?? null;
function adventureDifficulty(level) {
    if (level === 100) return "Legendary";
    if (level <= 20) return "Beginner";
    if (level <= 40) return "Easy / Intermediate";
    if (level <= 60) return "Intermediate / Advanced";
    if (level <= 80) return "Advanced";
    return "Expert / Deep Lore";
}
const ADVENTURE_LEVELS = ADVENTURE_SAGAS.flatMap((saga)=>saga.arcs.map((arc, index)=>{
        const number = (saga.number - 1) * 10 + index + 1, boss = index === 9;
        const base = number <= 20 ? 400 : number <= 60 ? 500 : 600;
        return {
            number,
            saga: saga.number,
            arc,
            boss,
            name: number === 100 ? "Pirate King Final Challenge" : boss ? `${saga.number === 9 ? "Whole Cake" : saga.name} Boss Challenge` : ARC_NAMES[arc],
            target: Math.min(700, base + (boss ? 100 : 0)),
            difficulty: adventureDifficulty(number)
        };
    }));
function adventureLevel(number) {
    return typeof number === "number" && Number.isInteger(number) && number >= 1 && number <= 100 ? ADVENTURE_LEVELS[number - 1] : null;
}
}),
"[project]/src/data/arcs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JOURNEY_MAX",
    ()=>JOURNEY_MAX,
    "LAUGH_TALE_AT",
    ()=>LAUGH_TALE_AT,
    "SAGAS",
    ()=>SAGAS,
    "SAGA_LENGTH",
    ()=>SAGA_LENGTH,
    "sagaAt",
    ()=>sagaAt,
    "sagaIndexAt",
    ()=>sagaIndexAt,
    "travelFor",
    ()=>travelFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-ssr] (ecmascript)");
;
const LAUGH_TALE_AT = 500;
const SAGA_LENGTH = LAUGH_TALE_AT / 11; // ~45.5 points per saga
const JOURNEY_MAX = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_POINTS"]; // 700: Luffy keeps exploring Laugh Tale past 500
function travelFor(points) {
    return Math.max(0, points);
}
const NAMES = [
    [
        "East Blue",
        "A quiet seaside village"
    ],
    [
        "Alabasta",
        "Village in the desert"
    ],
    [
        "Sky Island",
        "Village above the clouds"
    ],
    [
        "Enies Lobby",
        "Fortress in the middle of the sea"
    ],
    [
        "Thriller Bark",
        "The haunted cemetery"
    ],
    [
        "Marineford",
        "The Marine headquarters"
    ],
    [
        "Fish-Man Island",
        "City at the bottom of the sea"
    ],
    [
        "Dressrosa",
        "The Corrida Colosseum"
    ],
    [
        "Whole Cake Island",
        "A land made of sweets"
    ],
    [
        "Wano",
        "The land of samurai"
    ],
    [
        "Elbaph",
        "The land of giants"
    ],
    [
        "Laugh Tale",
        "The final island and its treasure"
    ]
];
const SAGAS = NAMES.map(([name, subtitle], i)=>({
        name,
        subtitle,
        at: i * SAGA_LENGTH
    }));
function sagaIndexAt(points) {
    return Math.max(0, Math.min(SAGAS.length - 1, Math.floor(points / SAGA_LENGTH)));
}
function sagaAt(points) {
    return SAGAS[sagaIndexAt(points)];
}
}),
"[project]/src/data/playable-characters.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// One unique, permanent cosmetic recruit per achievement. Luffy is always free.
__turbopack_context__.s([
    "DEFAULT_CHARACTER",
    ()=>DEFAULT_CHARACTER,
    "PLAYABLE_CHARACTERS",
    ()=>PLAYABLE_CHARACTERS,
    "characterById",
    ()=>characterById,
    "characterReward",
    ()=>characterReward,
    "isCharacterId",
    ()=>isCharacterId
]);
const PLAYABLE_CHARACTERS = [
    {
        id: "luffy",
        name: "Monkey D. Luffy",
        shortName: "Luffy",
        epithet: "Straw Hat Captain",
        achievementId: null,
        grade: "Starter",
        color: "#f49c81",
        detail: "Your original captain. Always ready to set sail."
    },
    {
        id: "chopper",
        name: "Tony Tony Chopper",
        shortName: "Chopper",
        epithet: "Cotton Candy Lover",
        achievementId: "first-voyage",
        grade: "Crew",
        color: "#f59fca",
        detail: "A little reindeer with a big dream. Blue hat, antlers, and tiny hooves."
    },
    {
        id: "zoro",
        name: "Roronoa Zoro",
        shortName: "Zoro",
        epithet: "Pirate Hunter",
        achievementId: "perfect-run",
        grade: "Crew",
        color: "#8bda83",
        detail: "Green hair, a haramaki sash, and three swords. Don't let him navigate."
    },
    {
        id: "sanji",
        name: "Vinsmoke Sanji",
        shortName: "Sanji",
        epithet: "Black Leg",
        achievementId: "no-mistakes",
        grade: "Elite",
        color: "#e9c876",
        detail: "A sharp black suit and a golden fringe, for a perfectly executed voyage."
    },
    {
        id: "nami",
        name: "Nami",
        shortName: "Nami",
        epithet: "Cat Burglar",
        achievementId: "daily-dedication",
        grade: "Crew",
        color: "#fbac64",
        detail: "Orange hair and her blue Clima-Tact. Your course is in good hands."
    },
    {
        id: "usopp",
        name: "Usopp",
        shortName: "Usopp",
        epithet: "Brave Warrior of the Sea",
        achievementId: "rookie-pirate",
        grade: "Crew",
        color: "#cfb78b",
        detail: "Goggles, a long nose, and a trusty slingshot. Ten voyages worth of stories."
    },
    {
        id: "robin",
        name: "Nico Robin",
        shortName: "Robin",
        epithet: "Devil Child",
        achievementId: "encyclopedia",
        grade: "Elite",
        color: "#b69eea",
        detail: "An archaeologist in a blue jacket, with a book full of secrets."
    },
    {
        id: "jinbe",
        name: "Jinbe",
        shortName: "Jinbe",
        epithet: "Knight of the Sea",
        achievementId: "grand-line-explorer",
        grade: "Elite",
        color: "#77c8e9",
        detail: "Blue skin, tusks, and an orange kimono. A veteran of the Grand Line."
    },
    {
        id: "ace",
        name: "Portgas D. Ace",
        shortName: "Ace",
        epithet: "Fire Fist",
        achievementId: "one-in-a-luffillion",
        grade: "Elite",
        color: "#ff9562",
        detail: "An orange hat, red beads, and a little fire in his hand. A reward for a truly rare pull."
    },
    {
        id: "law",
        name: "Trafalgar Law",
        shortName: "Law",
        epithet: "Surgeon of Death",
        achievementId: "rising-supernova",
        grade: "Legendary",
        color: "#e0c254",
        detail: "Spotted hat, yellow coat, and Kikoku. An exceptional recruit for an exceptional score."
    },
    {
        id: "rayleigh",
        name: "Silvers Rayleigh",
        shortName: "Rayleigh",
        epithet: "Dark King",
        achievementId: "deep-lore",
        grade: "Legendary",
        color: "#9ce3ce",
        detail: "Silver hair, round glasses, and a green cloak. The reward for a scholar of pirate lore."
    },
    {
        id: "whitebeard",
        name: "Edward Newgate",
        shortName: "Whitebeard",
        epithet: "The Strongest Man",
        achievementId: "yonko-status",
        grade: "Legendary",
        color: "#e9dcba",
        detail: "An enormous white coat, a crescent moustache, and Murakumogiri."
    },
    {
        id: "shanks",
        name: "Shanks",
        shortName: "Shanks",
        epithet: "Red-Haired Emperor",
        achievementId: "laugh-tale",
        grade: "Legendary",
        color: "#ef8491",
        detail: "Red hair, a black cape, and Gryphon. A fitting welcome to the final island."
    },
    {
        id: "kaido",
        name: "Kaido",
        shortName: "Kaido",
        epithet: "The Strongest Creature",
        achievementId: "unstoppable",
        grade: "Mythic",
        color: "#b694f6",
        detail: "Great horns, a purple sash, and a spiked kanabo. Thirty days of unstoppable resolve."
    },
    {
        id: "roger",
        name: "Gol D. Roger",
        shortName: "Roger",
        epithet: "King of the Pirates",
        achievementId: "pirate-king",
        grade: "Mythic",
        color: "#f6c45a",
        detail: "A red captain's coat, gold epaulettes, and the Pirate King's unmistakable moustache."
    },
    {
        id: "gear-5",
        name: "Luffy · Gear 5",
        shortName: "Gear 5 Luffy",
        epithet: "Warrior of Liberation",
        achievementId: "the-will-of-d",
        grade: "Mythic",
        color: "#e5c3ff",
        detail: "Cloud-white hair, a flowing smoke scarf, and a fearless grin. The ultimate 100-voyage reward."
    }
];
const DEFAULT_CHARACTER = "luffy";
function isCharacterId(id) {
    return typeof id === "string" && PLAYABLE_CHARACTERS.some((character)=>character.id === id);
}
function characterById(id) {
    return PLAYABLE_CHARACTERS.find((character)=>character.id === id) ?? PLAYABLE_CHARACTERS[0];
}
function characterReward(achievementId) {
    return PLAYABLE_CHARACTERS.find((character)=>character.achievementId === achievementId);
}
}),
"[project]/src/data/tiers.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DAILY_QUESTION_COUNT",
    ()=>DAILY_QUESTION_COUNT,
    "MAX_POINTS",
    ()=>MAX_POINTS,
    "QUESTION_SECONDS",
    ()=>QUESTION_SECONDS,
    "TIER_CONFIG",
    ()=>TIER_CONFIG,
    "TIER_LABELS",
    ()=>TIER_LABELS,
    "TIER_ORDER",
    ()=>TIER_ORDER
]);
const TIER_ORDER = [
    "common",
    "uncommon",
    "rare",
    "epic",
    "luffillion"
];
const QUESTION_SECONDS = 25;
const DAILY_QUESTION_COUNT = 7;
const MAX_POINTS = 100 * DAILY_QUESTION_COUNT;
const TIER_CONFIG = {
    common: {
        label: "Common",
        points: 10,
        runMs: 4200,
        badge: "bg-slate-500/20 text-slate-200 ring-slate-400/50",
        text: "text-slate-300",
        emoji: "⬜",
        blurb: "Everyone knows this one.",
        fx: {
            particles: 16,
            spread: 160,
            size: 6,
            particleDur: 0.9,
            colors: [
                "#fde68a",
                "#ffffff",
                "#fcd34d"
            ],
            rings: 0,
            flash: false,
            sunburst: false,
            shake: false,
            shakeMs: 0,
            confetti: 0,
            duration: 1600
        }
    },
    uncommon: {
        label: "Uncommon",
        points: 25,
        runMs: 3600,
        badge: "bg-emerald-500/20 text-emerald-200 ring-emerald-400/50",
        text: "text-emerald-300",
        emoji: "🟩",
        blurb: "A fan's answer.",
        fx: {
            particles: 36,
            spread: 260,
            size: 8,
            particleDur: 1.0,
            colors: [
                "#34d399",
                "#6ee7b7",
                "#ffffff"
            ],
            rings: 1,
            flash: false,
            sunburst: false,
            shake: false,
            shakeMs: 0,
            confetti: 0,
            banner: "NICE PULL!",
            bannerColor: "#6ee7b7",
            duration: 2000
        }
    },
    rare: {
        label: "Rare",
        points: 45,
        runMs: 3000,
        badge: "bg-blue-500/20 text-blue-200 ring-blue-400/60",
        text: "text-blue-300",
        emoji: "🟦",
        blurb: "Deep cut territory.",
        fx: {
            particles: 70,
            spread: 360,
            size: 10,
            particleDur: 1.2,
            colors: [
                "#60a5fa",
                "#3b82f6",
                "#e0f2fe",
                "#93c5fd"
            ],
            rings: 2,
            flash: true,
            sunburst: false,
            shake: true,
            shakeMs: 450,
            confetti: 0,
            banner: "RARE PULL!",
            bannerColor: "#93c5fd",
            duration: 2600
        }
    },
    epic: {
        label: "Epic",
        points: 75,
        runMs: 2400,
        badge: "bg-fuchsia-500/20 text-fuchsia-200 ring-fuchsia-400/60",
        text: "text-fuchsia-300",
        emoji: "🟪",
        blurb: "Only true historians know this.",
        fx: {
            particles: 120,
            spread: 480,
            size: 12,
            particleDur: 1.4,
            colors: [
                "#c084fc",
                "#f472b6",
                "#fb923c",
                "#f0abfc"
            ],
            rings: 2,
            flash: true,
            sunburst: true,
            shake: true,
            shakeMs: 600,
            confetti: 30,
            banner: "EPIC!",
            bannerColor: "#f0abfc",
            duration: 3200
        }
    },
    luffillion: {
        label: "One in a Luffillion",
        points: 100,
        runMs: 1800,
        badge: "bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-200 text-amber-950 ring-yellow-200",
        text: "text-amber-300",
        emoji: "🟨",
        blurb: "One answer exists. The nichest of the niche.",
        fx: {
            particles: 260,
            spread: 720,
            size: 16,
            particleDur: 1.8,
            colors: [
                "#fde047",
                "#f43f5e",
                "#22d3ee",
                "#a3e635",
                "#c084fc",
                "#fb923c",
                "#ffffff"
            ],
            rings: 3,
            flash: true,
            sunburst: true,
            shake: true,
            shakeMs: 800,
            confetti: 90,
            banner: "ONE IN A LUFFILLION!",
            bannerColor: "#fde047",
            duration: 4500
        }
    }
};
const TIER_LABELS = {
    common: "Common",
    uncommon: "Uncommon",
    rare: "Rare",
    epic: "Epic",
    luffillion: "One in a Luffillion"
};
}),
"[project]/src/lib/achievements.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACHIEVEMENTS",
    ()=>ACHIEVEMENTS,
    "RISING_SUPERNOVA_SCORE",
    ()=>RISING_SUPERNOVA_SCORE,
    "bestStreak",
    ()=>bestStreak,
    "countMistakes",
    ()=>countMistakes,
    "evaluateAchievements",
    ()=>evaluateAchievements,
    "isNiche",
    ()=>isNiche
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/arcs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-ssr] (ecmascript)");
;
;
const ACHIEVEMENTS = [
    {
        id: "first-voyage",
        title: "First Voyage",
        description: "Complete your first daily challenge.",
        detail: "Finish all seven questions, answered or timed out.",
        emblem: "first-voyage",
        rewardCharacter: "chopper"
    },
    {
        id: "perfect-run",
        title: "Perfect Run",
        description: "Answer all 7 questions correctly.",
        detail: "Every question solved in one daily voyage. Wrong guesses are allowed.",
        emblem: "perfect",
        rewardCharacter: "zoro"
    },
    {
        id: "no-mistakes",
        title: "No Mistakes",
        description: "Complete a voyage without a wrong answer.",
        detail: "Seven correct answers, zero rejected guesses and no timeouts.",
        emblem: "no-mistakes",
        rewardCharacter: "sanji"
    },
    {
        id: "daily-dedication",
        title: "Daily Dedication",
        description: "Play 7 days in a row.",
        detail: "Start a question on seven consecutive daily challenges. Days follow the game's Eastern reset.",
        emblem: "dedicated",
        rewardCharacter: "nami"
    },
    {
        id: "unstoppable",
        title: "Unstoppable",
        description: "Play 30 days in a row.",
        detail: "Start a question on thirty consecutive daily challenges. Earned badges never reset.",
        emblem: "unstoppable",
        rewardCharacter: "kaido"
    },
    {
        id: "rookie-pirate",
        title: "Rookie Pirate",
        description: "Complete 10 voyages.",
        detail: "Ten completed daily challenges; they don't have to be consecutive.",
        emblem: "rookie",
        rewardCharacter: "usopp"
    },
    {
        id: "rising-supernova",
        title: "Rising Supernova",
        description: "Score 90% or higher.",
        detail: "Earn at least 630 of the possible 700 points in a completed voyage.",
        emblem: "rising",
        rewardCharacter: "law"
    },
    {
        id: "yonko-status",
        title: "Yonko Status",
        description: "Beat 90% of players in a daily voyage.",
        detail: "Score strictly higher than at least 90% of the other players. Awarded after the daily leaderboard closes; ties are not wins.",
        emblem: "yonko",
        rewardCharacter: "whitebeard"
    },
    {
        id: "pirate-king",
        title: "Pirate King",
        description: "Finish #1 on the daily leaderboard.",
        detail: "Hold the highest score when the daily leaderboard closes. Tied winners share #1. At least one other player must finish.",
        emblem: "pirate-king",
        rewardCharacter: "roger"
    },
    {
        id: "encyclopedia",
        title: "Encyclopedia",
        description: "Answer 100 questions correctly.",
        detail: "Correct answers accumulate across your saved daily voyages, including the current one.",
        emblem: "encyclopedia",
        rewardCharacter: "robin"
    },
    {
        id: "grand-line-explorer",
        title: "Grand Line Explorer",
        description: "Complete 25 voyages.",
        detail: "Twenty-five completed daily challenges, consecutive or not.",
        emblem: "explorer",
        rewardCharacter: "jinbe"
    },
    {
        id: "deep-lore",
        title: "Deep Lore",
        description: "Correctly answer 50 niche questions.",
        detail: "Rare, Epic and One in a Luffillion answers count. Progress is cumulative.",
        emblem: "deep-lore",
        rewardCharacter: "rayleigh"
    },
    {
        id: "the-will-of-d",
        title: "The Will of D.",
        description: "Complete 100 daily voyages.",
        detail: "One hundred completed daily challenges. Every saved voyage counts once.",
        emblem: "will",
        rewardCharacter: "gear-5"
    },
    {
        id: "one-in-a-luffillion",
        title: "One in a Luffillion",
        description: "Get a One in a Luffillion answer.",
        detail: "Earn a 100-point pull. The badge is permanent; Luffy's gold hat lasts for that run.",
        emblem: "gold-hat",
        rewardCharacter: "ace"
    },
    {
        id: "laugh-tale",
        title: "Laugh Tale",
        description: "Make it to Laugh Tale.",
        detail: "Reach 500 points in a single voyage. Unlocks as soon as the score is saved.",
        emblem: "treasure",
        rewardCharacter: "shanks"
    }
];
const RISING_SUPERNOVA_SCORE = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MAX_POINTS"] * 0.9);
function bestStreak(days) {
    const ordered = [
        ...new Set(days)
    ].filter((day)=>/^\d{4}-\d{2}-\d{2}$/.test(day)).sort();
    let best = 0, length = 0, previous = -Infinity;
    for (const day of ordered){
        const time = Date.parse(`${day}T12:00:00Z`);
        if (!Number.isFinite(time)) continue;
        length = time - previous === 86400000 ? length + 1 : 1;
        best = Math.max(best, length);
        previous = time;
    }
    return best;
}
const isNiche = (tier)=>tier === "rare" || tier === "epic" || tier === "luffillion";
function countMistakes(p) {
    let total = 0;
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]; i++){
        const state = p.q[i];
        if (!state || !state.status || !Number.isInteger(state.attempts) || state.attempts < (state.status === "solved" ? 1 : 0)) return null;
        total += Math.max(state.wrong.length, state.attempts - (state.status === "solved" ? 1 : 0));
    }
    return total;
}
function evaluateAchievements(rows, existing, checkpoints = []) {
    const complete = [
        ...new Map(rows.map((row)=>[
                row.dayKey,
                row
            ])).values()
    ];
    const finishedDays = new Set(complete.map((row)=>row.dayKey));
    const active = [
        ...new Map(checkpoints.filter((p)=>!finishedDays.has(p.day)).map((p)=>[
                p.day,
                p
            ])).values()
    ];
    const played = active.filter((p)=>Object.values(p.q).some((q)=>q.started || q.status));
    const streak = bestStreak([
        ...finishedDays,
        ...played.map((p)=>p.day)
    ]);
    const successes = active.flatMap((p)=>Object.values(p.q).filter((q)=>q.status === "solved"));
    const totalCorrect = complete.reduce((sum, r)=>sum + r.solved, 0) + successes.length;
    const totalNiche = complete.reduce((sum, r)=>sum + (r.legs ? r.legs.filter((l)=>isNiche(l.tier)).length : r.niche ?? 0), 0) + successes.filter((q)=>isNiche(q.tier)).length;
    const bestSolved = complete.reduce((n, r)=>Math.max(n, r.solved), 0);
    const bestScore = complete.reduce((n, r)=>Math.max(n, r.score), 0);
    const currentBest = active.reduce((best, p)=>Math.max(best, Object.values(p.q).reduce((n, q)=>n + (q.status === "solved" ? q.points ?? 0 : 0), 0)), bestScore);
    const flawless = complete.some((r)=>r.solved === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"] && r.mistakes === 0);
    const hasLuff = successes.some((q)=>q.tier === "luffillion") || complete.some((r)=>r.legs?.some((l)=>l.tier === "luffillion"));
    const competitive = complete.filter((r)=>r.standing?.finalized && r.standing.others > 0);
    const bestBeat = competitive.reduce((n, r)=>Math.max(n, 100 * r.standing.beaten / r.standing.others), 0);
    const king = competitive.some((r)=>r.score > 0 && r.standing.rank === 1);
    const waiting = complete.some((r)=>r.standing && !r.standing.finalized);
    const leagueLabel = waiting ? "Today's leaderboard closes at the daily reset" : "Complete a voyage with other players";
    const goals = {
        "first-voyage": {
            n: complete.length,
            target: 1,
            label: `${complete.length} completed`
        },
        "perfect-run": {
            n: bestSolved,
            target: 7,
            label: `${bestSolved} / 7 correct in your best voyage`
        },
        "no-mistakes": {
            n: flawless ? 1 : 0,
            target: 1,
            label: flawless ? "Seven correct, no wrong guesses" : "Finish all 7 without a wrong guess"
        },
        "daily-dedication": {
            n: streak,
            target: 7,
            label: `${streak} / 7 consecutive days`
        },
        "unstoppable": {
            n: streak,
            target: 30,
            label: `${streak} / 30 consecutive days`
        },
        "rookie-pirate": {
            n: complete.length,
            target: 10,
            label: `${complete.length} / 10 voyages`
        },
        "rising-supernova": {
            n: bestScore,
            target: RISING_SUPERNOVA_SCORE,
            label: `${bestScore} / ${RISING_SUPERNOVA_SCORE} points`
        },
        "yonko-status": {
            n: bestBeat,
            target: 90,
            label: competitive.length ? `${Math.floor(bestBeat * 10) / 10}% beaten · target 90%` : leagueLabel
        },
        "pirate-king": {
            n: king ? 1 : 0,
            target: 1,
            label: king ? "#1 on a closed daily leaderboard" : leagueLabel
        },
        "encyclopedia": {
            n: totalCorrect,
            target: 100,
            label: `${totalCorrect} / 100 correct answers`
        },
        "grand-line-explorer": {
            n: complete.length,
            target: 25,
            label: `${complete.length} / 25 voyages`
        },
        "deep-lore": {
            n: totalNiche,
            target: 50,
            label: `${totalNiche} / 50 Rare-or-better answers`
        },
        "the-will-of-d": {
            n: complete.length,
            target: 100,
            label: `${complete.length} / 100 voyages`
        },
        "one-in-a-luffillion": {
            n: hasLuff ? 1 : 0,
            target: 1,
            label: hasLuff ? "100-point pull found" : "Find a 100-point answer"
        },
        "laugh-tale": {
            n: currentBest,
            target: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAUGH_TALE_AT"],
            label: `${currentBest} / ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAUGH_TALE_AT"]} points in one voyage`
        }
    };
    const achievements = ACHIEVEMENTS.map((def)=>{
        const goal = goals[def.id];
        const unlockedAt = existing.get(def.id);
        const unlocked = !!unlockedAt || goal.n >= goal.target;
        return {
            ...def,
            unlocked,
            unlockedAt: unlockedAt?.toISOString() ?? null,
            progress: unlocked ? goal.target : Math.min(goal.n, goal.target),
            target: goal.target,
            progressLabel: goal.label
        };
    });
    return {
        achievements,
        newlyUnlocked: achievements.filter((a)=>a.unlocked && !existing.has(a.id)).map((a)=>a.id)
    };
}
}),
"[project]/src/lib/sound.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMuted",
    ()=>isMuted,
    "playAchievement",
    ()=>playAchievement,
    "playClick",
    ()=>playClick,
    "playNext",
    ()=>playNext,
    "playPull",
    ()=>playPull,
    "playSaga",
    ()=>playSaga,
    "playSetSail",
    ()=>playSetSail,
    "playSuggest",
    ()=>playSuggest,
    "playTick",
    ()=>playTick,
    "playTimeout",
    ()=>playTimeout,
    "playWrong",
    ()=>playWrong,
    "setMuted",
    ()=>setMuted,
    "startRunSound",
    ()=>startRunSound
]);
"use client";
const MUTE_KEY = "luffillion:muted";
let audioCtx = null;
let masterOut = null;
let noiseBuffer = null;
let mutedState = false;
let muteLoaded = false;
function loadMute() {
    if (muteLoaded) return mutedState;
    muteLoaded = true;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return mutedState;
}
function isMuted() {
    return loadMute();
}
function setMuted(muted) {
    mutedState = muted;
    muteLoaded = true;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (masterOut && audioCtx) {
        masterOut.gain.setTargetAtTime(muted ? 0 : 0.48, audioCtx.currentTime, 0.015);
    }
}
function getAudio() {
    if (("TURBOPACK compile-time value", "undefined") === "undefined" || loadMute()) return null;
    //TURBOPACK unreachable
    ;
}
function getNoiseBuffer(ctx) {
    if (noiseBuffer && noiseBuffer.sampleRate === ctx.sampleRate) return noiseBuffer;
    const length = ctx.sampleRate * 1.5;
    const buf = ctx.createBuffer(1, length, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for(let i = 0; i < length; i++){
        data[i] = Math.random() * 2 - 1;
    }
    noiseBuffer = buf;
    return buf;
}
function playTone(ctx, out, t0, opts) {
    const start = t0 + (opts.start ?? 0);
    const attack = opts.attack ?? 0.008;
    const vol = opts.vol ?? 0.2;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = opts.type ?? "triangle";
    osc.frequency.setValueAtTime(opts.freq, start);
    if (opts.slideTo) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(20, opts.slideTo), start + opts.dur);
    }
    if (opts.detune) osc.detune.setValueAtTime(opts.detune, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(vol, start + Math.min(attack, opts.dur * 0.4));
    gain.gain.exponentialRampToValueAtTime(0.0001, start + opts.dur);
    if (opts.filterHz) {
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(opts.filterHz, start);
        osc.connect(filter);
        filter.connect(gain);
    } else {
        osc.connect(gain);
    }
    gain.connect(out);
    osc.start(start);
    osc.stop(start + opts.dur + 0.02);
}
function playNoise(ctx, out, t0, startOffset, dur, vol, filterType, freqStart, freqEnd) {
    const start = t0 + startOffset;
    const src = ctx.createBufferSource();
    src.buffer = getNoiseBuffer(ctx);
    const filter = ctx.createBiquadFilter();
    filter.type = filterType;
    filter.frequency.setValueAtTime(freqStart, start);
    if (freqEnd) {
        filter.frequency.exponentialRampToValueAtTime(Math.max(40, freqEnd), start + dur);
    }
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(vol, start + Math.min(0.02, dur * 0.3));
    gain.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(out);
    src.start(start);
    src.stop(start + dur + 0.02);
}
function playClick() {
    const a = getAudio();
    if (!a) return;
    const t = a.ctx.currentTime;
    playTone(a.ctx, a.out, t, {
        freq: 540,
        slideTo: 780,
        dur: 0.045,
        type: "triangle",
        vol: 0.16,
        attack: 0.003
    });
    playTone(a.ctx, a.out, t, {
        freq: 1180,
        dur: 0.02,
        type: "square",
        vol: 0.05,
        attack: 0.002
    });
}
function playSetSail() {
    const a = getAudio();
    if (!a) return;
    const t = a.ctx.currentTime;
    // Bright rising adventure triad: G4 -> C5 -> E5 -> G5 + C6 shimmer
    const notes = [
        {
            f: 392.0,
            s: 0.0,
            d: 0.13
        },
        {
            f: 523.25,
            s: 0.08,
            d: 0.13
        },
        {
            f: 659.25,
            s: 0.16,
            d: 0.15
        },
        {
            f: 783.99,
            s: 0.24,
            d: 0.38
        }
    ];
    for (const n of notes){
        playTone(a.ctx, a.out, t, {
            freq: n.f,
            start: n.s,
            dur: n.d,
            type: "triangle",
            vol: 0.22
        });
        playTone(a.ctx, a.out, t, {
            freq: n.f * 0.5,
            start: n.s,
            dur: n.d,
            type: "sawtooth",
            vol: 0.07,
            filterHz: 1400
        });
    }
    playTone(a.ctx, a.out, t, {
        freq: 1046.5,
        start: 0.26,
        dur: 0.42,
        type: "sine",
        vol: 0.14
    });
    playNoise(a.ctx, a.out, t, 0.22, 0.25, 0.05, "bandpass", 1600, 3400);
}
function playNext() {
    const a = getAudio();
    if (!a) return;
    const t = a.ctx.currentTime;
    playTone(a.ctx, a.out, t, {
        freq: 587.33,
        start: 0,
        dur: 0.07,
        type: "triangle",
        vol: 0.18,
        attack: 0.004
    });
    playTone(a.ctx, a.out, t, {
        freq: 880.0,
        start: 0.055,
        dur: 0.12,
        type: "triangle",
        vol: 0.2,
        attack: 0.004
    });
}
function playSuggest() {
    const a = getAudio();
    if (!a) return;
    const t = a.ctx.currentTime;
    playTone(a.ctx, a.out, t, {
        freq: 698.46,
        start: 0,
        dur: 0.055,
        type: "square",
        vol: 0.09,
        filterHz: 2400
    });
    playTone(a.ctx, a.out, t, {
        freq: 987.77,
        start: 0.05,
        dur: 0.09,
        type: "triangle",
        vol: 0.16
    });
}
function playWrong() {
    const a = getAudio();
    if (!a) return;
    const t = a.ctx.currentTime;
    playTone(a.ctx, a.out, t, {
        freq: 200,
        slideTo: 135,
        dur: 0.16,
        type: "sawtooth",
        vol: 0.15,
        filterHz: 680
    });
    playTone(a.ctx, a.out, t, {
        freq: 145,
        slideTo: 105,
        dur: 0.16,
        start: 0.02,
        type: "square",
        vol: 0.09,
        filterHz: 520
    });
}
function playTick(urgent) {
    const a = getAudio();
    if (!a) return;
    const t = a.ctx.currentTime;
    playTone(a.ctx, a.out, t, {
        freq: urgent ? 1080 : 820,
        dur: 0.03,
        type: "triangle",
        vol: urgent ? 0.11 : 0.07,
        attack: 0.002
    });
}
function playTimeout() {
    const a = getAudio();
    if (!a) return;
    const t = a.ctx.currentTime;
    const notes = [
        {
            f: 349.23,
            s: 0.0,
            d: 0.16
        },
        {
            f: 311.13,
            s: 0.15,
            d: 0.16
        },
        {
            f: 261.63,
            s: 0.3,
            d: 0.38
        }
    ];
    for (const n of notes){
        playTone(a.ctx, a.out, t, {
            freq: n.f,
            start: n.s,
            dur: n.d,
            type: "sawtooth",
            vol: 0.13,
            filterHz: 900
        });
        playTone(a.ctx, a.out, t, {
            freq: n.f,
            start: n.s,
            dur: n.d,
            type: "triangle",
            vol: 0.12
        });
    }
}
function playSaga() {
    const a = getAudio();
    if (!a) return;
    const t = a.ctx.currentTime;
    playTone(a.ctx, a.out, t, {
        freq: 587.33,
        start: 0,
        dur: 0.12,
        type: "triangle",
        vol: 0.16
    });
    playTone(a.ctx, a.out, t, {
        freq: 880.0,
        start: 0.1,
        dur: 0.28,
        type: "triangle",
        vol: 0.2
    });
    playTone(a.ctx, a.out, t, {
        freq: 440.0,
        start: 0.1,
        dur: 0.28,
        type: "sawtooth",
        vol: 0.06,
        filterHz: 1400
    });
}
function playPull(tier) {
    const a = getAudio();
    if (!a) return;
    const { ctx, out } = a;
    const t = ctx.currentTime;
    if (tier === "common") {
        // 10 pts — simple, clean retro two-note chime (C5 -> E5)
        playTone(ctx, out, t, {
            freq: 523.25,
            start: 0.0,
            dur: 0.12,
            type: "triangle",
            vol: 0.2
        });
        playTone(ctx, out, t, {
            freq: 659.25,
            start: 0.09,
            dur: 0.24,
            type: "triangle",
            vol: 0.22
        });
        playTone(ctx, out, t, {
            freq: 659.25,
            start: 0.09,
            dur: 0.2,
            type: "sine",
            vol: 0.1
        });
        return;
    }
    if (tier === "uncommon") {
        // 25 pts — bright upbeat 4-note emerald arpeggio (C5 -> E5 -> G5 -> C6)
        const arp = [
            523.25,
            659.25,
            783.99,
            1046.5
        ];
        arp.forEach((f, i)=>{
            const start = i * 0.065;
            const dur = i === arp.length - 1 ? 0.36 : 0.14;
            playTone(ctx, out, t, {
                freq: f,
                start,
                dur,
                type: "triangle",
                vol: 0.22
            });
            playTone(ctx, out, t, {
                freq: f,
                start,
                dur: dur * 0.7,
                type: "square",
                vol: 0.055,
                filterHz: 2600
            });
        });
        // Light high sparkle
        playTone(ctx, out, t, {
            freq: 1567.98,
            start: 0.24,
            dur: 0.22,
            type: "sine",
            vol: 0.09
        });
        return;
    }
    if (tier === "rare") {
        // 45 pts — energetic heroic sapphire riff + bass punch + shimmer whoosh
        playTone(ctx, out, t, {
            freq: 130.81,
            slideTo: 65.41,
            dur: 0.22,
            type: "sine",
            vol: 0.32,
            attack: 0.004
        });
        playNoise(ctx, out, t, 0.0, 0.26, 0.08, "bandpass", 900, 3800);
        const lead = [
            {
                f: 523.25,
                s: 0.02,
                d: 0.1
            },
            {
                f: 587.33,
                s: 0.09,
                d: 0.1
            },
            {
                f: 659.25,
                s: 0.16,
                d: 0.11
            },
            {
                f: 783.99,
                s: 0.24,
                d: 0.14
            },
            {
                f: 1046.5,
                s: 0.34,
                d: 0.52
            }
        ];
        for (const n of lead){
            playTone(ctx, out, t, {
                freq: n.f,
                start: n.s,
                dur: n.d,
                type: "triangle",
                vol: 0.24
            });
            playTone(ctx, out, t, {
                freq: n.f,
                start: n.s,
                dur: n.d,
                type: "sawtooth",
                vol: 0.08,
                filterHz: 2400,
                detune: 5
            });
        }
        // Harmony chord on the peak
        playTone(ctx, out, t, {
            freq: 659.25,
            start: 0.34,
            dur: 0.5,
            type: "triangle",
            vol: 0.14
        });
        playTone(ctx, out, t, {
            freq: 783.99,
            start: 0.34,
            dur: 0.5,
            type: "triangle",
            vol: 0.14
        });
        // Sparkling high bells
        playTone(ctx, out, t, {
            freq: 1318.51,
            start: 0.44,
            dur: 0.25,
            type: "sine",
            vol: 0.11
        });
        playTone(ctx, out, t, {
            freq: 1567.98,
            start: 0.52,
            dur: 0.32,
            type: "sine",
            vol: 0.12
        });
        return;
    }
    if (tier === "epic") {
        // 75 pts — grand amethyst power fanfare: impact + sweeping arpeggio + brass chords + crystal bells
        playTone(ctx, out, t, {
            freq: 140,
            slideTo: 48,
            dur: 0.36,
            type: "sine",
            vol: 0.4,
            attack: 0.004
        });
        playNoise(ctx, out, t, 0.0, 0.34, 0.12, "bandpass", 600, 5200);
        // Rapid soaring run
        const run = [
            392.0,
            493.88,
            587.33,
            783.99,
            987.77,
            1174.66
        ];
        run.forEach((f, i)=>{
            playTone(ctx, out, t, {
                freq: f,
                start: 0.04 + i * 0.045,
                dur: 0.16,
                type: "square",
                vol: 0.075,
                filterHz: 3200
            });
        });
        // Triumphant brass chord progression: F -> G -> C
        const chords = [
            {
                s: 0.28,
                d: 0.22,
                freqs: [
                    349.23,
                    440.0,
                    523.25,
                    698.46
                ]
            },
            {
                s: 0.48,
                d: 0.22,
                freqs: [
                    392.0,
                    493.88,
                    587.33,
                    783.99
                ]
            },
            {
                s: 0.68,
                d: 0.85,
                freqs: [
                    523.25,
                    659.25,
                    783.99,
                    1046.5
                ]
            }
        ];
        for (const ch of chords){
            playTone(ctx, out, t, {
                freq: ch.freqs[0] * 0.5,
                start: ch.s,
                dur: ch.d,
                type: "triangle",
                vol: 0.24
            });
            for (const f of ch.freqs){
                playTone(ctx, out, t, {
                    freq: f,
                    start: ch.s,
                    dur: ch.d,
                    type: "sawtooth",
                    vol: 0.09,
                    filterHz: 2600,
                    detune: -6
                });
                playTone(ctx, out, t, {
                    freq: f,
                    start: ch.s,
                    dur: ch.d,
                    type: "sawtooth",
                    vol: 0.09,
                    filterHz: 2600,
                    detune: 6
                });
                playTone(ctx, out, t, {
                    freq: f,
                    start: ch.s,
                    dur: ch.d,
                    type: "triangle",
                    vol: 0.12
                });
            }
        }
        // Cascading crystal chimes over the finale
        [
            1318.51,
            1567.98,
            1975.53,
            2093.0
        ].forEach((f, i)=>{
            playTone(ctx, out, t, {
                freq: f,
                start: 0.78 + i * 0.09,
                dur: 0.45,
                type: "sine",
                vol: 0.12
            });
        });
        return;
    }
    // 100 pts — ONE IN A LUFFILLION! Legendary Pirate King multi-stage mega fanfare!
    // 1. Massive impact boom + golden riser
    playTone(ctx, out, t, {
        freq: 155,
        slideTo: 38,
        dur: 0.55,
        type: "sine",
        vol: 0.48,
        attack: 0.004
    });
    playNoise(ctx, out, t, 0.0, 0.45, 0.15, "bandpass", 400, 6500);
    // 2. Two-octave rainbow glissando
    const gliss = [
        523.25,
        587.33,
        659.25,
        783.99,
        880.0,
        1046.5,
        1174.66,
        1318.51,
        1567.98,
        2093.0
    ];
    gliss.forEach((f, i)=>{
        playTone(ctx, out, t, {
            freq: f,
            start: 0.03 + i * 0.032,
            dur: 0.18,
            type: "triangle",
            vol: 0.16
        });
        playTone(ctx, out, t, {
            freq: f,
            start: 0.03 + i * 0.032,
            dur: 0.12,
            type: "square",
            vol: 0.06,
            filterHz: 4200
        });
    });
    // 3. Heroic triumphant pirate anthem melody (G4 -> C5 -> E5 -> G5 -> A5 -> G5 -> C6!)
    const anthem = [
        {
            f: 392.0,
            s: 0.34,
            d: 0.14
        },
        {
            f: 523.25,
            s: 0.46,
            d: 0.14
        },
        {
            f: 659.25,
            s: 0.58,
            d: 0.16
        },
        {
            f: 783.99,
            s: 0.72,
            d: 0.22
        },
        {
            f: 880.0,
            s: 0.92,
            d: 0.16
        },
        {
            f: 783.99,
            s: 1.06,
            d: 0.16
        },
        {
            f: 1046.5,
            s: 1.2,
            d: 1.35
        }
    ];
    for (const n of anthem){
        playTone(ctx, out, t, {
            freq: n.f,
            start: n.s,
            dur: n.d,
            type: "sawtooth",
            vol: 0.13,
            filterHz: 3200,
            detune: -7
        });
        playTone(ctx, out, t, {
            freq: n.f,
            start: n.s,
            dur: n.d,
            type: "sawtooth",
            vol: 0.13,
            filterHz: 3200,
            detune: 7
        });
        playTone(ctx, out, t, {
            freq: n.f,
            start: n.s,
            dur: n.d,
            type: "triangle",
            vol: 0.18
        });
    }
    // 4. Driving brass bass punches under the anthem
    playTone(ctx, out, t, {
        freq: 130.81,
        start: 0.34,
        dur: 0.36,
        type: "sawtooth",
        vol: 0.2,
        filterHz: 600
    });
    playTone(ctx, out, t, {
        freq: 174.61,
        start: 0.72,
        dur: 0.42,
        type: "sawtooth",
        vol: 0.2,
        filterHz: 600
    });
    playTone(ctx, out, t, {
        freq: 196.0,
        start: 1.06,
        dur: 0.18,
        type: "sawtooth",
        vol: 0.22,
        filterHz: 700
    });
    // 5. Huge Cmaj9 victory finale chord + second sub-boom + cymbal crash
    playTone(ctx, out, t, {
        freq: 130.81,
        slideTo: 65.41,
        start: 1.2,
        dur: 1.25,
        type: "sine",
        vol: 0.42
    });
    playNoise(ctx, out, t, 1.2, 0.85, 0.13, "highpass", 3200, 1200);
    const finaleChord = [
        261.63,
        392.0,
        523.25,
        659.25,
        783.99,
        987.77,
        1174.66
    ];
    for (const f of finaleChord){
        playTone(ctx, out, t, {
            freq: f,
            start: 1.2,
            dur: 1.45,
            type: "sawtooth",
            vol: 0.065,
            filterHz: 2800,
            detune: -8
        });
        playTone(ctx, out, t, {
            freq: f,
            start: 1.2,
            dur: 1.45,
            type: "sawtooth",
            vol: 0.065,
            filterHz: 2800,
            detune: 8
        });
        playTone(ctx, out, t, {
            freq: f,
            start: 1.2,
            dur: 1.45,
            type: "triangle",
            vol: 0.08
        });
    }
    // 6. Celebratory firework crackles & glittering golden star bells
    const sparkles = [
        1567.98,
        2093.0,
        1975.53,
        2349.32,
        2637.02,
        2093.0,
        3135.96
    ];
    sparkles.forEach((f, i)=>{
        const st = 1.32 + i * 0.14;
        playTone(ctx, out, t, {
            freq: f,
            start: st,
            dur: 0.42,
            type: "sine",
            vol: 0.11
        });
        if (i % 2 === 0) {
            playNoise(ctx, out, t, st, 0.09, 0.07, "bandpass", 4500, 1800);
        }
    });
}
function startRunSound(tier) {
    const a = getAudio();
    if (!a) return ()=>undefined;
    const { ctx, out } = a;
    const runBus = ctx.createGain();
    runBus.gain.value = 0.68;
    runBus.connect(out);
    const stepSeconds = {
        common: 0.34,
        uncommon: 0.275,
        rare: 0.215,
        epic: 0.16,
        luffillion: 0.115
    };
    const interval = tier ? stepSeconds[tier] : 0.23;
    let nextStep = ctx.currentTime + 0.025;
    let count = 0;
    let stopped = false;
    const timer = window.setInterval(()=>{
        if (stopped || ctx.state === "closed") return;
        const now = ctx.currentTime;
        const horizon = now + 0.1;
        if (nextStep < now) nextStep = now + 0.008;
        while(nextStep < horizon){
            const alternate = count % 2;
            const when = nextStep;
            const thumpFreq = alternate === 0 ? 102 : 88;
            // Cushioned landing plus a light shoe scuff: a low thud and filtered pixel grit.
            playTone(ctx, runBus, when, {
                freq: thumpFreq,
                slideTo: alternate === 0 ? 54 : 48,
                dur: 0.085,
                type: "sine",
                vol: 0.12,
                attack: 0.003
            });
            playNoise(ctx, runBus, when, 0, 0.052, 0.032, "bandpass", alternate === 0 ? 760 : 620, 360);
            playTone(ctx, runBus, when, {
                freq: alternate === 0 ? 248 : 205,
                dur: 0.03,
                type: "triangle",
                vol: 0.035,
                attack: 0.002
            });
            count++;
            nextStep += interval;
        }
    }, 24);
    return ()=>{
        if (stopped) return;
        stopped = true;
        window.clearInterval(timer);
        const now = ctx.currentTime;
        runBus.gain.cancelScheduledValues(now);
        runBus.gain.setTargetAtTime(0, now, 0.018);
        window.setTimeout(()=>runBus.disconnect(), 150);
    };
}
function playAchievement() {
    const a = getAudio();
    if (!a) return;
    const t = a.ctx.currentTime;
    [
        523.25,
        659.25,
        783.99,
        1046.5,
        1567.98
    ].forEach((f, i)=>{
        playTone(a.ctx, a.out, t, {
            freq: f,
            start: i * 0.07,
            dur: i === 4 ? 0.55 : 0.18,
            type: "triangle",
            vol: 0.2
        });
        playTone(a.ctx, a.out, t, {
            freq: f * 2,
            start: i * 0.07,
            dur: 0.12,
            type: "sine",
            vol: 0.07
        });
    });
    playNoise(a.ctx, a.out, t, 0.28, 0.5, 0.04, "bandpass", 2400, 5200);
}
}),
"[project]/src/lib/voyage-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cacheRun",
    ()=>cacheRun,
    "checkpointBody",
    ()=>checkpointBody,
    "clearCaptainCache",
    ()=>clearCaptainCache,
    "clearLinkedGuest",
    ()=>clearLinkedGuest,
    "localArchive",
    ()=>localArchive,
    "readLocalRun",
    ()=>readLocalRun,
    "voyageHeaders",
    ()=>voyageHeaders,
    "voyageRequest",
    ()=>voyageRequest
]);
function voyageHeaders(legacy = false) {
    const headers = {};
    if (window.self !== window.top) headers["x-voyage-embedded"] = "1";
    if (legacy) {
        try {
            const old = localStorage.getItem("luffillion:player");
            if (old) headers["x-voyage-legacy-guest"] = old;
        } catch  {}
    }
    return headers;
}
async function voyageRequest(path, method = "GET", body, signal) {
    const res = await fetch(path, {
        method,
        signal,
        credentials: "same-origin",
        cache: "no-store",
        headers: {
            ...voyageHeaders(path === "/api/daily"),
            ...body === undefined ? {} : {
                "Content-Type": "application/json"
            }
        },
        body: body === undefined ? undefined : JSON.stringify(body)
    });
    const data = await res.json();
    if (!res.ok) throw new Error(typeof data.error === "string" ? data.error : "Couldn't reach the logbook. Try again.");
    return data;
}
function checkpointBody(p) {
    return {
        day: p.day,
        ids: p.ids,
        q: Object.fromEntries(Object.entries(p.q).map(([i, s])=>[
                i,
                {
                    started: s.started,
                    status: s.status,
                    answer: s.answer,
                    attempts: s.attempts,
                    wrong: s.wrong.slice(0, 24).map((w)=>w.slice(0, 80))
                }
            ]))
    };
}
const key = (day, owner)=>owner ? `luffillion:captain:${owner}:${day}` : `luffillion:daily:${day}`;
function readLocalRun(day, ids, owner) {
    try {
        const raw = (owner ? sessionStorage : localStorage).getItem(key(day, owner));
        if (!raw) return null;
        const p = JSON.parse(raw);
        return p.day === day && p.q && typeof p.q === "object" && Array.isArray(p.runs) && p.ids?.join() === ids.join() ? p : null;
    } catch  {
        return null;
    }
}
function cacheRun(progress, owner) {
    try {
        (owner ? sessionStorage : localStorage).setItem(key(progress.day, owner), JSON.stringify(progress));
    } catch  {}
}
function clearCaptainCache(owner) {
    try {
        const prefix = `luffillion:captain:${owner}:`;
        for (const k of Object.keys(sessionStorage))if (k.startsWith(prefix)) sessionStorage.removeItem(k);
    } catch  {}
}
function clearLinkedGuest(day) {
    try {
        localStorage.removeItem(key(day));
        localStorage.removeItem(`luffillion-pos:${day}`);
        localStorage.removeItem("luffillion:player");
    } catch  {}
}
function localArchive() {
    const out = [];
    try {
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            if (!key?.startsWith("luffillion:daily:")) continue;
            const p = JSON.parse(localStorage.getItem(key) ?? "{}");
            if (p.day && p.q) {
                const settled = Object.values(p.q).filter((s)=>s?.status === "solved");
                const score = settled.reduce((n, s)=>n + (s.points ?? 0), 0);
                const niche = settled.filter((s)=>s.tier === "rare" || s.tier === "epic" || s.tier === "luffillion").length;
                out.push({
                    day: p.day,
                    score,
                    solved: settled.length,
                    niche,
                    luffillion: settled.some((s)=>s.tier === "luffillion"),
                    laughtale: score >= 500
                });
            }
        }
    } catch  {}
    return out.sort((a, b)=>b.day.localeCompare(a.day));
}
}),
"[project]/src/lib/voyage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "firstOpen",
    ()=>firstOpen,
    "fromQuestions",
    ()=>fromQuestions,
    "fromRecap",
    ()=>fromRecap,
    "mergeProgress",
    ()=>mergeProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/arcs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tiers.ts [app-ssr] (ecmascript)");
;
;
function firstOpen(p) {
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]; i++)if (!p.q[i]?.status) return i;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"];
}
function fromQuestions(day, ids, q) {
    const runs = [];
    let distance = 0;
    for(let i = 0; i < ids.length; i++){
        const state = q[i];
        if (state?.status === "solved" && state.tier && typeof state.points === "number") {
            distance += (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["travelFor"])(state.points);
            runs.push({
                questionIndex: i,
                tier: state.tier,
                points: state.points,
                arc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$arcs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sagaAt"])(distance).name
            });
        }
    }
    return {
        day,
        ids,
        q,
        runs
    };
}
function mergeProgress(saved, incoming) {
    if (saved.day !== incoming.day || saved.ids?.join() !== incoming.ids?.join()) return saved;
    const q = {};
    for(let i = 0; i < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]; i++){
        const a = saved.q[i], b = incoming.q[i];
        if (!a && !b) break;
        if (a?.status || !b) q[i] = a;
        else if (!a) q[i] = b;
        else q[i] = {
            ...b,
            started: a.started && b.started ? Math.min(a.started, b.started) : a.started ?? b.started,
            // A pending state's attempts are rejected guesses. Settling it on another
            // device cannot erase those guesses or move the start time forward.
            attempts: Math.max(a.attempts + (b.status === "solved" ? 1 : 0), b.attempts),
            wrong: [
                ...new Set([
                    ...b.wrong,
                    ...a.wrong
                ])
            ].slice(0, 40)
        };
        if (!q[i].status) break;
    }
    return fromQuestions(saved.day, saved.ids ?? [], q);
}
function fromRecap(run) {
    if (!run.legs || run.legs.length !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tiers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DAILY_QUESTION_COUNT"]) return null;
    const q = {};
    run.legs.forEach((leg, i)=>{
        q[i] = leg.answer && leg.tier ? {
            status: "solved",
            answer: leg.answer,
            tier: leg.tier,
            points: leg.points,
            attempts: 1,
            wrong: []
        } : {
            status: "expired",
            points: 0,
            attempts: 0,
            wrong: []
        };
    });
    return fromQuestions(run.day, run.legs.map((leg)=>leg.questionId), q);
}
}),
];})()

//# sourceMappingURL=src_0ok9yhh-hcu13._.js.map