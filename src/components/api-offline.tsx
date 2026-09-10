import { PlugZap } from "lucide-react";

import { API_URL } from "@/lib/api";

/**
 * Shown when the storefront could not reach the Express API at all. It is
 * deliberately specific — "no products found" would send you hunting through
 * filters when the real problem is that the backend is not running.
 */
export function ApiOffline({ className }: { className?: string }) {
  return (
    <div
      className={
        className ??
        "border-warning/50 bg-warning/10 flex flex-col items-start gap-3 rounded-xl border p-6"
      }
    >
      <span className="flex items-center gap-2 font-bold">
        <PlugZap className="text-warning size-5" />
        Cannot reach the API
      </span>

      <p className="text-muted-foreground text-sm">
        The storefront asked{" "}
        <code className="bg-muted rounded px-1.5 py-0.5 text-xs">{API_URL}</code>{" "}
        for products and got no answer. Nothing is wrong with your filters.
      </p>

      <ol className="text-muted-foreground list-decimal space-y-1.5 pl-5 text-sm">
        <li>
          Create the environment files once —{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">npm run setup</code>{" "}
          in the project root.
        </li>
        <li>Start MongoDB (or check your Atlas connection string).</li>
        <li>
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">cd backend</code> →{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">npm run seed</code> →{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">npm run dev</code>
        </li>
        <li>
          Confirm it is up:{" "}
          <code className="bg-muted rounded px-1.5 py-0.5 text-xs">
            {API_URL}/health
          </code>
        </li>
      </ol>
    </div>
  );
}
