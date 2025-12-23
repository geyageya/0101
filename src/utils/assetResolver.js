// assetResolver は、CRA と Vite の asset 参照差異を吸収するための一時的なラッパー。
// 大量の既存データ（画像・音声パス）を一括修正せずに移行検証を行う目的で導入。
// 将来的には Vite 標準の import / new URL 方式へ段階的に置き換える前提。

export const resolveAsset = (relPath) => {
  if (!relPath) return "";
  // 念のため "../" や "./" や先頭 "/" が混ざっても吸収
  const normalized = relPath.replace(/^(\.\/|\.\.\/)+/, "").replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
};

