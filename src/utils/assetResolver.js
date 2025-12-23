// export function resolveAsset(path) {
//   if (!path) return null;

//   return new URL(
//     path.replace("../", "/src/assets/"),
//     import.meta.url
//   ).href;
// }
// export function resolveAsset(path) {
//   if (!path) return "";

//   // "../images/xxx.png" → "/src/assets/images/xxx.png"
//   return path.replace("../", "/src/assets/");
// }
/**
 * assetResolver のルール
 *
 * ・画像・音声のパスは「生パス」で管理する
 *   例:
 *     "images/hand.png"
 *     "images/pictures/001_p.png"
 *     "sounds/en/001_en.mp3"
 *
 * ・datalists / karutaLists / state には resolveAsset を使わない
 * ・各コンポーネント（img, audio 直前）で resolveAsset() を呼ぶ
 *
 * ❌ ダメな例:
 *   src={resolveAsset(list.answer)} を state 側でやる
 *
 * ✅ 正しい例:
 *   src={resolveAsset(props.src)} を JSX 側でやる
 */
// export function resolveAsset(path) {
//   if (!path) return null;

//   return new URL(
//     path.replace("../", "/src/assets/"),
//     import.meta.url
//   ).href;
// }

// src/utils/assetResolver.js
export const resolveAsset = (relPath) => {
  if (!relPath) return "";
  // 念のため "../" や "./" や先頭 "/" が混ざっても吸収
  const normalized = relPath.replace(/^(\.\/|\.\.\/)+/, "").replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
};

