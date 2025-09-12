// cart: Array<{ id?: string|number, mealId?: string|number, qty?: number, quantity?: number, ... }>
export function dedupeCart(cart = []) {
  const byId = new Map(); // id -> item with summed quantity
  const order = [];

  for (const it of cart) {
    if (!it || typeof it !== "object") continue;

    const idRaw = it.id ?? it.mealId;
    if (idRaw == null) {
      // No id: treat as unique (no dedupe), still normalize quantity
      const q = normQty(it.quantity ?? it.qty ?? 1);
      const copy = { ...it, quantity: q };
      const syntheticId = Symbol("unkeyed");
      byId.set(syntheticId, copy);
      order.push(syntheticId);
      continue;
    }

    const id = String(idRaw);
    const inc = normQty(it.quantity ?? it.qty ?? 1);

    if (byId.has(id)) {
      const prev = byId.get(id);
      byId.set(id, { ...prev, quantity: prev.quantity + inc });
    } else {
      order.push(id);
      byId.set(id, { ...it, quantity: inc });
    }
  }

  return order.map((k) => byId.get(k));
}

function normQty(q) {
  const n = Number(q);
  return Number.isFinite(n) && n > 0 ? n : 1;
}
