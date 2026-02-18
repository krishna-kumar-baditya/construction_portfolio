type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitOptions = {
  keyPrefix: string;
  max: number;
  windowMs: number;
};

type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
  remaining: number;
};

declare global {
  var __rateLimitStore: Map<string, RateLimitEntry> | undefined;
}

function getStore(): Map<string, RateLimitEntry> {
  if (!global.__rateLimitStore) {
    global.__rateLimitStore = new Map<string, RateLimitEntry>();
  }
  return global.__rateLimitStore;
}

export function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) return first;
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  return "unknown";
}

export function rateLimit(
  request: Request,
  options: RateLimitOptions
): RateLimitResult {
  const now = Date.now();
  const ip = getClientIp(request);
  const key = `${options.keyPrefix}:${ip}`;
  const store = getStore();
  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + options.windowMs });
    return {
      allowed: true,
      retryAfterSeconds: Math.ceil(options.windowMs / 1000),
      remaining: options.max - 1,
    };
  }

  if (existing.count >= options.max) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
      remaining: 0,
    };
  }

  existing.count += 1;
  store.set(key, existing);

  return {
    allowed: true,
    retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    remaining: Math.max(0, options.max - existing.count),
  };
}

const HTML_ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (ch) => HTML_ESCAPE_MAP[ch]);
}

export function stripControlChars(input: string): string {
  return input.replace(/[\u0000-\u001f\u007f]/g, "").trim();
}
